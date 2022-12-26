import { Outlet } from 'react-router-dom';
import { Container, Logo, Header, Link } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
        <Logo>
          <span role="img" aria-label="movie icon">
            🎬
          </span>
          MOVIE ROOM
        </Logo>
      </Header>
      <Outlet />
    </Container>
  );
};
