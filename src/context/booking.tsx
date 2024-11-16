import { createContext, useState, ReactNode } from "react";

export interface BookingContextType {
  movieTitle: string;
  posterPath: string;
  selectedDate: string;
  selectedTime: string;
  selectedSeat: string;
  setMovieInfo: (title: string, poster: string) => void;
  setSessionInfo: (date: string, time: string) => void;
  setSeatInfo: (seat: string) => void;
  clearBooking: () => void;
}

export const BookingContext = createContext<BookingContextType | undefined>(
  undefined
);

export const BookingProvider = ({ children }: { children: ReactNode }) => {
  const [movieTitle, setMovieTitle] = useState("");
  const [posterPath, setPosterPath] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedSeat, setSelectedSeat] = useState("");

  const setMovieInfo = (title: string, poster: string) => {
    setMovieTitle(title);
    setPosterPath(poster);
  };

  const setSessionInfo = (date: string, time: string) => {
    setSelectedDate(date);
    setSelectedTime(time);
  };

  const setSeatInfo = (seat: string) => {
    setSelectedSeat(seat);
  };

  const clearBooking = () => {
    setMovieTitle("");
    setPosterPath("");
    setSelectedDate("");
    setSelectedTime("");
    setSelectedSeat("");
  };

  return (
    <BookingContext.Provider
      value={{
        movieTitle,
        posterPath,
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
