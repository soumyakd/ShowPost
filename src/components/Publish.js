import React from 'react'
import {connect} from 'react-redux'

class Publish extends React.Component{
    state= {
        search: ''
    }
    searchOnChange = (e) => {
        this.setState ({
            [e.target.name] : e.target.value
        })
    }

    render(){
        return(
                <div className= 'container'> 
                    <center>
                        <h2 style={{color: 'crimson'}}> Search </h2>
                        <label htmlFor= 'search'> </label>
                        <input type= 'text' 
                                placeholder= 'Search by Title'
                                id= 'search'
                                name= 'search'
                                value={this.state.search} 
                                onChange={this.searchOnChange}/>
                        <br/>
                    
                        <div className='search' style= {{backgroundColor: '#D3D3D3'}}>
                        {
                            this.props.posts.filter(post => post.title.includes(this.state.search)).map((ele, i)=>{
                                return(
                                    <div className='card' key={i}>
                                        <div style={{position:'relative', textAlign: 'center'}}>
                                            <h1> {ele.title} </h1>
                                            <p> {ele.text} </p>
                                        </div>   
                                    </div>
                                )
                            })
                        }
                        </div>
                    </center>
                </div> 
            )
        }
}

const mapStateToProps = (state) => {
    return{
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Publish)