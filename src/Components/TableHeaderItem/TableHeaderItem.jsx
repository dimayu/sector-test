import './TableHeaderItem.scss';

export const TableHeaderItem = ({ clickHandle, title, text, isActive }) => {
  return (
    <div
      className={isActive ? `table__header__item table__header__item--active` : `table__header__item`}
      onClick={clickHandle}
      title={title}
    >
      <span>{text}</span>
      <img src="/img/arrow.svg"
           alt="arrow" width="12" height="6"
           className="table__header__item__arrow"
      />
    </div>
  );
};
