import { getGifs } from "../../src/service/getGifs";

describe("test on getGifs", () => {
  test("should return gif array", async () => {
    const gifs = await getGifs("South park");
    
    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
