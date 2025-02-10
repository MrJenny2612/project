import React from 'react'

export default function ArrayDemoTask1() {
    var city = [
        {
            id:1,
            cityname:"New York",
            population:8468000,
            aqi:65
        },
        {
            id:2,
            cityname:"Los Angeles",
            population:3980400,
            aqi:85
        },
        {
            id:3,
            cityname:"London",
            population:8982000,
            aqi:72 
        },
        {   
            id:4,
            cityname:"Tokyo",
            population:14000000,
            aqi:55
        },
        {
            id:5,
            cityname:"Paris",
            population:2161000,
            aqi:60
        },
        {
            id:6,
            cityname:"Mumbai",
            population:20411000,
            aqi:150
        },
        {
            id:7,
            cityname:"Bejilin",
            population:21540000,
            aqi:180
        },
        {
            id:8,
            cityname:"sydney",
            population:5312000,
            aqi:50
        },
        {
            id:9,
            cityname:"Berlin",
            population:3645000,
            aqi:58
        },
        {
            id:10,
            cityname:"Toranto",
            population:2930000,
            aqi:62
        }
    ]//json array of the object
  return (
      <div >
      <hr />
        <h1 style={{textAlign:"center"}}>Array Demo Task 1</h1>
        <li>To create object of the city. It is a list of different cities with ID, name, population and AQI</li>
        <table border="2" class="table table-secondary">
            <thead>
                <th>Id</th>
                <th>CityName</th>
                <th>Population</th>
                <th>AQI</th>
            </thead>
            <tbody>
                {city.map((cty)=>{
                    return(
                        <tr>
                            <td>{cty.id}</td>
                            <td>{cty.cityname}</td>
                            <td style={{background:cty.population > 20000000 ? "Red" : " "}}>{cty.population}</td>
                            <td style={{background:cty.aqi > 100 ? "Red" : " green"}}>{cty.aqi}</td>
                        </tr>
                    )//end of the return
                }//end of the arrow function statement
            )//end of the loop map
                }

            </tbody>
        </table>
    </div>
  )
}
