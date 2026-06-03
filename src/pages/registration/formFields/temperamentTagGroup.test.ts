import { describe, it, expect, vi, beforeEach } from "vitest";
import { toggle } from "./temperamentTagGroup";

describe("TemperamentTagGroup - toggle function", () => {
  let setSelected: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    setSelected = vi.fn();
  });

  it("should add a temperament when it does not exist in the set", () => {
    toggle("Friendly", setSelected as any);

    const updater = setSelected.mock.calls[0][0];
    const result = updater(new Set());

    expect(result.has("Friendly")).toBe(true);
    expect(result.size).toBe(1);
  });

  it("should remove a temperament when it already exists in the set", () => {
    const initialSet = new Set(["Friendly"]);

    toggle("Friendly", setSelected as any);

    const updater = setSelected.mock.calls[0][0];
    const result = updater(initialSet);

    expect(result.has("Friendly")).toBe(false);
    expect(result.size).toBe(0);
  });

  it("should handle multiple toggles correctly", () => {
    let selectedSet = new Set<string>();

    // Primeiro toggle: adiciona "Friendly"
    toggle("Friendly", setSelected as any);
    let updater = setSelected.mock.calls[0][0];
    selectedSet = updater(selectedSet);

    expect(selectedSet.has("Friendly")).toBe(true);

    // Segundo toggle: adiciona "Energetic"
    setSelected.mockClear();
    toggle("Energetic", setSelected as any);
    updater = setSelected.mock.calls[0][0];
    selectedSet = updater(selectedSet);

    expect(selectedSet.has("Energetic")).toBe(true);
    expect(selectedSet.has("Friendly")).toBe(true);

    // Terceiro toggle: remove "Friendly"
    setSelected.mockClear();
    toggle("Friendly", setSelected as any);
    updater = setSelected.mock.calls[0][0];
    selectedSet = updater(selectedSet);

    expect(selectedSet.has("Friendly")).toBe(false);
    expect(selectedSet.has("Energetic")).toBe(true);
    expect(selectedSet.size).toBe(1);
  });

  it("should preserve other items in the set when toggling", () => {
    const initialSet = new Set(["Friendly", "Calm"]);

    toggle("Friendly", setSelected as any);

    const updater = setSelected.mock.calls[0][0];
    const result = updater(initialSet);

    expect(result.has("Friendly")).toBe(false);
    expect(result.has("Calm")).toBe(true);
    expect(result.size).toBe(1);
  });
});
