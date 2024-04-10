import { render, fireEvent, waitFor } from "@testing-library/react";
import Card from "../src/app/components/events/Card.jsx";
import { UserProvider } from "@/app/providers/UserProvider";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
}));

jest.mock("../src/app/utils/date.js", () => ({
  ...jest.requireActual("../src/app/utils/date.js"),
  formatearFecha: jest.fn(() => "DOM, 2 Junio"),
  horaFormato: jest.fn(() => "10:30"),
}));

jest.mock("../src/app/providers/UserProvider.jsx", () => {
  const { createContext } = require("react");

  const UserContext = createContext({
    user: {},
    isAdmin: false,
    isLoading: false,
    handleUserLogout: () => {},
    handleUserLogin: () => {},
  });

  const useUser = jest.fn(() => ({
    user: { email: "test@example.com" },
    isAdmin: false,
    isLoading: false,
    handleUserLogout: jest.fn(),
    handleUserLogin: jest.fn(),
  }));

  const UserProvider = ({ children }) => {
    return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
  };

  return {
    __esModule: true,
    UserProvider,
    useUser,
  };
});

describe("Card", () => {
  test("Si el usuario está logueado, redirige a la página de detalles del evento", async () => {
    const eventDate = { id: 1 };

    const { getByText } = render(
      <UserProvider>
        <Card eventDate={eventDate} />
      </UserProvider>
    );

    const verMasButton = getByText("Ver más");
    fireEvent.click(verMasButton);

    await waitFor(() => {
      expect(window.location.pathname).toBe(`/evento/${eventDate.id}`);
    });
  });
});
