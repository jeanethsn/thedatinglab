import React from "react";
import { render, fireEvent, waitFor, getByRole } from "@testing-library/react";
import LoginContent from "../src/app/components/modal/LoginContent.jsx";
import { UserService } from "../src/app/services/user";
import { yupResolver } from "@hookform/resolvers/yup";
import { useUser } from "@/app/providers/UserProvider";

// Mock de las funciones y objetos externos
jest.mock("@hookform/resolvers/yup", () => ({
  yupResolver: jest.fn(() => () => ({ errors: {} })),
}));
jest.mock("../src/app/services/user", () => ({
  UserService: {
    getLogin: jest.fn(() => Promise.resolve({ data: { user: { id: 1 } } })),
  },
}));
jest.mock("../src/app/providers/UserProvider.jsx", () => ({
  useUser: jest.fn(() => ({ handleUserLogin: jest.fn() })),
}));
jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(() => [{ isDirty: false }, jest.fn()]),
}));

describe("LoginContent component", () => {
  it("should handle successful login and close modal", async () => {
    const handleCloseModalAuth = jest.fn();
    const handleOpenRegister = jest.fn();

    const { getByLabelText, getByRole } = render(
      <LoginContent handleCloseModalAuth={handleCloseModalAuth} handleOpenRegister={handleOpenRegister} />
    );

    // Simular entrada de usuario
    fireEvent.change(getByLabelText("Email"), { target: { value: "test@example.com" } });
    fireEvent.change(getByLabelText("Contraseña"), { target: { value: "password" } });

    // Simular envío del formulario
    const submitButton = getByRole("button", { name: "Iniciar sesión" });
    fireEvent.submit(submitButton);

    // Esperar a que se complete la solicitud
    await waitFor(() => {
      // Verificar que se haya llamado a UserService.getLogin con los datos del formulario
      expect(UserService.getLogin).toHaveBeenCalledWith({
        email: "test@example.com",
        password: "password",
      });

      // Verificar que se haya cerrado el modal de autenticación
      expect(handleCloseModalAuth).toHaveBeenCalled();
    });
  });
});
