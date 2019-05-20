import React, { Component } from 'react';

class InsertText extends Component {
    render() {
        return (
            <h1>
                Render me dynamically with input as: {this.props.inputText}
            </h1>
        );
    }
}

export default InsertText;