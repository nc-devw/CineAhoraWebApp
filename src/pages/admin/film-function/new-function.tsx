import { useCallback, useState, useEffect } from "react";
import { Select, Modal, Loading, Option } from "@/components";
import { useFormik } from "formik";
import * as Yup from "yup";
import { enqueueSnackbar } from "notistack";
import { PATHS } from "@/routes";
import { useNavigate } from "react-router-dom";
import { FunctionRequest } from "@/models";
import { FilmFunctionService } from "@/services/filmFunctionService";
import { FilmsService } from "@/services";

const SCHEDULES = [
  { value: "9:00", label: "9:00" },
  { value: "14:00", label: "14:00" },
  { value: "18:00", label: "18:00" },
  { value: "20:30", label: "20:30" },
  { value: "22:30", label: "22:30" },
];

export const NewFunctionAdmin: React.FC = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [filmFunctions, setFilmFunctions] = useState<Option[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [modalTitle, setModalTitle] = useState<string>("");
  const [modalMsg, setModalMsg] = useState<string>("");

  const openModal = useCallback((): void => setIsOpen(true), []);
  const closeModal = useCallback((): void => setIsOpen(false), []);

  useEffect(() => {
    const fetchFilmFunctions = async () => {
      setIsLoading(true);
      try {
        const filmFunctionsData = await FilmsService.getAllFilms();
        const functionOptions = filmFunctionsData.map((film) => ({
          value: film.film_id.toString(),
          label: film.title || "",
        }));
        setFilmFunctions(functionOptions);
      } catch (error) {
        console.error("Error fetching filmFunctions:", error);
        setModalTitle("Error");
        setModalMsg("Error al cargar las películas");
        openModal();
      } finally {
        setIsLoading(false);
      }
    };

    fetchFilmFunctions();
  }, [openModal]);

  const formik = useFormik({
    initialValues: {
      film_id: "",
      schedules: [],
      start_date: "",
      end_date: "",
    },
    validationSchema: Yup.object({
      film_id: Yup.string().required("La película es requerida"),
      schedules: Yup.array()
        .of(Yup.string())
        .min(1, "Selecciona al menos un horario"),
      start_date: Yup.string().required("La fecha de inicio es requerida"),
      end_date: Yup.string()
        .required("La fecha de fin es requerida")
        .test(
          "is-after-start",
          "La fecha de fin debe ser posterior a la de inicio",
          function (value) {
            return (
              !this.parent.start_date ||
              !value ||
              new Date(value) >= new Date(this.parent.start_date)
            );
          }
        ),
    }),
    onSubmit: async (values) => {
      setIsLoading(true);
      try {
        console.log("values", values);
        const functionRequest: FunctionRequest = {
          film_id: parseInt(values.film_id),
          schedules: values.schedules,
          start_date: values.start_date,
          end_date: values.end_date,
        };

        await FilmFunctionService.createFilmFunction(functionRequest);
        enqueueSnackbar("¡La función se creó con éxito!", {
          variant: "success",
        });
        formik.resetForm();
        navigate(PATHS.ADMIN_FUNCTION_LIST);
      } catch {
        setModalMsg("Ha ocurrido un error al crear la función");
        setModalTitle("Error");
        openModal();
      } finally {
        setIsLoading(false);
      }
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
        <h1 className="text-3xl font-bold text-[#4F46E5]">Alta de Función</h1>
      </div>

      <form onSubmit={formik.handleSubmit}>
        {/* Selección de Película */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold text-[#4F46E5] mb-4">
            1. Seleccionar Película
          </h2>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Película
            </label>
            <Select
              name="film_id"
              options={filmFunctions}
              value={filmFunctions.find(
                (option) => option.value === formik.values.film_id
              )}
              onChange={(selectedOption) =>
                formik.setFieldValue(
                  "film_id",
                  selectedOption ? selectedOption.value : ""
                )
              }
              onBlur={() => formik.setFieldTouched("film_id")}
            />
            {formik.touched.film_id && formik.errors.film_id && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.film_id}
              </div>
            )}
          </div>
        </div>

        {/* Horarios */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold text-[#4F46E5] mb-4">
            2. Horario de Función
          </h2>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Horario (se aplicará a todos los días)
            </label>
            <Select
              name="schedules"
              options={SCHEDULES}
              isMulti={true}
              value={SCHEDULES.filter((option) =>
                (formik.values.schedules as string[]).includes(option.value)
              )}
              onChange={(selectedOptions: Option[]) => {
                const values = selectedOptions
                  ? selectedOptions.map(
                      (option: { value: string }) => option.value
                    )
                  : [];
                formik.setFieldValue("schedules", values);
              }}
              onBlur={() => formik.setFieldTouched("schedules")}
            />
            {formik.touched.schedules && formik.errors.schedules && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.schedules}
              </div>
            )}
          </div>
        </div>

        {/* Vigencia */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold text-[#4F46E5] mb-4">
            3. Vigencia de la Programación
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Desde
              </label>
              <input
                name="start_date"
                type="date"
                value={formik.values.start_date}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#2684FF]"
              />
              {formik.touched.start_date && formik.errors.start_date && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.start_date}
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Hasta
              </label>
              <input
                name="end_date"
                type="date"
                value={formik.values.end_date}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#2684FF]"
              />
              {formik.touched.end_date && formik.errors.end_date && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.end_date}
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
            Guardar Función
          </button>
        </div>
      </form>
    </div>
  );
};
