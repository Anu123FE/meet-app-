import React, { Component } from 'react';
import { ResponsiveContainer, ScatterChart, CartesianGrid, XAxis, YAxis, Tooltip, Scatter } from 'recharts';
import Event from './Event';
import { mockData } from './mock-data';

const data = [
  { x: 100, y: 200, z: 200 },
  { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 },
  { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 },
  { x: 110, y: 280, z: 200 },
];

console.log(mockData)
const locations = mockData.map(x=>x.location);
//  const evts = mockData.filter( data  => data.location === suggestion);
const dt = locations.map(x=> {
  const n = mockData.filter(y=>y.location === x).length;
  return {location: x, event: n}
});

console.log(dt)
// const dt = mockData.map(x=> 
//   [
//     x.
//   ])

class EventList extends Component {
    render() {
        const { events } = this.props;
        return (
          <div>
             <h1>eufduhfuogg</h1>
             
             <ScatterChart
          width={800}
          height={400}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="category" dataKey="location" name="stature" />
          <YAxis type="events" dataKey="event" name="events" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter name="A school" data={dt} fill="#8884d8" />
        </ScatterChart>

        <ul className="EventList">
            {events.map(event =>
              <li key={event.id}>
                <Event e = {event} />
              </li>
            )}
          </ul>

          </div>
         
        );
    }
}

export default EventList;