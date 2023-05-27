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
  const status = useSelector(store => store?.user?.status);
  const userPosts = useSelector(store => store?.userPosts.userPosts);
  const statusUserPosts = useSelector(store => store?.userPosts.status);
  const userError = useSelector(store => store?.errors.userError);
  const userPostsError = useSelector(store => store?.errors.userPostsError);
  
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
        status === null && userError === ''
          ? <Spinner animation="border" role="status" className="mx-auto d-flex" size="xs">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          : !user || user.length === 0
            ? userError && <h2>{userError}</h2>
            : <div className="my-5">
              <Card style={{maxWidth: '32rem'}} className="mb-3 py-2">
                <Card.Img variant="top" src="/img/photo.svg" width="150px" height="150px"/>
                <Card.Body className="text-center">
                  <Card.Title>{user.name || 'No name'} {user.username || 'No user name'}</Card.Title>
                  <Card.Text>
                    email: <Card.Link href={`mailto:${user.email || ''}`}>{user.email || 'No email'}</Card.Link>
                  </Card.Text>
                  <Card.Text>
                    phone: <Card.Link href={`tel:${user.phone || ''}`}>{user.phone || 'No phone'}</Card.Link>
                  </Card.Text>
                  <Card.Text>
                    website: <Card.Link href={`https://${user.website || ''}`}
                                        target="_blank">{user.website || 'No website'}</Card.Link>
                  </Card.Text>
                </Card.Body>
              </Card>
              {
                statusUserPosts === null && userPostsError === ''
                  ? <Spinner animation="border" role="status" className="d-block mx-auto" size="sm">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                  : !userPosts || userPosts.length === 0
                    ? userPostsError ? <h2>{userPostsError}</h2> : null
                    : <ListGroup variant="flush">
                      {
                        userPosts.map((post) => (
                          <Post post={post} key={post.id} link={false}/>
                        ))
                      }
                    </ListGroup>
              }
            </div>
      }
    </>
  );
};