import React from 'react';
import logo from './logo.svg';
import image from './image.png';
import './App.css';
import Input from '@mui/material/Input';
import { Grid, TextField, Link } from '@mui/material';

// import {
//   Routes,
//   Route,
//   Link,
//   useNavigate,
//   useLocation,
//   Navigate,
//   Outlet,
// } from "react-router-dom";

function App() {
  return (
    <Grid container className='login-wrapper'>
      <Grid item xs={6}>
        <img src={image} className="width100" alt="" />
      </Grid>
      <Grid item xs={6}>
        <p className='title'>Đăng nhập vào tài khoản</p>
        <div className='center-wrapper'>
          <label>Email</label>
          <TextField
            fullWidth
            required
            id="outlined-required"
            placeholder="user@gmail.com"
            variant="outlined"
            sx={{
              margin: '10px 0px',
            }}
          />
        </div>

        <div className='center-wrapper'>
          <label>Mật khẩu</label>
          <TextField
            fullWidth
            required
            id="outlined-required"
            placeholder="***********"
            variant="outlined"
            sx={{
              margin: '10px 0px',
            }}
          />
        </div>
        <div className='flex mt-10 center-wrapper'>
          <Link href="#" className='align-right'>Quên mật khẩu?</Link>
        </div>
      </Grid>
    </Grid>
    // <div className="App">
    //   <div className='login-wrapper'>
    //     <div>
    //       <img src={image} className="" alt="" />
    //     </div>
    //     <div>
    //       <div>
    //         <p>Dang nhap vao tai khoan</p>
    //         <div>
    //           <label></label>
    //           <input></input>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   {/* <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header> */}
    // </div>
  );
}

export default App;
