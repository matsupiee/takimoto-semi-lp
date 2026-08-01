import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { SeminarProfile } from "@/lib/microcms/server-fn/seminar-profile";
import ActivityOverview from "@/routes/about/_components/activity-overview";

const base: SeminarProfile = {
  createdAt: "2026-04-01T00:00:00.000Z",
  updatedAt: "2026-04-01T00:00:00.000Z",
  publishedAt: "2026-04-01T00:00:00.000Z",
  revisedAt: "2026-04-01T00:00:00.000Z",
};

describe("ActivityOverview", () => {
  it("profile が無いときは何も描画しない", () => {
    const { container } = render(<ActivityOverview profile={null} />);

    expect(container.innerHTML).toBe("");
  });

  it("活動情報が一つも入っていないときは何も描画しない", () => {
    const { container } = render(<ActivityOverview profile={{ ...base, memberCount: 62 }} />);

    expect(container.innerHTML).toBe("");
  });

  it("活動日・活動場所・活動形式を描画する", () => {
    render(
      <ActivityOverview
        profile={{
          ...base,
          activityDay: "毎週土曜 13:00〜17:00",
          activityPlace: "東京大学駒場キャンパス",
          activityStyle: "対面中心（オンライン参加可）",
          activityNote: "授業やバイトとの両立も可能です。",
        }}
      />,
    );

    expect(screen.getByText("活動日")).toBeTruthy();
    expect(screen.getByText("毎週土曜 13:00〜17:00")).toBeTruthy();
    expect(screen.getByText("活動場所")).toBeTruthy();
    expect(screen.getByText("東京大学駒場キャンパス")).toBeTruthy();
    expect(screen.getByText("活動形式")).toBeTruthy();
    expect(screen.getByText("授業やバイトとの両立も可能です。")).toBeTruthy();
  });

  it("入力済みの項目だけを描画する", () => {
    render(<ActivityOverview profile={{ ...base, activityDay: "毎週土曜" }} />);

    expect(screen.getByText("毎週土曜")).toBeTruthy();
    expect(screen.queryByText("活動場所")).toBeNull();
  });
});
