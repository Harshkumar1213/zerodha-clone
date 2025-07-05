import {Link} from 'react-router-dom';
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top border-bottom">
      <div class="container">
        <Link class="navbar-brand" to="/">
          <img style={{width:'28%'}} src="img/zerodha-logo.png" alt="" />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="d-flex" role="search">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 nav-ul">
              <li class="nav-item ms-4">
                <Link class="nav-link" aria-current="page" to="/signup">
                  Signup
                </Link>
              </li>
              <li class="nav-item ms-4">
                <Link class="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item ms-4">
                <Link class="nav-link" to="/product">
                  Product
                </Link>
              </li>
              <li class="nav-item ms-4">
                <Link class="nav-link" to="pricing">
                  Pricing
                </Link>
              </li>
              <li class="nav-item ms-4">
                <Link class="nav-link" to="/support">
                  Support
                </Link>
              </li>
              {/* <li class="nav-item ms-4">
                <Link class="nav-link" to="#">
                  <span class="navbar-toggler-icon"></span>
                </Link>
              </li> */}
              
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}
