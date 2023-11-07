import { describe, expect, test } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useItems } from "../hooks/useItems";

describe("useItems hooks ", () => {
  test("should add and remove items", () => {
    const { result } = renderHook(() => useItems());
    expect(result.current.elements).toEqual([]);

    act(() => {
      result.current.addItem("jueguito");
    });
    expect(result.current.elements.length).toBe(1);

    act(() => {
      result.current.deleteItem(result.current.elements[0].uuid);
    });
    expect(result.current.elements.length).toBe(0);
  });
});
