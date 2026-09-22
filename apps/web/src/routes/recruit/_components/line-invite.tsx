import LineButton from "@/shared/_components/line-button";

/**
 * 新歓ページの主要な導線。
 *
 * 説明会と政策立案ワークショップは開催が決まっている一方で日程が未確定なので、
 * 「決まり次第ここで知らせる」ことを友だち追加の理由として前に出す。
 */
export default function LineInvite() {
  return (
    <div className="rounded-2xl bg-ink/[0.04] p-6 md:p-8">
      <h2 className="text-xl font-bold leading-jp-heading text-ink md:text-2xl">
        説明会・ワークショップの日程は公式LINEでお知らせします
      </h2>
      <p className="mt-4 text-base leading-jp-body text-ink/80">
        説明会と政策立案ワークショップは開催が決まっていますが、日程は現在調整中です。
        確定し次第、公式LINEでいちばんにお知らせします。
        サークルオリエンテーションに来られない方も、まずは友だち追加をしておいてください。
      </p>

      <div className="mt-8">
        <LineButton />
      </div>

      <p className="mt-4 text-sm leading-jp-body text-ink/70">
        友だち追加だけで大丈夫です。入ゼミを決めていなくても構いません。
        活動について聞きたいことがあれば、そのままトークでお送りください。
      </p>
    </div>
  );
}
