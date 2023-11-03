import { FC } from "react";
import { NavLink } from "react-router-dom";
// import cn from 'classnames'
import styles from './Header.module.css'


const Header: FC = () => {
  return (
    <div className={styles.navbar}>
        <NavLink to="/">random activity</NavLink>
      <NavLink to="counter">counter</NavLink>
      <NavLink to="cityPage">cityPage</NavLink>
      <NavLink to="sandwich">sandwich</NavLink>
      <NavLink to="sandwich">sandwich</NavLink>
      <NavLink to="productPage">productPage</NavLink>
      
    </div>
  );
};

export default Header;
