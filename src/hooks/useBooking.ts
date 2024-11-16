import { useContext } from "react";
import { BookingContext, BookingContextType } from "@/context";

export const useBooking = () => {
  const context = useContext(BookingContext) as BookingContextType;

  return context;
};
