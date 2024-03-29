import React, {Component} from 'react';
class TodoItem extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this) //now this.handleClick's "this" is bind to TodoItem
    }
    render() {
        const {content} = this.props
        return (
            <div onClick={this.handleClick}>
                {content}
            </div>
        )
    }
    handleClick() {
        const {deleteItem, index} = this.props
        console.log(index)
        console.log(1)
        deleteItem(index)
    }

}

export default TodoItem;