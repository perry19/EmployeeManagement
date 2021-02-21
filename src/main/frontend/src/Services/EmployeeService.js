import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employee";

class EmployeeService {

    getEmployees(){
        const getUrl = `${EMPLOYEE_API_BASE_URL}/all`;
        return axios.get(getUrl);
    }

    createEmployee(employee){
        const createUrl = `${EMPLOYEE_API_BASE_URL}/add`;
        return axios.post(createUrl, employee);
    }

    getEmployeeById(employeeId){
       const getByIdUrl = `${EMPLOYEE_API_BASE_URL}/find`;
        return axios.get(getByIdUrl + '/' + employeeId);
    }

    updateEmployee(employee, employeeId){
        const editUrl = `${EMPLOYEE_API_BASE_URL}/edit`;
        return axios.put(editUrl + '/' + employeeId, employee);
    }

    deleteEmployee(employeeId){
        const deleteUrl = `${EMPLOYEE_API_BASE_URL}/delete`;
        return axios.delete(deleteUrl + '/' + employeeId);
    }
}

export default new EmployeeService()