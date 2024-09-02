// import React from 'react';
// // import { useNavigate } from 'react-router-dom';

// const LogOut = () => {
//   localStorage.removeItem('token');
// };

// const SignOut = () => {
//   // const navigate = useNavigate();

//   const handleSignOut = () => {
//     LogOut();
//     alert('Logged Out In successful!');
//     // navigate('/login'); // Redirect to login or another page after signing out
//   };

//   return (
//     <header>
//       <button onClick={handleSignOut}></button>
//     </header>
//   );
// };

// export default SignOut;
// import React from 'react';

const SignOut = () => {
  localStorage.removeItem('token');
  alert('Logged Out In successful!');
  // return;
};

export default SignOut;
