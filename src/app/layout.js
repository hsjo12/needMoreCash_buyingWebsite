import Provider from "@/components/provider/provider";
import "./globals.css";
import { Inter } from "next/font/google";

import { Black_Ops_One, Rammetto_One, Roboto_Slab } from "next/font/google";
import Header from "@/components/layout/header";
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const black_ops_one = Black_Ops_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--black_ops_one",
});
const rammetto_One = Rammetto_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--rammetto_One",
});

const roboto_Slab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--roboto_Slab",
});

const cls = (...classnames) => {
  return classnames.join(" ");
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cls(
          black_ops_one.variable,
          rammetto_One.variable,
          roboto_Slab.variable
        )}
      >
        <Provider>
          <Header>{children}</Header>
        </Provider>
      </body>
    </html>
  );
}
