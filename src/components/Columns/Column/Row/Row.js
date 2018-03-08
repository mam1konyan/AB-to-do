import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import itemTypes from './itemTypes';

const rowSource = {
    beginDrag(props) {
       return {

        };
    },
    endDrag(props, monitor, component) {
        
        if (props.label !== monitor.getDropResult().finalLabel) {
            const   beforeLabel = props.label,
                    afterLabel = monitor.getDropResult().finalLabel,
                    index = props.index;
                    
            if ( index + 1 === props.valuesArr.length) {
                alert('Nah, you can\'t do it :)');
            } else {
                props.onDragNdrop(beforeLabel, afterLabel, index);
            }
        }
        return {

        };     
    }
};

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

class Row extends Component {
    
    render(){
        
        const { connectDragSource, isDragging } = this.props;

        return connectDragSource(
            <div 
                className="table__row" 
                key={this.props.label + this.props.index}
                id={this.props.label + this.props.index}
                style={{
                    opacity: isDragging ? 0.25 : 1,
                    cursor: 'move'
                }}
            >
                <span className="table__index">{this.props.index + 1}.</span>
                <input
                    type="text"
                    className="table__input"
                    value={this.props.valuesArr[this.props.index]}
                    onChange={(val) => {
                        this.props.onProsConsChange(this.props.label, this.props.index, val.target.value);
                    }}
                />
            </div>
        );
    }
};

Row.propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
};

export default DragSource(itemTypes.ROW, rowSource, collect)(Row);