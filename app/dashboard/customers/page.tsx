import { fetchFilteredCustomers } from "@/app/lib/data";
import { FormattedCustomersTable } from "@/app/lib/definitions";
import CustomersTable from "@/app/ui/customers/table";
import { InvoicesTableSkeleton } from "@/app/ui/skeletons";
import { Suspense } from "react";

export default async function CustomerPage({ searchParams }: { searchParams?: { query?: string; page?: string } }) {
    const query = searchParams?.query || '';
  
    const customers = await fetchFilteredCustomers(query);
  
    return (
        <div className="w-full">
            <Suspense fallback={<InvoicesTableSkeleton />}>
           <CustomersTable  customers={customers}/>
            </Suspense>
        </div>
    );
}