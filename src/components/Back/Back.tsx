import { RollbackOutlined } from '@ant-design/icons'
import styles from './Back.module.scss'

export const Back: React.FC = () => {
  return (
    <div className={styles.button}>
      <RollbackOutlined />
    </div>
  );
}