import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {FiLogOut} from 'react-icons/fi'
import {AiFillHome} from 'react-icons/ai'
import {BsFillBriefcaseFill} from 'react-icons/bs'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-mobile-logo-container">
          <Link to="/">
            <img
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              className="website-logo"
              alt="website logo"
            />
          </Link>
          <ul className="nav-bar-mobile-icons-container">
            <li>
              <Link to="/">
                <AiFillHome
                  className="nav-item-mobile-link"
                  aria-label="close"
                />
              </Link>
            </li>
            <li>
              <Link to="/jobs">
                <BsFillBriefcaseFill
                  className="nav-item-mobile-link"
                  aria-label="close"
                />
              </Link>
            </li>
            <li>
              <button
                className="nav-mobile-button"
                type="button"
                onClick={onClickLogout}
              >
                <FiLogOut aria-label="close" />
              </button>
            </li>
          </ul>
        </div>

        <div className="nav-bar-large-container">
          <Link to="/">
            <img
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              className="website-logo"
              alt="website logo"
            />
          </Link>
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/jobs" className="nav-link">
                Jobs
              </Link>
            </li>
          </ul>
          <button
            type="button"
            className="logout-desktop-button"
            onClick={onClickLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  )
}

export default withRouter(Header)
