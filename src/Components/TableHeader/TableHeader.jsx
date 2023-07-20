import './TableHeader.scss';
import { TableHeaderItem } from '../index';

export const TableHeader = () => {
  
  return (
    <div className="table__header">
      <TableHeaderItem title="ID" />
      <TableHeaderItem title="Заголовок" />
      <TableHeaderItem title="Описание" />
    </div>
  );
};
