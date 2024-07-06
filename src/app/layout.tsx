import type { Metadata } from "next";

import { Inter } from "next/font/google";
import "./globals.css";
import "@/styles/loading.css";
import StoreProvider from "./store/store-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Main from "@/components/main";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "AI Text to Image Generator",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Header />

				<StoreProvider>
					<Main>{children}</Main>
				</StoreProvider>

				<Footer />
			</body>
		</html>
	);
}
