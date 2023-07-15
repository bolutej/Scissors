import { Typography, Box, Button, FormControl, TextField, Select, MenuItem, List, ListItem, Modal } from "@mui/material";
import LinkIcon from '@mui/icons-material/Link';
import AddIcon from '@mui/icons-material/Add';
import{ FaTwitter, FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa' 
import Nav from "./Nav";
import { ReactComponent as Frame } from './img/frame.svg';
import { ReactComponent as Group } from './img/Group 3.svg';
import { ReactComponent as Desktop }  from './img/Desktop.svg';
import axios from "axios";
import { useState } from 'react';
import { SERVER_ENDPOINTS  } from "../config";
// import { ReactComponent as Frame2 } from './img/Frame 1000001649.svg'
// import {styled } from "@mui/material/styles";

// const CustomizedTextField = styled(TextField)({
//   border: "1px solid red",
//   "& .Mui-focused": {
//     border:"2px solid green"
//   }
// });

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

const HomePage = () => {
     const [openSign, setOpenSign] = useState(false);
     const handleSignupOpen = () => setOpenSign(true);
     const handleSignupClose = () => setOpenSign(false);
     const [ destination, setDestination ] = useState();
     const [shortUrl, setShortUrl] = useState<{
        shortId: string;  
     } | null>(null);
     const [username, setUsername] = useState('');
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');

     async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
            e.preventDefault();
            setShortUrl(null);
            const result = await axios
            .post(`${SERVER_ENDPOINTS}/getCustomLink`, {
                destination,
            })
            .then((resp) => resp.data);

            setShortUrl(result)
     }

      async function submitForm(e) {
          e.preventDefault();

          try {
              await axios.post(`${SERVER_ENDPOINTS}/signup`, {
                  username,
                  email,
                  password
              });
          } catch {
              console.log(e);
          }
      }

  return (
      <>
          <Nav />
          <Box>
              <Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', pt: '7rem' }}>
                      <Typography sx={{ fontSize: 35, fontWeight: '600' }}>Optimize Your Online Experience with Our</Typography>
                      <Typography sx={{ fontSize: 35, fontWeight: '600' }}>Advanced URL Shortening Solution</Typography>
                      <Typography sx={{ typography: 'body2', paddingTop: '10px' }}>
                          Personalize your shortened URLs to align with your brand identity. Utilize custom slugs,
                          <br /> branded links, and domain customization options to reinforce your brand presence and <br />
                          enhance user engagement.
                      </Typography>
                  </Box>
                  <Box sx={{ textAlign: 'center', py: 5 }}>
                      <Button variant="contained" sx={{ borderRadius: '30px', px: 4, mx: 3, fontSize: '12px' }} onClick={handleSignupOpen}>
                          Sign Up
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
                      <Button variant="text" sx={{ fontSize: '12px' }}>
                          Learn More
                      </Button>
                  </Box>
                  <Box sx={{ border: 1, borderColor: 'rgba(0, 90, 226, 0.5)', borderRadius: '30px', textAlign: 'center', width: '25rem', m: 'auto', px: '60px', py: '50px' }}>
                      <Typography sx={{ fontSize: '13px' }}>
                          <Frame />
                          Seamlessly transform yourlong URLs into concise and <br /> shareable links with just few clicks.
                      </Typography>
                  </Box>
                  <Group />
              </Box>
              {/* int */}
              <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItem: 'center', background: '#F9FBFD', px: '10rem', py: '2.5rem' }}>
                  <Typography sx={{ fontSize: 28, fontWeight: 'Bold' }}>
                      One Stop.
                      <br />
                      Four <strong style={{ color: '#005AE2' }}>Possibilities.</strong>
                  </Typography>
                  <Box>
                      <Typography sx={{ fontWeight: 'Bold', fontSize: '1.4em' }}>3M</Typography>
                      <Typography sx={{ fontSize: '14px' }}>Active users</Typography>
                  </Box>
                  <Box>
                      <Typography sx={{ fontWeight: 'Bold', fontSize: '1.4em' }}>60M</Typography>
                      <Typography sx={{ fontSize: '14px' }}>
                          Links & QR
                          <br /> codes created
                      </Typography>
                  </Box>
                  <Box>
                      <Typography sx={{ fontWeight: 'Bold', fontSize: '1.4em' }}>1B</Typography>
                      <Typography sx={{ fontSize: '14px' }}>
                          Clicked & Scanned
                          <br /> connections
                      </Typography>
                  </Box>
                  <Box>
                      <Typography sx={{ fontWeight: 'Bold', fontSize: '1.4em' }}>300K</Typography>
                      <Typography sx={{ fontSize: '14px' }}>App Integrations</Typography>
                  </Box>
              </Box>
              <Box sx={{ display: 'flex', pt: '10rem', px: '10rem', justifyContent: 'space-between' }}>
                  <Box>
                      <Typography sx={{ fontSize: 28, fontWeight: 'Bold' }}>
                          WHY choose <strong style={{ color: '#005AE2' }}>Scissors</strong>{' '}
                      </Typography>
                      <Typography sx={{ fontSize: '13px' }}>
                          Scissors is the hub of everything that has to do
                          <br /> with your link management. We shorten your URLs,
                          <br /> allow you creating custom ones for your personal,
                          <br /> business, event usage. Our swift QR code
                          <br /> creation, management and usage tracking with
                          <br /> advance analytics for all of these is second to
                          <br /> none.
                      </Typography>
                  </Box>
                  <Box>
                      <Typography sx={{ fontSize: '13px' }}>
                          <LinkIcon />
                          <Typography sx={{ fontSize: '20px', fontWeight: 'Bold' }}>URL Shortening</Typography>
                          Scissor allows you to shorten URLs of your
                          <br /> business, events. Shorten your URL at scale,
                          <br /> URL redirects.
                      </Typography>

                      <Typography sx={{ fontSize: '13px', pt: '80px' }}>
                          <Typography sx={{ fontSize: '20px', fontWeight: 'Bold' }}>QR Codes</Typography>
                          Generate QR codes to your business, events.
                          <br /> Bring your audience and customers to your
                          <br /> doorstep with this scan and go solution.
                      </Typography>
                  </Box>
                  <Box>
                      <LinkIcon />
                      <Typography sx={{ fontSize: '20px', fontWeight: 'Bold' }}>Custom URLs</Typography>
                      <Typography sx={{ fontSize: '13px' }}>
                          With Scissor, you can create custom URLs,
                          <br /> with the length you want! A solution for socials
                          <br /> and businesses.
                      </Typography>

                      <Typography sx={{ fontSize: '13px', pt: '80px' }}>
                          <Typography sx={{ fontSize: '20px', fontWeight: 'Bold' }}>Data Analytics</Typography>
                          Receive data on the usage of either your
                          <br /> shortened URL, custom URLs or generated QR
                          <br /> codes. Embedded to monitor progress.
                      </Typography>
                  </Box>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', pt: '8rem' }}>
                  <Typography sx={{ fontSize: 28, fontWeight: 'Bold' }}>
                      A <strong style={{ color: '#005AE2' }}>price perfect</strong> for your needs.
                  </Typography>
                  <Typography sx={{ fontSize: '13px', textAlign: 'center', pb: '5rem' }}>
                      From catering for your personal business, event, socials needs, you can be
                      <br /> rest assured we have you in mind in out pricing.
                  </Typography>
                  <Box sx={{ display: 'flex' }}>
                      <Box sx={{ border: 1, borderColor: 'rgba(0, 90, 226, 0.5)', borderRight: 0, borderRadius: '8px', px: '2rem', py: '2rem', height: '15rem', mt: '50px' }}>
                          <Typography>Basic</Typography>
                          <Typography sx={{ fontSize: '28px', fontWeight: 'Bold' }}>Free</Typography>
                          <Typography sx={{ fontWeight: 500 }}>Free plan for all users</Typography>
                          <List sx={{ fontWeight: 'bold', fontSize: '12px' }}>
                              <ListItem>Unlimited URL Shortening</ListItem>
                              <ListItem>Basic Link Analytics</ListItem>
                              <ListItem>Customizable Short Links</ListItem>
                              <ListItem>Standard Support</ListItem>
                              <ListItem>Ad-supported</ListItem>
                          </List>
                      </Box>

                      <Box sx={{ border: 1, color: 'white', background: '#1E3448 ', borderRadius: '8px', px: '2.5rem', py: '5rem' }}>
                          <Typography>Professional</Typography>
                          <Typography sx={{ fontSize: '28px', fontWeight: 'Bold' }}>$15/month</Typography>
                          <Typography>Ideal for business creators</Typography>
                          <List sx={{ fontWeight: 'bold', fontSize: '12px' }}>
                              <ListItem>Enhanced Link Analytics</ListItem>
                              <ListItem>Custom Branded Domains</ListItem>
                              <ListItem>Advanced Link Customization</ListItem>
                              <ListItem>Priority Support</ListItem>
                              <ListItem>Ad-free Expereince</ListItem>
                          </List>
                      </Box>

                      <Box sx={{ border: 1, borderColor: 'rgba(0, 90, 226, 0.5)', borderLeft: 0, borderRadius: '8px', px: '2rem', py: '2rem', height: '15rem', mt: '50px' }}>
                          <Typography>Teams</Typography>
                          <Typography sx={{ fontSize: '28px', fontWeight: 'Bold' }}>$25/month</Typography>
                          <Typography>Share with up to 10 users</Typography>
                          <List sx={{ fontWeight: 'bold', fontSize: '12px' }}>
                              <ListItem>Team Collaboration</ListItem>
                              <ListItem>User Roles and Permissions</ListItem>
                              <ListItem>Enhanced Security</ListItem>
                              <ListItem>API Access</ListItem>
                              <ListItem>Dedicated Account Manager</ListItem>
                          </List>
                      </Box>
                  </Box>
                  <Box sx={{ pt: '5rem', pb: '7rem' }}>
                      <Button variant="outlined" sx={{ px: '30px', py: '8px', borderRadius: '20px', fontSize: '13px' }}>
                          Get Custom Pricing
                      </Button>
                      <Button variant="contained" sx={{ background: '#005AE2', ml: '20px', borderRadius: '20px', fontSize: '13px', px: '30px', py: '8px' }}>
                          Select Pricing
                      </Button>
                  </Box>
              </Box>
              <Box>
                  <Desktop />
                  <Box
                      sx={{ padding: '20px', mx: '25rem' }}
                      style={{
                          backgroundImage: `<Desktop />`
                      }}
                  >
                      <FormControl component="form" onSubmit={handleSubmit} sx={{ display: 'flex', textAlign: 'center', alignItems: 'center', height: '20vh', background: 'white' }}>
                          destination: {destination}
                          <TextField onChange={(e: any) => setDestination(e.target.value)} type="text" size="small" defaultValue="Paste URL here.." sx={{ width: '26.5rem' }} />
                          <Box>
                              <Select
                                  sx={{
                                      width: 200,
                                      height: 40
                                  }}
                              >
                                  {/* <InputLabel>Customise domain</InputLabel> */}
                                  <MenuItem value={1}>Scissor.com</MenuItem>
                                  <MenuItem value={2}>Enter Domain</MenuItem>
                                  <MenuItem value={3}>Add Domain</MenuItem>
                              </Select>
                              <TextField type="text" size="small" defaultValue="Type Alias here" />
                              <br />
                              <Button variant="contained">Trim URL</Button>
                              <Typography sx={{ textAlign: 'center', pt: '10px', textDecoration: 'none' }}>
                                  Your Short Url: {shortUrl && <a href={`${SERVER_ENDPOINTS}/${shortUrl?.shortId}`}>{shortUrl?.shortId}</a>}
                              </Typography>
                              <Typography sx={{ typography: 'body2' }}>
                                  By clicking TrimURL, I agree to the Terms of Service,
                                  <br />
                                  Primary Policy and Use of Cookies.
                              </Typography>
                          </Box>
                      </FormControl>
                  </Box>
              </Box>
              <Box sx={{ px: '20rem' }}>
                  <Typography>FAQs</Typography>
                  <Typography sx={{ typography: 'body2', borderBottom: 1, borderColor: 'grey.500', py: '10px' }}>
                      How does URL shortening work? <AddIcon />
                  </Typography>
                  <Typography sx={{ typography: 'body2', borderBottom: 1, borderColor: 'grey.500', py: '10px' }}>
                      Is it necessary to create an account to use the URL shortening service?
                      <AddIcon />
                  </Typography>
                  <Typography sx={{ typography: 'body2', borderBottom: 1, borderColor: 'grey.500', py: '10px' }}>
                      Are the shortened links permanent? Will they expire?
                      <AddIcon />
                  </Typography>
                  <Typography sx={{ typography: 'body2', borderBottom: 1, borderColor: 'grey.500', py: '10px' }}>
                      Are there any limitations on the number of URLs I can shorten?
                      <AddIcon />
                  </Typography>
                  <Typography sx={{ typography: 'body2', borderBottom: 1, borderColor: 'grey.500', py: '10px' }}>
                      Can I customize the shortened URLs to reflect my brand or content? <AddIcon />
                  </Typography>
                  <Typography sx={{ typography: 'body2', borderBottom: 1, borderColor: 'grey.500', py: '10px' }}>
                      Can I track the performance of my shortened URLs? <AddIcon />
                  </Typography>
                  <Typography sx={{ typography: 'body2', borderBottom: 1, borderColor: 'grey.500', py: '10px' }}>
                      How secure is the URL shortening service? Are the shortened links protected against spam or malicious activity?
                      <AddIcon />
                  </Typography>
                  <Typography sx={{ typography: 'body2', borderBottom: 1, borderColor: 'grey.500', py: '10px' }}>
                      What is a QR code and what can it do? <AddIcon />
                  </Typography>
                  <Typography sx={{ typography: 'body2', borderBottom: 1, borderColor: 'grey.500', py: '10px' }}>
                      Is there an API available for integrating the URL shortening service into my own applications or websites? <AddIcon />
                  </Typography>
              </Box>
              <Box sx={{ textAlign: 'center', background: '#1E3448', color: 'white', py: '40px' }}>
                  <Typography sx={{ pb: '15px' }}>Revolutionizing Link Optimization</Typography>
                  <Button variant="contained">Get Started</Button>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', pt: '6rem', px: '2rem' }}>
                  <Box sx={{ pr: '5rem' }}>
                      <Typography sx={{ pb: '20px', fontWeight: 'bold', fontSize: '20px' }}>SCISSOR</Typography>
                      <FaTwitter style={{ paddingRight: '15px' }} />
                      <FaInstagram style={{ paddingRight: '15px' }} />
                      <FaLinkedin style={{ paddingRight: '15px' }} />
                      <FaFacebook style={{ paddingRight: '15px' }} />
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                      <Box>
                          <List sx={{ pb: '5rem' }}>
                              <Typography sx={{ fontWeight: 'bold' }}>Why Scissor?</Typography>
                              <ListItem>Scissor 101</ListItem>
                              <ListItem>Integrations & API</ListItem>
                              <ListItem>Pricing</ListItem>
                          </List>
                          <List>
                              <Typography sx={{ fontWeight: 'bold' }}>Resources</Typography>
                              <ListItem>Blog</ListItem>
                              <ListItem>Resources Library</ListItem>
                              <ListItem>Developers</ListItem>
                              <ListItem>App Connection</ListItem>
                              <ListItem>Support</ListItem>
                              <ListItem>Trust Center</ListItem>
                              <ListItem>Browser Extension</ListItem>
                              <ListItem>Mobile App</ListItem>
                          </List>
                      </Box>
                      <Box>
                          <List sx={{ pb: '3rem' }}>
                              <Typography sx={{ fontWeight: 'bold' }}>Solutions</Typography>
                              <ListItem>Social Media</ListItem>
                              <ListItem>Digital Marketing</ListItem>
                              <ListItem>Customer Service</ListItem>
                              <ListItem>For Developers</ListItem>
                          </List>
                          <List>
                              <Typography sx={{ fontWeight: 'bold' }}>Features</Typography>
                              <ListItem>Branded Links</ListItem>
                              <ListItem>Mobile Links</ListItem>
                              <ListItem>Campaign</ListItem>
                              <ListItem>Management &</ListItem>
                              <ListItem>Analytics</ListItem>
                              <ListItem>QR Code generation</ListItem>
                          </List>
                      </Box>
                      <Box>
                          <List sx={{ pb: '5.2rem' }}>
                              <Typography sx={{ fontWeight: 'bold' }}>Products</Typography>
                              <ListItem>Link Management</ListItem>
                              <ListItem>QR Codes</ListItem>
                              <ListItem>Link-in-bio</ListItem>
                          </List>
                          <List>
                              <Typography sx={{ fontWeight: 'bold' }}>Legal</Typography>
                              <ListItem>Privacy Policy</ListItem>
                              <ListItem>Cookie Policy</ListItem>
                              <ListItem>Terms of Service</ListItem>
                              <ListItem>Acceptance Use Policy</ListItem>
                              <ListItem>Code of Conduct</ListItem>
                          </List>
                      </Box>
                      <List>
                          <Typography sx={{ fontWeight: 'bold' }}>Company</Typography>
                          <ListItem>About Scissor</ListItem>
                          <ListItem>Carreers</ListItem>
                          <ListItem>Partners</ListItem>
                          <ListItem>Press</ListItem>
                          <ListItem>Conatct</ListItem>
                          <ListItem>Reviews</ListItem>
                      </List>
                  </Box>
              </Box>
          </Box>
      </>
  );
}

export default HomePage