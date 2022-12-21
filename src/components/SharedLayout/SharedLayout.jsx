import { Outlet } from 'react-router-dom';
import { Container, Logo, Header, Link } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Logo>Find Your Movie</Logo>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          {/* <Link to="/movies">Movies</Link> */}
        </nav>
      </Header>
      <Outlet />
    </Container>
  );
};
