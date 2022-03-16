import { FC } from 'react'
import { Link } from "react-router-dom";

import { MenuItem } from '../MenuItem/MenuItem'
import { UserOutlined, CommentOutlined, TeamOutlined, GlobalOutlined, SoundOutlined, SettingOutlined } from '@ant-design/icons'
import styles from './Sider.module.scss'

export const Sider:FC = () => {

  return (
    <div className={styles.menu}>
      <Link to="/profile">
        <MenuItem key={1} icon={<UserOutlined />}>
          Profile
        </MenuItem>
      </Link>
      <Link to="/dialogs">
        <MenuItem key={2} icon={<CommentOutlined />}>
          Dialogs
        </MenuItem>
      </Link>
      <Link to="/users">
        <MenuItem key={3} icon={<TeamOutlined />}>
          Users
        </MenuItem>
      </Link>
      <Link to="/news">
        <MenuItem key={4} icon={<GlobalOutlined />}>
          News
        </MenuItem>
      </Link>
      <Link to="/music">
        <MenuItem key={5} icon={<SoundOutlined />}>
          Music
        </MenuItem>
      </Link>
      <Link to="/settings">
        <MenuItem key={6} icon={<SettingOutlined />}>
          Settings
        </MenuItem>
      </Link>
    </div>
  );
}