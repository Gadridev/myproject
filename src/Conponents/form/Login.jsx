import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './login.css'
import {FcGoogle} from 'react-icons/fc'
import {BsFacebook,BsApple} from 'react-icons/bs'
import './login.css'
import { useState,useEffect } from 'react';
import axios from 'axios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Login() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [email,setEmail]=useState('');
  const [password,setpassword]=useState('');
  const [data,setdata]=useState([]);
  useEffect(()=>{
    (async ()=>await Load())();
  },[]);
  async function Load()
  {
    const result =await axios.get('http://127.0.0.1:8000/api/udemy');
    setdata(result.data);
    console.log(result.data);
  }
  async function save(event){
    event.preventDefault();
    try {
      await axios.post('http://127.0.0.1:8000/api/save',
      {
        email:email,
        password: password
      });
      alert("singup successfully");
      setid("");
      setEmail("");
      setpassword("");
      Load();
    }catch(e)
    {
      alert("user Registration Failed")
    }
  }
  return (
    <div>
      <a href='#' id='btn1' onClick={handleOpen}>Se Connecter</a>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          <button type='button' className='btn_google'> 
            <FcGoogle className='btn_so'  />
            <span className='txt_google'>Connecter avec Google </span>
            </button>
            <button type='button' className='btn_google'> 
            <BsFacebook className='btn_so' />
            <span className='txt_google'>Connecter avec Facebook </span>
            </button>
            <button type='button' className='btn_google'> 
            <BsApple className='btn_so' />
            <span className='txt_google'>Connecter avec Apple </span>
            </button>
      <form >
        <span className='sp'>
          <input type="text" 
          value={email}
          onChange={(event)=>
          {
            setEmail(event.target.value);
          }}
          placeholder="E-mail"/>
        </span>
        <br/>
        <label> 
          <input type="password" value={password} onChange={(event)=>{setpassword(event.target.value)}} placeholder="Password"  />
        </label>
        <br/>
        <button type="submit" className='btn_con' onClick={save}>Log In</button>
      </form>
          </Typography>
       
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
