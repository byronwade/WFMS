import { unstable_cache } from "next/cache";

export type Customer = {
	id: string;
	name: string;
	email: string;
	phone: string;
	address: string;
	created_at: string;
	updated_at: string;
};

export const getCustomers = unstable_cache(
	async () => {
		// Simulated data - in a real app this would come from a database
		const customers: Customer[] = [
			{
				id: "1",
				name: "John Doe",
				email: "john@example.com",
				phone: "(555) 555-5555",
				address: "123 Main St",
				created_at: new Date().toISOString(),
				updated_at: new Date().toISOString(),
			},
		];

		return customers;
	},
	["customers"],
	{
		revalidate: 60, // Cache for 60 seconds
		tags: ["customers"],
	}
);
