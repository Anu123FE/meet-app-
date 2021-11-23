
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
  console.log(e)
  return (
    <div>
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





