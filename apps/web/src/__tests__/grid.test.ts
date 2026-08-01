import { describe, expect, it } from "vitest";

import { gridColsForCount } from "@/shared/_utils/grid";

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

  it("0件や負数でも壊れず1カラムを返す", () => {
    expect(gridColsForCount(0, 3)).toBe("md:grid-cols-1");
    expect(gridColsForCount(-1, 3)).toBe("md:grid-cols-1");
  });
});
