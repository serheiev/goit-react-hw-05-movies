import { Navigation } from 'components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import s from './Header.module.scss';

export const Header = () => {
  return (
    <>
      <header className={s.header}>
        <Navigation />
      </header>
      <Outlet />
    </>
  );
};
