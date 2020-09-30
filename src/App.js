import React, { Component } from 'react';
import Subject from './components/views/Subject/Subject'
import CRUD from './components/views/CRUD/CrudManage'
import NavBar from './components/views/NavBar/NavBar'
import CreateContent from './components/views/CRUD/CreateContent'
import ReadContent from './components/views/CRUD/ReadContent';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mode: 'read',
            selected_content_id: 1,
            subject: { title: 'WEB', sub: 'world wide web' },
            welcome: { title: 'Welcome', desc: 'Hello, React!!' },
            contents: [
                { id: 1, title: 'HTML', desc: 'HTML is for information' },
                { id: 2, title: 'CSS', desc: 'CSS is for design' },
                { id: 3, title: 'JavaScript', desc: 'JavaScript is interactive' }
            ]
        }
    }

    render() {
        console.log('render app');

        let _title, _desc = null;
        let crud_element = null;

        if (this.state.mode === 'welcome') {
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
        } else if (this.state.mode === 'read') {
            // let data = this.state.contents[this.state.selected_content_id - 1];

            // _title = data.title;
            // _desc = data.desc;

            let i = 0;

            while (i < this.state.contents.length) {
                let data = this.state.contents[i];
                if (data.id === this.state.selected_content_id) {
                    _title = data.title;
                    _desc = data.desc;
                    break;
                }

                i += 1;
            }
        }

        switch (this.state.mode) {
            case "create":
                crud_element = <CreateContent onCreate={(data) => {
                    let _content = this.state.contents.concat({
                        id: this.state.contents.length + 1,
                        title: data.title,
                        desc: data.desc
                    });
                    
                    this.setState({ contents: _content })
                }}></CreateContent>;
                break;
            
            case "welcome":
            case "read":
                crud_element = <ReadContent title={_title} desc={_desc}></ReadContent>;
                break;

            case "update":
                break;

            case "delete":
                break;
            default:
                break;
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
                <CRUD onChangeMode={(nMode) => {
                    this.setState({
                        mode: nMode
                    })
                }}
                ></CRUD>
                <NavBar
                    data={this.state.contents}
                    onChangePage={(id) => {
                        this.setState({
                            mode: 'read',
                            selected_content_id: Number(id)
                        })
                    }}
                >
                </NavBar>

                {crud_element}
            </div>
        );
    }
}

export default App;