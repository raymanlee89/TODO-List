import React, { Component } from "react";

class Item extends Component {
    constructor() {
        super();
    }

    onSwitch = () => {
        this.props.onItemChange(this.props.item);
    }

    render(){
        let style = {};
        let checked = false;
        if(this.props.item.done_or_not){
            style = {textDecoration: "line-through", opacity: 0.5};
            checked = true;
        }
        return(
            <li className="todo-app__item">
                <div className="todo-app__checkbox">
                    <input id={this.props.id} type='checkbox' onChange={this.onSwitch} checked={checked}/>
                    <label htmlFor={this.props.id}/>
                </div>
                <h1 className="todo-app__item-detail" style={style}>{this.props.item.content}</h1>
                <img alt="" src="./img/x.png" className="todo-app__item-x" onClick={() => this.props.onItemDelete(this.props.item)}/>
             </li>
        );
    }
}

export default Item;