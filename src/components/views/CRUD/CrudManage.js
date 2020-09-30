import React, { Component } from 'react';

class CRUD extends Component {
    render() {
        console.log('render crud')

        let show_list = [];
        const mode_list = ['create', 'update', 'delete'];

        for(let i = 0; i < mode_list.length; i++) {
            show_list.push(
                <li key={i}>    
                    <a  href={'/CRUD/' + mode_list[i]}
                        onClick={(e)=> {
                            e.preventDefault();
                            this.props.onChangeMode(mode_list[i]);
                    }}>
                        {mode_list[i]}
                    </a>
                </li>
            )
        }
        return (
            <div>
                <ul>
                    {show_list}
                </ul>
            </div>
        );
    }
}

export default CRUD;