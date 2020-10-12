import React from 'react'
import {connect} from 'react-redux'
import {addPosts} from '../actions/postsAction'

class Post extends React.Component{
    constructor(){
        super()
        this.state = {
            title: '',
            text: ''
        }
    }

    handleChange = (e) => {
        this.setState ({
            [e.target.name] : e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault() 
        const newPost = {
            title: this.state.title, 
            text: this.state.text
        }
        this.props.dispatch(addPosts(newPost))
        this.setState({
            title: '',
            text: ''
        })
    }

    render() {
        return (
            <div className= 'container'>
                <br/>
                <center>
                <div className= 'row' style={{backgroundColor: '#D3D3D3'}}>
                    <h2 style={{color: 'crimson'}}> Add Post </h2> 
                    <form onSubmit={this.handleSubmit}> 

                        <div className='form-label-group'>
                            <label htmlFor='title'> Title </label> 
                            <input type= 'text' 
                                    id= 'title'
                                    placeholder= 'Enter Title' 
                                    name= 'title'
                                    value= {this.state.title} 
                                    onChange= {this.handleChange} 
                                    required
                                    className= 'form-control' />
                        </div>
                        <br/>

                        <div className='form-label-group'>
                            <label htmlFor='text'> Text </label> 
                            <textarea row='5' 
                                    id= 'text'
                                    placeholder= 'Enter Description'
                                    name= 'text'
                                    value= {this.state.text} 
                                    onChange= {this.handleChange}
                                    required
                                    className= 'form-control' />
                        </div> 
                        <br/>
                                    
                        <input type='submit' value='Publish' class='btn btn-primary'/>
                    </form>
                </div> 
                </center>
            </div> 
        )
    }
}

export default connect()(Post)




