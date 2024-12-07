import { Button } from "@/components";
import { useBooking } from "@/hooks";
import { Function } from "@/models";
import { PATHS } from "@/routes";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SessionPage = () => {
  const navigate = useNavigate();
  const { movie, setSessionInfo } = useBooking();
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const dates = [
    ...new Set(movie?.functions.map((func) => func.function_date)),
  ];

  const times = movie?.functions.map((func) => func.start_time.substring(0, 5));

  const handleSubmit = () => {
    if (selectedDate && selectedTime) {
      const selectedFunction = movie?.functions.find(
        (func) => func.start_time.substring(0, 5) === selectedTime
      );
      setSessionInfo(selectedFunction as Function);
      navigate(PATHS.SEATS);
    }
  };

  return (
    <div className="container">
      <div className="flex flex-col md:flex-row gap-x-4">
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="flex justify-center gap-y-3">
            <div>
              <div className="flex justify-center shadow h-[180px] sm:h-[600px]">
                {movie?.poster_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
                    className="h-full border-2 border-primary"
                  />
                )}
              </div>
              <span className="text-center text-white font-bold">
                Género: {movie ? movie?.genres?.join(", ") : null}
              </span>
              <br />
              <span className="text-center text-white font-bold">
                Duración: {movie?.runtime} min
              </span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/3 flex flex-col items-center gap-y-4">
          <div>
            <h1 className="text-2xl font-bold text-white mb-6 text-center">
              Selecciona fecha y horario
            </h1>

            <div className="mb-8">
              <h2 className="text-lg text-white font-semibold mb-4">Fecha</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {dates.map((date) => (
                  <Button
                    key={date}
                    variant={selectedDate === date ? "primary" : "secondary"}
                    onClick={() => setSelectedDate(date)}
                  >
                    {new Date(date).toLocaleDateString("es-ES", {
                      weekday: "short",
                      month: "short",
                      day: "numeric",
                    })}
                  </Button>
                ))}
              </div>
            </div>

            <div className="mb-8 ">
              <h2 className="text-lg text-white font-semibold mb-4">Horario</h2>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                {times
                  ? times.map((time) => (
                      <Button
                        key={time}
                        variant={
                          selectedTime === time ? "primary" : "secondary"
                        }
                        onClick={() => setSelectedTime(time)}
                      >
                        {time}
                      </Button>
                    ))
                  : null}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Button
          onClick={handleSubmit}
          disabled={!selectedDate || !selectedTime}
        >
          Continuar
        </Button>
      </div>
    </div>
  );
};
