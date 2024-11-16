import { Button } from "@/components";
import { useBooking } from "@/hooks";
import { PATHS } from "@/routes";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SeatsPage = () => {
  const navigate = useNavigate();
  const { posterPath, setSeatInfo } = useBooking();

  const [selectedSeat, setSelectedSeat] = useState<string | null>(null);

  const rows = ["A", "B", "C", "D", "E"];
  const columns = [1, 2, 3, 4, 5, 6, 7, 8];

  const occupiedSeats = ["A3", "B5", "C7", "E2"];

  const handleSeatSelect = (seat: string) => {
    setSelectedSeat(seat === selectedSeat ? null : seat);
  };

  const handleContinue = () => {
    if (selectedSeat) {
      setSeatInfo(selectedSeat);
      navigate(PATHS.CONFIRMATION);
    }
  };

  return (
    <div className="container">
      <div className="flex flex-col md:flex-row gap-x-4">
        <div className="w-full md:w-1/3 flex justify-center">
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
        <div className="w-full md:w-2/3 flex flex-col items-center gap-y-4">
          <h1 className="text-2xl font-bold text-white mb-6 text-center">
            Selecciona tu asiento
          </h1>

          <div className="w-full bg-gray-200 h-4 rounded-lg mb-12 relative">
            <p className="absolute -bottom-8 w-full text-center text-gray-500">
              PANTALLA
            </p>
          </div>

          <div className="mb-8">
            {rows.map((row) => (
              <div key={row} className="flex justify-center gap-2 mb-2">
                <div className="w-8 h-8 flex items-center justify-center font-semibold text-white ">
                  {row}
                </div>

                {columns.map((col) => {
                  const seatId = `${row}${col}`;
                  const isOccupied = occupiedSeats.includes(seatId);
                  const isSelected = selectedSeat === seatId;

                  return (
                    <button
                      key={seatId}
                      disabled={isOccupied}
                      onClick={() => handleSeatSelect(seatId)}
                      className={`
                      w-8 h-8 rounded-t-lg
                      ${
                        isOccupied
                          ? "bg-gray-300 cursor-not-allowed"
                          : isSelected
                          ? "bg-primary text-white"
                          : "bg-gray-100 hover:bg-blue-200"
                      }
                      flex items-center justify-center
                      border border-gray-300
                      transition-colors
                    `}
                    >
                      {col}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gray-100 border border-gray-300 rounded-t-lg"></div>
              <span className="text-sm text-white">Disponible</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-primary border border-primary rounded-t-lg"></div>
              <span className="text-sm text-white">Seleccionado</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gray-300 border border-gray-300 rounded-t-lg"></div>
              <span className="text-sm text-white">Ocupado</span>
            </div>
          </div>

          {selectedSeat && (
            <div className="text-center mb-6">
              <p className="text-lg text-white ">
                Asiento seleccionado:{" "}
                <span className="font-bold">{selectedSeat}</span>
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-center">
        <Button onClick={handleContinue} disabled={!selectedSeat}>
          Continuar
        </Button>
      </div>
    </div>
  );
};
