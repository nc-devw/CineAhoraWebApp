import DETAIL_DATA from "@/assets/rawData/detail.json";
import { Film } from "@/models";

export const FilmsService = {

    getFilmById: (id: string | undefined): Promise<Film | false> => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const result = getFilmByIdMock(Number(id), DETAIL_DATA)
                resolve(result);  // Devuelve el id después de 1 segundo
                //reject(id);  // Devuelve el id después de 1 segundo
            }, 1000);  // 1000 ms = 1 segundo
        });
    },
    
}

const getFilmByIdMock = (id: number, data: Film[]): Film | false => {
  console.log({data});
  
  const result = data.find(film => film.id === id);
  console.log({id});
  
  return result === undefined ? false : result;
};


