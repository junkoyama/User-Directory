import React, {useState, useEffect} from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
// import Button from 'react-bootstrap/Button'

export default function UserTable() {

  const [user, setUser] = useState({
    employee: [],
    filter: "",
  });

  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    const getEmployees = () =>
      user.employee.filter(
        (employee) => employee.name.first.toLowerCase().indexOf(user.filter) !== -1
      );
      setEmployee(getEmployees);
  }, [user.employee, user.filter]);

    const handleInputChange = (evt) => {
      setUser({...user, filter: evt.target.value});
    };

  useEffect(() => {
    const results = fetch("https://randomuser.me/api/?results=20");
    results
      .then((res) => res.json())
      .then((res) =>
        setUser((original) => {
          return { ...original, employee: res.results };
        })
      );
  }, []);

    const getClick = (age) => {
      console.log("Testing", {...user})

      setEmployee((original) => {
        return user.employee.sort((a,b) => {
          return a.name.first.localeCompare(b.name.first);
        })
      })
    }


    return (
      <div>
        <input
            onChange={handleInputChange}
            type="search"
            className="form-control m-3"
            placeholder="Start Entering First Name Here to Filter"
            aria-label="SearchBox"
            aria-describedby="basic-addon1"
          />
        <Table>

          <thead>
            <tr>
              <th onClick={getClick}>
                First Name (Click here to sort First Name)
              </th>
              <th>Last Name</th>
              <th>Email</th>
              <th > Age </th>
{/* <Button variant="dark" onClick={getClick}>Sort Age</Button>{' '} */}
            </tr>
          </thead>

          <tbody>
            {employee.map((member, data) => (
              <tr key={data}>
              <td>{member.name.first}</td>
              <td>{member.name.last}</td>
              <td> {member.email} </td>
              <td>{member.dob.age}</td>
            </tr>
            ))}
          </tbody>

        </Table>
      </div>
    );
  }