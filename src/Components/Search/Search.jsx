import { useState, useEffect } from 'react';

import { Form } from 'react-bootstrap';

import './Search.scss';

export const Search = ({ value }) => {
  const [valueSearch, setValueSearch] = useState('');
  
  useEffect(() => {
    value(valueSearch);
  }, [valueSearch]);
  
  return (
    <Form.Group className="my-3 w-100" controlId="formGroupSearch">
      <Form.Label>Поиск по заголовку поста</Form.Label>
      <Form.Control
        type="search"
        placeholder="Введите название поста"
        onChange={(e) => setValueSearch(e.target.value)}
      />
    </Form.Group>
  );
};