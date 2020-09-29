import React, { Component } from 'react';
import './App.css';

class Subject extends Component {
    render() {
        return (
            <header>
                <h1>{this.props.title}</h1>
                {this.props.sub}
            </header>
        );
    }
}
class NavBar extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li href="1.html">HTML</li>
                    <li href="2.html">CSS</li>
                    <li href="3.html">JavaScript</li>
                </ul>
            </nav>
        );
    }
}

class Content extends Component {
    render() {
        return (
            <article>
                <h2>HTML</h2>
                HTML is HyperText Markup Language.
            </article>

        );
    }
}
class App extends Component {
    render() {
        return (
            <div className="App">
                <Subject title="WEB" sub="world wide web!"></Subject>
                <NavBar></NavBar>
                <Content></Content>
            </div>
        );
    }
}

export default App;