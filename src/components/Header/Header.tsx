import logo from '../../assets/images/logo.png'
import styles from './Header.module.scss'


export const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <img className={styles.logo} src={logo} alt='logo' />
      Header
    </div>
  );
}