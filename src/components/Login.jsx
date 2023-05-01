
import React from 'react';


const Login =()=>{

   
    return (
        <div>
            <form action="">




            </form>
            <p>Hola yo soy el Login</p>
        </div> 
    );
    
}
export default Login;

// import React, { useState } from 'react';
// import { Form, Button } from 'react-bootstrap';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Lógica para enviar los datos del formulario al servidor
//   };

//   return (
//     <Form onSubmit={handleSubmit}>
//       <Form.Group controlId="email">
//         <Form.Label>Email:</Form.Label>
//         <Form.Control
//           type="email"
//           placeholder="Ingresa tu correo electrónico"
//           value={email}
//           onChange={handleEmailChange}
//         />
//       </Form.Group>
//       <Form.Group controlId="password">
//         <Form.Label>Contraseña:</Form.Label>
//         <Form.Control
//           type="password"
//           placeholder="Ingresa tu contraseña"
//           value={password}
//           onChange={handlePasswordChange}
//         />
//       </Form.Group>
//       <Button variant="primary" type="submit">
//         Iniciar sesión
//       </Button>
//     </Form>
//   );
// };

// export default Login;
