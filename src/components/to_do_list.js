import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { addListItem, getListItems } from '../actions';
import { connect } from 'react-redux';
import { renderInput } from '../helpers';

class ToDoList extends Component {

    addItemToList = (values) => {
        this.props.addListItem(values);
        this.props.reset();
        this.props.getListItems();
        console.log(this.props.itemList.list)
    }

    renderItems = () => {
        const { itemList } = this.props.itemList.list;
        console.log("itemList:", itemList)
        if (itemList) {
            return itemList.map((i) => {
                var itemDetail = i;
                return (<div key={itemDetail.timeStamp} className="collection-item highlight">
                    <span class="badge red white-text hoverable">Delete</span>
                    {itemDetail.itemName}
                </div>)
            })
        }
    }

    render() {

        const { handleSubmit } = this.props;
        return (

            <div className="row">
                <div className="col-s8 offset-2">
                    <div className="row">
                        <form className="col s8 offset-s2 form-style" action="" onSubmit={handleSubmit(this.addItemToList)}>
                            <Field name="itemName" id="itemName" component={renderInput} label="Item Name:" />
                            <div className="row">
                                <div className="s12 right-align">
                                    <button className="btn #ffd600 yellow accent-4">Add Task</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="collection">
                    {this.renderItems()}
                </div>

            </div>
        )
    }
}

function validate(values) {
    const { itemName } = values;
    const errors = {};

    if (!itemName) {
        errors.itemName = 'Item name cannot be blank.';
    }

    return errors;
}

function mapStateToProps(state) {
    return {
        itemList: state
    }
}

ToDoList = connect(mapStateToProps, {
    addListItem: addListItem,
    getListItems: getListItems
})(ToDoList);

export default reduxForm({
    form: 'add-item',
    validate: validate
})(ToDoList);



