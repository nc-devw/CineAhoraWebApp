import { Film } from "@/models";
import { createContext, useState, ReactNode } from "react";

interface SessionData {
  name: string;
  email: string;
  isAdmin: boolean;
  isLogged: boolean;
}

export interface BookingContextType {
  movie?: Film;
  selectedDate: string;
  selectedTime: string;
  selectedSeat: string;
  session: SessionData | null;
  setMovieInfo: (movie?: Film) => void;
  setSessionInfo: (date: string, time: string) => void;
  setSeatInfo: (seat: string) => void;
  clearBooking: () => void;
  setSession: (session: SessionData) => void;
  resetSession: () => void;
}

const sessionInit = {
    name: "",
    email: "",
    isAdmin: false,
    isLogged: false,
  }

export const BookingContext = createContext<BookingContextType | undefined>(
  undefined
);

export const BookingProvider = ({ children }: { children: ReactNode }) => {
  const [movie, setMovie] = useState<Film>();
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedSeat, setSelectedSeat] = useState("");
  const [session, setSession] = useState<SessionData | null>(sessionInit);

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

  const resetSession = () => {
    setSession(sessionInit);
  };

  return (
    <BookingContext.Provider
      value={{
        movie,
        selectedDate,
        selectedTime,
        selectedSeat,
        session,
        setMovieInfo,
        setSessionInfo,
        setSeatInfo,
        clearBooking,
        setSession,
        resetSession
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};
