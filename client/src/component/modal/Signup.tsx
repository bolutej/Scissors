import { Box, Button, Modal, TextField, Typography } from "@mui/material";



const SignUpModal = ({openSign:}) => {

    return (
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
                <TextField
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }}
                    type="text"
                    size="small"
                    label="Username"
                    variant="outlined"
                    sx={{ width: '28rem', mb: '25px' }}
                />
                <TextField
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    type="email"
                    size="small"
                    label="Email"
                    variant="outlined"
                    sx={{ width: '28rem', mb: '25px' }}
                />
                <TextField
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    type="Password"
                    size="small"
                    label="Password"
                    variant="outlined"
                    sx={{ width: '28rem', mb: '10px' }}
                />
                <TextField
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    type="password"
                    size="small"
                    label="Retype Password"
                    variant="outlined"
                    sx={{ width: '28rem', mb: '25px' }}
                />
                <Typography sx={{ display: 'flex', mb: '10px', fontSize: '12px' }}>6 or more characters, one number, one uppercase one lower case</Typography>
                <Button type="submit" onClick={submitForm} variant="contained" sx={{ background: '#005AE2', borderRadius: '30px', width: '28rem', fontSize: '14px', mb: '10px' }}>
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