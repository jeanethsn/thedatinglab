import React from "react";
import { render } from "@testing-library/react";
import CardMatch from "../src/app/components/profile/CardMatch.jsx";

describe("CardMatch", () => {
  const match = {
    name: "John",
    lastname: "Doe",
    image: "example.jpg",
  };

  it("renders the component with correct props", () => {
    const { getByText, getByAltText } = render(<CardMatch match={match} />);

    const nameElement = getByText(`${match.name} ${match.lastname}`);
    expect(nameElement).toBeTruthy();

    const image = getByAltText(`${match.name} ${match.lastname} photo`);
    expect(image).toBeTruthy();
    expect(image.src).toEqual(`http://127.0.0.1:8000/storage/${match.image}`);
  });
});
