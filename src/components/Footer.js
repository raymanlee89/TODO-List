import React, { Component } from "react";
import ClearCompletedButton from "../components/ClearCompletedButton";

class Footer extends Component{
    constructor(){
        super();
        this.state = {
            style: [{border:"3px orange double"}, {}, {}]
        }
    }

    clearCompleted = () => {
        this.props.clearCompleted();
    }

    changeShownType = (type) => {
        if(type === "Active"){
            this.setState({style: [{}, {border:"3px orange double"}, {}]});
        }else if(type === "Completed"){
            this.setState({style: [{}, {}, {border:"3px orange double"}]});
        }else{
            this.setState({style: [{border:"3px orange double"}, {}, {}]});
        }
        this.props.changeShownType(type);
    }

    render(){
        if(this.props.item_count === 0){
            return(
                <div></div>
            );
        }else{
            return(
                <footer className="todo-app__footer" id="todo-footer">
                    <div className="todo-app__total">{this.props.item_count - this.props.undone_count} left</div>
                    <ul className="todo-app__view-buttons">
                        <button onClick={() => this.changeShownType("All")} style={this.state.style[0]}>All</button>
                        <button onClick={() => this.changeShownType("Active")} style={this.state.style[1]}>Active</button>
                        <button onClick={() => this.changeShownType("Completed")} style={this.state.style[2]}>Completed</button>
                    </ul>
                    <ClearCompletedButton undone_count={this.props.undone_count} clearCompleted={this.clearCompleted}/>
                </footer>
            );
        }
    }
}

export default Footer;