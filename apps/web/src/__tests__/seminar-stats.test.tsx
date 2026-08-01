import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { SeminarProfile } from "@/lib/microcms/server-fn/seminar-profile";
import SeminarStats from "@/routes/member/_components/seminar-stats";

const base: SeminarProfile = {
  createdAt: "2026-04-01T00:00:00.000Z",
  updatedAt: "2026-04-01T00:00:00.000Z",
  publishedAt: "2026-04-01T00:00:00.000Z",
  revisedAt: "2026-04-01T00:00:00.000Z",
};

describe("SeminarStats", () => {
  it("profile が無いときは何も描画しない", () => {
    const { container } = render(<SeminarStats profile={null} />);

    expect(container.innerHTML).toBe("");
  });

  it("値が一つも入っていないときは何も描画しない", () => {
    const { container } = render(<SeminarStats profile={base} />);

    expect(container.innerHTML).toBe("");
  });

  it("人数・男女比・東大生比率を描画する", () => {
    render(
      <SeminarStats
        profile={{
          ...base,
          memberCount: 62,
          maleRatio: 55,
          femaleRatio: 45,
          utokyoRatio: 60,
          statsNote: "2026年4月時点",
        }}
      />,
    );

    expect(screen.getByText("62名")).toBeTruthy();
    expect(screen.getByText("55 : 45")).toBeTruthy();
    expect(screen.getByText("60%")).toBeTruthy();
    // 他大生の割合は東大生比率から自動で補完する
    expect(screen.getByText("他大生 40%")).toBeTruthy();
    expect(screen.getByText("2026年4月時点")).toBeTruthy();
  });

  it("男女比が片方しか無いときは男女比を描画しない", () => {
    render(<SeminarStats profile={{ ...base, memberCount: 62, maleRatio: 55 }} />);

    expect(screen.getByText("62名")).toBeTruthy();
    expect(screen.queryByText("男性 : 女性")).toBeNull();
  });
});
