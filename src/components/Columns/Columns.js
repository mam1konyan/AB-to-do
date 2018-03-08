import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Column from './Column/Column';

class ProsCons extends Component {

    render(){
        return (
            <div className="table__childWrapper">
                {
                    Object.keys(this.props.columns).map((item, i) => {
                        return (
                            <Column
                                onProsConsChange={(type, index, value) => this.props.onProsConsChange(type, index, value)}
                                onDragNdrop={(type, finalType, index) => this.props.onDragNdrop(type, finalType, index)}
                                label={item}
                                valuesArr={this.props.columns[item]}
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