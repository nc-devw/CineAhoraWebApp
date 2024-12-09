import { useCallback, useState } from "react";
import { Select, Modal, CineInput, CineTextArea } from "@/components";

const ROOMS = [
  { value: "sala1", label: "Sala 1" },
  { value: "sala2", label: "Sala 2" },
  { value: "sala3", label: "Sala 3" },
];

const SCHEDULES = [
  { value: "1", label: "9:00 a 13:00" },
  { value: "2", label: "14:00 a 17:30" },
  { value: "3", label: "18:00 a 20:00" },
  { value: "4", label: "20:30 a 22:00" },
  { value: "5", label: "22:30 a 00:30" },
];

export const NewFunctionAdmin: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [movieTitle, setMovieTitle] = useState("");
  const [movieDescription, setMovieDescription] = useState("");
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedSchedules, setSelectedSchedules] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const openModal = useCallback((): void => setIsOpen(true), []);
  const closeModal = useCallback((): void => setIsOpen(false), []);

  const handleSaveFunction = useCallback((): void => {
    openModal();
    setMovieTitle("");
    setMovieDescription("");
    setSelectedRoom(null);
    setSelectedSchedules([]);
    setStartDate("");
    setEndDate("");
  }, [openModal]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Modal
        title={"INFO"}
        message={"Se ha guardado la función"}
        isOpen={isOpen}
        closeModal={closeModal}
      />

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#4F46E5]">Alta de Función</h1>
      </div>

      <form>
        {/* Selección de Película */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold text-[#4F46E5] mb-4">
            1. Seleccionar Película
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Título de la Película
              </label>
              <CineInput
                placeholder="Escribe el nombre de la película"
                value={movieTitle}
                onChange={(event: any) => setMovieTitle(event.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Descripción
              </label>
              <CineTextArea
                placeholder="Escribe una breve descripción de la película"
                value={movieDescription}
                onChange={(event: any) =>
                  setMovieDescription(event.target.value)
                }
              />
            </div>
          </div>
        </div>

        {/* Selección de Sala */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold text-[#4F46E5] mb-4">
            2. Seleccionar Sala
          </h2>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Sala
            </label>
            <Select
              options={ROOMS}
              value={selectedRoom}
              onChange={(value: any) => setSelectedRoom(value)}
            />
          </div>
        </div>

        {/* Horarios */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold text-[#4F46E5] mb-4">
            3. Horario de Función
          </h2>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Horario (se aplicará a todos los días)
            </label>
            <Select
              options={SCHEDULES}
              isMulti={true}
              value={selectedSchedules}
              onChange={(value: any) => setSelectedSchedules(value)}
            />
          </div>
        </div>

        {/* Vigencia */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold text-[#4F46E5] mb-4">
            4. Vigencia de la Programación
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Desde
              </label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#2684FF]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Hasta
              </label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#2684FF]"
              />
            </div>
          </div>
        </div>

        {/* Botón de guardar */}
        <div className="flex justify-end">
          <button
            onClick={handleSaveFunction}
            type="button"
            className="px-6 py-2 bg-[#4F46E5] text-white font-semibold rounded-lg hover:bg-[#6366F1] transition-colors duration-200"
          >
            Guardar Función
          </button>
        </div>
      </form>
    </div>
  );
};
