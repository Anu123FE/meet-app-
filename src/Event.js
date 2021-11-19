
import { mock2, mockData } from "./mock-data";
import React, {useState} from 'react'

export default function Event(props) {
  const [show, setShow] = useState(true)
  const [buttonTxt, setbuttonTxt] = useState("Show more")
  const showEvent = () => {
    if(show === true)  { 
      setShow(false) 
    setbuttonTxt("Hide")
  }
    else { 
      setShow(true)
      setbuttonTxt("Show more")
    }
  }
  const {e} = props;
  return (
    <div>
      {/* <ul>
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
      </ul> */}

              <p>
                <b>location: </b><br />
                {e.location}
              </p>
              <a href="#" onClick={showEvent}>{buttonTxt}</a>
              <div hidden={show}> 
                <b>description: </b><br />
                {e.description}
              </div>
    </div>
  )
}





