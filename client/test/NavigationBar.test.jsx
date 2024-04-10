import { render, fireEvent, waitFor } from "@testing-library/react";
import NavigationBar from "../src/app/components/common/NavBar.jsx";

describe("NavigationBar", () => {
  test("Al hacer clic en el botón 'Accede', se abre el modal 'ModalAuth'", async () => {
    const { getByText } = render(<NavigationBar />);

    expect(() => getByText("Bienvenido")).toThrow();

    fireEvent.click(getByText("Accede"));

    await waitFor(() => getByText("Bienvenido"));

    expect(getByText("Bienvenido")).toBeTruthy();
  });
});
