import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: #e1f1dd;
  border-radius: 0 0 10px 10px;
  height: 75px;
  font-size: 2rem;
`;
export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 4px;
    width: 25px;
    background: #00adb5;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;
export const MenuLink = styled(Link)`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #02475e;
  transition: all 0.3s ease-in;
  font-size: 2rem;
  font-family: 'Girassol', sans-serif;
  &:hover {
    color: #00adb5;
    font-weight: bold;
  }
  a {
    text-decoration: none;
    padding: 1rem 2rem;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    color: #02475e;
    transition: all 0.3s ease-in;
    font-size: 2rem;
    font-family: 'Girassol', sans-serif;
  }
  a:hover {
    color: #00adb5;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    background-color: #e1f1dd;
    border: 1px solid #00adb5;
    border-radius: 10px;
    width: 100%;
  }
`;
export const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ hamburOpen }) => (hamburOpen ? '300px' : '0')};
    transition: max-height 0.3s ease-in;
  }
`;
export const Logo = styled(Link)`
  padding: 1rem 0;
  color: #393e46;
  text-decoration: none;
  font-weight: 800;
  font-size: 2rem;
  i {
    font-family: 'Girassol', sans-serif;
  }
  span {
    font-family: 'Girassol', sans-serif;
    font-weight: 400;
    font-size: 2rem;
    color: #00adb5;
  }
`;
export const A = styled.a`
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #02475e;
  transition: all 0.3s ease-in;
  font-size: 2rem;
  font-family: "Girassol", sans-serif;
  &:hover {
    color: #00adb5;
    font-weight: bold;
  }
  @media (max-width: 768px) {
   
    background-color: #e1f1dd;
    border: 1px solid #00adb5;
    /* border-radius: 10px; */
    width: 100%;
    height: 67px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;