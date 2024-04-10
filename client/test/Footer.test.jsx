import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../src/app/components/common/Footer.jsx";
import { fireEvent } from "@testing-library/dom";

describe("Footer", () => {
  it("should render and check links", () => {
    render(<Footer />);

    const tiktokLink = screen.getByAltText("Icono TIKTOK").parentElement;
    const spotifyLink = screen.getByAltText("Icono spotify").parentElement;
    const instagramLink = screen.getByAltText("Icono insta").parentElement;
    const whatsappLink = screen.getByAltText("Icono whastsapp").parentElement;
    const linkedinLink = screen.getByAltText("Icono Linkedin").parentElement;

    expect(tiktokLink.getAttribute("href")).toBe("https://www.tiktok.com/");
    expect(spotifyLink.getAttribute("href")).toBe(
      "https://open.spotify.com/playlist/4xkbM6RFRfVFfEAA8eyH9S?si=375431bb005a4de4"
    );
    expect(instagramLink.getAttribute("href")).toBe("https://www.instagram.com/the.dating.lab/");
    expect(whatsappLink.getAttribute("href")).toContain("https://wa.me");
    expect(linkedinLink.getAttribute("href")).toBe("https://www.linkedin.com/company/datinglab/about/");
  });

  it("should open the modal when Contacto button is clicked", () => {
    render(<Footer />);
    const contactoButton = screen.getByText("Contacto");
    fireEvent.click(contactoButton);

    const modal = screen.getByRole("dialog");
    expect(modal).toBeTruthy();
  });

  /*
  it("should navigate to F.A.Q.s page when F.A.Q.s link is clicked", () => {
    render(<Footer />);
    const faqsLink = screen.getByText("F.A.Q.s");
    fireEvent.click(faqsLink);

    expect(window.location.pathname).toBe("/preguntas");
  });
  
  it("should navigate to Términos del servicio page when Términos del servicio link is clicked", () => {
    render(<Footer />);
    const terminosLink = screen.getByText("Términos del servicio");
    fireEvent.click(terminosLink);

    expect(window.location.pathname).toBe("/terminos-servicio");
  });*/
});
