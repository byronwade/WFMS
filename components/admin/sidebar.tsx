"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function Sidebar() {
	const pathname = usePathname();

	const isActive = (path: string) => {
		return pathname.startsWith(path);
	};

	return (
		<div className="w-64 bg-white h-full border-r">
			<div className="flex flex-col h-full">
				<div className="flex items-center justify-center h-16 border-b">
					<span className="text-xl font-bold">Fieldra Admin</span>
				</div>

				<nav className="flex-1 overflow-y-auto">
					<div className="px-4 py-2">
						<h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Navigation</h2>
						<div className="mt-3 space-y-1">
							<Link href="/admin/dashboard" className={cn("flex items-center px-4 py-2 text-sm font-medium rounded-md", isActive("/admin/dashboard") ? "bg-gray-100 text-gray-900" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900")}>
								Dashboard
							</Link>
							<Link href="/admin/customers" className={cn("flex items-center px-4 py-2 text-sm font-medium rounded-md", isActive("/admin/customers") ? "bg-gray-100 text-gray-900" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900")}>
								Customers
							</Link>
							<Link href="/admin/jobs" className={cn("flex items-center px-4 py-2 text-sm font-medium rounded-md", isActive("/admin/jobs") ? "bg-gray-100 text-gray-900" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900")}>
								Jobs
							</Link>
							<Link href="/admin/invoices" className={cn("flex items-center px-4 py-2 text-sm font-medium rounded-md", isActive("/admin/invoices") ? "bg-gray-100 text-gray-900" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900")}>
								Invoices
							</Link>
						</div>
					</div>
				</nav>

				<div className="flex-shrink-0 flex border-t p-4">
					<div className="flex items-center">
						<div>
							<button className="text-sm font-medium text-gray-700 hover:text-gray-900">Sign Out</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
