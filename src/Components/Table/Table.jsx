import { TableHeader, TableRow } from '../index';

import './Table.scss';

export const Table = () => {
  return (
    <div className="wrapper">
      <div className="table">
        <TableHeader title="ID" />
        <TableRow />
      </div>
    </div>
  );
};
