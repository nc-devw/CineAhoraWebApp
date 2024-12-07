import { Film, Function, Seat } from "@/models";
import { createContext, useState, ReactNode } from "react";

interface SessionData {
  name: string;
  email: string;
  isAdmin: boolean;
  isLogged: boolean;
}

export interface BookingContextType {
  movie?: Film;
  selectedSeat: Seat | undefined;
  selectedFunction: Function | undefined;
  session: SessionData | null;
  setMovieInfo: (movie?: Film) => void;
  setSessionInfo: (functionData: Function) => void;
  setSeatInfo: (seat: Seat) => void;
  clearBooking: () => void;
  setSession: (session: SessionData) => void;
  resetSession: () => void;
}

const sessionInit = {
  name: "",
  email: "",
  isAdmin: false,
  isLogged: false,
};

export const BookingContext = createContext<BookingContextType | undefined>(
  undefined
);

export const BookingProvider = ({ children }: { children: ReactNode }) => {
  const [movie, setMovie] = useState<Film>();
  const [selectedSeat, setSelectedSeat] = useState<Seat | undefined>();
  const [selectedFunction, setSelectedFunction] = useState<Function>();
  const [session, setSession] = useState<SessionData | null>(sessionInit);

  const setMovieInfo = (movie?: Film) => {
    setMovie(movie);
  };

  const setSessionInfo = (functionData: Function) => {
    setSelectedFunction(functionData);
  };

  const setSeatInfo = (seat: Seat) => {
    setSelectedSeat(seat);
  };

  const clearBooking = () => {
    setMovie(undefined);
    setSelectedFunction(undefined);
    setSelectedSeat(undefined);
  };

  const resetSession = () => {
    setSession(sessionInit);
  };

  return (
    <BookingContext.Provider
      value={{
        movie,
        selectedSeat,
        selectedFunction,
        session,
        setMovieInfo,
        setSessionInfo,
        setSeatInfo,
        clearBooking,
        setSession,
        resetSession,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};
