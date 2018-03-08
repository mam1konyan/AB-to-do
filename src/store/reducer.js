const initialState = {
    headerText: 'Should I eat at McDonalds?',
    columns: {
        pros: ['It\'s realy tasty', 'It\'s realy tasty', 'It\'s realy tasty', 'It\'s realy tasty', 'It\'s realy tasty', ''],
        cons: ['Making me fat', 'To expensive', '']
    },
};

const reducer = (state = initialState, action) => {
    const newState = {
        ...state,
    };

    let columns = { ...newState.columns };

    if (action.type === 'ADD_TO_COLUMN') {

        //TO-DO remove part bellow with immutable.js 
        columns[action.columnType] = [...newState.columns[action.columnType]];
        columns[action.columnType][action.rowIndex + 1] = '';
        columns[action.columnType][action.rowIndex] = action.rowLabel;
        
        return { ...newState, columns };
    } else if (action.type === 'EDIT_COLUMN') {
        
        //TO-DO remove part bellow with immutable.js 
        columns[action.columnType] = [...newState.columns[action.columnType]];
        columns[action.columnType][action.rowIndex] = action.rowLabel;

        return { ...newState, columns };
    } else if (action.type === 'REMOVE_FROM_COLUMN') {
        //TO-DO remove part bellow with immutable.js 
        columns[action.columnType] = [...newState.columns[action.columnType]];
        columns[action.columnType].splice(action.rowIndex, 1);

        return { ...newState, columns };
    } else if (action.type === 'DRAG_FROM_COLUMN') {
        const _index = columns[action.finalType].length;

        columns[action.finalType].splice(_index - 1, 1);
        columns[action.finalType][_index] = columns[action.beforeType][action.index];
        columns[action.finalType][_index + 1] = '';
        columns[action.beforeType].splice(action.index, 1);

        return { ...newState, columns };
    }

    return state;
};

export default reducer;