import LineButton from "@/shared/_components/line-button";

import { ENTRY_FORM_URL } from "../_utils/season";

/**
 * 新歓ページの主要な導線。
 *
 * 説明会と政策立案ワークショップの日程が決まったので、申し込みフォームを先に置き、
 * 公式LINEは質問や当日の連絡を受ける窓口として後に続ける。
 *
 * 枠の扱いは contact ページの LineCta と揃える。同じ公式LINEへの導線が
 * ページごとに違う見た目になると、サイトとして一貫しなくなる。
 */
export default function LineInvite() {
  return (
    <div className="border-t border-ink/15 pt-8">
      <h2 className="text-xl font-semibold leading-jp-heading text-ink md:text-2xl">
        {/* スマホ幅で「み」だけが次の行に落ちないよう、意味の切れ目でだけ折り返す */}
        <span className="inline-block">説明会・ワークショップの</span>
        <span className="inline-block">お申し込み</span>
      </h2>
      <p className="mt-4 text-base leading-jp-body text-ink/80">
        日程は下の「秋新歓の流れ」をご覧ください。参加したい回をフォームからお申し込みください。
        サークルオリエンテーションに来られなかった方も参加できます。
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href={ENTRY_FORM_URL}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3 text-[15px] font-medium text-white transition hover:bg-brand/90"
        >
          申し込みフォームを開く
        </a>
        <LineButton />
      </div>

      <p className="mt-4 text-sm leading-jp-body text-ink/70">
        公式LINEは友だち追加だけで大丈夫です。入ゼミを決めていなくても構いません。
        活動について聞きたいことがあれば、そのままトークでお送りください。
      </p>
    </div>
  );
}
