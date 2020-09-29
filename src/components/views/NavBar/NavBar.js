import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        let lists = [];
        let data = this.props.data;
        let i = 0;

        while(i < data.length) {
            lists.push(<li key={data[i].id}><a href={"/content/" + data[i].id + ".html"}>{data[i].title}</a></li> )
            i += 1;
        }
        return (
            <nav>
                <ul>
                    {lists}
                </ul>
            </nav>
        );
    }
}

export default NavBar