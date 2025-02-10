import React from 'react'

export default function ArrayDemoTask2() {
    var salesdata = [
        {
            id:1,
            day:"Monday",
            sales:500,
            discount:10,
            profit:150
        },
        {
            id:2,
            day:"Tuesday",
            sales:750,
            discount:20,
            profit:180
        },
        {
            id:3,
            day:"Wednesday",
            sales:620,
            discount:5,
            profit:200
        },
        {
            id:4,
            day:"Thursday",
            sales:890,
            discount:30,
            profit:220
        },
        {
            id:5,
            day:"Friday",
            sales:400,
            discount:0,
            profit:140
        },
        {
            id:6,
            day:"Saturday",
            sales:1200,
            discount:50,
            profit:300
        },
        {
            id:7,
            day:"Sunday",
            sales:980,
            discount:25,
            profit:250
        }
    ]
  return (
    <div>
        <hr />
        <h2 style={{textAlign:"center"}}>Array Demo Task 2</h2>
        <li>create a json object of the sales Data. It is diffrent type of the categories </li>
        <table class="table table-info" border="2">
            <thead>
                <th>Id</th>
                <th>Day</th>
                <th>Sales</th>
                <th>Discount</th>
                <th>Profit</th>
            </thead>
            <tbody>

                {
                    salesdata.map((sales)=>{

                        return(<tr key={sales.id} >
                                <td style={{background:sales.discount == 50 ? "green" : " "}}>{sales.id}</td>
                                <td>{sales.day}</td>
                                <td>{sales.sales}</td>
                                <td>{sales.discount}</td>
                                <td>{sales.profit}</td>    
                        </tr>)//end of the return

                    })//end of the map

                }

            </tbody>
        </table>
    </div>
  )
}
