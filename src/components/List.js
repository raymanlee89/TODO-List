import React, { Component } from "react";
import Item from "./Item";

class List extends Component{
    constructor() {
        super();
        this.onItemChange = this.onItemChange.bind(this);
        this.onItemDelete = this.onItemDelete.bind(this);
    }

    onItemChange(item) {
        this.props.onItemChange(item);
    }
    
    onItemDelete(item) {
        this.props.onItemDelete(item);
    }

    render(){
        // console.log("List");
        // console.log(this.props.items);
        const ItemArray = this.props.items.map((item, i)=>{
            return <Item key={i} item={item} id={i} onItemChange={this.onItemChange} onItemDelete={this.onItemDelete}/>;
        });
        return(
            <ul className="todo-app__list" id="todo-list">
                 {ItemArray}
            </ul>
        );
    }
}

export default List;