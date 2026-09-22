import { ORIENTATION } from "../_utils/season";

type FlowItem = {
  title: string;
  status: string;
  body: string;
};

type Step = {
  title: string;
  /** 日程が決まっているものだけ出す。選考のように日付を持たない段階では省く */
  status?: string;
  /** 日程が確定済みかどうか。確定しているものだけブランド色で前に出す */
  fixed?: boolean;
  body?: string;
  /**
   * 並行して開催するもの。どちらか一方だけに参加する人がいるため、
   * 順番のある段階として縦に積まず、横に並べて対等に見せる。
   */
  items?: FlowItem[];
  note?: string;
};

const steps: Step[] = [
  {
    title: "サークルオリエンテーション",
    status: ORIENTATION.date,
    fixed: true,
    body: `${ORIENTATION.place}でお待ちしています。ゼミ生が活動の内容と雰囲気を直接ご紹介します。`,
  },
  {
    title: "説明会・政策立案ワークショップ",
    items: [
      {
        title: "説明会",
        status: "日程調整中",
        body: "活動の内容と、入ゼミまでの流れを詳しくご説明します。春新歓でも好評だった企画です。",
      },
      {
        title: "政策立案ワークショップ",
        status: "日程調整中",
        body: "実際に手を動かして政策を考えるプロセスを体験できる企画です。春新歓でも好評でした。",
      },
    ],
    note: "どちらか一方の参加でも構いません。",
  },
  {
    title: "選考・入ゼミ",
    body: "エントリーシートのご提出と面接を経て、入ゼミが決まります。提出方法と期限は、説明会および公式LINEでお伝えします。",
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
          {step.status ? (
            <p
              className={`mt-2 pl-9 text-sm font-semibold md:text-base ${
                step.fixed ? "text-brand" : "text-ink/70"
              }`}
            >
              {step.status}
            </p>
          ) : null}

          {step.body ? (
            <p className="mt-2 pl-9 text-sm leading-jp-body text-ink/75 md:text-base">
              {step.body}
            </p>
          ) : null}

          {/*
            注記はグリッドの前に置く。後ろに回すと、横並びの左カラムの直下に
            見えて片方だけの補足に読めるため、先に2つの関係を示す。
          */}
          {step.note ? (
            <p className="mt-2 pl-9 text-sm leading-jp-body text-ink/70">{step.note}</p>
          ) : null}

          {step.items ? (
            <div className="mt-4 grid grid-cols-1 gap-x-8 gap-y-6 pl-9 sm:grid-cols-2">
              {step.items.map((item) => (
                <div key={item.title} className="border-t border-ink/15 pt-4">
                  <h4 className="text-sm font-semibold leading-jp-heading text-ink md:text-base">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-sm font-semibold text-ink/70">{item.status}</p>
                  <p className="mt-2 text-sm leading-jp-body text-ink/75">{item.body}</p>
                </div>
              ))}
            </div>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
