import { Button } from "@/components";
import { useBooking } from "@/hooks";
import { useNavigate } from "react-router-dom";

export const ConfirmationPage = () => {
  const navigate = useNavigate();
  const { movie, selectedSeat, selectedDate, selectedTime } = useBooking();

  const handlePayment = () => {
    navigate("/");
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
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    className="h-full border-2 border-primary"
                  />
                )}
              </div>
              <span className="text-center text-white font-bold">
                Género: {movie?.genres.map((genre) => genre.name).join(", ")}
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
              Confirma tu reserva
            </h1>

            <div className="space-y-4 mb-8">
              <div>
                <h2 className="text-lg text-white font-semibold mb-2">Fecha</h2>
                <p className="text-white">
                  {new Date(selectedDate || "").toLocaleDateString("es-ES", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>

              <div>
                <h2 className="text-lg text-white font-semibold mb-2">
                  Horario
                </h2>
                <p className="text-white">{selectedTime}</p>
              </div>

              <div>
                <h2 className="text-lg text-white font-semibold mb-2">
                  Asiento
                </h2>
                <p className="text-white">{selectedSeat}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Button onClick={handlePayment}>Continuar con el pago</Button>
      </div>
    </div>
  );
};
