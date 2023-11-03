import { FC } from 'react'
import Header from '../components/header/Header';
import { Outlet } from 'react-router-dom';

// import cn from 'classnames'
import styles from './Layout.module.css'

const Layout: FC = () => (
    <div className={styles.container}>
<Header />
<main className={styles.main}>
<Outlet/>
</main>
</div>
);
export default Layout;
