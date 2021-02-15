// import logo from './logo.svg';
import './App.css';
import React from 'react';

import Topbar from "./component/Topbar/Topbar.js";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';



const Posts = props => {
    console.log(props.posts)
    return (
        props.posts.map((item,index) => (
                <Container key={index}>
                <Typography component="div" style={{ backgroundColor: '#cfe8fc', width:"60%", marginLeft:"auto", marginRight:"auto"}}>
                  <h1 key="title">{item.Title}</h1>
                  <img key="image"src={item.ImageURL} alt={item.ImageURL} />
                  <p key="content">{item.Content}</p>
                  <legend>{item.AuthorID}</legend>
                </Typography>
                </Container>
        ))
        
           
        
    )
}
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component{
  constructor(){
    super()
    this.state={
        posts:[
            {
                Title:"title1",
                AuthorID:"4352",
                AuthorFirstName:"sdoaing",
                AuthorLastName:"sdoaing",
                Content:"this is a paragraph of posts",
                ImageURL:["www.asgoi.oisgan.jpg"]
            },
            {
                Title:"title2",
                AuthorID:"4352",
                AuthorFirstName:"sdoaing",
                AuthorLastName:"sdoaing",
                Content:"this is a paragraph of posts",
                ImageURL:["www.asgoi.oisgan.jpg"]
            },
            {
                Title:"title3",
                AuthorID:"4352",
                AuthorFirstName:"sdoaing",
                AuthorLastName:"sdoaing",
                Content:"this is a paragraph of posts",
                ImageURL:["www.asgoi.oisgan.jpg"]
            },
            {
                Title:"title4",
                AuthorID:"4352",
                AuthorFirstName:"sdoaing",
                AuthorLastName:"sdoaing",
                Content:"this is a paragraph of posts",
                ImageURL:["www.asgoi.oisgan.jpg"]
            },
            {
                Title:"title5",
                AuthorID:"4352",
                AuthorFirstName:"sdoaing",
                AuthorLastName:"sdoaing",
                Content:"this is a paragraph of posts",
                ImageURL:["www.asgoi.oisgan.jpg"]
            },
        ]
    }
  }





  render(){
    return (
      <div className="App">
        <Topbar key="topbar" />
        <Posts key="post" posts={this.state.posts} />
      </div>
    );
  }

 

}

export default App;
