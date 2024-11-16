import { Button } from "@/components";
import { useBooking } from "@/hooks";
import { PATHS } from "@/routes";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SessionPage = () => {
  const navigate = useNavigate();
  const { posterPath, setSessionInfo } = useBooking();
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const dates = [...Array(7)].map((_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return date.toISOString().split("T")[0];
  });

  const times = ["13:00", "15:30", "18:00", "20:30", "23:00"];

  const handleSubmit = () => {
    if (selectedDate && selectedTime) {
      setSessionInfo(selectedDate, selectedTime);
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
                {posterPath && (
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
                    className="h-full border-2 border-primary"
                  />
                )}
              </div>
              <span className="text-center text-white font-bold">
                Género: Acción, Aventura
              </span>
              <br />
              <span className="text-center text-white font-bold">
                Duración: 120 min
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
                {times.map((time) => (
                  <Button
                    key={time}
                    variant={selectedTime === time ? "primary" : "secondary"}
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
                  </Button>
                ))}
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
