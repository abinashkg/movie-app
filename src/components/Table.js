import React, { Component } from 'react';
import Like from './Like';
import { Link } from 'react-router-dom';
import { faSortUp, faSortDown} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Table extends Component {

    render() {
        return (
            <div className="custom-table">
                <div className="tableHeader p-3">
                    Showing {this.props.totalItem} movies in the database
                </div>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            {this.props.columns.map(column => (
                                <th className="clickable" scope="col" onClick={() => this.props.onSort(column.accessor)} >
                                    {column.header}{` `}
                                    {(this.props.sortData.column === column.accessor)?(
                                        <FontAwesomeIcon icon={this.props.sortData.order === "asc" ? faSortUp : faSortDown}/>
                                    ): null}
                                    
                                </th>
                            ))}
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.data.map(row => (
                            <tr>
                                {this.props.columns.map(column => (
                                    <td>
                                        {(column.accessor === 'title')? (
                                            <Link to={'/movies/'+row.id} >{row[column.accessor]}</Link>
                                        ):row[column.accessor]}
                                    </td>
                                ))}
                                <td>
                                    <Like active={row.favorite} onClick={() => this.props.toggleLike(row.id)} />
                                </td>
                                <td>
                                    <button type="button" onClick={() => this.props.onDelete(row.id)} class="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;