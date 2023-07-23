import './TableHeaderItem.scss';

export const TableHeaderItem = ({ clickHandle, title, text }) => {
  return (
    <div
      className="table__header__item"
      onClick={clickHandle}
      title={title}
    >
      <span>{text}</span>
      <img src="/img/arrow.svg" alt="arrow" width="12" height="6"/>
    </div>
  );
};
