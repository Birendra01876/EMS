import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"; // ✅ Import navigate hook
import employeeService from "../services/employee.service";

const AddEmployee = () => {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [department, setDepartment] = useState('');

    const navigate = useNavigate(); // ✅ Replace useHistory with useNavigate
    const {id} = useParams();
    function saveEmployee(e) {
        e.preventDefault();

        const employee = { name, location, department, id };
        if(id){
            //update the records
            employeeService
        .update(id, employee)
        .then(response => {
            console.log('Employee updated successfully!', response.data);
            navigate('/'); // ✅ React Router v6 navigation
        })
        .catch(error => {
            console.error('Something went wrong!', error);
            alert('Failed to update employee. Please try again later.');
        });
        }
        else{
            //create the records
             employeeService
        .create(employee)
            .then(response => {
                console.log('Employee added successfully!', response.data);
                navigate('/'); // ✅ React Router v6 navigation
            })
            .catch(error => {
                console.error('Something went wrong!', error);
                alert('Failed to add employee. Please try again later.');
            });
        }
    }

    useEffect(() => {
        if (id) {
            employeeService.get(id)
                .then(response => {
                    setName(response.data.name);
                    setLocation(response.data.location);
                    setDepartment(response.data.department);
                })
                .catch(error => {
                    console.error('Something went wrong!', error);
                    alert('Failed to fetch employee details. Please try again later.');
                });
        }
    }, [id]);

    return (
        <div className="container">
            <h3>Add Employee</h3>
            <hr />
            <form onSubmit={saveEmployee}> {/* ✅ Changed to onSubmit */}
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Enter Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        id="department"
                        placeholder="Enter Department"
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        id="location"
                        placeholder="Enter Location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </div>
                <div>
                        <button className="btn btn-primary" type="submit">Save</button>
                </div>
            </form>
            <hr />
            <Link to="/" className="btn btn-secondary mt-2" >Back to Employee List</Link>
        </div>
    );
}

export default AddEmployee;
