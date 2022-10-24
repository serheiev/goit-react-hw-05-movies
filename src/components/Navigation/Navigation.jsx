import { Link, NavMenuList, NavMenuItem } from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <NavMenuList>
        <NavMenuItem>
          <Link to="/" end>
            Home
          </Link>
        </NavMenuItem>
        <NavMenuItem>
          <Link to="movies">Movies</Link>
        </NavMenuItem>
      </NavMenuList>
    </nav>
  );
};
