import '../css/AdDash.css'
import Logo1 from '../imgs/icon1.jpg'
import Logo2 from '../imgs/icon2.jpg'
import Logo3 from '../imgs/icon3.jpg'
import Logo4 from '../imgs/icon4.jpg'
import AdNav from '../components/AdNav'
import { Link } from 'react-router-dom'


const AdDash = () => {
    return ( 
        <div className=''>
            <AdNav />
        <div className="main-section p-5 pt-3">
            <p>Hello, <span>Lorem</span></p>
            <div className="dashboard-boxes d-flex justify-content-center align-content-center">

                <Link to='/AdMyInsure'>

                <div className="main-section-item mb-4">
                    <p>analytics</p>
                    <img className="dashboard-images" src={Logo1} alt="icon"/>
                </div>
                </Link>

                <Link to='/AdMyInsure/customers'>

                <div className="main-section-item">
                    <p>customers</p>
                    <img  className="dashboard-images mb-4" src={Logo3} alt="icon"/>
                </div>
                </Link>

                <Link to='/AdMyInsure/claims'>

                <div className="main-section-item">
                    <p>claims</p>
                    <img  className="dashboard-images" src={Logo4} alt="icon"/>
                </div>
                </Link>

                <Link to='/AdMyInsure/payments'>
                <div className="main-section-item">
                    <p>Payments</p>
                    <img  className="dashboard-images" src={Logo2} alt="icon"/>
                </div>
                </Link>
            </div>
        </div>
        </div>

     );
}
 
export default AdDash;