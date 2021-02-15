import React, { useState } from "react";

import Table from "@material-ui/core/Table"
import TableHead from "@material-ui/core/TableHead"
import TableBody from "@material-ui/core/TableBody"

import TableCell from "@material-ui/core/TableCell"
import Input from "@material-ui/core/Input"

import TableRow from "@material-ui/core/TableRow"

import Topbar from "../Topbar/Topbar.js";
import Button from '@material-ui/core/Button';

import Delete from "@material-ui/icons/Delete";
import Edit from "@material-ui/icons/Edit";
import Save from "@material-ui/icons/Save";



class Student extends React.Component{
    constructor(){
        super()
  
        this.state={
            currentinput:{
                FisrtName:"",
                LastName:"",
                ID:0,
                Posts:0,
            },
            person:[
                {FisrtName:"asdf",
                LastName:"asd",
                ID:1324,
                Posts:5432},
                {FisrtName:"asdf",
                LastName:"sdf",
                ID:1234,
                Posts:5234},
                {FisrtName:"sdf",
                LastName:"asdf",
                ID:432,
                Posts:5243},
                {FisrtName:"sadf",
                LastName:"hfd",
                ID:432,
                Posts:453},
                {FisrtName:"dfs",
                LastName:"adfs",
                ID:1342,
                Posts:543},
            ]
        }
        // this.Input = this.Input.bind(this)

    }    

    Input = () => {
       return(
           <TableRow>
            <TableCell><Input type="text" key="inputtext"/></TableCell>
           </TableRow>
       )
    
    }

    deleteAction = (name) => {
        console.log(name)
        const person = this.state.person.filter(item => item.name!== name)
        this.setState({person:person})
    }

    editeAction = (person) => {

        document.getElementById('name').value = person.name;
        document.getElementById('major').value = person.major;
        document.getElementById('English').value = person.English;
        document.getElementById('Math').value = person.Math;

        document.getElementById('Save').disabled = true;
        // save.disable = true
        // console.log(save)

    }

    // Input(){
    //     return <input type="text"/>
    // }

    // Input = <input type="text" />

    render(){



        return(
            <>
            <Topbar key="topbar"/>
            <div key="content" style={{marginLeft:"auto",marginRight:"auto",width:"80%"}}>
            <Table key="table" >
                <TableHead key="tablehead">
                    <TableRow key="row" >
                    <TableCell key="name">First Name</TableCell>
                    <TableCell key="major">Last Name</TableCell>
                    <TableCell key="english">Student ID</TableCell>
                    <TableCell key="math">Number of Posts</TableCell>
                    {/* <TableCell key="physics">Phy</TableCell> */}
                    </TableRow>
                </TableHead>
                <TableBody key="tablebody">
                {
                this.state.person.map((person,index) => (
                    <TableRow key={index} >
                    <TableCell key="firstName" >{person.FisrtName}</TableCell>
                    <TableCell key="lastName">{person.LastName}</TableCell>
                    <TableCell key="ID">{person.ID}</TableCell>
                    <TableCell key="Post">{person.Posts}</TableCell>
                    {/* <TableCell key="physics1">{person.Physics}</TableCell> */}
                    <TableCell><Button color="primary" variant="contained" onClick={()=>this.deleteAction(person.name)}><Delete />Delete</Button>
                    </TableCell>
                    <TableCell><Button color="primary" variant="contained" onClick={()=>this.editeAction(person)}><Edit />Edit</Button>
                    </TableCell>
                    </TableRow>

                ))
                }
                <TableRow key="inputrow">
                    <TableCell key="firstName"><Input id="firstName" placeholder="Fisrt Name" onChange={(e)=> {this.setState({currentinput: {...this.state.currentinput, FirstName:e.target.value}})}}/></TableCell>
                    <TableCell key="lastName"><Input id="lastName" placeholder="Last Name"onChange={(e)=> {this.setState({currentinput: {...this.state.currentinput, LastName:e.target.value}})}}/></TableCell>
                    <TableCell key="ID"><Input id="ID"placeholder="00"onChange={(e)=> {this.setState({currentinput: {...this.state.currentinput, ID:e.target.value}})}}/></TableCell>
                    {/* <TableCell key="Post"><Input id="Post" placeholder="00"onChange={(e)=> {this.setState({currentinput: {...this.state.currentinput, Posts:e.target.value}})}}/></TableCell> */}
                    {/* <TableCell key="phys"><Input id="Physics" placeholder="00"onChange={(e)=> {this.setState({currentinput: {...this.state.currentinput, Physics:e.target.value}})}}/></TableCell> */}
                    <TableCell><Button disabled={this.SaveDisplay} id="Save"color="primary" variant="contained" onClick={()=> this.setState({person:[...this.state.person, this.state.currentinput]})}><Save/>Save</Button></TableCell>
                </TableRow>
                </TableBody>
            </Table>
            </div>
            </>
            )
    }
  
}

export default Student;