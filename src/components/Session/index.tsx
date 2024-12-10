import { useEffect } from "react";
import { useBooking } from "@/hooks";
import { SessionService } from "@/services";
import axios from "axios";

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
            setUserSession({
              name: response.data.responseObject.first_name,
              email: "",
              isAdmin: response.data.responseObject.is_admin,
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
  }, []);

  return false;
}
