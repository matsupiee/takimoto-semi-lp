import { BRIEFING, ORIENTATION, WORKSHOP, type Session } from "../_utils/season";

type FlowItem = {
  title: string;
  time: string;
  sessions: Session[];
  body: string;
};

type Step = {
  title: string;
  /** 日程が決まっているものだけ出す。選考のように日付を持たない段階では省く */
  status?: string;
  body?: string;
  /**
   * 並行して開催するもの。一方だけに参加する人がいるため、順番のある段階と
   * して縦に積まず、同じ番号のもとに横に並べて対等に見せる。
   */
  items?: FlowItem[];
};

const steps: Step[] = [
  {
    title: "サークルオリエンテーション",
    status: ORIENTATION.date,
    body: `${ORIENTATION.place}でお待ちしています。ゼミ生が活動の内容と雰囲気を直接ご紹介します。`,
  },
  {
    title: "説明会・政策立案ワークショップ",
    items: [
      {
        title: "説明会",
        time: BRIEFING.time,
        sessions: BRIEFING.sessions,
        body: "活動の内容と、入ゼミまでの流れを詳しくご説明します。軽食もご用意しています。",
      },
      {
        title: "政策立案ワークショップ",
        time: WORKSHOP.time,
        sessions: WORKSHOP.sessions,
        body: "実際に手を動かして政策を考えるプロセスを体験できる企画です。",
      },
    ],
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

          {step.status ? (
            <p className="mt-2 pl-9 text-sm font-semibold text-ink md:text-base">{step.status}</p>
          ) : null}

          {step.body ? (
            <p className="mt-2 pl-9 text-sm leading-jp-body text-ink/75 md:text-base">
              {step.body}
            </p>
          ) : null}

          {step.items ? (
            <div className="mt-4 grid grid-cols-1 gap-x-8 gap-y-6 pl-9 sm:grid-cols-2">
              {step.items.map((item) => (
                <div key={item.title} className="border-t border-ink/15 pt-4">
                  <h4 className="text-sm font-semibold leading-jp-heading text-ink md:text-base">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-sm font-semibold text-ink">{item.time}</p>
                  {item.sessions.map((session) => (
                    <p key={session.date} className="text-sm font-semibold text-ink">
                      {session.date} @{session.place}
                    </p>
                  ))}
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
