import React, { Component } from 'react';

class ReadContent extends Component {
    // 만약 데이터가 업데이트가 되었을때 전과 같은 값이라면 render하지 않는다.
    shouldComponentUpdate(newProps, newState) {
        if(newProps.title === this.props.title) {
            console.log("break");
            return false;       //render을 실행하지 않는다.
        }

        return true;
    }
    render() {
        console.log('render read content');

        return (
            <article>
                <h2>{this.props.title}</h2>
                {this.props.desc}
            </article>
        );
    }
}

export default ReadContent;