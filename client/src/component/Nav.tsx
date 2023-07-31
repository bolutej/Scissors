import React from 'react'
import { AppBar, Toolbar, Box, Button, Typography, Modal, TextField } from '@mui/material'; 
import { Link } from 'react-router-dom'
import  { useState, useEffect } from 'react';
import axios from 'axios'
import SignUpModal from './modal/Signup';
import { SERVER_ENDPOINTS } from '../config';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import InfoIcon from '@mui/icons-material/Info';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400, 
    height: 450,
    bgcolor: 'background.paper',
    border: '2px solid rgba(0, 90, 226, 0.5)',
    boxShadow: 24,
    px: 8,
    py: 10
};

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Nav:React.FC<{}> = () => {
    const [openSignup, setOpenSignUp] = useState(false);
    const [openSignIn, setOpenSignIn] = useState(false);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

     const [password, setPassword] = useState('');
     const [validPassword, setValidPassword] = useState(false);
     const [passwordFocus, setPasswordFocus] = useState(false);

    const handleOpen = () => setOpenSignIn(true);
    const handleClose = () => setOpenSignIn(false);
    const handleSignupOpen = () => setOpenSignUp(true);
    const handleSignupClose = () => setOpenSignUp(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        const result = EMAIL_REGEX.test(email);
        console.log(result);
        console.log(email);
        setValidEmail(result);
    }, [email]);

    useEffect(() => {
        const result = PASSWORD_REGEX.test(password);
        console.log(result);
        console.log(password);
        setValidPassword(result);
    }, [password]);

    useEffect(() => {
        setErrMsg('');
    }, [email, password]);

    async function handleSubmit(e) {
        e.preventDefault();

        try{
            await axios.post(`${SERVER_ENDPOINTS}/logIn`, {
                email,
                password
            });
        }catch {
            console.log(e);
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
                  <Modal open={openSignIn} onClose={handleClose} sx={{ textAlign: 'center' }}>
                      <Box sx={style}>
                          <Typography sx={{ fontSize: '13px', color: '#5C6F7F', mb: '10px' }}>Log in with:</Typography>
                          <Box>
                              <Button variant="contained" sx={{ background: '#005AE2', fontSize: '13px', px: '10px', py: '7px', mr: '15px' }}>
                                  <GoogleIcon />
                                  Google
                              </Button>
                              <Button variant="contained" sx={{ background: '#005AE2', fontSize: '13px', px: '10px', py: '7px' }}>
                                  <AppleIcon />
                                  Apple
                              </Button>
                          </Box>
                          <Box sx={{ display: 'flex' }}>
                              <Box sx={{ border: '1px solid black' }}></Box>
                              <Typography>Or</Typography>
                              <Box sx={{ border: '1px solid black' }}></Box>
                          </Box>
                          <Box sx={{ display: 'flex', pt: '20px' }}>
                              <Typography>Email:</Typography>
                              <span className={validEmail ? 'valid' : 'hide'}>
                                  <CheckCircleIcon />
                              </span>
                              <span className={validEmail || !email ? 'hide' : 'invalid'}>
                                  <HighlightOffIcon />
                              </span>
                          </Box>
                          <TextField
                              onChange={(e) => {
                                  setEmail(e.target.value);
                              }}
                              value={email}
                              required
                              aria-invalid={validEmail ? 'false' : 'true'}
                              onFocus={() => setEmailFocus(true)}
                              onBlur={() => setEmailFocus(false)}
                              type="email"
                              size="small"
                              variant="outlined"
                              sx={{ width: '25rem', mb: '10px' }}
                          />
                          <Typography sx={{ textAlign: 'left', mt: '10px', mb: '10px' }} className={emailFocus && !validEmail ? 'instructions' : 'offscreen'}>
                              <InfoIcon />
                              Must include an @ sign and Must be a Valid Email
                          </Typography>
                          <Box sx={{ display: 'flex', pt: '20px' }}>
                              <Typography>Password:</Typography>
                              <span className={validPassword ? 'valid' : 'hide'}>
                                  <CheckCircleIcon />
                              </span>
                              <span className={validPassword || !password ? 'hide' : 'invalid'}>
                                  <HighlightOffIcon />
                              </span>
                          </Box>
                          <TextField
                              onChange={(e) => {
                                  setPassword(e.target.value);
                              }}
                              value={password}
                              required
                              aria-invalid={validPassword ? 'false' : 'true'}
                              onFocus={() => setPasswordFocus(true)}
                              onBlur={() => setPasswordFocus(false)}
                              type="Password"
                              size="small"
                              variant="outlined"
                              sx={{ width: '25rem', mb: '10px' }}
                          />
                          <Typography sx={{ textAlign: 'left', mt: '10px', mb: '10px' }} className={passwordFocus && !validPassword ? 'instructions' : 'offscreen'}>
                              <InfoIcon />
                              8 to 24 characters.
                              <br />
                              Must include uppercase and lowercase letters, a number and a special character.
                              <br />
                              Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span>{' '}
                              <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                          </Typography>
                          <Typography sx={{ color: '#005AE2CC', display: 'flex', justifyContent: 'right', mb: '10px', fontSize: '14px' }}>Forgot your password?</Typography>
                          <Button
                              type="submit"
                              onClick={handleSubmit}
                              variant="contained"
                              sx={{ background: '#005AE2', borderRadius: '30px', px: '9rem', width: '22rem', fontSize: '14px', mb: '10px' }}
                              disabled={!validEmail || !validPassword ? true : false}
                          >
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
                  <SignUpModal style={style} open={openSignup} onClose={handleSignupClose} />
              </Box>
          </Toolbar>
      </AppBar>
  );
}

export default Nav