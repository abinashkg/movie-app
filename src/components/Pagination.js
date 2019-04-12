import React from 'react';

function Pagination(props) {
    const numPages = Math.ceil(parseInt(props.totalItem) / parseInt(props.pageSize));
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {
                    Array(numPages).fill(null).map((row, index) => (
                        <li class="page-item">
                            <button type="button" href="#" onClick={()=>props.onClick(index+1)}
                            className= {parseInt(props.currentPage) ===(index+1)? "btn btn-primary":"btn btn-light"}>
                                {index+1}
                            </button>
                        </li>
                        )
                    )
                }
            </ul>
        </nav>
    );
}

export default Pagination;