import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import IntlProvider from "@/components/IntlProvider";

const inter = Inter({ subsets: ["latin"] });
import useTranslations from "@/hooks/use-translations";

export const metadata = {
  title: {
    default: "Snowbreak: Containment Zone Homepage",
    template: "%s | Snowbreak: Containment Zone",
  },
  description: "Snowbreak: Containment Zone Tetris Tools",
};

export default async function RootLayout({ children, params }) {
  const { messages, common } = await useTranslations(
    params.lang,
    "snowbreak",
    "layout"
  );
  return (
    <html>
      <IntlProvider locale={params.lang} messages={messages} common={common}>
        <body className={inter.className}>
          <div className="container">
            <Navbar />
            {children}
            <Footer />
          </div>
        </body>
      </IntlProvider>
    </html>
  );
}
