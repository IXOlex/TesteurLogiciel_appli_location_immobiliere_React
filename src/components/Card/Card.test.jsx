import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Card from "./Card";

test("génère le bon lien", () => {
    render(
        <BrowserRouter>
            <Card id="42" title="T" cover="img.jpg" />
        </BrowserRouter>
    );

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/housing/42");
});

test("image a un alt correct", () => {
    render(
        <BrowserRouter>
            <Card id="1" title="Titre" cover="img.jpg" />
        </BrowserRouter>
    );

    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("alt", "Titre");
});