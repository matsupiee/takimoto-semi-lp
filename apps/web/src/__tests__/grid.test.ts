import { describe, expect, it } from "vitest";

import { gridColsForCount, gridMaxWidthForCount } from "@/shared/_utils/grid";

describe("gridColsForCount", () => {
  it("要素数に追従したカラム数を返す", () => {
    expect(gridColsForCount(1, 3)).toBe("md:grid-cols-1");
    expect(gridColsForCount(2, 3)).toBe("md:grid-cols-2");
    expect(gridColsForCount(3, 3)).toBe("md:grid-cols-2 lg:grid-cols-3");
  });

  it("上限を超えた件数では上限のカラム数で頭打ちにする", () => {
    expect(gridColsForCount(12, 3)).toBe("md:grid-cols-2 lg:grid-cols-3");
    expect(gridColsForCount(12, 2)).toBe("md:grid-cols-2");
  });

  it("上限+1件のときは孤児が出ないようカラムを1つ減らす", () => {
    // 3カラムに4件だと 3 + 1 で最終行に1枚だけ残る。2カラムなら 2 + 2 で埋まる
    expect(gridColsForCount(4, 3)).toBe("md:grid-cols-2");
    expect(gridColsForCount(3, 2)).toBe("md:grid-cols-1");
  });

  it("件数が増えたら孤児より情報量を優先して上限まで使う", () => {
    expect(gridColsForCount(5, 3)).toBe("md:grid-cols-2 lg:grid-cols-3");
    expect(gridColsForCount(7, 3)).toBe("md:grid-cols-2 lg:grid-cols-3");
  });

  it("0件や負数でも壊れず1カラムを返す", () => {
    expect(gridColsForCount(0, 3)).toBe("md:grid-cols-1");
    expect(gridColsForCount(-1, 3)).toBe("md:grid-cols-1");
  });
});

describe("gridMaxWidthForCount", () => {
  it("件数が少ないときは上限幅を返し、1枚が横に間延びしないようにする", () => {
    expect(gridMaxWidthForCount(1, 3)).toBe("max-w-sm");
    expect(gridMaxWidthForCount(2, 3)).toBe("max-w-2xl");
  });

  it("上限カラム数に達したら幅を制限しない", () => {
    expect(gridMaxWidthForCount(3, 3)).toBe("");
    expect(gridMaxWidthForCount(20, 3)).toBe("");
  });
});
