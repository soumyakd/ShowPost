import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import styled from 'styled-components'

import Post from './components/Post'
import Publish from './components/Publish'

const Button = styled.button`
  color: blue;
  font-size: 16px;
  margin: 1 px;
  padding: 5px 20px;
  border: 2px solid black;
  border-radius: 3px;
`;

function App() {
  return (
      <div className= 'form-label'>
        <h1 style= {{textAlign: 'center'}}> Welcome </h1>
        <BrowserRouter> 
              <div>     
                  <Link to= '/posts'><Button style= {{marginLeft:'400px'}}>New Post</Button></Link>
                  <Link to= '/publish'><Button style={{marginLeft: '500px'}}>Published</Button></Link>
              </div>
        
              <Switch>
                <Route path = '/posts' component = {Post}  exact = {true}/>
                <Route path = '/publish' component = {Publish} />
              </Switch>
      </BrowserRouter>  
      </div>
  )
}

export default App


