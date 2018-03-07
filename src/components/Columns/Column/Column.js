import React from 'react';

const Column = (props) => {

    return (
        <div className="table__childItem">
            <div className="table__row--first">{props.label}</div>
            {
                props.valuesArr.map((item, i) => (
                    <div className="table__row" key={props.label+i}>
                        <span className="table__index">{i + 1}.</span>
                        <input
                            type="text"
                            className="table__input"
                            value={props.valuesArr[i]}
                            onChange={(val) => {
                                props.onProsConsChange(props.label, i, val.target.value);
                            }}
                        />
                    </div>
                ))
            }
        </div>
    )
};

export default Column;