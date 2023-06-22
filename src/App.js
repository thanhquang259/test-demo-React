import './App.scss';
import Header from './Components/Header/Header';
import { Outlet, Link } from "react-router-dom";
const App = () => {

  return (

    <div className="app-container">
      <Header />
      <div>
        test link
      </div>
      <button>
        <Link to="/user">go to user page</Link>
      </button>
      <button>
        <Link to="/admin">go to admin page</Link>
      </button>

    </div>
  );
}


export default App;
