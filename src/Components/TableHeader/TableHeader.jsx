import { useDispatch, useSelector } from "react-redux";

import { sortByTitle, sortById, sortByDesc } from '../../Redux/PostsSlice';
import { TableHeaderItem } from '../../Components';

import './TableHeader.scss';

export const TableHeader = () => {
  const dispatch = useDispatch();
  const byTitle = useSelector(state => state.posts.byTitle);
  const byId = useSelector(state => state.posts.byId);
  const byDesc = useSelector(state => state.posts.byDesc);
  
  return (
    <div className="table__header">
      <TableHeaderItem
        clickHandle={() => dispatch(sortById())}
        title="Сортировать по возрастанию"
        text="ID"
        isActive={byId}
      />
      <TableHeaderItem
        clickHandle={() => dispatch(sortByTitle())}
        title="Сортировать по алфавиту"
        text="Заголовок"
        isActive={byTitle}
      />
      <TableHeaderItem
        clickHandle={() => dispatch(sortByDesc())}
        title="Сортировать по алфавиту"
        text="Описание"
        isActive={byDesc}
      />
    </div>
  );
};
