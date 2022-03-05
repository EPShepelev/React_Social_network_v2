import { Back } from '../Back/Back'
import { UserCard } from '../UserCard/UserCard';
import style from './Dialog.module.scss'

export const Dialog: React.FC = () => {
  return (
    <div >
      <div className={style.card}>
        <UserCard />
        <Back />
      </div>
      <div>
        Message list
        {/* map for array of messages with this user */}
      </div>
    </div>
  );
}