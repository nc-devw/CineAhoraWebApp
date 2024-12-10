import { useEffect } from "react";
import { useBooking } from "@/hooks";
import { SessionService } from "@/services";
import axios from "axios";
import { http } from "@/services/clients";

/**
 * Cuando se recarga la página,
 * se borran los estados.
 * De esta manera, los volvemos a setear
 * cuando el componente es montado,
 * luego de recargar
 */
export function Session() {
  const { setUserSession } = useBooking();

  const doRefreshToken = async () => {
    const session_saved = SessionService.getSession();
    if (session_saved && session_saved.isLogged) {
      if (session_saved.refreshToken) {
        try {
          const response = await axios.get(
            `${import.meta.env.VITE_URL_BACKEND}/users/refresh-token`,
            {
              headers: {
                Authorization: `Bearer ${session_saved.refreshToken}`,
              },
            }
          );

          if (response.data.success) {
            http.setAuth(response.data.responseObject.accessToken);
            setUserSession({
              id: response.data.responseObject.user_id,
              name: session_saved.name,
              email: session_saved.email,
              isAdmin: session_saved.isAdmin,
              isLogged: true,
              accessToken: response.data.responseObject.accessToken,
            });
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

  useEffect(() => {
    doRefreshToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return false;
}
