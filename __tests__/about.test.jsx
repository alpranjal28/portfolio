import { screen, render } from "@testing-library/react";
import AboutPage from "../src/app/about/page";

// mock next/image
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props) => (
    <img {...props} priority={props.priority ? "true" : undefined} />
  ),
}));

// Mock the components
jest.mock("@/components/brain", () => ({
  __esModule: true,
  default: () => <div>Brain Component</div>,
}));

jest.mock("@/components/coffee", () => ({
  Coffee: () => <div>Coffee Component</div>,
}));

jest.mock("@/components/coffeeCode", () => ({
  CoffeeCode: () => <div>CoffeeCode Component</div>,
}));

// Mock framer-motion
jest.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
    h2: ({ children, ...props }) => <h2 {...props}>{children}</h2>,
    svg: ({ children, ...props }) => <svg {...props}>{children}</svg>,
  },
  useInView: () => true,
  useScroll: () => ({ scrollYProgress: { current: 0 } }),
}));

describe("AboutPage", () => {
  it("renders the aboutpage correctly", () => {
    render(<AboutPage />);

    // renders heading
    expect(screen.getByText("BIOGRAPHY")).toBeInTheDocument();
    expect(screen.getByText("SKILLS")).toBeInTheDocument();
    expect(screen.getByText("EXPERIENCES SO FAR")).toBeInTheDocument();

    // Check for biography content
    expect(
      screen.getByText(/With an M.Sc. in Plant Biotechnology/i)
    ).toBeInTheDocument();

    // Check for quote
    expect(
      screen.getByText(/"To lose patience is to lose the battle." - MK Gandhi/i)
    ).toBeInTheDocument();

    // Check for experience items
    expect(screen.getByText("Building projects")).toBeInTheDocument();
    expect(screen.getByText("Web Developer")).toBeInTheDocument();
    expect(screen.getByText("Delta 2.0 by Apna College")).toBeInTheDocument();

    // Check for CoffeeCode component
    expect(screen.getByText("CoffeeCode Component")).toBeInTheDocument();
  });
});
