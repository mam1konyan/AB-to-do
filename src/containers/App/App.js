import React, { Component } from 'react';
import Columns from '../../components/Columns/Columns';
import { connect } from 'react-redux';

class App extends Component {

  ColumnsChildChangeHandler = (type, index, value) => {
    
    if (value.length !== 0) {

      if (index === this.props.columns[type].length - 1) {
        this.props.onAddToColumn(value, index, type);
      } else {
        this.props.onEditColumn(value, index, type);
      }

    } else {
      this.props.onRemoveFromColumn(value, index, type);
    }
    
  }

  dragNdropHandler = (type, finalType, index) => {
    this.props.ondragNdrop(type, finalType, index);
  }

  render() {
    return (
      <div className="table__body">
        <div className="table__title">
          {this.props.title}
        </div>
        <Columns 
          onProsConsChange={(type, index, value) => this.ColumnsChildChangeHandler(type, index, value)}
          onDragNdrop={(type, finalType, index) => this.dragNdropHandler(type, finalType, index)}
          columns={this.props.columns}
        /> 
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    title: state.headerText,
    columns: state.columns
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onAddToColumn: (label, index, type) => dispatch({ type: 'ADD_TO_COLUMN', rowLabel: label, rowIndex: index, columnType: type }),
    onEditColumn: (label, index, type) => dispatch({ type: 'EDIT_COLUMN', rowLabel: label, rowIndex: index, columnType: type }),
    onRemoveFromColumn: (label, index, type) => dispatch({ type: 'REMOVE_FROM_COLUMN', rowLabel: label, rowIndex: index, columnType: type }),
    ondragNdrop: (type, finalType, index) => dispatch({ type: 'DRAG_FROM_COLUMN', beforeType: type, finalType: finalType, index: index })
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
