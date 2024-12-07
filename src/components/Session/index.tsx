import { useEffect } from "react";
import { useBooking } from "@/hooks";
import { SessionService } from "@/services";

/**
 * Cuando se recarga la página,
 * se borran los estados.
 * De esta manera, los volvemos a setear
 * cuando el componente es montado,
 * luego de recargar
 */
export function Session() {
  const { setUserSession } = useBooking();

  useEffect(() => {
    const session_saved = SessionService.getSession();
    if (session_saved && session_saved.isLogged) {
      setUserSession(session_saved);
    }
  }, [setUserSession]);

  return false;
}
