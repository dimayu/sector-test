import './TableRow.scss';

export const TableRow = ({ id, title, body }) => {
  return (
    <div className="table__row">
      <div className="table__row__item">{id}</div>
      <div className="table__row__item">
        {title}
      </div>
      <div className="table__row__item">
        {body}
      </div>
    </div>
  );
};
