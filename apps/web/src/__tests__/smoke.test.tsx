import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("harness smoke test", () => {
  it("renders a basic component", () => {
    render(<p>hello harness</p>);
    expect(screen.getByText("hello harness")).toBeDefined();
  });
});
