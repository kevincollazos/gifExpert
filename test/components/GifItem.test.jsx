import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("test GifItem", () => {
    const title = 'South park';
    const url = 'https://south-park.com/stand.jpg';
  
    test("should show img and alt", () => {
    render(<GifItem title={title} url={url} />);
    const {src, alt} = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test('should show title component', () => { 
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title).innerHTML).toBe(title);
   })
});
