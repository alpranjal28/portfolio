import { render, screen } from "@testing-library/react";
import { Cursor } from "@/components/cursor";
import { useCursorStore } from "@/store/cursorStore";

// Mock zustand store
jest.mock("@/store/cursorStore", () => ({
  useCursorStore: jest.fn()
}));

// Mock framer-motion
jest.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }) => <div data-testid="cursor" {...props}>{children}</div>
  }
}));

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  value: jest.fn().mockImplementation(query => ({
    matches: true,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn()
  }))
});

// Mock Lucide React icons
jest.mock("lucide-react", () => ({
  BookOpen: () => <div>BookOpen</div>,
  BriefcaseBusiness: () => <div>BriefcaseBusiness</div>,
  Clipboard: () => <div>Clipboard</div>,
  Contact: () => <div>Contact</div>,
  ExternalLink: () => <div>ExternalLink</div>,
  House: () => <div>House</div>
}));

// Mock custom icons
jest.mock("@/components/icons", () => ({
  JavaScript: () => <div>JavaScript</div>,
  TypeScript: () => <div>TypeScript</div>,
  Html5: () => <div>Html5</div>,
  Css3: () => <div>Css3</div>,
  NodeJs1: () => <div>NodeJs1</div>,
  Tailwind: () => <div>Tailwind</div>,
  NextJs: () => <div>NextJs</div>,
  Linux: () => <div>Linux</div>,
  Github: () => <div>Github</div>,
  Mongo1: () => <div>Mongo1</div>,
  Postgres: () => <div>Postgres</div>,
  Bootstrap: () => <div>Bootstrap</div>,
  React: () => <div>React</div>,
  Docker: () => <div>Docker</div>,
  Aws: () => <div>Aws</div>,
  Postman: () => <div>Postman</div>,
  Sass: () => <div>Sass</div>,
  Express: () => <div>Express</div>,
  Turborepo: () => <div>Turborepo</div>,
  Git: () => <div>Git</div>,
  MySql: () => <div>MySql</div>,
  Bun: () => <div>Bun</div>,
  AppWrite: () => <div>AppWrite</div>,
  PrismaORM: () => <div>PrismaORM</div>,
  ShadCn: () => <div>ShadCn</div>,
  VsCode: () => <div>VsCode</div>,
  Twilio: () => <div>Twilio</div>,
  WebSocket: () => <div>WebSocket</div>,
  MaterialUi: () => <div>MaterialUi</div>,
  Cloudinary: () => <div>Cloudinary</div>,
  RadixUi: () => <div>RadixUi</div>,
  MotionDev: () => <div>MotionDev</div>
}));

describe("Cursor", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    
    // Set up the store mock with all required properties and functions
    useCursorStore.mockImplementation(() => ({
      position: { x: 0, y: 0 },
      setPosition: jest.fn(),
      showCursor: true,
      setShowCursor: jest.fn(),
      cursorOver: "",
      setCursorOver: jest.fn()
    }));
  });

  it("renders cursor component", () => {
    render(<Cursor />);
    
    const cursor = screen.getByTestId("cursor");
    expect(cursor).toBeInTheDocument();
  });
});
