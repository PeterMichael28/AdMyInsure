import '../css/AdHome.css'
import Logo from '../imgs/myinsure-logo.png'
import Logo2 from '../imgs/ad2.png'
import Logo3 from '../imgs/ad3.png'
import { useState } from 'react';
import Inputs from '../components/Inputs';
import { Link } from 'react-router-dom';

const AdHome = () => {
    const [passDis, setPassDis] = useState(true);

    const [loginerr, setloginErr] = useState('')
  
    const [login, setLogin] = useState({
      loginEmail: '',
      loginPass: ''
    })
  
    let handleLogin = (e) => {
      setLogin({
        ...login,
        [e.target.name]: e.target.value
      })
    }
  const loginValues = { ...login}
  
   
  
    // const loggingIn = async (e) => {
    //   e.preventDefault();
    //   try {
    //     await loginIn(login.loginEmail, login.loginPass) 
    //     navigate('/homepage')
    //   } catch (error) {
    //     setloginErr(error.message)
    //     navigate('/login')
  
  
    //   }
    // }
  
    const passToggle = () => {
        setPassDis(!passDis)
        console.log('show')
    }
    // const handleClick = () => {
    //     navigate('/getting-started')
    // }


    return ( 
        <div id="adHome">
        <div className="login-page d-flex position-relative">
        <div className="first-half">
            <img className="adLogo" src={Logo} alt="Logo" />
            <div className='text-con text-white'>
            <h3 className=''>Let's do something</h3>
            <h3 className=''> amazing today.</h3>
            </div>
            <img className="sitting-guy" src={Logo2} alt="logo" />
        </div>
        <div className="second-half">
            <img className="waving-hand" src={Logo3} alt="waving hand" />
            <p className="welcome-back">Welcome back!</p>
            <form>
                    <Inputs 
                        labelFor = 'USER ID'
                        label = 'USER ID'
                        type = 'text'
                    />
                    <div className="mb-3">
                        <label htmlFor="Password" className="form-label m-0 mb-2">USER KEY</label>
                        <div className="form-control pass-con">
                            <input 
                                type={passDis? 'password' : 'text'} 
                                id="Password" 
                                placeholder='Password' 
                                required
                                value={loginValues.loginPass}
                                onChange={handleLogin}
                                name= 'loginPass'
                                />
                            <span className="input-group-text eye-span p-1 px-2" id="togglePassword">
                                <i className={ passDis? `bi bi-eye-fill`:`bi bi-eye-slash`} onClick={passToggle}></i>
                            </span>
                        </div>
                    </div>
                    <Link to='/AdMyInsure/dashboard' className='btn gen-btn'>LOG IN</Link>
            </form>
        </div>
    </div>
        </div>
     );
}
 
export default AdHome;