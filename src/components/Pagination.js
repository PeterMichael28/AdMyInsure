const Pagination = ({ postPerPage, totalPost, paginate }) => {

    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
        pageNumbers.push(i)
    }
    // console.log(pageNumbers)
    return ( 
        <nav>
            <ul className="pagination justify-content-end px-3">
                {pageNumbers.map((no) => (
                    // <li key={no} className='page-item'>
                        <li key={no} className="page-item"><button onClick={() => paginate(no)} className="page-link cursor-pointer">{no}</button></li>
                    //     <a href="/#" className="page-link">{no}</a>
                    // </li>
                ))}
            </ul>
        </nav>
     );
}
 
export default Pagination;