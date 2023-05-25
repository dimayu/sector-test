import { Container } from 'react-bootstrap';

import { Posts } from '../../Components/index';

import './PageHome.scss';


export const PageHome = () => {
  return (
    <Container>
      <Posts/>
    </Container>
  )
}