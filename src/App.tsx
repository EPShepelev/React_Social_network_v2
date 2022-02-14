import { Header } from './components/Header/Header'
import { Sider } from './components/Sider/Sider'
import { Content } from './components/Content/Content'
import { Footer } from './components/Footer/Footer'
import './App.scss';


const App = () => {
  return (
    <div className='container'>
      <Header />
      <div className='wrapper'>
        <Sider />
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default App;