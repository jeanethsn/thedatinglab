import React from "react";
import { render, fireEvent, waitFor, getByText, getByRole } from "@testing-library/react";
import LoginContent from "../src/app/components/modal/LoginContent.jsx";
import { UserService } from "../src/app/services/user";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useUser } from "@/app/providers/UserProvider";

// Mock de las funciones y objetos externos
jest.mock("../src/app/services/user", () => ({
  UserService: {
    getLogin: jest.fn((formData) => Promise.resolve({ data: { user: { id: 1 } } })),
  },
}));

jest.mock("react-hook-form", () => ({
  useForm: jest.fn(() => ({
    register: jest.fn(),
    handleSubmit: jest.fn(),
    formState: { errors: {} },
  })),
}));

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

jest.mock("@hookform/resolvers/yup", () => ({
  yupResolver: jest.fn(() => async (values) => {
    try {
      await validationSchema.validate(values, { abortEarly: false });
      return { errors: {} };
    } catch (validationErrors) {
      return {
        errors: validationErrors.inner.reduce((acc, error) => {
          acc[error.path] = error.message;
          return acc;
        }, {}),
      };
    }
  }),
}));

jest.mock("../src/app/providers/UserProvider.jsx", () => ({
  useUser: jest.fn(() => ({ handleUserLogin: jest.fn() })),
}));
jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(() => ({
    email: "",
    password: "",
    setEmail: jest.fn(),
    setPassword: jest.fn(),
    isDirty: false,
  })),
}));

describe("LoginContent component", () => {
  it("should display error messages for invalid input", async () => {
    const invalidEmail = "invalidEMail";
    const invalidPassword = "";

    useState.mockImplementation((initialState) => [{}, jest.fn()]);

    // Renderizar el componente
    const { getByLabelText, getByText, getByRole } = render(<LoginContent />);

    // Simular el envío del formulario con valores inválidos
    fireEvent.change(getByLabelText("Email"), { target: { value: invalidEmail } });
    fireEvent.change(getByLabelText("Contraseña"), { target: { value: invalidPassword } });

    try {
      getByText("El email es inválido");
      getByText("La contraseña es requerida");
      expect(true).toBeFalsy();
    } catch (error) {
      expect(error).toBeTruthy();
    }

    const submitButton = getByRole("button", { name: "Iniciar sesión" });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(getByText("El email es inválido")).toBeInTheDocument();
      expect(getByText("La contraseña es requerida")).toBeInTheDocument();
    });
  });

  it("should handle successful login and close modal", async () => {
    const handleCloseModalAuth = jest.fn();
    const handleOpenRegister = jest.fn();

    useState.mockImplementation((initialState) => [{}, jest.fn()]);

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
