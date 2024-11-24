import { RoutesProvider } from "@/routes";
import { BookingProvider } from "@/context";
import { Session } from "@/components";
import { SnackbarProvider } from "notistack";

function AppProvider() {
  return (
    <>
      <BookingProvider>
        <SnackbarProvider>
          <Session />
          <RoutesProvider />
        </SnackbarProvider>
      </BookingProvider>
    </>
  );
}

export default AppProvider;
