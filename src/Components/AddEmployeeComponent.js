import React,{useState,useEffect} from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom';
import EmployeeService from '../Service/EmployeeService';



const AddEmployeeComponent = () => {


    const [firstName,setFirstName]= useState('')
    const [lastName,setLastName]= useState('')
    const [email,setEmail]= useState('')
    const {id} = useParams();
    const history = useNavigate();

    useEffect(() => {

        EmployeeService.getEmployeeById(id).then((response) =>{
            setFirstName(response.data.firstName)
            setLastName(response.data.lastName)
            setEmail(response.data.email)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () =>{
        if(id){
           return <h1>update the employee details</h1>
        }
        else{
           return <h1>create employee details</h1>
        }
    }

    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        const employee ={firstName,lastName,email};
        if(id){
            EmployeeService.updateEmployeeById(id,employee).then((response)=>{
            console.log(response)
            history('/employees')
        }).catch(error=> console.log(error))
        }
        else{
            EmployeeService.createEmployee(employee).then((response)=>{
                console.log(response)
                history('/employees')}).catch(error=> console.log(error))
        }
    }
  return (
    <div>
        
        <div className = "container">
            <div className = "row">
                <div className = "card col-md-6 offset-md-3 offset-md-3">
                       {
                           title()
                       }
                        <div className = "card-body">
                            <form>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> First Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter first name"
                                        name = "firstName"
                                        className = "form-control"
                                        value = {firstName}
                                        onChange = {(e) => setFirstName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Last Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter last name"
                                        name = "lastName"
                                        className = "form-control"
                                        value = {lastName}
                                        onChange = {(e) => setLastName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Email Id :</label>
                                    <input
                                        type = "email"
                                        placeholder = "Enter email Id"
                                        name = "emailId"
                                        className = "form-control"
                                        value = {email}
                                        onChange = {(e) => setEmail(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateEmployee(e)} >Submit </button>
                                <Link to="/employees" className="btn btn-danger"> Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>
                
                </div>
                
            </div>
  )
}

export default AddEmployeeComponent