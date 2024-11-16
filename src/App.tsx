import { RoutesProvider } from "@/routes";
import { BookingProvider } from "@/context";

function AppProvider() {
  return (
    <>
      <BookingProvider>
        <RoutesProvider />
      </BookingProvider>
    </>
  );
}

export default AppProvider;
