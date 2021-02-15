import React from "react";

import TableRow from "@material-ui/core/TableRow"
import TableCell from "@material-ui/core/TableCell"
import Table from "@material-ui/core/Table"
import TableHead from "@material-ui/core/TableHead"
import TableBody from "@material-ui/core/TableBody"
import Button from "@material-ui/core/Button"

import Delete from "@material-ui/icons/Delete"

import Topbar from "../Topbar/Topbar.js"



const PostonRow = (props) =>{
    console.log(props.posts)
    return(
        props.posts.map((item,index) => (
            <TableRow key={index}>
                <TableCell key="postid">{item.PostID}</TableCell>
                <TableCell key="authorid">{item.AuthorID}</TableCell>
                <TableCell key="name1">{item.AuthorFirstName}</TableCell>
                <TableCell key="name2">{item.AuthorLastName}</TableCell>
                <TableCell key="date">{item.SubmissionDate}</TableCell>
                <TableCell key="content">{item.Content}</TableCell>
                <TableCell key="delete"><Button variant="contained" color="primary"><Delete />Delete</Button></TableCell>
            </TableRow>
        ))
    )
}

class Posts extends React.Component{
    constructor(){
        super()
        this.state={
            posts:[
                {
                    PostID:234,
                    AuthorID:29438,
                    AuthorFirstName:"asgdoin",
                    AuthorLastName:"aoing",
                    SubmissionDate:"2021-02-14",
                    Content:"aodignasefi"
                },
                {
                    PostID:234,
                    AuthorID:29438,
                    AuthorFirstName:"asgdoin",
                    AuthorLastName:"aoing",
                    SubmissionDate:"2021-02-14",
                    Content:"aodignasefi"
                },
                {
                    PostID:234,
                    AuthorID:29438,
                    AuthorFirstName:"asgdoin",
                    AuthorLastName:"aoing",
                    SubmissionDate:"2021-02-14",
                    Content:"aodignasefi"
                },
                {
                    PostID:234,
                    AuthorID:29438,
                    AuthorFirstName:"asgdoin",
                    AuthorLastName:"aoing",
                    SubmissionDate:"2021-02-14",
                    Content:"aodignasefi"
                },
            ]
        }
    }

    render(){
        return(
            <>
            <Topbar />
            <Table style={{width:"80%",marginLeft:"auto",marginRight:"auto"}}>
                <TableHead key="head">
                    <TableRow>
                        <TableCell key="id">PostID</TableCell>
                        <TableCell key="author">AuthorID</TableCell>
                        <TableCell key="name1">FirstName</TableCell>
                        <TableCell key="name2">LastName</TableCell>
                        <TableCell key="date">SubmissionDate</TableCell>
                        <TableCell key="content">Content</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody key="body">
                    <PostonRow posts={this.state.posts}/>
                </TableBody>
            </Table>
            </>
        )
    }
}


export default Posts;