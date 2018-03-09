import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Column from './Column/Column';

class ProsCons extends Component {

    render(){
        const { columns, onProsConsChange, onDragNdrop } = this.props;
        return (
            <div className="table__childWrapper">
                {
                    Object.keys(columns).map((item, i) => {
                        return (
                            <Column
                                onProsConsChange={onProsConsChange}
                                onDragNdrop={onDragNdrop}
                                label={item}
                                valuesArr={columns[item]}
                                key={i}
                            />
                        )
                    })
                }
            </div>
        );
    }
};

export default DragDropContext(HTML5Backend)(ProsCons);