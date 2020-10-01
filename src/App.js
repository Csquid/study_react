import React, { Component } from 'react';
import Subject from './components/views/Subject/Subject'
import CRUD from './components/views/CRUD/CrudManage'
import NavBar from './components/views/NavBar/NavBar'
import CreateContent from './components/views/CRUD/CreateContent'
import UpdateContent from './components/views/CRUD/UpdateContent'
import ReadContent from './components/views/CRUD/ReadContent';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.max_content_id = 3;
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
        console.log('> render app');

        let _title, _desc, _id = null;
        let crud_element  = null;

        if (this.state.mode === 'welcome') {
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
        } else if (this.state.mode === 'read' || this.state.mode === 'update' ) {
            let i = 0;

            while (i < this.state.contents.length) {
                let data = this.state.contents[i];
                if (data.id === this.state.selected_content_id) {
                    _title = data.title;
                    _desc = data.desc;
                    _id = data.id;
                    break;
                }

                i += 1;
            }
        }

        switch (this.state.mode) {
            case "create":
                crud_element = <CreateContent onCreate={(data) => {
                    this.max_content_id += 1;
                    let _content = this.state.contents.concat({
                        id: this.max_content_id,
                        title: data.title,
                        desc: data.desc
                    });

                    this.setState({ 
                        contents: _content,
                        mode: 'read',
                        selected_content_id: this.max_content_id
                    });
                }}></CreateContent>;
                break;

            case "welcome":
            case "read":
                crud_element = <ReadContent id={_id} title={_title} desc={_desc}></ReadContent>;
                break;

            case "update":
                crud_element = <UpdateContent 
                    title={_title} 
                    desc={_desc} 
                    id={_id}
                    onUpdate = {(data) => {
                        let setData = Array.from(this.state.contents);
                        for(let i = 0; i < setData.length; i++) {
                            if(setData[i].id === data.id) {
                                setData[i] = {
                                    id: data.id,
                                    title: data.title,
                                    desc: data.desc
                                }
                                break;
                            }
                        }
                        
                        this.setState({
                            contents: setData,
                            mode: 'read'
                            // selected_content_id: data.id
                        });
                    }}
                ></UpdateContent>
                break;

            case "delete":
                if(window.confirm('really?')) {
                    let _data = this.state.contents;
                    
                    for(let i = 0; i < this.state.contents.length; i++) {
                        if(this.state.contents[i].id === this.state.selected_content_id) {
                            _data.splice(i, 1);
                            break;
                        }
                    }

                    this.setState({
                        contents: _data,
                        mode: 'read'
                    });

                    // this.max_content_id -= 1;             
                } else {
                    this.setState({
                        mode: 'read'
                    })
                }
                // for(let i = 0; i < )
                // crud_element = <DeleteContent>
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