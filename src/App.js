
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AdClaim from './pages/AdClaim'
import AdDash from './pages/AdDash'
import AdHome from './pages/AdHome'
import AdCustomer from './pages/AdCustomer';
import AdPayments from './pages/AdPayments'
import AdDetails from './pages/AdDetails'
import { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from './firebase-config'

function App() {


  const [data, setData] = useState([]);
  const [id, setId] = useState()
    useEffect(() => {
      const fetchData = async () => { 

        const list = [];
        try {
          const querySnapshot = await getDocs(collection(db, "insured"));
          querySnapshot.forEach((doc) => {
            list.push({ id: doc.id, ...doc.data()});
            
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());
          });
          // console.log(list)
          await setData(list);
       
        } catch (error) {
          console.log(error)
        }
      }
        fetchData()
    }, [])

    // console.log()



  return (
    <div className="">
      <Router>
      <Routes>
        <Route path='/AdMyInsure' element={<AdHome />}></Route>
        <Route path='/AdMyInsure/dashboard' element={<AdDash />}></Route>
        <Route path='/AdMyInsure/claims' element={<AdClaim data={data} />}></Route>
        <Route path='/AdMyInsure/payments' element={<AdPayments />}></Route>
        <Route path='/AdMyInsure/customers' element={<AdCustomer data={data} />}></Route>
        <Route path='/AdMyInsure/profile/:id' element={<AdDetails data={data} />}></Route>
        {/* <Route path='/profile' element={<AdDetails />}></Route> */}
      </Routes>
      </Router>
      
    </div>
  );
}

export default App;
