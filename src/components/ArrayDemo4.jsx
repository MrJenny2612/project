import React from 'react'

export default function ArrayDemo4() {
    var employee = [
        {
            id: 1,
            name:"Parth",
            age:25,
            salary:16000,
            gender:"male"
        },
        {
            id:2,
            name:"Shyam",
            age:24,
            salary: 14000,
            gender:"male"
        },
        {
            id:3,
            name:"Janki",
            age:26,
            salary:18000,
            gender:"female"
        },
        {
            id:4,
            name:"Seeta",
            age:25,
            salary:17000,
            gender:"female"
        }
    ]
  return (
    <div>
        <hr/>
        <h1 class="text-center ">Array Demo 4</h1>
        <table class="table table-dark" border="2">
            <thead>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Salary</th>
                <th>Gender</th>
            </thead>
            <tbody>
                    { employee.map((emp)=>{
                        return (<tr>
                            <td style={{color:"skyblue"}}><span> {emp.id} </span></td>
                            <td style={{background:emp.name.startsWith("S") ? "green" : "black" }}>{emp.name}</td>
                            <td style={{background:emp.age == 25 ? "red" : "black"}}>{emp.age}</td>
                            <td style={{background:emp.salary >= 15000 ? "blue" : "black"}}>{emp.salary}</td>
                            <td style={{background:emp.gender == "male" ? "orange" : "black"}}>{emp.gender}</td>

                        </tr>)
                    }//end of the loop
                )//end of the return
                }
                   
                
            </tbody>
        </table>

    </div>
  )
}
