import React from 'react'

export default function ArrayDemo3() {
    var employee = [
        {
            id:1,
            name: "Ram",
            age:"24",
            salary:"13000",
            gender:"male"
        },
        {
            id:2,
            name: "Seeta",
            age:"24",
            salary:"10000",
            gender:"female"
        },
        {
            id:3,
            name: "Shyam",
            age:"23",
            salary:"15000",
            gender:"male"
        },
        {
            id:4,
            name: "Geeta",
            age:"22",
            salary:"12000",
            gender:"female"
        }
    ]
  return (
    <div >
        <hr />
        <h1 style={{ textAlign:"center"}}>Array Demo 3</h1>
        <table border={1} style={{height:"300px", width:"300px", margin:"auto"}}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Salary</th>
                    <th>Gender</th>
                </tr>
            </thead>
            <tbody> 
                    {
                    employee.map((emp)=>{
                        return (<tr>
                        <td>{emp.id}</td>
                        <td>{emp.name}</td>
                        <td>{emp.age}</td>
                        <td>{emp.salary}</td>
                        <td>{emp.gender}</td>
                        {/* <hr /> */}
                    </tr>
                    )//end of the return
                    }//end of the loop
                )//end of the return statement
                }
            </tbody>
        </table>
       
    </div>
  )
}
