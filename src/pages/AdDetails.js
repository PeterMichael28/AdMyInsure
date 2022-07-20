
import { doc, getDoc } from "firebase/firestore";
import { db } from '../firebase-config'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams, Link } from "react-router-dom";
import Logo from '../imgs/myinsure-logo.png'
import Logo4 from '../imgs/icon4.jpg'
import '../css/AdDetails.css'


const AdDetails = () => {
    const { id } = useParams()

    const [data, setData] = useState({})
    useEffect(() => {
        const fetchData = async () => {
            const docRef = await doc(db, "insured", id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                setData(docSnap.data())
              } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
                setData(undefined)
              }
            // console.log(docSnap)
        }
        fetchData()
    }, [id])

    return ( 
        <div className="details p-5">
           <div className="top-det d-flex justify-content-between">
           <img src={Logo} alt="logo" />
            <div className="d-flex flex-column">
                <Link to='/AdMyInsure/customers' className="mb-2">Back to Customers</Link>
                <Link to='/AdMyInsure/dashboard'>Back to Dashboard</Link>
            </div>
           </div>
           <div className="bot-det">
            <div className="first_bot d-flex flex-column align-items-center text-center mb-5">
                <div className="bg_img mb-3">
                    <img src={data.img} alt="logo" className="" />
                </div>
                <div className="customer_det d-flex justify-content-center align-items-center">
                    <div>
                        <span>Customer ID</span>
                        <h2 className="cus_id">{data !== '' ? id : 'fetching...'}</h2>
                    </div>
                    <hr />
                    <div>
                        <span>Customer Name</span>
                        <h2>{data !== '' ? `${data.firstName} ${data.lastName}` : 'fetching...'}</h2>
                    </div>
                </div>
            </div>
            <div className="second_bot d-flex justify-content-around">
                <div className="cus">
                    <h5 className="text-center mb-4">Customer</h5>
                    <div className="cus_info">
                        <div>
                            <span>Email Address:</span>
                            <h3>{data !== '' ? data.email : 'fetching...'}</h3> 
                        </div>
                        <div>
                            <span>Phone number</span>
                            <h3>{data !== '' ? data.phone : 'fetching...'}</h3> 
                        </div>
                        <div>
                            <span>Gender</span>
                            <h3>{data !== '' ? data.gender : 'fetching...'}</h3> 
                        </div>
                        <div>
                            <span>Address</span>
                            <h3>{data !== '' ? data.address : 'fetching...'}</h3> 
                        </div>
                        <div>
                            <span>ID number</span>
                            <h3>{data !== '' ? data.idNum : 'fetching...'}</h3> 
                        </div>
                        <div>
                            <span>IMEI number</span>
                            <h3>{data !== '' ? data.imeiNo : 'fetching...'}</h3> 
                        </div>
                    </div>
                </div>
                <div className="claim">
                    <h5 className="text-center mb-4">Claims</h5>
                    <div className="claims_info d-flex flex-column align-items-center justify-content-between h-75">
                        <div className='w-100'>
                            <span>Subscription</span>
                            <h3>enitan@gmail.com</h3> 
                        </div>
                        <div className='w-100'>
                            <button className='btn gen-btn mb-2'>Accept Claim</button>
                            <button className='btn gen-btn'>Deny Claim</button>
                        </div>
                    </div>
                </div>
                <div className="pay">
                    <h5 className="text-center mb-4">Payments</h5>
                    <div className="pay_info d-flex flex-column justify-content-between h-75">
                        <div>
                            <span>Amount</span>
                            <h3>876888768787</h3> 
                        </div>
                        <div className='w-100'>
                            <button className='btn gen-btn'>Upload Certificate</button>
                        </div>
                    </div>
                </div>
            </div>
           </div>
        </div>
     );
}
 
export default AdDetails;