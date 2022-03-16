import { FC } from 'react'
import { RollbackOutlined } from '@ant-design/icons'
import styles from './Back.module.scss'

export const Back:FC = () => {
  return (
    <div className={styles.button}>
      <RollbackOutlined />
    </div>
  );
}