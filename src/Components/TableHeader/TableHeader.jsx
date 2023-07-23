import { useDispatch } from "react-redux";

import { sortByTitle, sortById, sortByDesc } from '../../Redux/PostsSlice';
import { TableHeaderItem } from '../../Components';

import './TableHeader.scss';

export const TableHeader = () => {
  const dispatch = useDispatch();
  
  return (
    <div className="table__header">
      <TableHeaderItem
        clickHandle={() => dispatch(sortById())}
        title="Сортировать по возрастанию"
        text="ID"
      />
      <TableHeaderItem
        clickHandle={() => dispatch(sortByTitle())}
        title="Сортировать по алфавиту"
        text="Заголовок"
      />
      <TableHeaderItem
        clickHandle={() => dispatch(sortByDesc())}
        title="Сортировать по алфавиту"
        text="Описание"
      />
    </div>
  );
};
