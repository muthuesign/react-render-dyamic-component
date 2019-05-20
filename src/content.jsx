import React, { Component } from 'react';

class Content extends Component {
    render() {
        return (
            <div>
                <this.props.component.tag inputText={this.props.component.value}></this.props.component.tag>
            </div>
        );
    }
}

export default Content;