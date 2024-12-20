import { Suspense } from "react";
import { unstable_cache } from "next/cache";
import { Card } from "@/components/ui/card";

// Simulated data fetching with caching
const getCompanyStats = unstable_cache(
	async () => {
		// This would normally fetch from a database
		return {
			totalCustomers: 150,
			activeJobs: 25,
			pendingInvoices: 10,
			monthlyRevenue: 45000,
		};
	},
	["company-stats"],
	{
		revalidate: 60,
		tags: ["company-stats"],
	}
);

export default async function CompanyDashboard() {
	const stats = await getCompanyStats();

	return (
		<div className="space-y-6">
			<h1 className="text-3xl font-bold">Company Dashboard</h1>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				<Card className="p-6">
					<h3 className="text-sm font-medium text-gray-500">Total Customers</h3>
					<p className="mt-2 text-3xl font-semibold">{stats.totalCustomers}</p>
				</Card>

				<Card className="p-6">
					<h3 className="text-sm font-medium text-gray-500">Active Jobs</h3>
					<p className="mt-2 text-3xl font-semibold">{stats.activeJobs}</p>
				</Card>

				<Card className="p-6">
					<h3 className="text-sm font-medium text-gray-500">Pending Invoices</h3>
					<p className="mt-2 text-3xl font-semibold">{stats.pendingInvoices}</p>
				</Card>

				<Card className="p-6">
					<h3 className="text-sm font-medium text-gray-500">Monthly Revenue</h3>
					<p className="mt-2 text-3xl font-semibold">${stats.monthlyRevenue.toLocaleString()}</p>
				</Card>
			</div>

			{/* Add more dashboard components here */}
		</div>
	);
}
