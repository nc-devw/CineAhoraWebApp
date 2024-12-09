import { useState } from "react";
import {
  Select,
  Modal,
  CineInput,
  CineTextArea,
  Option,
  Loading,
} from "@/components";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FilmsService } from "@/services/filmsService";
import { FilmRequest } from "@/models";
import { enqueueSnackbar } from "notistack";
import { PATHS } from "@/routes";
import { useNavigate } from "react-router-dom";

const GENRES = [
  { value: "1", label: "Acción" },
  { value: "2", label: "Aventura" },
  { value: "3", label: "Comedia" },
  { value: "4", label: "Drama" },
  { value: "5", label: "Terror" },
] as Option[];

export const NewFilmAdmin: React.FC = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = (): void => setIsOpen(true);
  const closeModal = (): void => setIsOpen(false);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [modalTitle, setModalTitle] = useState<string>("");
  const [modalMsg, setModalMsg] = useState<string>("");

  const formik = useFormik({
    initialValues: {
      title: "",
      overview: "",
      poster_path: "",
      backdrop_path: "",
      runtime: 0,
      genres: [],
      release_date: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("El título es requerido"),
      overview: Yup.string().required("La descripción es requerida"),
      poster_path: Yup.string().url("Debe ser una URL válida"),
      backdrop_path: Yup.string().url("Debe ser una URL válida"),
      runtime: Yup.number().min(1, "La duración debe ser mayor a 0"),
      genres: Yup.array().min(1, "Selecciona al menos un género"),
      release_date: Yup.string().required("La fecha de estreno es requerida"),
    }),
    onSubmit: (values) => {
      const newFilm = {
        ...values,
        genres: values.genres.map((genre: any) => genre.label),
      } as FilmRequest;

      openModal();

      FilmsService.createFilm(newFilm)
        .then(() => {
          enqueueSnackbar("¡Su pelicula se agregó con éxito!", {
            variant: "success",
          });
          formik.resetForm();
          navigate(PATHS.ADMIN_FILM_LIST);
        })
        .catch(() => {
          setModalMsg("Ha ocurrido un error al agregar su película");
          setModalTitle("Error");
          openModal();
        })
        .finally(() => {
          setIsLoading(false);
        });
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Modal
        title={modalTitle}
        message={modalMsg}
        isOpen={isOpen}
        closeModal={closeModal}
      />

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#4F46E5]">Alta de Película</h1>
      </div>

      <form onSubmit={formik.handleSubmit}>
        {/* Información básica */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold text-[#4F46E5] mb-4">
            1. Información Básica
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Título de la Película
              </label>
              <CineInput
                name="title"
                placeholder="Ej: El Padrino"
                value={formik.values.title}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.title && formik.errors.title && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.title}
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Descripción
              </label>
              <CineTextArea
                name="overview"
                placeholder="Escribe una sinopsis de la película"
                value={formik.values.overview}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                rows={4}
              />
              {formik.touched.overview && formik.errors.overview && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.overview}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Imágenes */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold text-[#4F46E5] mb-4">
            2. Imágenes
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                URL del Poster
              </label>
              <CineInput
                name="poster_path"
                placeholder="https://ejemplo.com/poster.jpg"
                value={formik.values.poster_path}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.poster_path && formik.errors.poster_path && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.poster_path}
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                URL del Backdrop
              </label>
              <CineInput
                name="backdrop_path"
                placeholder="https://ejemplo.com/backdrop.jpg"
                value={formik.values.backdrop_path}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.backdrop_path && formik.errors.backdrop_path && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.backdrop_path}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Detalles adicionales */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold text-[#4F46E5] mb-4">
            3. Detalles Adicionales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Duración (minutos)
              </label>
              <CineInput
                name="runtime"
                type="number"
                placeholder="120"
                value={formik.values.runtime}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.runtime && formik.errors.runtime && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.runtime}
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Fecha de Estreno
              </label>
              <input
                name="release_date"
                type="date"
                value={formik.values.release_date}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#2684FF]"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Géneros
              </label>
              <Select
                name="genres"
                options={GENRES}
                isMulti={true}
                value={formik.values.genres}
                onChange={(value) => formik.setFieldValue("genres", value)}
                onBlur={() => formik.setFieldTouched("genres")}
              />
              {formik.touched.genres && formik.errors.genres && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.genres}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Botón de guardar */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-[#4F46E5] text-white font-semibold rounded-lg hover:bg-[#6366F1] transition-colors duration-200"
          >
            Guardar Película
          </button>
        </div>
      </form>
    </div>
  );
};
