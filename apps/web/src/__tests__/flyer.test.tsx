import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import FlyerLinks from "@/routes/flyer/_components/flyer-links";
import FlyerSheet from "@/routes/flyer/_components/flyer-sheet";
import { BACK_HOTSPOTS, FRONT_HOTSPOTS, ORIENTATION_FORM_URL } from "@/routes/flyer/_utils/links";
import { LINE_URL } from "@/shared/_components/line-button";

describe("FlyerSheet", () => {
  it("ビラ画像の QR の位置に、同じ行き先のリンクを重ねる", () => {
    render(<FlyerSheet src="/front.webp" alt="表面" hotspots={FRONT_HOTSPOTS} />);

    const link = screen.getByRole("link", { name: "各種説明会申し込みフォーム" });
    expect(link.getAttribute("href")).toBe(ORIENTATION_FORM_URL);
    expect(link.getAttribute("rel")).toContain("noreferrer");
  });

  it("サイト内リンクは新しいタブで開かない", () => {
    render(<FlyerSheet src="/back.webp" alt="裏面" hotspots={BACK_HOTSPOTS} />);

    const hp = screen.getByRole("link", { name: /公式HP/ });
    expect(hp.getAttribute("href")).toBe("/recruit");
    expect(hp.getAttribute("target")).toBeNull();
    expect(screen.getByRole("link", { name: "公式LINE" }).getAttribute("href")).toBe(LINE_URL);
  });

  it("タップ領域は画像の内側に収まる", () => {
    for (const spot of [...FRONT_HOTSPOTS, ...BACK_HOTSPOTS]) {
      expect(spot.left + spot.width).toBeLessThanOrEqual(100);
      expect(spot.top + spot.height).toBeLessThanOrEqual(100);
    }
  });
});

describe("FlyerLinks", () => {
  it("画像の外にも申し込みフォームと公式LINEへの導線を置く", () => {
    render(<FlyerLinks />);

    expect(
      screen.getByRole("link", { name: "説明会・ワークショップに申し込む" }).getAttribute("href"),
    ).toBe(ORIENTATION_FORM_URL);
    expect(screen.getByRole("link", { name: /友だち追加/ }).getAttribute("href")).toBe(LINE_URL);
  });
});
