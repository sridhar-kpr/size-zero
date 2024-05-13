import React, { useState } from 'react';

const Signup = ({ onSignup }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [age, setAge] = useState('');


  const handleSignupClick = () => {
    onSignup({ username, email, password,age,mobile });
  };

  return (
    <div>
      <h2>Signup</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <input type="mobile" placeholder="Mobile" value={age} onChange={(e) => setAge(e.target.value)} />
      <input type="age" placeholder="Age" value={mobile} onChange={(e) => setMobile(e.target.value)} />

      <button onClick={handleSignupClick}>Signup</button>
    </div>
  );
};

export default Signup;
