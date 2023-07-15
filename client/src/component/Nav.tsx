import React from 'react'
import { AppBar, Toolbar, Box, Button, Typography, Modal, TextField } from '@mui/material'; 
import { Link } from 'react-router-dom'
import  { useState } from 'react';
import axios from 'axios'
import { SERVER_ENDPOINTS } from '../config';
// import Vector from '../'

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 350,
    height: 300,
    bgcolor: 'background.paper',
    border: '2px solid rgba(0, 90, 226, 0.5)',
    boxShadow: 24,
    px: 8,
    py: 10
};

const Nav:React.FC<{}> = () => {
    const [open, setOpen] = useState(false);
    const [openSign, setOpenSign] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleSignupOpen = () => setOpenSign(true);
    const handleSignupClose = () => setOpenSign(false);


    async function handleSubmit(e) {
        e.preventDefault();

        try{
            await axios.post(`${SERVER_ENDPOINTS}/login`, {
                email,
                password
            });
        }catch {
            console.log(e)
        }
    }
  return (
      <AppBar position="static" style={{ background: 'white' }}>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-around' }}>
              <Link to="/" style={{ color: '#0065FE', textDecoration: 'none', fontWeight: '700' }}>
                  SCISSORS
              </Link>
              <Box sx={{ textAlign: 'center' }}>
                  <Link to="urls" style={{ color: '#005AE2CC', textDecoration: 'none', paddingRight: '30px' }}>
                      MY URLS
                  </Link>
                  <Link to="features" style={{ color: 'black', textDecoration: 'none', paddingRight: '30px' }}>
                      Features
                  </Link>
                  <Link to="pricing" style={{ color: 'black', textDecoration: 'none', paddingRight: '30px' }}>
                      Pricing
                  </Link>
                  <Link to="analytics" style={{ color: 'black', textDecoration: 'none', paddingRight: '30px' }}>
                      Analytics
                  </Link>
                  <Link to="faqs" style={{ color: 'black', textDecoration: 'none', paddingRight: '30px' }}>
                      FAQS
                  </Link>
              </Box>
              <Box>
                  <Button variant="text" sx={{ color: '#005AE2CC', mr: '15px' }} onClick={handleOpen}>
                      Log In
                  </Button>
                  <Modal open={open} onClose={handleClose} sx={{ textAlign: 'center' }}>
                      <Box sx={style}>
                          <Typography sx={{ fontSize: '13px', color: '#5C6F7F', mb: '10px' }}>Log in with:</Typography>
                          <Box>
                              <Button variant="contained" sx={{ background: '#005AE2', fontSize: '13px', px: '10px', py: '7px', mr: '15px' }}>
                                  Google
                              </Button>
                              <Button variant="contained" sx={{ background: '#005AE2', fontSize: '13px', px: '10px', py: '7px' }}>
                                  Apple
                              </Button>
                          </Box>
                          <Box sx={{ display: 'flex' }}>
                              <Box sx={{ border: '1px solid black' }}></Box>
                              <Typography>Or</Typography>
                              <Box sx={{ border: '1px solid black' }}></Box>
                          </Box>
                          <TextField
                              onChange={(e) => {
                                  setEmail(e.target.value);
                              }}
                              type="email"
                              size="small"
                              label="Email address or username"
                              variant="outlined"
                              sx={{ width: '22rem', mb: '25px' }}
                          />
                          <TextField
                              onChange={(e) => {
                                  setPassword(e.target.value);
                              }}
                              type="password"
                              size="small"
                              label="Password"
                              variant="outlined"
                              sx={{ width: '22rem', mb: '10px' }}
                          />
                          <Typography sx={{ color: '#005AE2CC', display: 'flex', justifyContent: 'right', mb: '10px', fontSize: '14px' }}>Forgot your password?</Typography>
                          <Button type="submit" onClick={handleSubmit}  variant="contained" sx={{ background: '#005AE2', borderRadius: '30px', px: '9rem', width: '22rem', fontSize: '14px', mb: '10px' }}>
                              Log in
                          </Button>
                          <Typography sx={{ fontSize: '15px', color: '#5C6F7F', mb: '10px' }}>
                              Don't have an account?{' '}
                              <Button variant="text" sx={{ color: '#005AE2' }}>
                                  Signup
                              </Button>
                          </Typography>
                          <Typography sx={{ fontSize: '13px', color: '#A0B1C0' }}>
                              By signing with an account, you agree to Scissors <strong style={{ color: '#5C6F7F', fontSize: '13px' }}>Terms Services, Privacy Policy</strong> and{' '}
                              <strong style={{ color: '#5C6F7F', fontSize: '13px' }}>Acceptable Use Policy.</strong>
                          </Typography>
                      </Box>
                  </Modal>
                  <Button variant="contained" sx={{ background: '#005AE2', borderRadius: '30px', fontSize: '12px', px: '25px', py: '10px' }} onClick={handleSignupOpen}>
                      Try for Free
                  </Button>
                  <Modal open={openSign} onClose={handleSignupClose} sx={{ textAlign: 'center' }}>
                      <Box sx={style} style={{ width: 400, height: 500 }}>
                          <Typography sx={{ fontSize: '13px', color: '#5C6F7F', mb: '10px' }}>Log in with:</Typography>
                          <Box>
                              <Button variant="contained" sx={{ background: '#005AE2', fontSize: '13px', px: '10px', py: '7px', mr: '15px' }}>
                                  Google
                              </Button>
                              <Button variant="contained" sx={{ background: '#005AE2', fontSize: '13px', px: '10px', py: '7px' }}>
                                  Apple
                              </Button>
                          </Box>
                          <Box sx={{ display: 'flex' }}>
                              <Box sx={{ border: '1px solid black' }}></Box>
                              <Typography>Or</Typography>
                              <Box sx={{ border: '1px solid black' }}></Box>
                          </Box>
                          <TextField type="text" size="small" label="Username" variant="outlined" sx={{ width: '28rem', mb: '25px' }} />
                          <TextField type="text" size="small" label="Email" variant="outlined" sx={{ width: '28rem', mb: '25px' }} />
                          <TextField type="text" size="small" label="Password" variant="outlined" sx={{ width: '28rem', mb: '10px' }} />
                          <TextField type="text" size="small" label="Retype Password" variant="outlined" sx={{ width: '28rem', mb: '25px' }} />
                          <Typography sx={{ display: 'flex', mb: '10px', fontSize: '12px' }}>6 or more characters, one number, one uppercase one lower case</Typography>
                          <Button variant="contained" sx={{ background: '#005AE2', borderRadius: '30px', width: '28rem', fontSize: '14px', mb: '10px' }}>
                              Sign up with Email
                          </Button>
                          <Typography sx={{ fontSize: '15px', color: '#5C6F7F', mb: '10px' }}>
                              Already have an account?{' '}
                              <Button variant="text" sx={{ color: '#005AE2' }}>
                                  Log in
                              </Button>
                          </Typography>
                          <Typography sx={{ fontSize: '13px', color: '#A0B1C0' }}>
                              By signing with an account, you agree to Scissors <strong style={{ color: '#5C6F7F', fontSize: '13px' }}>Terms Services, Privacy Policy</strong> and{' '}
                              <strong style={{ color: '#5C6F7F', fontSize: '13px' }}>Acceptable Use Policy.</strong>
                          </Typography>
                      </Box>
                  </Modal>
              </Box>
          </Toolbar>
      </AppBar>
  );
}

export default Nav