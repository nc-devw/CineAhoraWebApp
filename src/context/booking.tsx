import { Film } from "@/models";
import { createContext, useState, ReactNode } from "react";

export interface BookingContextType {
  movie?: Film;
  selectedDate: string;
  selectedTime: string;
  selectedSeat: string;
  setMovieInfo: (movie?: Film) => void;
  setSessionInfo: (date: string, time: string) => void;
  setSeatInfo: (seat: string) => void;
  clearBooking: () => void;
}

export const BookingContext = createContext<BookingContextType | undefined>(
  undefined
);

export const BookingProvider = ({ children }: { children: ReactNode }) => {
  const [movie, setMovie] = useState<Film>();
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedSeat, setSelectedSeat] = useState("");

  const setMovieInfo = (movie?: Film) => {
    setMovie(movie);
  };

  const setSessionInfo = (date: string, time: string) => {
    setSelectedDate(date);
    setSelectedTime(time);
  };

  const setSeatInfo = (seat: string) => {
    setSelectedSeat(seat);
  };

  const clearBooking = () => {
    setMovie(undefined);
    setSelectedDate("");
    setSelectedTime("");
    setSelectedSeat("");
  };

  return (
    <BookingContext.Provider
      value={{
        movie,
        selectedDate,
        selectedTime,
        selectedSeat,
        setMovieInfo,
        setSessionInfo,
        setSeatInfo,
        clearBooking,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};
