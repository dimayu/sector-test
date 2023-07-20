import './TableHeaderItem.scss';

export const TableHeaderItem = ({title}) => {
  
  return (
    <div className="table__header__item">
      <span>{title}</span>
      <img src="/img/arrow.svg" alt="arrow" width="12" height="6"/>
    </div>
  );
};
