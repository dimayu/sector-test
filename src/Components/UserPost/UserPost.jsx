import { ListGroup } from 'react-bootstrap';

import './UserPost.scss';

export const UserPost = ({comment}) => {
  return (
      <ListGroup.Item>
        <h5>{comment.email}</h5>
        <p>{comment.body}</p>
      </ListGroup.Item>
  );
};