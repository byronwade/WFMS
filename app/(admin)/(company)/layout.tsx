import { CompanySidebar } from "@/components/admin/company-sidebar";

export default function CompanyAdminLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex h-screen bg-gray-100">
			<CompanySidebar />
			<main className="flex-1 overflow-y-auto">
				<div className="container mx-auto px-6 py-8">{children}</div>
			</main>
		</div>
	);
}
