import React from 'react'
import './CSS/LoginSingup.css'
const LoginSingup = () => {
  return (
    <div className='loginsingup rounded'>
       <div className='loginsingup-contanr pt-4 ps-5 pe-4'>
        <h2 className='text-start fw-semibold'>Sing Up</h2>
        <input className="form-control mt-4 p-2" type="text" placeholder="Your Name" aria-label="default input example"/>
        <input className="form-control mt-3 p-2" type="text" placeholder="Email Address" aria-label="default input example"/>
        <input className="form-control mt-3 p-2" type="text" placeholder="Password" aria-label="default input example"/>
       
        <button type="button" class="btn btn-success p-2 mt-4  continue">Continue</button>
        <p className='text-start fw-medium'>Already have an account?<span className='text-danger'> Login here </span></p>
       <p className='text-start'>
        <input className="form-check-input border-success " type="checkbox" id="gridCheck"/>
        &nbsp; &nbsp; By Continuing. I agree to the terms of use & privacy policy.
        </p>
      
       </div>
    </div>
    
  )
}

export default LoginSingup
