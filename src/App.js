import { Outlet } from 'react-router-dom';
import './App.css';
import NavBar from './views/navbar/navbar';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Outlet></Outlet>
      {/* footer sections starts here */}
      <footer class="footer">
        <hr></hr>
        <p>All rights reserved | <span>VDHATRI HOMES</span> | 2024 </p>
      </footer>
      {/* footer sections ends here */}
    </div>
  );
}

export default App;
