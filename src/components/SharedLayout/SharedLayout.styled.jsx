import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1660px;
  margin: auto;
  max-width: 100%;
`;

export const Header = styled.header`
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0 2rem;
  height: 4rem;

  > nav {
    display: flex;
    gap: 15px;
  }
`;

export const Logo = styled.p`
  font-weight: 700;
  margin: 0;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: #301934;
  }
`;
