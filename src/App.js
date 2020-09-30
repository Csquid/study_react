import React, { Component } from 'react';
import Subject from './components/views/Subject/Subject'
import NavBar from './components/views/NavBar/NavBar'
import Content from './components/views/Content/Content'
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mode: 'read',
            selected_content_id: 2,
            subject: { title: 'WEB', sub: 'world wide web' },
            welcome: { title: 'Welcome', desc: 'Hello, React!!'},
            contents: [
                {id:1, title: 'HTML', desc: 'HTML is for information'},
                {id:2, title: 'CSS', desc: 'CSS is for design'},
                {id:3, title: 'JavaScript', desc: 'JavaScript is interactive'}
            ]
        }
    }

    render() {
        console.log('App render')
        let _title, _desc = null;

        if(this.state.mode === 'welcome') {
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
        } else if (this.state.mode === 'read') {
            // let data = this.state.contents[this.state.selected_content_id - 1];
            
            // _title = data.title;
            // _desc = data.desc;

            let i = 0;

            while (i < this.state.contents.length) {
                let data = this.state.contents[i];
                if(data.id === this.state.selected_content_id) {
                    _title = data.title
                    _desc = data.desc
                    break;
                }

                i += 1;
            }
        }

        return (
            <div className="App">
                <Subject 
                    title={this.state.subject.title} 
                    sub={this.state.subject.sub}
                    onChangePage={() => {
                        this.setState({
                            mode: 'welcome'
                        })
                    }}
                    >
                </Subject>
                <NavBar 
                    data={this.state.contents}
                    onChangePage = {(id) => {
                        this.setState({
                            mode: 'read',
                            selected_content_id: Number(id)
                        })                        
                    }}
                >
                    
                </NavBar>
                <Content title={_title} desc={_desc}></Content>
            </div>
        );
    }
}

export default App;