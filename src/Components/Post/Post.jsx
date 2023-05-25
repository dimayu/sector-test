import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Col, Button, Collapse, Spinner, ListGroup } from 'react-bootstrap';

import { getComments } from '../../Redux/Actions/ActionCreator';
import { Comment } from '../Comment';

import './Post.scss';

export const Post = ({post}) => {
  const [open, setOpen] = useState(false);
  
  const comments = useSelector(store => store?.comments?.comments);
  const loaded = useSelector(store => store?.comments?.loaded);
  const dispatch = useDispatch();
  
  const handleClick = async (id) => {
    setOpen(!open);
    if (comments.length === 0) {
      dispatch(getComments(id));
    }
    console.log(id);
    console.log(post.id);
  }
  
  return (
    <Col className="post my-2 rounded border border-dark-subtle p-4" sm={12}>
      <h3 className="post__title">
        {post.title}
      </h3>
      <p className="post__text">{post.body}</p>
      <a href="#" className="post__img w-25">
        <img src="/img/photo.svg" alt="user" width="50px" height="50px"/>
      </a>
      <Button variant="outline-secondary mx-4"
              size="sm"
              onClick={() => handleClick(post.id)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
      >
        Комментарии
      </Button>
      <Collapse in={open} className="mt-4">
        <ListGroup id="example-collapse-text" variant="flush">
          {
            loaded
              ? comments.map((comment) => (
                comment.postId === post.id && <Comment comment={comment} key={comment.id} id={post.id}/>
              ))
              : <Spinner animation="border" role="status" className="mx-auto" size="sm">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          }
        </ListGroup>
      </Collapse>
    </Col>
  );
};