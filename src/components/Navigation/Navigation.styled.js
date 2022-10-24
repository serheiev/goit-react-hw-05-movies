import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 28px;
  font-weight: 600;

  &.active {
    color: tomato;
  }
`;

export const NavMenuList = styled.ul`
  display: flex;
`;
export const NavMenuItem = styled.li`
  list-style: none;
  padding-right: 10px;
`;
