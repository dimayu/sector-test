import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Card, Spinner, ListGroup, Button } from 'react-bootstrap';

import { Post } from '../../Components/index';
import { getUser, getUserPosts } from '../../Redux/Actions/ActionCreator';

import './User.scss';

export const User = () => {
  const param = useParams();
  const id = param.id;
  const navigate = useNavigate();
  
  const dispatch = useDispatch();
  const user = useSelector(store => store?.user?.user);
  const loaded = useSelector(store => store?.user?.loaded);
  const userPosts = useSelector(store => store?.userPosts.userPosts);
  
  useEffect(() => {
    
    dispatch(getUser(id));
    dispatch(getUserPosts(id));
  }, [id]);
  
  return (
    <>
      <Button variant="outline-secondary mt-4"
              size="sm"
              onClick={() => navigate(-1)}
      >
        Back
      </Button>
      {
        loaded
          ? <div className="my-5">
            <Card style={{width: '32rem'}} className="mb-3 py-2">
              <Card.Img variant="top" src="/img/photo.svg" width="150px" height="150px"/>
              <Card.Body className="text-center">
                <Card.Title>{user.name} {user.username}</Card.Title>
                <Card.Text>
                  email: <Card.Link href={`mailto:${user.email}`}>{user.email}</Card.Link>
                </Card.Text>
                <Card.Text>
                  phone: <Card.Link href={`tel:${user.phone}`}>{user.phone}</Card.Link>
                </Card.Text>
                <Card.Text>
                  website: <Card.Link href={`https://${user.website}`} target="_blank">{user.website}</Card.Link>
                </Card.Text>
              </Card.Body>
            </Card>
            <ListGroup variant="flush">
              {
                loaded
                  ? userPosts.map((post) => (
                    <Post post={post} key={post.id} link={false}/>
                  ))
                  : <Spinner animation="border" role="status" className="d-block mx-auto" size="sm">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
              }
            </ListGroup>
          </div>
          : <Spinner animation="border" role="status" className="d-block mx-auto" size="xs">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
      }
    </>
  );
};