import React, { Component } from 'react';

class UpdateContent extends Component {
    render() {
        console.log('>> render update content')
        console.log('update', this.props);
        return (
            <div>
                <form action="/update_process" method="post" onSubmit={(e) => {
                    e.preventDefault();

                    this.props.onUpdate({
                        id: this.props.id,
                        title: e.target.title.value,
                        desc: e.target.desc.value
                    });
                }}>
                    <p>
                        <input className="input" type="text" name="title" placeholder="title" defaultValue={this.props.title}></input>
                    </p>
                    <p>
                        <textarea className="input" name="desc" placeholder="description" defaultValue={this.props.desc}></textarea>
                    </p>
                    <p>
                        <input type="submit"></input>
                    </p>
                </form>
            </div>
        );
    }
}

export default UpdateContent;