import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/Table.css'

class Table extends Component {

    rowStyle = (day) => {
        const today = new Date().toISOString().slice(0, 10);
        console.log(today)
        console.log(this.props.rows.day);
        console.log(day)
        if (today > day){
            console.log("passou");
            return {backgroundColor: "grey"}
        } 
        return {backgroundColor: "white"}
    }

    render() {
        return (
            <div className="table-container">
                <h1 className="table-title">{this.props.title}</h1>

                <table className="generic-table">
                    <thead>
                        <tr>
                            {this.props.columns.map((el) => (
                                <th key={el}>{el}</th>
                            ))}
                        </tr>
                    </thead>
                    
                    {this.props.rows.map((el) => (
                        <tbody style={this.rowStyle.bind(this, el.day)()} key={el.id}>
                            <tr >
                                <td className="table-item">{el.name}</td>
                                <td className="table-item">{el.people}</td>
                                <td className="table-item">{el.day}</td>
                                <td className="table-item">{el.hour}</td>
                                <td className="table-item">{el.room}</td>
                            </tr>
                        </tbody>

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