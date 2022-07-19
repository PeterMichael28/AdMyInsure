import { Link, useNavigate } from "react-router-dom";
import AdNav from "../components/AdNav";
import InsuredLists from "../components/InsuredLists";
import '../css/AdClaim.css'


const AdCustomer = ({ data }) => {
    
    
//      data.map((dat => {
//             const item =( <tr key={dat.id}>
//             <td>{dat.id}</td>
//             <td>{`${dat.firstName} ${dat.lastName}`}</td>
//             <td>{dat.timeStamp}</td>
//             </tr>)
//             return item;
//     }))
//    item && console.log(item)
    // data.map(dat => {
    //     console.log(dat.id)
    // })
    // console.log(data.id)


    return ( 
        <div>
        <AdNav text='Dashboard' icon='ri-dashboard-line' />
        <div className="second-body px-3 pt-3">
            <div className="top-items">
            <p>Customers</p>
            <div className="top-tools">
            <div className="whole-tool-box">
                <i className="ri-search-line"></i>
            <input type="search" placeholder="Search" />
            </div>
            {/* <div  className="whole-tool-box">
            <i className="ri-filter-line"></i>
            <button className="filter">Filter</button>
            </div> */}
            </div>
            </div>
        <table className="">
            <thead>
                <tr>
                    <th>Customer ID</th>
                    <th>Customer Name</th>
                    <th>Date of Registration</th>
                </tr>
            </thead>
        <tbody>
            {data && data.map(dat => {
                const daaat = new Date(dat.timeStamp.toDate()).toDateString();
                return (
                // <Link to={`/profile/${dat.id}`}>
                    <InsuredLists one={dat.id} two={`${dat.firstName} ${dat.lastName}`} three={daaat}  key={dat.id} to={`/AdMyInsure/profile/${dat.id}`} />
                // </Link>
                // <tr key={dat.id}>
                //     <td>{dat.id}</td>
                //     <td>{`${dat.firstName} ${dat.lastName}`}</td>
                //     <td>{dat.lastName}</td>
                // </tr>
                )
                // console.log(dat.timeStamp)
            })}
        </tbody>
            
        
        {/* <tr>
            <td>1234577</td>
            <td>John Doe</td>
            <td>Lorem Ispum</td>
        </tr>
        <tr>
            <td>1234577</td>
            <td>John Doe</td>
            <td>Lorem Ispum</td>
        </tr>
        <tr>
            <td>1234577</td>
            <td>John Doe</td>
            <td>Lorem Ispum</td>
        </tr>
        <tr>
            <td>1234577</td>
            <td>John Doe</td>
            <td>Lorem Ispum</td>
        </tr>
        <tr>
            <td>1234577</td>
            <td>John Doe</td>
            <td>Lorem Ispum</td>
        </tr>
        <tr>
            <td>1234577</td>
            <td>John Doe</td>
            <td>Lorem Ispum</td>
        </tr>
        <tr>
            <td>1234577</td>
            <td>John Doe</td>
            <td>Lorem Ispum</td>
        </tr>
        <tr>
            <td>1234577</td>
            <td>John Doe</td>
            <td>Lorem Ispum</td>
        </tr>
        <tr>
            <td>1234577</td>
            <td>John Doe</td>
            <td>Lorem Ispum</td>
        </tr>
        <tr>
            <td>1234577</td>
            <td>John Doe</td>
            <td>Lorem Ispum</td>
        </tr>
        <tr>
            <td>1234577</td>
            <td>John Doe</td>
            <td>Lorem Ispum</td>
        </tr>
        <tr>
            <td>1234577</td>
            <td>John Doe</td>
            <td>Lorem Ispum</td>
        </tr>
        <tr>
            <td>1234577</td>
            <td>John Doe</td>
            <td>Lorem Ispum</td>
        </tr>
        <tr>
            <td>1234577</td>
            <td>John Doe</td>
            <td>Lorem Ispum</td>
        </tr>
        <tr>
            <td>1234577</td>
            <td>John Doe</td>
            <td>Lorem Ispum</td>
        </tr> */}
        </table>
        <div className="pagination p-2">
            <a href="#/">Previous page</a>
            <a href="#/" className="active-2">1</a>
            <a href="#/" >2</a>
            <a href="#/">3</a>
            <a href="#/">4</a>
            <a href="#/">5</a>
            <a href="#/">6</a>
            <a href="#/">7</a>
            <a href="#/">Next Page</a>
        </div>
    </div>
        </div>

     );
}
 
export default AdCustomer;