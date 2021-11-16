
import { mock2, mockData } from "./mock-data";
import React, {useState} from 'react'

export default function Event() {
  const [show, setShow] = useState(true)
  const showEvent = () => {
    if(show === true)  { setShow(false) }
    else { setShow(true) }
  }
  return (
    <div>
      <ul>
        {
          // Change array to your mockdata
          mockData.map((e) =>
            <li key={e.id} >
              <p>
                <b>location: </b><br />
                {e.location}
              </p>
              <a href="#" onClick={showEvent}>Show more</a>
              <div hidden={show}> 
                <b>description: </b><br />
                {e.description}
                </div>
                
              <hr />
            </li>
            )
        }
      </ul>

    </div>
  )
}





