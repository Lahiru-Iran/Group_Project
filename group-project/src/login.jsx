import './Navbar.css';

const Login = () => {
  const rectangleStyle = {
    position: 'absolute', 
    top: '50%', 
    left: '50%', 
    transform: 'translate(-50%, -50%)', 
    width: '65%', 
    height: '600px',
    backgroundColor: 'gray',
    display: 'flex', 
    alignItems: 'center', 
  };

  const contentStyle = {
    width: '100%', 
    padding: '10px', 
  };

  const topicStyle = {
    marginBottom: '50px',
    paddingLeft: '15px', // Fixed typo from paddingleft to paddingLeft
    fontWeight: 'bold', 
    textDecoration: 'underline',
  };

  const textFieldStyle = {
    width: '90%', 
    padding: '10px', 
    border: '2px solid #ccc', 
    borderRadius: '10px', 
  };

  return (
    <div className='container'>
      <div className='rectangle1'>
        <div className='rectangle2'>
          <div style={rectangleStyle} className='centeredRectangle'>
            <div style={contentStyle}>
              <h1 style={topicStyle}>Welcome to IUHS Nalanda Campus</h1>
              <h2 className='signup'>Sign up</h2>

              <p className='txtTitle'>User Name:</p>
              <input type="text" placeholder="Enter your name" style={textFieldStyle} className='txtInput' required/>
              <p className='txtTitle'>Password:</p>
              <input type="password" placeholder="Enter your password" style={textFieldStyle} className='txtInput' required/>
              <p className='txtTitle'>Confirm Password:</p>
              <input type="password" placeholder="Enter your confirm password" style={textFieldStyle} className='txtInput' required/>
              <p className='txtTitle'>Email:</p>
              <input type="email" placeholder="Enter your email" style={textFieldStyle} className='txtInput' required/>
            
              <button className='signupbtn'>Sign Up</button>

              <h6 className='or'>Already have an account?</h6>
              <h5 className='login'>Login</h5>
            </div>
          </div> 
        </div>
      </div>
    </div>
  );
}

export default Login;
