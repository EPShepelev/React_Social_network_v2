import { UserOutlined, CommentOutlined, GlobalOutlined, SoundOutlined, SettingOutlined } from '@ant-design/icons'
import styles from './Sider.module.scss'
import { MenuItem } from '../MenuItem/MenuItem'

export const Sider: React.FC = () => {

  return (
    <div className={styles.menu}>
          <MenuItem key={1} icon={<UserOutlined />}>
            Profile
          </MenuItem>
          <MenuItem key={2} icon={<CommentOutlined />}>
            Messages
          </MenuItem>
          <MenuItem key={3} icon={<GlobalOutlined />}>
            News
          </MenuItem>
          <MenuItem key={4} icon={<SoundOutlined />}>
            Music
          </MenuItem>
          <MenuItem key={5} icon={<SettingOutlined />}>
            Settings
          </MenuItem>
    </div>
  );
}