import logo from '../../assets/images/logo.png'
import './Header.scss'


export const Header: React.FC = () => {
  return (
    <div className='header'>
      <img className='logo' src={logo} alt='logo'></img>
      Header
    </div>
  );
}