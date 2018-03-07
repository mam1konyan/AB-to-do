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
    }

    return state;
};

export default reducer;