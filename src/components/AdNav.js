import Logo from '../imgs/myinsure-logo.png'
import '../css/AdNav.css'
import { Link } from 'react-router-dom'

const AdNav = ({text, icon}) => {
    return ( 
        <div className="side-bar">
        <img className="sidebar-logo" src={Logo} alt="logo" />
        <nav className='sidebar-nav d-flex flex-column'>

          <Link to='/AdMyInsure/dashboard'>

            <div className="side-bar-items ">
                <i className="ri-bar-chart-fill"></i>
              <p>Analytics</p>
            </div>
          </Link>

          <Link to='/AdMyInsure/customers'>
            <div className="side-bar-items ">
                <i className="ri-group-line"></i>
              <p>Customers</p>
           </div>
          </Link>

          <Link to='/AdMyInsure/claims'>
            <div className="side-bar-items">
                <i className="ri-edit-line"></i>
              <p>Claims</p>
           </div>
          </Link>

          <Link to='/AdMyInsure/payments'>
            <div className="side-bar-items">
                <i className="ri-bank-card-line"></i>
              <p>Payments</p>
            </div>
          </Link>

          <Link to='/AdMyInsure/dashboard'>
            <div className="side-bar-items">
                <i className={icon}></i>
              <p>{text}</p>
            </div>
          </Link>
            {/* <hr /> */}

            <Link to='/AdMyInsure' className="side-bar-items logout-dashboard">
            <div className='d-flex' >
                <i className="ri-logout-box-line me-2"></i>
                <p>Logout</p>
            </div>
            </Link>
        </nav>
    </div>
     );
}
 
export default AdNav;