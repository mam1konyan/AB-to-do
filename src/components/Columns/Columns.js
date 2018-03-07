import React from 'react';
import Column from './Column/Column';
import { DragDropContext } from 'react-dnd';

const ProsCons = (props) => {
    
    return (
        <div className="table__childWrapper">
            {
                Object.keys(props.columns).map( (item, i) => {
                    return (
                        <Column
                            onProsConsChange={(type, index, value) => props.onProsConsChange(type, index, value)}
                            label={item}
                            valuesArr={props.columns[item]}
                            key={i}
                        />
                    )
                })
            }
        </div>
    );
};

export default ProsCons;