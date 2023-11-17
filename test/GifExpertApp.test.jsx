import { render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe('test on GifExpertApp', () => { 
    test('should render initial state', () => { 
        render(<GifExpertApp />);
        screen.debug()
     })
 })