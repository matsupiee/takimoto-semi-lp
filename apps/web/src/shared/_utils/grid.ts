// 要素数より多いカラムを宣言すると、埋まらないカラムがそのまま右側の空白になる。
// 件数に追従したカラム数を返して、少数のときに右が間延びしないようにする。
//
// Tailwind はクラス名を静的に走査するため、文字列連結でクラスを組み立てず
// 完全なクラス名のルックアップ表として持つこと。

const COLS_2: Record<number, string> = {
  1: "md:grid-cols-1",
  2: "md:grid-cols-2",
};

const COLS_3: Record<number, string> = {
  1: "md:grid-cols-1",
  2: "md:grid-cols-2",
  3: "md:grid-cols-2 lg:grid-cols-3",
};

// カラム数を減らしただけだと、今度は少数の要素が横に間延びして中身がスカスカになる。
// 1枚あたりの幅がおおよそ一定に収まるよう、件数に応じた上限幅もあわせて持たせる。
const MAX_WIDTH_3: Record<number, string> = {
  1: "max-w-sm",
  2: "max-w-2xl",
  3: "",
};

/**
 * 要素数と上限カラム数から、md 以上のグリッドカラムクラスを返す。
 * 要素が上限以上なら上限のクラスを返す。
 */
export function gridColsForCount(count: number, max: 2 | 3): string {
  const table = max === 2 ? COLS_2 : COLS_3;
  return table[columnsFor(count, max)] ?? table[max];
}

/**
 * 上限ちょうど+1件のときは、最終行に1枚だけ残って右に大きな穴が空く
 * （3カラムに4件 = 3 + 1）。この件数のときだけカラムを1つ減らして
 * 2 + 2 に割り、行を埋める。件数が増えれば穴は相対的に目立たなくなるため
 * 上限まで使う。
 */
function columnsFor(count: number, max: number): number {
  if (count === max + 1) return max - 1;
  return clamp(count, max);
}

/**
 * 要素数が上限に満たないときに、グリッド全体を抑える上限幅クラスを返す。
 * 上限に達していれば空文字（幅を制限しない）。
 */
export function gridMaxWidthForCount(count: number, max: 3): string {
  return MAX_WIDTH_3[clamp(count, max)] ?? "";
}

function clamp(count: number, max: number): number {
  return Math.min(Math.max(count, 1), max);
}
