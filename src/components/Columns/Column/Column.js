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
        const { connectDropTarget, isOverCurrent, label, valuesArr, onProsConsChange, onDragNdrop } = this.props;

        let style = {
            background: isOverCurrent ? '#27ae60' : null
        };

        return connectDropTarget(
            <div 
                className="table__childItem"
                style={style}
            >
                <div className="table__row--first">{label}</div>
                {
                    valuesArr.map((item, i) => (
                        <Row
                            key={label + i}
                            label={label}
                            index={i}
                            valuesArr={valuesArr}
                            onProsConsChange={onProsConsChange}
                            onDragNdrop={onDragNdrop}
                        />
                    ))
                }
            </div>
        )
    }
};

export default DropTarget(Types.ROW, dropSectionSpec, collect)(Column);