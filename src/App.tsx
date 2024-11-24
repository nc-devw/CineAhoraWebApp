import { useEffect } from "react";
import { RoutesProvider } from "@/routes";
import { BookingProvider } from "@/context";
import { useBooking } from "@/hooks";
import { SessionService } from "@/services";
import { Session } from "@/components";

function AppProvider() {
  //const { setSession } = useBooking();
  
  //useEffect(() => {
  //  const session_saved = SessionService.getSession();
  //  if (session_saved && session_saved.isLogged){
  //    setSession(session_saved);
  //  }
  //}, [])

  return (
    <>
      <BookingProvider>
        <Session />
        <RoutesProvider />
      </BookingProvider>
    </>
  );
}

export default AppProvider;
