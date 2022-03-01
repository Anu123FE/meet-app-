import React, { Component } from 'react';
import { ResponsiveContainer, ScatterChart, CartesianGrid, XAxis, YAxis, Tooltip, Scatter } from 'recharts';
import Event from './Event';
import EventGenre from './EventGenre';
import { mockData } from './mock-data';

console.log(mockData)

// const dt = mockData.map(x=> 
//   [
//     x.
//   ])

class EventList extends Component {
    render() {
        const { events } = this.props;

        const locations =  events.map(x=>x.location);
//  const evts = mockData.filter( data  => data.location === suggestion);
const dt = locations.map(x=> {
  const n = events.filter(y=>y.location === x).length;
  return {location: x, event: n}
});

console.log(dt)

        return (
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', margin: '0px auto', width: '80%'}}> 
      
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

          <EventGenre dt={dt} />

<div style={{width: '100%'}}>

<ul className="EventList" style={{width: '90%', margin: '0 20rem'}}>
            {events.map(event =>
              <li key={event.id}>
                <Event e = {event} />
              </li>
            )}
          </ul>

</div>
    

          </div>
         
        );
    }
}

export default EventList;