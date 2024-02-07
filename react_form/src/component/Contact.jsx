import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Contact = () => {

const [data, setData] = useState({name: "", email: "", age:""})
const [btnDisabled, setBtnDisabled] = useState(true)
const [message, setMessage] = useState("")
const navigate = useNavigate()
const initialState = { name: '', email: '', age: '' }
const clearForm =()=>{ setData({...initialState})}

const handleInputChange = (event)=>{
  if(data.name.length<4)
  {setMessage("There are missing characters")
  setBtnDisabled(true)
  }
  else
  {
    setMessage(null)
    setBtnDisabled(false)
  }
  setData({...data, [event.target.name]: event.target.value})
}

const handleSubmit = (e)=>
{
  e.preventDefault()
  localStorage.setItem('user', JSON.stringify({name:data.name, email:data.email, age:data.age}))
  console.log(`sending data : ${data.name}, ${data.email}, ${data.age}`)
  clearForm()
  setTimeout(()=>{ navigate('/')}, 1000)
}

return ( 
  <>
  <form onSubmit={handleSubmit}>

    <input type="text"  value={data.name} name="name" onChange={handleInputChange} />

    <input type="email" placeholder="email" value={data.email} name="email" onChange={handleInputChange} />
    <input type="text" placeholder='age' value={data.age} name="age" onChange={handleInputChange}/>

    <button type="submit" disabled={btnDisabled}>enviar</button>
    <p>{message}</p>

  </form>
</>
  )
};

export default Contact