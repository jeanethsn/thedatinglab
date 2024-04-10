import React from "react";
import { render, waitFor } from "@testing-library/react";
import CardList from "../src/app/components/events/CardList";
import { getAllEvents } from "../src/app/services/event";

jest.mock("../src/app/services/event", () => ({
  getAllEvents: jest.fn(),
}));

const mockEvents = [
  {
    id: 1,
    title: "Evento 1",
    date: "2024-05-01",
    location: "Ubicación 1",
    shortDescription: "Descripción 1",
    image: "imagen1.jpg",
  },
  {
    id: 2,
    title: "Evento 2",
    date: "2024-05-02",
    location: "Ubicación 2",
    shortDescription: "Descripción 2",
    image: "imagen2.jpg",
  },
];

test("renders loading indicator while fetching events", async () => {
  getAllEvents.mockResolvedValueOnce(new Promise(() => {}));

  const { queryByRole } = render(<CardList />);
  expect(queryByRole("status")).not.toBeNull();
});

/*
describe("CardList", () => {
  test("renders events after fetching", async () => {
    getAllEvents.mockResolvedValueOnce({ data: mockEvents });

    const { getByText } = render(<CardList />);
    await waitFor(() => {
      mockEvents.forEach((event) => {
        expect(getByText(event.title)).toBeInTheDocument();
        expect(getByText(event.location)).toBeInTheDocument();
        expect(getByText(event.shortDescription)).toBeInTheDocument();
      });
    });
  });
});
*/
