import { ListGroup } from 'react-bootstrap';

import './Comment.scss';

export const Comment = ({comment}) => {
  return (
      <ListGroup.Item>
        <h5>{comment.email}</h5>
        <p>{comment.body}</p>
      </ListGroup.Item>
  );
};