
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import { Providers } from '@/app/providers';
const font = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "JoyfulAPI",
	description: "JoyfulAPI - email outreach made easy!",
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={font.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange>
					<SupabaseProvider>
						<UserProvider><Providers>{children}</Providers></UserProvider>
					</SupabaseProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
