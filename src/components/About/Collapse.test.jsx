import { test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Collapse from "./Collapse";

test("toggle open/close", () => {
    render(
        <Collapse title="Test">
            Contenu
        </Collapse>
    );

    const header = screen.getByText("Test");
    const container = screen.getByText("Contenu").closest(".collapse-content");

    // fermé
    expect(container.classList.contains("open")).toBe(false);

    // ouvre
    fireEvent.click(header);
    expect(container.classList.contains("open")).toBe(true);

    // referme
    fireEvent.click(header);
    expect(container.classList.contains("open")).toBe(false);
});