import axios from "axios";

const BASE_URL = "http://localhost:8080/api";

// ✅ Create new employee
const create = (employee) => axios.post('http://localhost:8080/api/add', employee);

// ✅ Update existing employee
const update = (id, employee) => axios.put("http://localhost:8080/api/update", employee);

// ✅ Get employee by ID
const get = (id) => axios.get(`http://localhost:8080/api/getaemployee/${id}`);

// ✅ Get all employees
const getAll = () => axios.get("http://localhost:8080/api/get");

// ✅ Delete employee
const remove = (id) => axios.delete(`http://localhost:8080/api/delete/${id}`);

// ✅ Export all as default object
export default {
  create,
  update,
  get,
  getAll,
  remove
};



// import httpClient from  '../http-common';

// const getAll = () => {
//     return httpClient.get("/employees/${id}");
// }

// const create = (data) =>{
//     httpClient.post("/employees", data);
// }

// const get = (id) => {
//     return httpClient.get(`/employees/${id}`);
// }

// const update = (data) => {
//     return httpClient.put(`/employees`, data);
// }

// const remove = (id) => {
//     return httpClient.delete(`/employees/${id}`);
// }

// export default {getAll, create, update, remove};