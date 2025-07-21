import { render, screen } from "@testing-library/react";
import PortfolioPage from "../src/app/portfolio/page";

describe("PortfolioPage", () => {
  it("renders the portfoliopage correctly", () => {
    render(<PortfolioPage />);

    //check heading
    expect(screen.getByText("My Works")).toBeInTheDocument();

    //project titles
    expect(screen.getByText("Draw.app")).toBeInTheDocument();
    expect(screen.getByText("Portfolio 2")).toBeInTheDocument();
    expect(screen.getByText("Multistep Form")).toBeInTheDocument();
    expect(screen.getByText("Airbnb clone")).toBeInTheDocument();
    expect(screen.getByText("Food App")).toBeInTheDocument();
    expect(screen.getByText("Car Showcase")).toBeInTheDocument();
    expect(screen.getByText("Spotify Clone")).toBeInTheDocument();

    // Check for "Visit Project" links
    const visitLinks = screen.getAllByText("Visit Project");
    expect(visitLinks).toHaveLength(7); // Should have 7 projects

    // Check for the footer section
    expect(screen.getByText("Do you have a project ?")).toBeInTheDocument();
    expect(screen.getByText("Hire Me")).toBeInTheDocument();

    // Check for the circular text
    expect(
      screen.getByText("Full-stack, Typescript, MERN, Next.js,")
    ).toBeInTheDocument();
  });
});
