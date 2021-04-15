import React, { Component } from "react";
import Header from "../components/Header";
import List from "../components/List";
import Inputbox from "../components/Inputbox";
import Footer from "../components/Footer";

class TodoApp extends Component {
    constructor() {
        super();
        this.state = {
            items: [],
            type: "All",
            inputValue: "",
        };
    }

    onSubmit = (event) => {
        if(event.key === 'Enter' && this.state.inputValue !== "")
        {
            let tempItems = [...this.state.items];
            tempItems.push({content: this.state.inputValue, done_or_not: false});
            this.setState({items: tempItems, inputValue: ""});
        }
    }

    onInputChange = (event) => {
        this.setState({inputValue: event.target.value});
    }

    onItemChange = (item) => {
        console.log(item.content);
        let temp_items = [...this.state.items];
        let index = temp_items.indexOf(item);
        temp_items[index].done_or_not = !item.done_or_not;
        this.setState({items: temp_items});
    }

    onItemDelete = (item) => {
        console.log(item.content);
        let temp_items = [...this.state.items];
        let index = temp_items.indexOf(item);
        temp_items.splice(index, 1);
        this.setState({items: temp_items});
    }

    changeShownType = (type) => {
        this.setState({type: type});
    }

    clearCompleted = () => {
        let temp_items = [...this.state.items];
        temp_items = temp_items.filter(item => !item.done_or_not);
        this.setState({items: temp_items});
    }

    render() {
        let shownItems = [];
        if(this.state.type === "Active"){
            shownItems = this.state.items.filter(item => !item.done_or_not);
        }else if(this.state.type === "Completed"){
            shownItems = this.state.items.filter(item => item.done_or_not);
        }else{
            shownItems = this.state.items;
        }
        console.log("App");
        console.log(this.state.items);
        const undone_count = this.state.items.filter(item => item.done_or_not).length;
        return (
            <div id="root" className="todo-app__root">
                <Header text="todos" />
                <section className="todo-app__main">
                    <Inputbox inputValue={this.state.inputValue} inputChange={this.onInputChange} inputSubmit={this.onSubmit}/>
                    <List items = {shownItems} onItemChange = {this.onItemChange} onItemDelete = {this.onItemDelete}/>
                </section>
                <Footer undone_count={undone_count} item_count={this.state.items.length} changeShownType={this.changeShownType} clearCompleted={this.clearCompleted}/>
            </div>
        );
    }
}

export default TodoApp;
