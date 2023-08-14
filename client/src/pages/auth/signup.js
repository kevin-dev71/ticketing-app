import { useState } from 'react'
import axios from 'axios'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post('/api/users/signup', {
        email, password,
      })
      console.log(response.data)
    } catch (error) {
      console.error(error)
      setErrors(error.response.data.errors)
    }
  }

  
  return (
    <form onSubmit={handleSubmit}>
      <h1>sign up</h1>
      <div className="form-group">
        <label>email</label>
        <input
        type="email"
        value={email}
        className='form-control'
        onChange={(e) => setEmail(e.target.value)}
      />
      </div>
      <div className="form-group">
        <label>password</label>
        <input
        type="password"
        value={password}
        className='form-control'
        onChange={(e) => setPassword(e.target.value)}
      />
      </div>
      {errors.length > 0 && <div className='alert alert-danger'>
        <h4>Oooops...</h4>
        <ul className='my-0'>
        {errors.map(err => <li key={err.message}>{err.message}</li>)}

        </ul>
      </div>}
      <button className="btn btn-primary">Sign Up</button>
    </form>
  )
}

export default Signup
