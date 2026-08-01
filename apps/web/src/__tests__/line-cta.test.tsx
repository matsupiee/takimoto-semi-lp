import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import LineCta, { LINE_URL } from "@/routes/contact/_components/line-cta";

describe("LineCta", () => {
  it("公式LINEの友だち追加リンクを描画する", () => {
    render(<LineCta />);

    const link = screen.getByRole("link", { name: /友だち追加/ });
    expect(link.getAttribute("href")).toBe(LINE_URL);
  });

  it("公式LINEのURLが差し替わっていない", () => {
    expect(LINE_URL).toBe("https://lin.ee/YvOxgn3");
  });

  it("外部リンクを新しいタブで安全に開く", () => {
    render(<LineCta />);

    const link = screen.getByRole("link", { name: /友だち追加/ });
    expect(link.getAttribute("target")).toBe("_blank");
    expect(link.getAttribute("rel")).toContain("noreferrer");
  });
});
