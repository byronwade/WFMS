import Link from "next/link";

export default async function HomePage() {
	return (
		<div className="container mx-auto py-6">
			<h1 className="text-3xl font-bold mb-6">Welcome to Fieldra</h1>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{/* Quick Access Cards */}
				<Link href="/customers" className="p-6 bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
					<h2 className="text-xl font-semibold mb-2">Customers</h2>
					<p className="text-gray-600">Manage your customer database</p>
				</Link>

				<Link href="/jobs" className="p-6 bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
					<h2 className="text-xl font-semibold mb-2">Jobs</h2>
					<p className="text-gray-600">Track and manage field jobs</p>
				</Link>

				<Link href="/invoices" className="p-6 bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
					<h2 className="text-xl font-semibold mb-2">Invoices</h2>
					<p className="text-gray-600">Handle billing and payments</p>
				</Link>
			</div>
		</div>
	);
}
