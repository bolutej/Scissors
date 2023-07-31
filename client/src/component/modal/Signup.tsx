import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import axios from 'axios';
import { SERVER_ENDPOINTS } from "../../config";
import { useState,useRef, useEffect } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import InfoIcon from '@mui/icons-material/Info';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';

type SignupModalProps = {
    open: boolean;
    onClose: () => void;
    style: any;
    ref?: React.LegacyRef<HTMLParagraphElement>;
};

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+).*$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const SignUpModal = ({open, onClose, style, ref }: SignupModalProps) => {
    const userRef = useRef<HTMLParagraphElement>(null);
    const errRef = useRef<HTMLParagraphElement>(null);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [username, setUsername] = useState('');
    const [validName, setValidName] = useState(false);
    const [usernameFocus, setUsernameFocus] = useState(false);

    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);

    const [matchPassword, setMatchPassword] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current?.focus();
    }, [])

    useEffect(() => {
        const result = USER_REGEX.test(username);
        console.log(result);
        console.log(username);
        setValidName(result);
    }, [username])

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
        const match = password === matchPassword;
        setValidMatch(match);
    }, [password, matchPassword]);

    useEffect(() => {
        setErrMsg('');
    }, [email, username, password, matchPassword])

    //   async function submitForm(e) {
    //       e.preventDefault();

    //       try {
    //           await axios.post(`${SERVER_ENDPOINTS}/signup`, {
    //               username,
    //               email,
    //               password
    //           });
    //       } catch {
    //           console.log(e);
    //       }
    //   }
    return (
        <Modal open={open} onClose={onClose} sx={{ textAlign: 'center' }}>
            <Box sx={style} style={{ width: 400, height: 550 }}>
                <Typography ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live="assertive">
                    {errMsg}
                </Typography>
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
                {/* <Box sx={{ display: 'flex' }}>
                    <Box sx={{ border: '1px solid black' }}></Box>
                    <Typography>Or</Typography>
                    <Box sx={{ border: '1px solid black' }}></Box>
                </Box> */}
                <Box sx={{ display: 'flex', pt: '20px' }}>
                    <Typography>Username:</Typography>
                    <span className={validName ? 'valid' : 'hide'}>
                        <CheckCircleIcon />
                    </span>
                    <span className={validName || !username ? 'hide' : 'invalid'}>
                        <HighlightOffIcon />
                    </span>
                </Box>
                <TextField
                    type="text"
                    size="small"
                    variant="outlined"
                    ref={userRef}
                    // autoComplete="off"
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }}
                    required
                    aria-invalid={validName ? 'false' : 'true'}
                    onFocus={() => setUsernameFocus(true)}
                    onBlur={() => setUsernameFocus(false)}
                    sx={{ width: '25rem' }}
                />
                <Typography sx={{ textAlign: 'left', mt: '10px', mb: '10px' }} className={usernameFocus && username && !validName ? 'instructions' : 'offscreen'}>
                    <InfoIcon />
                    4 to 24 characters.
                    <br />
                    Must begin with a letter.
                    <br />
                    Letters, numbers, underscores, hypens allowed.
                </Typography>

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
                    8 to 24 characters.
                    <br />
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
                <Box sx={{ display: 'flex', pt: '20px' }}>
                    <Typography>Retype Password:</Typography>
                    <span className={validMatch && matchPassword ? 'valid' : 'hide'}>
                        <CheckCircleIcon />
                    </span>
                    <span className={validMatch || !matchPassword ? 'hide' : 'invalid'}>
                        <HighlightOffIcon />
                    </span>
                </Box>
                <TextField
                    onChange={(e) => {
                        setMatchPassword(e.target.value);
                    }}
                    value={matchPassword}
                    required
                    aria-invalid={validMatch ? 'false' : 'true'}
                    onFocus={() => setMatchFocus(true)}
                    onBlur={() => setMatchFocus(false)}
                    type="password"
                    size="small"
                    variant="outlined"
                    sx={{ width: '25rem', mb: '25px' }}
                />
                <Typography id="confirmnote" className={matchFocus && !validMatch ? 'instructions' : 'offscreen'}>
                    <InfoIcon />
                    Must match the first password input field.
                </Typography>
                <Button
                    type="submit"
                    // onClick={submitForm}
                    variant="contained"
                    sx={{ background: '#005AE2', borderRadius: '30px', width: '25rem', fontSize: '14px', mb: '10px' }}
                    disabled={!validName || !validPassword || !validMatch ? true : false}
                >
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
    );
}

export default SignUpModal;