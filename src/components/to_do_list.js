import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { addListItem, getListItems, deleteItem } from '../actions';
import { connect } from 'react-redux';
import { renderInput } from '../helpers';
import SingleItem from './single_item';

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.deleteItemFromList = this.deleteItemFromList.bind(this)
    }

    addItemToList = (values) => {
        this.props.addListItem(values);
        this.props.reset();
        this.props.getListItems();
    }

    deleteItemFromList = (itemId) => {
        this.props.deleteItem(itemId);
        this.props.getListItems();
    }

    renderItems = () => {
        const { itemList } = this.props.itemList.list;
        if (itemList) {
            return itemList.map((i) => {
                var itemDetail = i;
                return (<SingleItem key={itemDetail.timeStamp} itemDetail={itemDetail} deleteItem={this.deleteItemFromList} />)
            })
        }
    }

    render() {

        const { handleSubmit } = this.props;
        return (
            <div className="row">

                <form className="form-style" action="" onSubmit={handleSubmit(this.addItemToList)}>
                    <Field name="itemName" id="itemName" component={renderInput} label="Item Name:" />
                    <div className="row">
                        <div className="s12 right-align">
                            <button className="btn yellow white-text">Add Item</button>
                        </div>
                    </div>
                </form>

                <div className="collection">
                    {this.renderItems()}
                </div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        itemList: state
    }
}

ToDoList = connect(mapStateToProps, {
    addListItem: addListItem,
    getListItems: getListItems,
    deleteItem: deleteItem
})(ToDoList);

export default reduxForm({
    form: 'add-item',
})(ToDoList);



