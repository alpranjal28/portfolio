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

    // main heading
    expect(
      screen.getByText("Crafting Digital Experiences, Designing Tomorrow")
    ).toBeInTheDocument();

    // introduction text
    expect(
      screen.getByText(
        "Hello! I'm Pranjal, an aspiring full-stack web developer enthusiastic about crafting digital experiences. Specializing in the MERN (MongoDB, Express.js, React, Node.js) stack, I bring a passion for clean coding and user-centric solutions. Explore my portfolio to see projects that reflect my commitment to turning ideas into impactful web applications. Let's connect and explore the possibilities of working together!"
      )
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
