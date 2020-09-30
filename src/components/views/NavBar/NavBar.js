import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        let lists = [];
        let data = this.props.data;
        let i = 0;

        while(i < data.length) {
            lists.push(
                <li key={data[i].id}>
                    <a onClick={(e)=> {
                        e.preventDefault();  //이벤트를 막는다.
                        this.props.onChangePage(e.target.dataset.id);
                    }}  href={"/content/" + data[i].id}
                        data-id={data[i].id}
                    > 
                        {data[i].title} 
                    </a>
                </li> 
            )
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