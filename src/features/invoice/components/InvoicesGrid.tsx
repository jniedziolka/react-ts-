import { TableGrid } from '@/components/Table/TableGrid';
import { usePaginatedInvoices } from '../api/getInvoices';

export function InvoicesGrid() {
  return (
    <TableGrid
      paginatedQuery={usePaginatedInvoices}
      columns={[
        {
          title: 'Id',
          field: 'id',
        },
        {
          title: 'Number',
          field: 'number',
        },
        {
          title: 'Medium Type',
          field: 'medium_type_id',
        },
        {
          title: 'Cost',
          field: 'cost',
        },
      ]}
    />
  );
}
