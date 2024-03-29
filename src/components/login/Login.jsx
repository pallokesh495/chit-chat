import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
const [cred,setCred]= useState({username:"",password:""});

let name,value;
const handleCred= (e)=>{
  name=e.target.name;
  value=e.target.value;

  setCred({...cred,[name]:value})
  
}

const navigate = useNavigate();
const handleLogin = ()=>{

  
 (cred.username==='')? navigate('/login'):navigate('/home',{state:{username:cred.username}});

}


  return (
    <div>
        <section className="vh-100" style={{backgroundColor: "rgba(196, 195, 203, 0.909)"}}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{borderRadius: "25px"}}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>

                <form className="mx-1 mx-md-4">

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" className="form-control" name="username" value={cred.username} onChange={handleCred}  />
                      <label className="form-label" for="form3Example1c">Your Name</label>
                    </div>
                  </div>

                  

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4c" className="form-control" name='password' value={cred.password} onChange={handleCred}   />
                      <label className="form-label" for="form3Example4c">Password</label>
                    </div>
                  </div>

                

                 

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" className="btn btn-primary btn-lg" onClick={handleLogin}>Login</button>
                  </div>

                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  className="img-fluid" alt="img"/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Login