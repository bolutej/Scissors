// import axios from "axios"
// import { useEffect, useState } from "react";
// import { useParams } from 'react-router-dom';
// import {Box} from "@mui/material"
// import CircularProgress from '@mui/material/CircularProgress';


// const SERVER_ENDPOINT =
//   process.env.REACT_APP_SERVER_ENDPOINT || "http://localhost:4000";

// function HandleRedirectContainer() {
//     const [destination, setDestination] = useState<null | string>(null);
//     const [error, setError] = useState();

//     const n = useParams<{shortId: string;}>();


//       useEffect(() => {
//     async function getData() {
//       return axios
//         .get(`${SERVER_ENDPOINT}/api/url/${shortId}`)
//         .then((res) => setDestination(res.data.destination))
//         .catch((err) => {
//           setError(err.message);
//         });
//     }
//     getData();
//   }, [shortId]);

//   useEffect(() => {
//     if (destination) {
//       window.location.replace(destination);
//     }
//   }, [destination]);

  
//   if (!destination && !error) {
//     return (
//       <Box
//         height="100%"
//         display="flex"
//         alignItems="center"
//         justifyContent="center"
//       >
//         <CircularProgress />
//       </Box>
//     );
//   }

//   return <p>{error && JSON.stringify(error)}</p>;
// }

// export default HandleRedirectContainer; 