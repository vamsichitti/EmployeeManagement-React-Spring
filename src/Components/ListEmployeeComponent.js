import React,{useState,useEffect} from 'react'
 import {Link} from 'react-router-dom'
import EmployeeService from '../Service/EmployeeService';

const ListEmployeeComponent = () => {

    const [employees,setEmployees]= useState([])

    useEffect(() => {
        getAllEmployees();
    },[])

    const getAllEmployees = () => {
        EmployeeService.getAllEmployees().then((response) => {
            setEmployees(response.data)
            console.log(response );
        }).catch(error =>{
            console.log(error);
        })
    }

    const deleteEmployee = (id) => {
      EmployeeService.deleteEmployeeById(id).then(
        (response) => { getAllEmployees();}
        ).catch(error => console.log(error))
    }
  return (
    <div>
        <center>
            <h1>EmployeesList</h1>
            
        </center>
        <Link className='btn btn-primary' to="/create">Add Employee</Link>
        <table className="table table-bordered">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">FirstName</th>
      <th scope="col">LastName</th>
      <th scope="col">Email</th>
      <th >Actions</th>
    </tr>
  </thead>
  <tbody>
       {
            employees.map(employee =>
                <tr key={employee.id}>
                                <td> {employee.id} </td>
                                <td> {employee.firstName} </td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td><Link className="btn btn-info" to={`/edit/${employee.id}`} >Update</Link>
                                &nbsp;
                                <button className='btn btn-danger' onClick={()=>deleteEmployee(employee.id)}>Delete</button></td>
                </tr>

                )
        }
    
  </tbody>
  </table>
    </div>
  )
}

export default ListEmployeeComponent