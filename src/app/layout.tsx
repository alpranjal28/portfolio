import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Bounce, ToastContainer } from "react-toastify";
import { Cursor } from "@/components/cursor";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  fallback: ["system-ui", "arial"],
});
// const googleAnalyticsId = process.env.GOOGLE_ANALYTICS_ID as string;

export const metadata: Metadata = {
  title: "Portfolio | Pranjal",
  description: "Thanks to Lama.Dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer
          position="bottom-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Bounce}
        />
        <Cursor />
        <TransitionProvider>{children}</TransitionProvider>
        <GoogleAnalytics gaId="G-7ELZ2SBZKF" />
      </body>
    </html>
  );
}
