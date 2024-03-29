import React, {Component, Fragment} from 'react';
import TodoItem from './TodoItem';
import './style.css';
import PropTypes from 'prop-types'

class TodoList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            inputValue: 'hello world',
            list: ["learn javascript", "learn react"]
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
    }

    render() { //只能return一个元素
        {
            //this is how you write comment using jsx, but has to change line otherwise the bracket will be considered as part of the comment too
        }
        {/* or like this for multiple comment line */}
        return (
            <Fragment>
                <label htmlFor='inputBox'>Please input task to be finishing</label>
                <div>
                    <input
                        id = 'inputBox'
                        className = 'input'
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                    />
                    <button onClick={this.handleBtnClick}>submit</button>
                </div>
                <ul>
                    {this.getTodoItem()}
                </ul>
            </Fragment>
        )
    }

   handleInputChange(e) {
   const value = e.target.value
        this.setState(()=> ({inputValue: value}))
        //console.log(e.target.value);
        //         this.setState({
        //             inputValue: e.target.value
        //         })

   }

  getTodoItem() {
    return this.state.list.map((item, index) => {
        return(
            <TodoItem
                key={index}
                content={item}
                itemIndex={index}
                deleteItem={this.handleItemDelete.bind(this)}
            />
        )
    })
  }
  handleBtnClick() {
  // prevState is like this.state
    this.setState((prevState) => ({
        list: [...prevState.list, prevState.inputValue],
        inputValue: ''
    }))
  }


  handleItemDelete(index) {
    // state is immutable
    // state not allowed to be edited
    // make a copy of the list and modify it

    this.setState((prevState)=> {
        const list = [...prevState.list]
        list.splice(index, 1)
        return {list: list}
    })
  }

}
TodoItem.propsType = {
    content: PropTypes.string,
    deleteItem: PropTypes.func,
    index: PropTypes.number
}


export default TodoList;