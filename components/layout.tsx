import type { FC, ReactNode } from 'react';
import styles from './layout.module.css';

type Props = {
  children: ReactNode;
};
const Layout: FC<Props> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
export default Layout;
