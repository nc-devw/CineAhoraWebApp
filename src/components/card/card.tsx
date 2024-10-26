import { Film } from "@/models";
import React from "react";

interface Props {
  movie: Film;
  image: string;
}
export const Card: React.FC<Props> = ({ movie, image }) => {
  return (
    <div
      key={movie.id}
      className="flex flex-col w-[125px] sm:w-[250px] gap-y-2"
    >
      <div className="border-2 border-primary shadow w-full h-[180px] sm:h-[400px]">
        <img src={image} className="h-full w-full" />
      </div>
      <span className="text-center text-white font-bold">{movie.title}</span>
    </div>
  );
};
