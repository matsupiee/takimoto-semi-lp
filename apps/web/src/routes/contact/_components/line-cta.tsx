import LineButton from "@/shared/_components/line-button";

export default function LineCta() {
  return (
    <div className="border-t border-ink/15 pt-8">
      <h2 className="text-xl font-semibold text-ink md:text-2xl">公式LINEで受け付けています</h2>
      <p className="mt-4 text-base leading-jp-body text-ink/80">
        下のボタンから友だち追加のうえ、トークにてご用件をお送りください。
        いただいたメッセージは担当者が確認し、順次ご返信いたします。
      </p>

      <div className="mt-8">
        <LineButton />
      </div>

      <p className="mt-4 text-sm text-ink/70">
        パソコンからご覧の場合は、表示されるQRコードをスマートフォンで読み取ってください。
      </p>
    </div>
  );
}
