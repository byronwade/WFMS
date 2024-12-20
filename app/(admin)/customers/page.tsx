import { getCustomers } from "@/actions/customers/getCustomers";

export default async function CustomersPage() {
	const customers = await getCustomers();

	return (
		<div className="container mx-auto py-6">
			<h1 className="text-2xl font-bold mb-4">Customers</h1>
			<div className="grid gap-4">
				{customers.map((customer) => (
					<div key={customer.id} className="p-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
						<h2 className="font-semibold">{customer.name}</h2>
						<p className="text-sm text-gray-600">{customer.email}</p>
						<p className="text-sm text-gray-600">{customer.phone}</p>
					</div>
				))}
			</div>
		</div>
	);
}
