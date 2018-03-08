import React, { Component } from 'react';
import Row from './Row/Row';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class Column extends Component {
    render() {
        return (
            <div className="table__childItem">
                <div className="table__row--first">{this.props.label}</div>
                {
                    this.props.valuesArr.map((item, i) => (
                        <Row
                            key={this.props.label + i}
                            label={this.props.label}
                            index={i}
                            valuesArr={this.props.valuesArr}
                            onProsConsChange={this.props.onProsConsChange}
                        />
                    ))
                }
            </div>
        )
    }
};

export default DragDropContext(HTML5Backend)(Column);