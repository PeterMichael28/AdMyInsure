
import { doc, getDoc, serverTimestamp, setDoc, updateDoc  } from "firebase/firestore";
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams, Link, useNavigate } from "react-router-dom";
import Logo from '../imgs/myinsure-logo.png'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Logo4 from '../imgs/icon4.jpg'
import '../css/AdDetails.css'
import { db2, storage2 } from "../firebase-config2";
import { db } from "../firebase-config";


const AdDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate()

    const [policyNo, setPolicyNo] = useState('')
    const [file, setFile] = useState();
    const [pro, setPro] = useState(0);
    const [cert, setCert] = useState('')
    const [data, setData] = useState({})
    const [data2, setData2] = useState({})
    const [uploadCertStatus, setuploadCertStatus] = useState(false);
    const [uploadPolicyStatus, setuploadPolicyStatus] = useState(false);




    useEffect(() => {
        const fetchData = async () => {
            const docRef = await doc(db, "insured", id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                // console.log("Document data:", docSnap.data());
                setData(docSnap.data())
              } else {
                // doc.data() will be undefined in this case
                // console.log("No such document!");
                setData(undefined)
              }
            // console.log(docSnap)
        }
        fetchData()
    }, [id])

    useEffect(() => {
        const fetchData2 = async () => {
            const docRef = await doc(db2, "insured", id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                // console.log("Document data:", docSnap.data());
                setData2(docSnap.data())
              } else {
                // doc.data() will be undefined in this case
                // console.log("No such document!");
                setData2(undefined)
              }
            // console.log(docSnap)
        }
        fetchData2()
    }, [id])

      
    useEffect(() => {
        const upload = () => {
            const name = new Date().getTime() + file.name
            const storageRef = ref(storage2, file.name);
            const uploadTask = uploadBytesResumable(storageRef, file);

        
        uploadTask.on('state_changed', 
        (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            // console.log('Upload is ' + progress + '% done');
            setPro(progress)
            switch (snapshot.state) {
            case 'paused':
                // console.log('Upload is paused');
                break;
            case 'running':
                // console.log('Upload is running');
                break;
                default:
                break;
            }
        }, 
        (error) => {
           console.log(error)
        }, 
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setCert(downloadURL)
          
            });
            // console.log(profile)
        }
        );
        }
        file && upload()
    }, [file])

    const PolicyNoSubmit = async (e) => {
        e.preventDefault();
        if (policyNo === '') {
            alert('please enter a policy number')
            return
        }
        // console.log(profile)

        if(data2) {
            await updateDoc(doc(db2, "insured", id), {
                PolicyNo: policyNo
              });
        } else {
            await setDoc(doc(db2, "insured", id), {
                PolicyNo: policyNo
              });
        }
        alert( 'Policy Number added Successfully!!!' )
        setuploadPolicyStatus(true)
          setPolicyNo('')
        //   navigate('/homepage')
    }

    const CertSubmit = async (e) => {
        e.preventDefault();
        if (cert === '') {
            alert('please upload a file')
            return
        }
        if(data2) {
            await updateDoc(doc(db2, "insured", id), {
                CertImg: cert
                });
        } else {
            await setDoc(doc(db2, "insured", id), {
                CertImg: cert
                });
        }
        // console.log(cert)
        alert( 'Upload Successful!!!' )
        setuploadCertStatus(true)
            setFile('')
        //   navigate('/homepage')
    }

    const handleBackClick = () => {
        navigate(-1)
    }
    return (
     <div className="details p-5">
      <div className="top-det d-flex justify-content-between">
       <img src={Logo} alt="logo" />
       <div className="d-flex flex-column">
        <p
         onClick={handleBackClick}
         className="mb-2 text-decoration-underline p-pointer"
        >
         Back
        </p>
        <Link to="/dashboard">Back to Dashboard</Link>
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
          <h2 className="cus_id">
           {data !== "" ? id : "fetching..."}
          </h2>
         </div>
         <hr />
         <div>
          <span>Customer Name</span>
          <h2>
           {data !== ""
            ? `${data.firstName} ${data.lastName}`
            : "fetching..."}
          </h2>
         </div>
        </div>
       </div>
       <div className="second_bot d-flex justify-content-around">
        <div className="cus">
         <h5 className="text-center mb-4">Customer</h5>
         <div className="cus_info">
          <div>
           <span>Policy Number:</span>
           <h3>
            {data2 && data2.PolicyNo
             ? data2.PolicyNo
             : "No Policy number yet"}
           </h3>
          </div>
          <div>
           <span>Email Address:</span>
           <h3>
            {data !== "" ? data.email : "fetching..."}
           </h3>
          </div>
          <div>
           <span>Phone number</span>
           <h3>
            {data !== "" ? data.phone : "fetching..."}
           </h3>
          </div>
          <div>
           <span>Gender</span>
           <h3>
            {data !== "" ? data.gender : "fetching..."}
           </h3>
          </div>
          <div>
           <span>Address</span>
           <h3>
            {data !== "" ? data.address : "fetching..."}
           </h3>
          </div>
          <div>
           <span>ID number</span>
           <h3>
            {data !== "" ? data.idNum : "fetching..."}
           </h3>
          </div>
          <div>
           <span>IMEI number</span>
           <h3>
            {data !== "" ? data.imeiNo : "fetching..."}
           </h3>
          </div>
          <div>
           <span>Phone Brand</span>
           <h3>
            {data.phoneBrand === undefined ||
            data.phoneModel === undefined
             ? "fetching..."
             : data.phoneBrand + " " + data.phoneModel}
           </h3>
          </div>
          <div>
           <span>Phone Value</span>
           <h3>
            {data.phoneValue === "" ||
            data.phoneValue === undefined
             ? ""
             : data.phoneValue}
           </h3>
          </div>
          <div>
           <span>Year of Purchase</span>
           <h3>
            {data.yearOfPurchase === "" ||
            data.yearOfPurchase === undefined
             ? ""
             : data.yearOfPurchase}
           </h3>
          </div>
          <div>
           <span>Phone Condition</span>
           <h3>
            {data.phoneCondition === "" ||
            data.phoneCondition === undefined
             ? ""
             : data.phoneCondition}
           </h3>
          </div>
         </div>
        </div>
        <div className="claim">
         <h5 className="text-center mb-4">Claims</h5>
         <div className="claims_info d-flex flex-column align-items-centr justify-content-between h-75">
         <div>
           <span>Policy No:</span>
           <h3>
            {data.policyNo ? data.policyNo : "No Claims yet"}
           </h3>
          </div>
          <div>
           <span>What Happened to the Phone</span>
           <h3>
            {data.whatHappened? data.whatHappened: "No Claims yet"}
           </h3>
          </div>
          <div>
           <span>Images of the Phone</span>
           <div className="img-div w-100 d-flex flex-column align-items-center justify-content-between px-5 mt-3">
            {data.claimImgs ? data.claimImgs.map((img, i) => {
              return <img src={ img } key={ i } className='claimImg w-75 mb-5 mt-3' alt="img"/>
            }) : <h3>No Image Uploaded yet</h3>}
           </div>
           
          </div>
          {/* <div className="w-100">
           <button className="btn gen-btn mb-2">
            Accept Claim
           </button>
           <button className="btn gen-btn">
            Deny Claim
           </button>
          </div> */}
         </div>
        </div>
        <div className="pay">
         <h5 className="text-center mb-4">Payments</h5>
         <div className="pay_info d-flex flex-column justify-content-between h-75">
          <div>
           <span>Amount(3% of PhoneValue In Naira)</span>
           <h3>
            {data.phoneValue === "" ||
            data.phoneValue === undefined
             ? ""
             : Number(data.phoneValue) * 0.03}
           </h3>
          </div>
          <div>
           <span>Status</span>
           <h3>
            {data.payment === undefined
             ? "Not Paid"
             : data.payment}
           </h3>
          </div>
          <form
           className="w-100 mb-4"
           onSubmit={PolicyNoSubmit}
          >
           <div className="mb-2">
            <input
             type="text"
             className="form-control"
             placeholder="Add Policy Number"
             required
             onChange={(e) => setPolicyNo(e.target.value)}
             value={policyNo}
            />
           </div>
           <button
            className={`btn ${
             uploadPolicyStatus ? "success-btn" : "gen-btn"
            }`}
           >
            {uploadPolicyStatus
             ? "Policy Number Added"
             : "Add Policy Number"}
           </button>
          </form>
          <form className="w-100" onSubmit={CertSubmit}>
           <div className="input-div d-flex flex-column">
            <input
             type="file"
             required
             accept="image/*"
             id="damImg"
             onChange={(e) => setFile(e.target.files[0])}
             name="damImg"
            />
            <small
             className={
              pro < 100
               ? "upload-text-loading"
               : "upload-text-done"
             }
            >
             {pro
              ? `Upload is ${pro} % done`
              : "start upload"}
            </small>
           </div>
           <button
            className={`btn ${
             uploadCertStatus ? "success-btn" : "gen-btn"
            }`}
           >
            {uploadCertStatus
             ? "Upload Successful"
             : "Upload Certificate "}
           </button>
          </form>
         </div>
        </div>
       </div>
      </div>
     </div>
    );
}
 
export default AdDetails;