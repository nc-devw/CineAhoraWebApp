import { Link } from "react-router-dom";
import { Offer1, Offer2, Offer3 } from "@/assets";
import { Card, Carousel, Loading, Modal } from "@/components";
import { Film, FilmsData } from "@/models";
import { PATHS } from "@/routes";
import { useEffect, useState } from "react";
import { FilmsService } from "@/services";

const slides = [Offer1, Offer2, Offer3];

const ListOfMovies: React.FC<{
  title: string;
  movies: Film[];
  className?: string;
}> = ({ title, movies, className }) => {
  return (
    <div className={className}>
      <h2 className="text-white text-2xl font-bold mb-2">{title}</h2>
      <div className="flex flex-wrap gap-x-4 gap-y-6 justify-around">
        {movies.map((movie) => {
          const imagePath = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
          return (
            <Link
              to={PATHS.DETAIL.replace(":id", String(movie.film_id))}
              key={movie.film_id}
            >
              <Card image={imagePath} movie={movie} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export const HomePage: React.FC = () => {
  const [films, setFilms] = useState<FilmsData>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [modalTitle, setModalTitle] = useState<string>("");
  const [modalMsg, setModalMsg] = useState<string>("");

  const openModal = (): void => setIsOpen(true);
  const closeModal = (): void => setIsOpen(false);

  useEffect(() => {
    FilmsService.getFilms()
      .then((result) => {
        setFilms(result);
      })
      .catch(() => {
        setModalMsg("Ha ocurrido un error al obtener las películas");
        setModalTitle("Error");
        openModal();
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <Modal
        title={modalTitle}
        message={modalMsg}
        isOpen={isOpen}
        closeModal={closeModal}
      />

      {/* Carousel */}
      <div className="mb-4 flex">
        <Carousel slides={slides} />
      </div>
      {/* Lista de peliculas cartelera */}
      <ListOfMovies
        className="mb-16"
        title="Cartelera"
        movies={films?.nowPlaying ?? []}
      />
      <ListOfMovies title="Proximamente" movies={films?.upcoming ?? []} />
    </div>
  );
};
