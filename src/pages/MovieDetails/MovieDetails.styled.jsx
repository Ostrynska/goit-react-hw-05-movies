import styled from 'styled-components';

export const Button = styled.button`
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  cursor: pointer;
  color: white;
  border-radius: 7px;
  padding: 0.375rem;
  height: 1.5rem;
  width: auto;
  font-size: 0.75rem;
  background-color: #301934;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    color: #000;
    background-color: #f5f4fa;
    box-shadow: 0px 3px 1px rgb(0 0 0 / 10%), 0px 1px 2px rgb(0 0 0 / 8%),
      0px 2px 2px rgb(0 0 0 / 12%);
  }
`;

export const Main = styled.main`
  padding: 1rem 2rem;
  display: block;
  min-height: 100vh;
  margin: 0px;
`;

export const MovieCard = styled.div`
  margin-top: 1rem;
  display: flex;
  padding: 3rem;
  flex-grow: 1;
  justify-content: center;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
`;

export const MovieImage = styled.img`
  margin-left: 10rem;
  border-radius: 10px;
`;

export const MovieInformation = styled.div`
  display: block;
  margin-left: 3rem;
`;

export const MovieTitle = styled.h2`
  font-size: 4rem;
  line-height: 1;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #301934;
`;

export const Text = styled.p`
  font-size: 1.25rem;
  line-height: 1;
  margin-bottom: 1rem;
  ${'' /* color: #301934; */}
`;
