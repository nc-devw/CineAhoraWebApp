import { useCallback, useState } from "react";
import { Select, Modal } from "@/components";

const MOVIES = [
  { value: "pelicula1", label: "Los Vengadores" },
  { value: "pelicula2", label: "Superman" },
  { value: "pelicula3", label: "Batman" },
];

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

const DAYS_OF_WEEK = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
];

export const PanelAdmin: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedSchedules, setSelectedSchedules] = useState<
    Record<string, any>
  >({});
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const openModal = useCallback((): void => setIsOpen(true), []);
  const closeModal = useCallback((): void => setIsOpen(false), []);

  const handleSaveFunction = useCallback((): void => {
    openModal();

    const resetSchedules = DAYS_OF_WEEK.reduce((acc, day) => {
      acc[day] = null;
      return acc;
    }, {} as Record<string, null>);

    setSelectedMovie(null);
    setSelectedRoom(null);
    setStartDate("");
    setEndDate("");
    setSelectedSchedules(resetSchedules);
  }, [openModal]);

  return (
    <div className="mt-5 ml-5">
      <div className="flex flex-wrap">
        <div className="w-full">
          <h1 className="text-2xl font-bold text-[#4F46E5]">Alta de Función</h1>
        </div>
      </div>
      <div className="flex flex-wrap mt-6">
        <div className="w-full">
          <h2 className="text-xl text-[#4F46E5]">1. Seleccionar Película</h2>
          <div className="w-2/4 mt-3">
            <Select
              options={MOVIES}
              value={selectedMovie}
              onChange={(value: any) => setSelectedMovie(value)}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap mt-6">
        <div className="w-full">
          <h2 className="text-xl text-[#4F46E5]">2. Seleccionar sala</h2>
          <div className="w-2/4 mt-3">
            <Select
              options={ROOMS}
              value={selectedRoom}
              onChange={(value: any) => setSelectedRoom(value)}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap mt-6">
        <div className="w-full">
          <h2 className="text-xl text-[#4F46E5]">
            3. Seleccionar horarios de función
          </h2>
          {/* Days */}
          {DAYS_OF_WEEK.map((day, i) => {
            return (
              <div key={i} className="w-2/4 mt-3">
                <h2 className="text-lg text-[#4F46E5]">{day}</h2>
                <Select
                  options={SCHEDULES}
                  isMulti={true}
                  value={selectedSchedules[day]}
                  onChange={(value: any) =>
                    setSelectedSchedules({ ...selectedSchedules, [day]: value })
                  }
                />
              </div>
            );
          })}
        </div>
      </div>
      {/* End days of week */}
      {/* Start Validaty of the programming */}
      <div className="flex flex-wrap mt-6">
        <div className="w-full">
          <h2 className="text-xl text-[#4F46E5]">
            4. Vigencia de la programación
          </h2>
          <div className="flex mb-6 mt-6 w-2/4">
            <div>
              <label
                className="block font-bold md:text-right mb-1 md:mb-0 pr-4 text-[#4F46E5]"
                htmlFor="inline-full-name"
              >
                Desde
              </label>
            </div>
            <div className="w-full">
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#2684FF]"
                id="inline-full-name"
              />
            </div>
          </div>
          <div className="flex mb-6 mt-6 w-2/4">
            <div>
              <label
                className="block font-bold md:text-right mb-1 md:mb-0 pr-4 text-[#4F46E5]"
                htmlFor="inline-full-name"
              >
                Hasta
              </label>
            </div>
            <div className="w-full">
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#2684FF]"
                id="inline-full-name"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap mt-2 mb-6">
        <div className="w-full">
          <button
            onClick={handleSaveFunction}
            className="shadow bg-[#4F46E5] hover:bg-[#6366F1] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button"
          >
            Guardar función
          </button>
        </div>
      </div>
      <Modal
        title={"INFO"}
        message={"Se ha guardado la función"}
        isOpen={isOpen}
        closeModal={closeModal}
      />
    </div>
  );
};
