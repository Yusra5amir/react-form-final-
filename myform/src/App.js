import { useState } from 'react';
 import './App.css';

function App() {
  const [formDate, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    occupation: '',
    gender: '',
    skills: [''],


  })
  

  const onChangeHandler = (event) => {
    console.log(event)
    if(event.target.name === 'skills'){
      const copy = {...formDate}
      if(event.target.checked){
         copy.skills.push(event.target.value)
      }
      else{
        copy.skills = copy.skills.filter(el => el !== el.target.value)
      }
      setFormData(copy)
    }
    else{
      setFormData(()=>({
        ...formDate,
        [event.target.name] : event.target.value
      }))
    }
    }
    const onSubmitHandler = (event) => {
      event.preventDefault()
      console.table(formDate)
    }
  return (
    <>
      <form className='container' onSubmit={onSubmitHandler}>
        <div className='form-group'>
          <label htmlFor='username' className='form-label'>User Name :</label>
          <input className='form-control' name='username' placeholder='username' onChange={onChangeHandler} value={formDate.username}></input>
        </div>
        <div className='form-group'>
          <label htmlFor='email' className='form-label'>Email :</label>
          <input className='form-control' name='email' placeholder='email' onChange={onChangeHandler} value={formDate.email}></input>
        </div>
        <div className='form-group'>
          <label htmlFor='password' className='form-label'>Password :</label>
          <input className='form-control' name='password' placeholder='password'  onChange={onChangeHandler} value={formDate.password}></input>
       
        </div>
        <div className='form-group'>
          <label htmlFor='occupation' className='form-label'>Occupation :</label>
          <select className='form-select' name='occupation' onChange={onChangeHandler} value={formDate.occupation}>
            <option value='student'>Student</option>
            <option value='Employee'>Employee</option>
            <option value='other'>Other</option>
          </select>
        </div>
        <div className='form-group'>
          <label htmlFor='gender' className='form-label' >Gender :</label>
          <div>
            <div>
              <input htmlFor='male' className='check' type='radio' name='gender' value='male' onChange={onChangeHandler} checked={formDate.gender === 'male'}></input>
              <label >Male</label>
            </div>
            <div>
              <input htmlFor='gender' className='check' type='radio' name='gender' value='female' onChange={onChangeHandler} checked={formDate.gender === 'female'}></input>
              <label >Female</label>
            </div>
          </div>
        </div>
        <div className='form-group'>
          <label htmlFor='skills' className='form-label' >Skills :</label>
          <div>
            <div>
              <input htmlFor='developer' className='check' type='checkbox' name='skills' value='developer' ></input>
              <label >Developer</label>
            </div>
            <div>
              <input className='check' type='checkbox' name='skills' value='haker'></input>
              <label >Haker</label>
            </div>
            <div>
              <input className='check' type='checkbox' name='skills' value='marketer' ></input>
              <label >Marketer</label>
            </div>
            <div>
              <input className='check' type='checkbox' name='skills' value='none'></input>
              <label >None</label>
            </div>
          </div>
        </div>
        <div className='form-group'>
          <button htmlFor='btn' className='btn' type='submit' data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">Submit</button>
         </div>
      </form>
    
    </>
  );
}


export default App;
