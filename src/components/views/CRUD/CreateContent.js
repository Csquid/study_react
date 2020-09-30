import React, { Component } from 'react';

class CreateContent extends Component {
    render() {
        console.log('render create content')
        return (
            <div>
                <form action="/create_process" method="post" onSubmit={(e) => {
                    e.preventDefault();

                    this.props.onCreate({
                        title: e.target.title.value,
                        desc: e.target.desc.value
                    });
                }}>
                    <p>
                        <input type="text" name="title" placeholder="title"></input>
                    </p>
                    <p>
                        <textarea name="desc" placeholder="description"></textarea>
                    </p>
                    <p>
                        <input type="submit"></input>
                    </p>
                </form>
            </div>
        );
    }
}

export default CreateContent;