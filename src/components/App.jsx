import { Route, Routes } from 'react-router-dom';
// import { SharedLayout } from './SharedLayout/SharedLayout';
// import { Outlet } from 'react-router-dom';
import { Container, Logo, Header, Link } from './App.styled';
import { Home } from '../pages/Home/Home';
import { Movies } from '../pages/Movies/Movies';

export const App = () => {
  return (
    <>
      <Container>
        <Header>
          <nav>
            <Link to="/" end>
              Home
            </Link>
            <Link to="/movies">Movies</Link>
            {/* <Link to="/products">Products</Link> */}
          </nav>
          <Logo>
            <span role="img" aria-label="movie icon">
              🎬
            </span>{' '}
            Movie Room
          </Logo>
        </Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />}>
            {/* <Route path="mission" element={<Mission />} />
            <Route path="team" element={<Team />} />
            <Route path="reviews" element={<Reviews />} /> */}
          </Route>
          {/* <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} /> */}
        </Routes>
      </Container>
    </>
  );
};
