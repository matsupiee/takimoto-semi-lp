import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Faq from "@/routes/recruit/_components/faq";
import Flow from "@/routes/recruit/_components/flow";
import LineInvite from "@/routes/recruit/_components/line-invite";
import OrientationInfo, { ORIENTATION } from "@/routes/recruit/_components/orientation-info";
import { LINE_URL } from "@/shared/_components/line-button";

describe("OrientationInfo", () => {
  it("サーオリの日程と会場を描画する", () => {
    render(<OrientationInfo />);

    expect(screen.getByText(ORIENTATION.date)).toBeTruthy();
    expect(screen.getByText(ORIENTATION.place)).toBeTruthy();
  });

  it("開催時間が未確定のあいだは時間の行を出さない", () => {
    render(<OrientationInfo />);

    // 時間が決まったら ORIENTATION.time に入れる。その時点でこの期待は逆になる
    expect(ORIENTATION.time).toBeNull();
    expect(screen.queryByText("時間")).toBeNull();
  });
});

describe("Flow", () => {
  it("サーオリから選考までの流れを描画する", () => {
    render(<Flow />);

    expect(screen.getByText("サークルオリエンテーション")).toBeTruthy();
    expect(screen.getByText("説明会")).toBeTruthy();
    expect(screen.getByText("政策立案ワークショップ")).toBeTruthy();
    expect(screen.getByText("選考・入ゼミ")).toBeTruthy();
  });

  it("日程が未確定のものは調整中と示す", () => {
    render(<Flow />);

    // 説明会・ワークショップ・選考の3件。開催は決まっているが日程が未定であることを出す
    expect(screen.getAllByText("日程調整中")).toHaveLength(3);
  });

  it("サーオリには確定した日程を出す", () => {
    render(<Flow />);

    expect(screen.getByText(ORIENTATION.date)).toBeTruthy();
  });
});

describe("LineInvite", () => {
  it("公式LINEの友だち追加リンクを安全に描画する", () => {
    render(<LineInvite />);

    const link = screen.getByRole("link", { name: /友だち追加/ });
    expect(link.getAttribute("href")).toBe(LINE_URL);
    expect(link.getAttribute("target")).toBe("_blank");
    expect(link.getAttribute("rel")).toContain("noreferrer");
  });
});

describe("Faq", () => {
  it("選考があることを明示する", () => {
    render(<Faq />);

    expect(screen.getByText("選考はありますか？")).toBeTruthy();
    // 来てもらったあとで前提が変わらないよう、選考の有無は隠さない
    expect(screen.getByText(/あります。入ゼミにあたっては選考を実施しています/)).toBeTruthy();
  });

  it("費用・掛け持ち・他大・経験の質問に答える", () => {
    render(<Faq />);

    expect(screen.getByText("費用はかかりますか？")).toBeTruthy();
    expect(screen.getByText("他のサークルや部活との掛け持ちはできますか？")).toBeTruthy();
    expect(screen.getByText("東京大学の学生でなくても参加できますか？")).toBeTruthy();
    expect(screen.getByText("政策や研究の経験がなくても大丈夫ですか？")).toBeTruthy();
  });
});
