import React, { Component } from 'react';
import Like from './Like';

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
                                <th className="clickable" scope="col" onClick={() => this.props.onSort(column.accessor)} >{column.header}</th>
                            ))}
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.data.map(row => (
                            <tr>
                                {this.props.columns.map(column => (
                                    <td>{row[column.accessor]}</td>
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