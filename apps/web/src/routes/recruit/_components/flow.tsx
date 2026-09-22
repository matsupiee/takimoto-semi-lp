import { ORIENTATION } from "../_utils/season";

type Step = {
  title: string;
  /** 開催日が決まっているものは日付、未定のものは調整中である旨を出す */
  status: string;
  /** 日程が確定済みかどうか。確定しているものだけブランド色で前に出す */
  fixed: boolean;
  body: string;
};

const steps: Step[] = [
  {
    title: "サークルオリエンテーション",
    status: ORIENTATION.date,
    fixed: true,
    body: `${ORIENTATION.place}でお待ちしています。ゼミ生が活動の内容と雰囲気を直接ご紹介します。`,
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
    <ol className="border-b border-ink/15">
      {steps.map((step, index) => (
        <li key={step.title} className="border-t border-ink/15 py-6">
          <div className="flex items-baseline gap-3">
            <span className="text-sm font-bold text-brand">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="text-base font-semibold leading-jp-heading text-ink md:text-lg">
              {step.title}
            </h3>
          </div>

          {/*
            日程は色ではなく文言そのもので状態が分かるようにする（確定日付か
            「日程調整中」か）。色はあくまで補助で、色だけに意味を持たせない。
          */}
          <p
            className={`mt-2 pl-9 text-sm font-semibold md:text-base ${
              step.fixed ? "text-brand" : "text-ink/70"
            }`}
          >
            {step.status}
          </p>
          <p className="mt-2 pl-9 text-sm leading-jp-body text-ink/75 md:text-base">{step.body}</p>
        </li>
      ))}
    </ol>
  );
}
