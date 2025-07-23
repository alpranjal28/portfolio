import { render, screen } from "@testing-library/react";
import Homepage from "../src/app/page";

// Mock the framer-motion module
jest.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
  },
}));

// mock next/image
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props) => (
    <img {...props} priority={props.priority ? "true" : undefined} />
  ),
}));

// Mock the next/link component
jest.mock("next/link", () => ({
  __esModule: true,
  default: ({ children, href }) => <a href={href}>{children}</a>,
}));

describe("Homepage", () => {
  it("renders the homepage correctly", () => {
  render(<Homepage />);

  // main heading - check for heading element and key parts of text
  expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  expect(screen.getByText(/Crafting/)).toBeInTheDocument();
  expect(screen.getByText(/Scalable/)).toBeInTheDocument();
  expect(screen.getByText(/Solutions/)).toBeInTheDocument();
  expect(screen.getByText(/Code/)).toBeInTheDocument();

  // introduction text - use a partial match
  expect(
    screen.getByText(/Hello! I'm Pranjal, a full-stack web developer passionate about/)
  ).toBeInTheDocument();

  // Check for navigation links
  expect(screen.getByText("view my work")).toBeInTheDocument();
  expect(screen.getByText("contact me")).toBeInTheDocument();
  expect(screen.getByText("About Me")).toBeInTheDocument();

  const heroImage = screen.getByAltText("image");
  expect(heroImage).toBeInTheDocument();
  expect(heroImage).toHaveAttribute("src", "/hero.png");
});

});
