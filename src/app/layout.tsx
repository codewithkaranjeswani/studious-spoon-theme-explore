// import { Inter } from "next/font/google";
import { Providers } from "@/src/app/providers";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Theme App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <body className={inter.className}> */}
      <body className="bg-slate-300 dark:bg-slate-800">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
