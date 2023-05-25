import { useState, useEffect } from 'react';

import { Form } from 'react-bootstrap';

import './Sort.scss';

export const Sort = ({value}) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    value(checked);
  }, [checked]);
  
  const changeCheckbox = () => {
    setChecked(!checked);
  }
  
  return (
    <Form.Group className="my-3" controlId="formGroupSearch">
      <Form.Check
        type="checkbox"
        id="default-checkbox"
        label="Сортировать по названию"
        onChange={changeCheckbox}
      />
    </Form.Group>
  );
};