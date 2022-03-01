import React, { useEffect, useState } from 'react';
import {
    PieChart, Pie, Cell, ResponsiveContainer
} from 'recharts';

const EventGenre = ({ dt }) => {
    console.log(dt)
    const groups = [...new Set([...dt.map(x=>x.location)] )];
    console.log(groups);
    let newData = groups.map(g=>{
        const value = dt.filter(d=>{
            return d.location.includes(g)
        })
        return {name: g, value: value.length}
    });
    console.log(newData);
    // let res = {};
    // dt.forEach(x=> {
    //     let r = 1;
    //     if (groups.includes(x.location)){
    //         r += x.event;
    //         res[x.location] = r;
    //     }
    // })
    // console.log(res);
    const data = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
    ];
    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
    return (
        <ResponsiveContainer height = {600} style = {{marginLeft: '20px'}} >
            <PieChart width={500} height={500}>
           
            <Pie
            data={newData}
            cx={"50%"}
            cy={"50%"}
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            datakey="value"
            label={({ name, percent })=> `${name}} ${(percent * 100).toFixed(0)}%`} >
             {newData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
            </Pie>
        </PieChart>
    </ResponsiveContainer>
    );
}

export default EventGenre;