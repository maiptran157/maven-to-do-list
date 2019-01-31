import React, { Component } from 'react';

class SingleItem extends Component {
    render() {
        const { itemDetail, deleteItem } = this.props;
        return <div className="collection-item highlight">
            <span className="badge red white-text hoverable" onClick={(event) => {
                event.preventDefault();
                deleteItem(itemDetail)
            }}>Delete</span>
            {itemDetail.itemName}
        </div>
    }
}

export default SingleItem;