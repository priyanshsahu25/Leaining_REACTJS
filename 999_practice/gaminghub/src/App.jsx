import {Link} from 'react-router-dom'
import './App.css'

function App() {


  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#131313', borderBottom: '1.5px solid #ffb320' }}>
      <Link to="#" className="navbar-brand navstyle gamewarrior">
        <img src="assests/gw.png" alt=""/>
      </Link>
      <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#mymenu">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="mymenu">
        <ul className="navbar-nav">
          <li className="nav-item  navlist">
            <Link to="index.html" className="nav-link active ">
              <i className="fa fa-home"></i>&nbsp;Home
            </Link>
          </li>
          <li className="nav-item  navlist active ">
            <Link to="warroom.html" className="nav-link navstyle">
              <i className="fa fa-address-book"></i>&nbsp;War Room
            </Link>
          </li>
          <li className="nav-item  navlist active ">
            <Link to="Gamenews.html" className="nav-link navstyle">
              <i className="fa fa-bed" aria-hidden="true"></i>&nbsp;News
            </Link>
          </li>
          <li className="nav-item navlist active ">
            <Link to="#" className="nav-link navstyle" style={{ textDecoration: 'line-through' }}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
    </>
  )
}

export default App
