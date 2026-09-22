import { ORIENTATION } from "./orientation-info";

type Step = {
  title: string;
  /** 開催日が決まっているものは日付、未定のものは調整中である旨を出す */
  status: string;
  /** 日程が確定済みかどうか。未確定のバッジは控えめな色にする */
  fixed: boolean;
  body: string;
};

const steps: Step[] = [
  {
    title: "サークルオリエンテーション",
    status: ORIENTATION.date,
    fixed: true,
    body: "駒場Iキャンパス 1号館 152教室でお待ちしています。ゼミ生が活動の内容と雰囲気を直接ご紹介します。",
  },
  {
    title: "説明会",
    status: "日程調整中",
    fixed: false,
    body: "活動の内容と、入ゼミまでの流れを詳しくご説明します。春新歓でも好評だった企画です。",
  },
  {
    title: "政策立案ワークショップ",
    status: "日程調整中",
    fixed: false,
    body: "実際に手を動かして政策を考えるプロセスを体験できる企画です。春新歓でも好評でした。",
  },
  {
    title: "選考・入ゼミ",
    status: "日程調整中",
    fixed: false,
    body: "入ゼミにあたっては選考があります。形式や時期は決まり次第、公式LINEでお知らせします。",
  },
];

export default function Flow() {
  return (
    <ol className="flex flex-col gap-0">
      {steps.map((step, index) => (
        <li key={step.title} className="border-t border-ink/15 py-6">
          {/*
            スマホでバッジを同じ行に置くと、長い見出し（サークルオリエンテーション）が
            バッジに押されて不自然な位置で折り返す。狭い幅では行を分ける。
          */}
          <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-3">
            <div className="flex items-baseline gap-3">
              <span className="text-sm font-bold text-brand">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-base font-semibold text-ink md:text-lg">{step.title}</h3>
            </div>
            <span
              className={`self-start shrink-0 rounded-full px-3 py-1 text-xs font-semibold sm:ml-auto ${
                step.fixed ? "bg-brand text-white" : "bg-ink/10 text-ink/70"
              }`}
            >
              {step.status}
            </span>
          </div>
          <p className="mt-2 text-sm leading-jp-body text-ink/70 md:text-base">{step.body}</p>
        </li>
      ))}
    </ol>
  );
}
