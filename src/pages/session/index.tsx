import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export const SessionPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const movie = searchParams.get("movie");
  const poster_path = searchParams.get("poster_path");

  const dates = [...Array(7)].map((_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return date.toISOString().split("T")[0];
  });

  const times = ["13:00", "15:30", "18:00", "20:30", "23:00"];

  const handleSubmit = () => {
    if (selectedDate && selectedTime) {
      navigate(
        `/seats?date=${selectedDate}&time=${selectedTime}&movie=${movie}&poster_path=${poster_path}`
      );
    }
  };

  return (
    <div className="flex justify-around">
      <div className="text-white">
        <h1 className="text-center text-white font-bold text-2xl">{movie}</h1>
        <div className="flex justify-center shadow h-[180px] sm:h-[600px]">
          {poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w500/${poster_path || ""}`}
              className="h-full border-2 border-primary"
            />
          )}
        </div>
      </div>
      <div className="flex flex-col justify-between border-2 border-primary shadow rounded-lg shadow p-6 ">
        <div>
          <h1 className="text-2xl font-bold text-white mb-6">
            Selecciona fecha y horario
          </h1>

          <div className="mb-8">
            <h2 className="text-lg text-white font-semibold mb-4">Fecha</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {dates.map((date) => (
                <button
                  key={date}
                  onClick={() => setSelectedDate(date)}
                  className={`p-3 rounded-lg border text-white ${
                    selectedDate === date
                      ? "bg-blue-500 border-blue-500"
                      : "border-gray-300 hover:border-blue-500"
                  }`}
                >
                  {new Date(date).toLocaleDateString("es-ES", {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                  })}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-8 ">
            <h2 className="text-lg text-white font-semibold mb-4">Horario</h2>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
              {times.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`p-3 rounded-lg border text-white ${
                    selectedTime === time
                      ? "bg-blue-500 border-blue-500"
                      : "border-gray-300 hover:border-blue-500"
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        </div>
        <button
          onClick={handleSubmit}
          disabled={!selectedDate || !selectedTime}
          className={`w-full py-3 rounded-lg text-white font-semibold
            ${
              selectedDate && selectedTime
                ? "bg-primary hover:bg-primaryHover"
                : "bg-gray-300 cursor-not-allowed"
            }`}
        >
          Continuar
        </button>
      </div>
    </div>
  );
};
