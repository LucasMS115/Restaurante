import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/Table.css'

class Table extends Component {

    render() {
        return (
            <div className="table-container">
                <h1 className="table-title">{this.props.title}</h1>

                <table className="generic-table">
                    <tr>
                        {this.props.columns.map((el) => (
                            <th>{el}</th>
                        ))}

                    </tr>
                    {this.props.rows.map((el) => (
                        <tr>
                            <td>{el.name}</td>
                            <td>{el.people}</td>
                            <td>{el.day}</td>
                            <td>{el.hour}</td>
                            <td>{el.room}</td>
                        </tr>

                    ))}
                </table>

            </div>
        );
    }

};

Table.propTypes = {
    title: PropTypes.string.isRequired,
    columns: PropTypes.array.isRequired,
    rows: PropTypes.array.isRequired
}

export default Table;