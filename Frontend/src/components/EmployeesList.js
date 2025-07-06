import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useHistory } from 'react-router-dom';
import employeeService from '../services/employee.service';

const EmployeeList = () => {

  const [employees, setEmployees] = useState([]);

  const init = () => {
    employeeService.getAll()
      .then(response => {
        console.log('Printing employees data', response.data);
        setEmployees(response.data);
      })
      .catch(error => {
        console.log('Something went wrong', error);
      }) 
  }

  useEffect(() => {
    init();
  }, []);

  const handleDelete = (id) => {
    console.log('Printing id', id);
    employeeService.remove(id)
      .then(response => {
        console.log('employee deleted successfully', response.data);
        init();
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }

  return (
    <div className="container">
      <h3 className='text-align: center'>List of Employees</h3>
      <hr/>
      <div>
        <Link to="/add" className="btn btn-primary mb-2">Add Employee</Link>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Location</th>
              <th>Department</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {
            employees.map(employee => (
              <tr key={employee.id}>
                <td>{employee.name}</td>
                <td>{employee.location}</td>
                <td>{employee.department}</td>
                <td>
                  <Link to={`/update/${employee.id}`} className="btn btn-info">Update</Link>
                  <button className="btn btn-danger ml-2" onClick={() => {
                    handleDelete(employee.id);
                  }}>Delete</button>
                </td>
              </tr>
            ))
          }
          </tbody>
        </table>
        
      </div>
    </div>
  );
}

export default EmployeeList;



// import { useEffect, useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import employeeService from "../services/employee.service";
// import { Link } from "react-router-dom";

// const EmployeesList = () => {

//   const [employees, setEmployees] = useState([]);

//   useEffect (()=> {
//     employeeService.getAll()
//     .then(response =>{
//       setEmployees(response.data);
//     })
//     .catch(error => {
//       console.log('Something went wrong!', error);
//     })
//   }, [])

//   const deleteEmployee = (id) => {
//     employeeService.remove(id)
//       .then(response => {
//         console.log('Employee deleted successfully!', response.data);
//         setEmployees(employees.filter(employee => employee.id !== id));
//       })
//       .catch(error => {
//         console.error('Something went wrong!', error);
//         alert('Failed to delete employee. Please try again later.');
//       });
//   }

//   return (
//     <>
//       <div className="container">
//         <h3>Lists of Employees</h3>
//         <hr/>
//         <div>
//             <Link to="/add" className="btn btn-primary mb-2">Add Employee</Link>
//           <table className="table table-bordered table-striped">
//             <thead className="thead-dark">
//             <tr>
//               <th>Name</th>
//               <th>Location</th>
//               <th>Department</th>
//               <th>Actions</th>
//             </tr>
//             </thead>
//             <tbody>
//             {
//               employees.map((employee) => (
//                 <tr key={employee.id}>
//                   <td>{employee.name}</td>
//                   <td>{employee.location}</td>
//                   <td>{employee.department}</td>
//                   <td>
//                     <Link to={`/update/${employee.id}`} className="btn btn-info">Update</Link>
//                   </td>
//                   <td>
//                     <Link to={`/delete/${employee.id}`} className="btn btn-danger">Delete</Link>
//                   </td>
//                 </tr>
//               ))
//             }
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// }

// export default EmployeesList;