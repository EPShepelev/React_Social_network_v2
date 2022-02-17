import { BrowserRouter as Router } from "react-router-dom";

import { Header } from './components/Header/Header'
import { Sider } from './components/Sider/Sider'
import { Content } from './components/Content/Content'
import { Footer } from './components/Footer/Footer'
import './App.scss';


const App = () => {
  return (
    <Router>
      <div className='container'>
        <Header />
        <div className='wrapper'>
          <Sider />
          <Content />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;