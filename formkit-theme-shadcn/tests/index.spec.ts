import { describe, expect, it } from "vitest";
import theme from "../src/theme";

describe("theme", () => {
  it("has metadata", () => {
    expect(theme.meta.name).toBe("Starter");
  });
});
