import AdNav from "../components/AdNav";
import '../css/AdClaim.css'

const AdCustomer = () => {
    return ( 
        <div>
        <AdNav text='Dashboard' icon='ri-dashboard-line' />
        <div className="second-body px-3 pt-3">
            <div className="top-items">
            <p>Payments</p>
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
            <tr>
            <th>Customer ID</th>
            <th>Customer Name</th>
            <th>Payments</th>
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
        </tr>
        <tr>
            <td>1234577</td>
            <td>John Doe</td>
            <td>Lorem Ispum</td>
        </tr>
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