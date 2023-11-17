import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("test on GifGrid", () => {
  const category = "Deku";
  test("should show loading", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });
    render(<GifGrid category={category} />);
    expect(screen.getByText("Cargando ando"));
    expect(screen.getByText(category));
  });

  test("should show items when images are loading", () => {
    const gifs = [
      {
        id: "23",
        title: "Deku",
        url: "https://local/Deku.jpg",
      },
      {
        id: "24",
        title: "Bakugo",
        url: "https://local/Bakugo.jpg",
      },
    ];
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });
    render(<GifGrid category={category} />);
    expect(screen.getAllByRole('img').length).toBe(2);
  });
});
