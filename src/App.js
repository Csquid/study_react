import React, { Component } from 'react';
import Subject from './components/views/Subject/Subject'
import NavBar from './components/views/NavBar/NavBar'
import Content from './components/views/Content/Content'
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            subject: { title: 'WEB', sub: 'world wide web' },
            contents: [
                {id:1, title: 'HTML', desc: 'HTML is HyperText ...'},
                {id:2, title: 'CSS', desc: 'CSS is for design'},
                {id:3, title: 'JavaScript', desc: 'JavaScript is interactive ...'}
            ]
        }
    }

    render() {
        return (
            <div className="App">
                <Subject 
                    title={this.state.subject.title} 
                    sub={this.state.subject.sub}>
                </Subject>
                <NavBar data={this.state.contents}></NavBar>
                <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
            </div>
        );
    }
}

export default App;