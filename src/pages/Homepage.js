import React from "react";
import Item from "../components/Item";
import DropWrapper from "../components/DropWrapper";
import Col from "../components/Col";
import { data, tableheader } from "../data";
import UndoRedoControl from "../components/UndoRedoControl";


class Homepage extends React.Component  {
    
    constructor(props) {
        super(props);
        this.state ={
            past: [],
            // Current state value
            present: localStorage.getItem('savediteration') ?JSON.parse(localStorage.getItem('savediteration')):data,
            // Will contain "future" state values if we undo (so we can redo)
            future: []
        } 
    }
    
         
    onDrop = async(item, status) => {
        alert(JSON.stringify(this.state.present));    
        this.setState({past:[...this.state.past,this.state.present]})
        if (item.status === 'Reward') {
            await this.onAddItem(item,status);
        }
        else {
            item.status = status;
            let data = [...this.state.present];
            data.splice(-1,1,item);
            await this.setState({present:data});
        }
        let newItems = [...this.state.present];
        alert(JSON.stringify(newItems));
        newItems.filter(i => i.id !== item.id).concat({ ...item, status });
        this.setState({present : newItems,future:[]});
    };
    
    onAddItem = async (item,status) => {
            
        const highestId = Math.max.apply(Math, this.state.present.map(i => i.id));
            
        const data = {
            id: highestId +1,
            status: status,
            action: "default",
            title: item.title,
            content: item.content,
        };  
        const newItems = [...this.state.present,data];
        await this.setState({present:newItems});
    };
    
    Onremove = async(item) =>{
        
        let newItems = [...this.state.present];
        this.setState({past:[...this.state.past,this.state.present]})
        let data = newItems.filter(i => i.id !== item.id);
        await this.setState({present : data});

    }

    onUndo = () =>{
        const canUndo = this.state.past.length !== 0;
        if(canUndo){
            const previous = this.state.past[this.state.past.length - 1];
            const newPast = this.state.past.slice(0, this.state.past.length - 1);
            this.setState({
                past: newPast,
                present: previous,
                future: [this.state.present,...this.state.future]
            });
        }
        
    }
        
    onRedo = () => {
        const canRedo = this.state.future.length !== 0;
        if(canRedo){
            const next = this.state.future[0];
            const newFuture = this.state.future.slice(1);
            this.setState({
                past: [...this.state.past, this.state.present],
                present: next,
                future: newFuture
            });
        }
    }

    onSave = e =>{
        localStorage.setItem('savediteration', JSON.stringify(this.state.present));
    }
    
    render() {
        return (
            <div className = "container">
                <h2 className = "Header">Rewards with Categories</h2>
                <div className={"row"}>
                    {tableheader.map((row,index) => {
                        return (
                            <div key={row.status} className={"col-wrapper"}>
                                <div className={"col-group"}>
                                    <p className="col-icon">{row.icon}</p>
                                    <p className={"col-header"}>{row.title}</p>
                                </div>
                                <DropWrapper className ={`status-${row.status}`} onDrop={this.onDrop} status={row.status}>
                                    <Col>
                                        {this.state.present
                                            .filter(i => i.status === row.status)
                                            .map(i => (
                                                <Item
                                                    key={i.id}
                                                    item={i}
                                                    data-testid="rewardItem"
                                                    Onremove= {this.Onremove}
                                                
                                                />
                                            ))
                                        }
                                    </Col>
                                </DropWrapper>
                            </div>
                        );
                    })}
                </div>
                <UndoRedoControl onUndo = {this.onUndo} onRedo = {this.onRedo} onSave = {this.onSave}/>
            </div>
        );
    };
}

export default Homepage;