export type Item = {
  value: string;
  id: number;
};

interface TableProps {
  items: Item[];
  onDelete: (id: number) => void;
}

export const Table: React.FC<TableProps> = ({ items, onDelete }) => {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-center text-sm font-light">
              <thead className="border-b bg-[#4F46E5] font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
                <tr>
                  <th scope="col" className=" px-6 py-4">
                    ID
                  </th>
                  <th scope="col" className=" px-6 py-4">
                    Función
                  </th>
                  <th scope="col" className=" px-6 py-4">
                    Acción
                  </th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => {
                  return (
                    <Row
                      key={item.id}
                      id={item.id}
                      name={item.value}
                      onDelete={() => onDelete(item.id)}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

interface RowProps {
  id: number;
  name: string;
  onDelete: () => void;
}

const Row: React.FC<RowProps> = ({ id, name, onDelete }) => {
  return (
    <tr className="border-b dark:border-neutral-500">
      <td className="whitespace-nowrap  px-6 py-4  text-[#4F46E5] font-bold">
        {id}
      </td>
      <td className="whitespace-nowrap  px-6 py-4 font-bold text-[#4F46E5] ">
        {name}
      </td>
      <td className="whitespace-nowrap  px-6 py-4">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            onClick={onDelete}
            className="bg-[#4F46E5] hover:bg-[#6366F1] font-bold py-2 px-4 rounded inline-flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
            <span className="ml-2 text-white">Eliminar</span>
          </button>
        </div>
      </td>
    </tr>
  );
};
