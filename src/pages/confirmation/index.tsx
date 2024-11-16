import { useNavigate, useSearchParams } from "react-router-dom";

export const ConfirmationPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const movie = searchParams.get("movie");
  const poster_path = searchParams.get("poster_path");
  const seat = searchParams.get("seat");
  const date = searchParams.get("date");
  const time = searchParams.get("time");

  const handlePayment = () => {
    navigate("/");
  };

  return (
    <div className="flex justify-around">
      <div className="text-white">
        <h1 className="text-center text-white font-bold text-2xl">{movie}</h1>
        <div className="flex justify-center shadow h-[180px] sm:h-[600px]">
          {poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              className="h-full border-2 border-primary"
            />
          )}
        </div>
      </div>

      <div className="flex flex-col justify-between border-2 border-primary shadow rounded-lg shadow p-6">
        <div>
          <h1 className="text-2xl font-bold text-white mb-6">
            Confirma tu reserva
          </h1>

          <div className="space-y-4 mb-8">
            <div>
              <h2 className="text-lg text-white font-semibold mb-2">
                Película
              </h2>
              <p className="text-white">{movie}</p>
            </div>

            <div>
              <h2 className="text-lg text-white font-semibold mb-2">Fecha</h2>
              <p className="text-white">
                {new Date(date || "").toLocaleDateString("es-ES", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>

            <div>
              <h2 className="text-lg text-white font-semibold mb-2">Horario</h2>
              <p className="text-white">{time}</p>
            </div>

            <div>
              <h2 className="text-lg text-white font-semibold mb-2">Asiento</h2>
              <p className="text-white">{seat}</p>
            </div>
          </div>
        </div>

        <button
          onClick={handlePayment}
          className="w-full py-3 rounded-lg text-white font-semibold bg-primary hover:bg-primaryHover"
        >
          Continuar con el pago
        </button>
      </div>
    </div>
  );
};
