import nopage from '../../assets/images/nopage.jpeg'
import styles from './NoPage.module.scss'


export const NoPage: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <p>Oops, it seems this page is under construction</p>
      <img className={styles.logo} src={nopage} alt='page under construction' />
    </div>
  );
}