import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Modal, Loading } from "@/components";
import { Film, Genre } from "@/models";
import { filmsService } from "@/services";

export const Detail: React.FC = () => {
  const { id } = useParams();
  const [film, setFilm] = useState<Film | false>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [modalTitle, setModalTitle] = useState<string>("");
  const [modalMsg, setModalMsg] = useState<string>("");

  const openModal = (): void => setIsOpen(true);
  const closeModal = (): void => setIsOpen(false);

  const getGenres = (genres: Genre[]) =>
    genres.map((genre) => genre.name).join(", ");

  useEffect(() => {
    filmsService
      .getFilmById(id)
      .then((result) => {
        setFilm(result);
      })
      .catch(() => {
        setModalMsg("Ha ocurrido un error al obtener la película");
        setModalTitle("Error");
        openModal();
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container mt-10">
      <Modal
        title={modalTitle}
        message={modalMsg}
        isOpen={isOpen}
        closeModal={closeModal}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-1 grid">
          <div className="flex justify-center gap-y-3">
            <div>
              <div className="flex justify-center shadow h-[180px] sm:h-[600px]">
                {film && film?.poster_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${
                      film.poster_path || ""
                    }`}
                    className="h-full border-2 border-primary"
                  />
                )}
              </div>
              <span className="text-center text-white font-bold">
                {film && film?.genres && `Género: ${getGenres(film.genres)}`}
              </span>
              <br />
              <span className="text-center text-white font-bold">
                {`Duración: ${film && film?.runtime} min`}
              </span>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex flex-col gap-y-2">
            <div className="border-2 border-primary shadow w-full h-[180px] sm:h-[400px]">
              {film && film?.backdrop_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w500/${film.backdrop_path}`}
                  className="h-full w-full"
                />
              )}
            </div>
            <h1 className="text-center text-white font-bold text-2xl">
              {film && film?.title}
            </h1>
            <div className="text-white font-bold">{film && film?.overview}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
