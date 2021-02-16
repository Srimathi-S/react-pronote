import React, { Component } from 'react';

class Editor extends Component {
    constructor(props)
    {
        super(props);
        this.handleChange=this.handleChange.bind(this);
        this.state=
        {
            value: ''
        };

    }
    handleChange(change)
    {
        console.log(change.target.value);
        this.setState({value:change.target.value});
        console.log(this.state.value);
    }
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="input">
                        <h3>Input</h3>
                        <textarea className="input-text" onChange={this.handleChange} defaultValue={this.state.value}></textarea>
                    </div>
                    <div className="output">
                        <h3>Pro Note</h3>
                        <div className="output-text">{this.state.value}</div>
                    </div>                
                </div>
            </React.Fragment>
        );
    }
}

export default Editor;