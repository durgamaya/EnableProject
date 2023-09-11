// import React, { useState } from "react";
// import {Link} from 'react-router-dom';
// import { register } from "./services/userService";
// import "./RegistrationForm.css";
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const RegistrationForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     empId: "",
//     empType: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     let parsedValue = value;

//   if (name === 'empId') {
//     // Check if the value is a valid number
//     if (!isNaN(value) && value !== "") {
//       parsedValue = parseInt(value);
//     } else {
//       parsedValue = ""; // Clear the value if it's not a valid number
//     }
//   }
  
//     setFormData({
//       ...formData,
//       [name]: parsedValue,
//     });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     // Add your form submission logic here
//     try {
//       const response = await register(formData);
//       console.log(response); // This will log the response data from the backend

//       // Handle success
//       toast.success(response);
//       window.location.href = '/';

//     } catch (error) {
//       console.error(error); // Log the error for debugging

//       // Handle error
//       if (error.response && error.response.data) {
//         const errorMessage = error.response.data;
//         toast.error(errorMessage);
//       } else {
//         toast.error("An error occurred during registration");
//       }
//     }
//   };

//   return (
//     <div className="registration-form">
//       <h1>Registration Form</h1>
//       <form onSubmit={handleSubmit}>
//       <label htmlFor="name">Name:</label>
// <input
//   type="text"
//   id="name"
//   name="name"
//   value={formData.name}
//   onChange={handleInputChange}
//   required
//   className="input"  /* Use "className" instead of "class" */
// />

// <label htmlFor="empId">Employee ID:</label>
// <input
//   type="number"
//   id="empId"
//   name="empId"
//   value={formData.empId}
//   onChange={handleInputChange}
//   required
//   className="input"  /* Use "className" instead of "class" */
// />


//         <label htmlFor="empType">Employee Type:</label>
//         <select
//           id="empType"
//           name="empType"
//           value={formData.empType}
//           onChange={handleInputChange}
//           required
//           class="dropdown"
//         >
        
//           <option value="">Select an employee type</option>
//           <option value="support">Support Staff</option>
//           <option value="team">Team Member</option>
//           <option value="admin">Admin</option>
//         </select>

//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={formData.email}
//           onChange={handleInputChange}
//           required
//           class="odd"
//         />

//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           name="password"
//           value={formData.password}
//           onChange={handleInputChange}
//           required
//           class="odd"
//         />

//         <label htmlFor="confirmPassword">Confirm Password:</label>
//         <input
//           type="password"
//           id="confirmPassword"
//           name="confirmPassword"
//           value={formData.confirmPassword}
//           onChange={handleInputChange}
//           required
//           class="odd"
//         />

//         <button type="submit">Register</button>
//       </form>

//       <div className="App">


// <p>Already have an account?&nbsp;&nbsp;&nbsp;&nbsp; <Link to="/">Login here</Link></p>


//     </div>


//     </div>
    
//   );
// };

// export default RegistrationForm;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { register } from './services/userService';
import { toast } from 'react-toastify';
import { Button, TextField, FormControl, InputLabel, Select, MenuItem, Container, Typography, CssBaseline, Paper } from '@mui/material';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    empId: '',
    empType: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    let parsedValue = value;

    if (name === 'empId') {
      // Check if the value is a valid number
      if (!isNaN(value) && value !== '') {
        parsedValue = parseInt(value);
      } else {
        parsedValue = ''; // Clear the value if it's not a valid number
      }
    }

    setFormData({
      ...formData,
      [name]: parsedValue,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Add your form submission logic here
    try {
      const response = await register(formData);
      console.log(response); // This will log the response data from the backend

      // Handle success
      toast.success(response);
      window.location.href = '/';

    } catch (error) {
      console.error(error); // Log the error for debugging

      // Handle error
      if (error.response && error.response.data) {
        const errorMessage = error.response.data;
        toast.error(errorMessage);
      } else {
        toast.error('An error occurred during registration');
      }
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper elevation={3} style={{ padding: 20, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h5" style={{ marginBottom: 20 }}>
          Registration Form
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <TextField
            variant="outlined"
            margin="dense"
            required
            fullWidth
            id="name"
            name="name"
            label="Name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <TextField
            variant="outlined"
            margin="dense"
            required
            fullWidth
            type="number"
            id="empId"
            name="empId"
            label="Employee ID"
            value={formData.empId}
            onChange={handleInputChange}
          />
          <FormControl variant="outlined" fullWidth margin="dense" required>
            <InputLabel htmlFor="empType">Employee Type</InputLabel>
            <Select
              labelId="empType-label"
              id="empType"
              name="empType"
              value={formData.empType}
              onChange={handleInputChange}
              label="Employee Type"
            >
              <MenuItem value="">
                <em>Select an employee type</em>
              </MenuItem>
              <MenuItem value="support">Support Staff</MenuItem>
              <MenuItem value="team">Team Member</MenuItem>
              <MenuItem value="admin">Admin</MenuItem>
            </Select>
          </FormControl>
          <TextField
            variant="outlined"
            margin="dense"
            required
            fullWidth
            id="email"
            name="email"
            label="Email Address"
            value={formData.email}
            onChange={handleInputChange}
          />
          <TextField
            variant="outlined"
            margin="dense"
            required
            fullWidth
            type="password"
            id="password"
            name="password"
            label="Password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <TextField
            variant="outlined"
            margin="dense"
            required
            fullWidth
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            label="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ marginTop: 20 }}
          >
            Register
          </Button>
        </form>
        <Link to="/" style={{ marginTop: 20, color: 'black' }}>Already have an account? <b>Login here</b></Link>
      </Paper>
    </Container>
  );
};

export default RegistrationForm;