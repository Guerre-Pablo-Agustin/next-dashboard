import { fetchFilteredCustomers } from "@/app/lib/data";
import CustomersTable from "@/app/ui/customers/table";

export default async function CustomerPage({ searchParams }: { searchParams?: { query?: string; page?: string } }) {
    const query = searchParams?.query || '';
  
    const customers = await fetchFilteredCustomers(query);
  
    return (
        <div className="w-full">
           <CustomersTable  customers={customers}/>
        </div>
    );
}