
import { Link, useNavigate } from "react-router-dom";

const InsuredLists = ({one, two, three, to}) => {

    const nav = useNavigate();
    const handleClick = () => {
        nav(to)
    }
    return ( 
        <tr onClick={handleClick}>
                <td className="cus_id2">{one}</td>
                <td>{two}</td>
                <td>{three}</td>
        </tr>
     );
}
 
export default InsuredLists;