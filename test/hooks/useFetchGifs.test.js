import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe("test on useFetchGifs", () => {
  test("should return initial state", () => {
    const { result } = renderHook(() => useFetchGifs("Death Note"));
    const { images, isLoading } = result.current;
    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test("should return getImages", async () => {
    const { result } = renderHook(() => useFetchGifs("Death Note"));
    await waitFor(
      () => expect(result.current.images.length).toBeGreaterThan(0),
      { timeout: 1000 }
    );
    const { images, isLoading } = result.current;
    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
