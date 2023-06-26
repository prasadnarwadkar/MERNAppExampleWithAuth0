import React from "react";

import Hero from "../../components/Hero";

import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

it("renders", () => {
    render(<Hero />);
});

it("makes a call to the API and loads data", async () => {
    // Tests actual call made to the real API.
    // Checks if data is loaded in the component.

    render(<Hero />);
    
    await waitFor(() => screen.getByTestId("obs-tbody"));
    const resultElement = screen.getByTestId("obs-tbody");

    console.log(resultElement.textContent);

    expect(
        resultElement.textContent
    ).toContain("Blood by Automated count");
});
