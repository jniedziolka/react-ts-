import { BaseEntity } from '@/types';
import React from 'react';

export type TableColumn<Entry> = {
  title: string;
  field: keyof Entry;
  Cell?({ entry }: { entry: Entry }): React.ReactElement;
};

type TableProps<Entry> = {
  data: Entry[];
  columns: TableColumn<Entry>[];
};

export function Table<Entry extends BaseEntity>({
  data,
  columns,
}: TableProps<Entry>) {
  return (
    <div className="relative overflow-x-auto">
      <table className="table table-zebra">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={column.title + index}>{column.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((entry, entryIndex) => (
            <tr key={entry?.id || entryIndex}>
              {columns.map(({ Cell, field, title }, columnIndex) => (
                <td key={title + columnIndex}>
                  {Cell ? <Cell entry={entry} /> : `${entry[field]}`}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
