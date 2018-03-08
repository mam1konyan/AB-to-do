import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import Types from './Row/itemTypes';
import Row from './Row/Row';

const dropSectionSpec = {
    
    drop(props, monitor, component) {

        return { 
            finalLabel: component.props.label 
        };
    }
};

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        isOverCurrent: monitor.isOver({ shallow: true }),
        canDrop: monitor.canDrop(),
        itemType: monitor.getItemType()
    };
}


class Column extends Component {

    render() {
        const { connectDropTarget } = this.props;

        let style = {
            background: this.props.isOverCurrent ? '#27ae60' : null
        };

        return connectDropTarget(
            <div 
                className="table__childItem"
                style={style}
            >
                <div className="table__row--first">{this.props.label}</div>
                {
                    this.props.valuesArr.map((item, i) => (
                        <Row
                            key={this.props.label + i}
                            label={this.props.label}
                            index={i}
                            valuesArr={this.props.valuesArr}
                            onProsConsChange={this.props.onProsConsChange}
                            onDragNdrop={(type, finalType, index) => this.props.onDragNdrop(type, finalType, index)}
                        />
                    ))
                }
            </div>
        )
    }
};

export default DropTarget(Types.ROW, dropSectionSpec, collect)(Column);