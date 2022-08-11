import { Link} from "react-router-dom";
import AdNav from "../components/AdNav";
import InsuredLists from "../components/InsuredLists";
import Pagination from "../components/Pagination";
import '../css/AdClaim.css'

const AdClaim = ({ data, totalPost, postPerPage, paginate }) => {
    return ( 
        <div>
        <AdNav text='Dashboard' icon='ri-dashboard-line' />
        <div className="second-body px-3 pt-3">
            <div className="top-items">
            <p>Claims</p>
            <div className="top-tools">
            <div className="whole-tool-box">
                <i className="ri-search-line"></i>
            <input type="search" placeholder="Search" />
            </div>
            </div>
            </div>
            <table className="table table-striped table-hover table-responsive">
            <thead className="bg-primary">
                <tr>
                    <th>Customer ID</th>
                    <th>Customer Name</th>
                    <th>Claims</th>
                </tr>
            </thead>
        <tbody>
            {data && data.map(dat => {
                const daaat = new Date(dat.timeStamp.toDate()).toDateString();
                return (
                    <InsuredLists one={dat.id} two={`${dat.firstName} ${dat.lastName}`} three='No claims yet' key={dat.id} to={`/profile/${dat.id}`} />
                )
            })}
        </tbody>
   
        </table>
        
        <Pagination postPerPage={postPerPage} totalPost={totalPost} paginate={paginate}  />
    </div>
        </div>

     );
}
 
export default AdClaim;