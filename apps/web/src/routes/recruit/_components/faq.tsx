type Item = {
  question: string;
  answer: string;
};

/**
 * 新入生が入ゼミを決める前に必ず気にする点をまとめる。
 *
 * 選考の有無は隠さず最初に置く。あとから知らせると、時間を使ってもらったあとで
 * 前提が変わることになり、来てくれた人に対して不誠実になる。
 */
const items: Item[] = [
  {
    question: "選考はありますか？",
    answer:
      "あります。入ゼミにあたっては選考を実施しています。形式や時期は決まり次第、公式LINEでお知らせします。",
  },
  {
    question: "費用はかかりますか？",
    answer: "かかりません。参加費や会費はいただいていません。",
  },
  {
    question: "他のサークルや部活との掛け持ちはできますか？",
    answer: "できます。他の活動と掛け持ちしているメンバーもいます。",
  },
  {
    question: "東京大学の学生でなくても参加できますか？",
    answer:
      "参加できます。インカレの自主ゼミなので、東京大学以外の大学に通うメンバーも在籍しています。",
  },
  {
    question: "政策や研究の経験がなくても大丈夫ですか？",
    answer:
      "大丈夫です。経験は問いません。リサーチや政策立案の進め方は、活動のなかで身につけていけます。",
  },
];

export default function Faq() {
  return (
    <dl className="border-t border-ink/15">
      {items.map((item) => (
        <div key={item.question} className="border-b border-ink/15 py-5">
          <dt className="text-base font-semibold leading-jp-heading text-ink md:text-lg">
            {item.question}
          </dt>
          <dd className="mt-2 text-sm leading-jp-body text-ink/75 md:text-base">{item.answer}</dd>
        </div>
      ))}
    </dl>
  );
}
