import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Container, Logo, Header, Link } from './SharedLayout.styled';

const SharedLayout = () => {
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
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
