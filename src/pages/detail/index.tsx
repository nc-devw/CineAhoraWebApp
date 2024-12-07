import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Modal, Loading, Button } from "@/components";
import { Film, Genre } from "@/models";
import { FilmsService } from "@/services";
import { useBooking } from "@/hooks";
import { PATHS } from "@/routes";

export const Detail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { setMovieInfo } = useBooking();
  const [film, setFilm] = useState<Film>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [modalTitle, setModalTitle] = useState<string>("");
  const [modalMsg, setModalMsg] = useState<string>("");

  const openModal = (): void => setIsOpen(true);
  const closeModal = (): void => setIsOpen(false);

  const getGenres = (genres: Genre[]) => genres.join(", ");

  useEffect(() => {
    FilmsService.getFilmById(id)
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
    <div className="container">
      <Modal
        title={modalTitle}
        message={modalMsg}
        isOpen={isOpen}
        closeModal={closeModal}
      />

      <div className="flex flex-col md:flex-row gap-x-4">
        <div className="w-full md:w-1/3 flex justify-center">
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
        <div className="w-full md:w-2/3 flex flex-col items-center gap-y-4">
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
      <div className="flex justify-center">
        <Button
          onClick={() => {
            setMovieInfo(film);
            navigate(PATHS.SESSION);
          }}
        >
          Seleccionar horario
        </Button>
      </div>
    </div>
  );
};
