import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Faq from "@/routes/recruit/_components/faq";
import Flow from "@/routes/recruit/_components/flow";
import LineInvite from "@/routes/recruit/_components/line-invite";
import OrientationInfo from "@/routes/recruit/_components/orientation-info";
import { ORIENTATION } from "@/routes/recruit/_utils/season";
import { LINE_URL } from "@/shared/_components/line-button";

describe("OrientationInfo", () => {
  it("サーオリの日程と会場を描画する", () => {
    render(<OrientationInfo />);

    expect(screen.getByText(ORIENTATION.date)).toBeTruthy();
    expect(screen.getByText(ORIENTATION.place)).toBeTruthy();
  });

  it("見出しと同じ語になる eyebrow を置かない", () => {
    render(<OrientationInfo />);

    expect(screen.getByRole("heading", { name: /サークルオリエンテーション/ })).toBeTruthy();
    expect(screen.queryByText("Orientation")).toBeNull();
  });

  it("開催時間が未確定のときは時間の行を出さない", () => {
    render(<OrientationInfo orientation={{ ...ORIENTATION, time: null }} />);

    expect(screen.queryByText("時間")).toBeNull();
  });

  it("開催時間が入っていれば時間の行を出す", () => {
    render(<OrientationInfo orientation={{ ...ORIENTATION, time: "13:00〜16:00" }} />);

    expect(screen.getByText("時間")).toBeTruthy();
    expect(screen.getByText("13:00〜16:00")).toBeTruthy();
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

    // 説明会とワークショップの2件。選考は日付を持たないので出さない
    expect(screen.getAllByText("日程調整中")).toHaveLength(2);
  });

  it("説明会とワークショップは対等に並べ、片方だけでもよいと伝える", () => {
    render(<Flow />);

    // 一方だけに参加する人がいるため、順番のある段階として扱わない
    expect(screen.getByText("説明会・政策立案ワークショップ")).toBeTruthy();
    expect(screen.getByText("どちらか一方の参加でも構いません。")).toBeTruthy();
  });

  it("選考はエントリーシートと面接であることを示す", () => {
    render(<Flow />);

    expect(screen.getByText(/エントリーシートのご提出と面接を経て/)).toBeTruthy();
    expect(screen.getByText(/提出方法と期限は、説明会および公式LINEでお伝えします/)).toBeTruthy();
  });

  it("サーオリには確定した日程を出す", () => {
    render(<Flow />);

    expect(screen.getByText(ORIENTATION.date)).toBeTruthy();
  });

  it("会場はサーオリ情報と同じ出どころを使う", () => {
    render(<Flow />);

    // 会場を文字列で持つと、教室が変わったときに告知と流れで食い違う
    expect(screen.getByText(new RegExp(ORIENTATION.place))).toBeTruthy();
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
    // 来てもらったあとで前提が変わらないよう、選考の有無と形式は隠さない。
    // 流れ（Flow）の記述と食い違わないよう、どちらもESと面接で揃える
    expect(
      screen.getByText(/あります。エントリーシートのご提出と面接を経て決定します/),
    ).toBeTruthy();
  });

  it("費用・掛け持ち・他大・経験の質問に答える", () => {
    render(<Faq />);

    expect(screen.getByText("費用はかかりますか？")).toBeTruthy();
    expect(screen.getByText("他のサークルや部活との掛け持ちはできますか？")).toBeTruthy();
    expect(screen.getByText("東京大学の学生でなくても参加できますか？")).toBeTruthy();
    expect(screen.getByText("政策や研究の経験がなくても大丈夫ですか？")).toBeTruthy();
  });
});
