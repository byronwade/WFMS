import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Fieldra - Field Management Software",
	description: "Affordable, feature-rich field management software for businesses.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="min-h-screen bg-gray-50">
					<nav className="bg-white border-b border-gray-200">
						<div className="container mx-auto px-4 py-3">
							<div className="flex items-center justify-between">
								<div className="text-xl font-bold">Fieldra</div>
								<div className="space-x-4">
									<a href="/customers" className="text-gray-600 hover:text-gray-900">
										Customers
									</a>
									<a href="/jobs" className="text-gray-600 hover:text-gray-900">
										Jobs
									</a>
									<a href="/invoices" className="text-gray-600 hover:text-gray-900">
										Invoices
									</a>
									<a href="/settings" className="text-gray-600 hover:text-gray-900">
										Settings
									</a>
								</div>
							</div>
						</div>
					</nav>
					<main>{children}</main>
				</div>
			</body>
		</html>
	);
}
