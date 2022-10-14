import axios from 'axios';
// const BASE_URL='http://localhost:9090/api/v1/employees';
const BASE_URL='http://localhost:9090/emp';
class EmployeeService{
    getAllEmployees(){
        return axios.get(BASE_URL)
    }

    deleteEmployeeById(employeeid){
         return axios.delete(BASE_URL+'/'+employeeid)
    }

    getEmployeeById(employeeid){
        return axios.get(BASE_URL+'/'+employeeid)
    }

    updateEmployeeById(id,employee){
        return axios.put(BASE_URL+'/update/'+id,employee)
    }

    createEmployee(employee){
        return axios.post(BASE_URL+'/create',employee)
    }

}

export default new EmployeeService();