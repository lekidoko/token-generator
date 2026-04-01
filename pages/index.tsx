import React from 'react';

const TokenGenerator = () => {
  const [token, setToken] = React.useState('');

  const generateToken = () => {
    const newToken = Math.random().toString(36).substr(2);
    setToken(newToken);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Token Generator</h2>
      <button onClick={generateToken} style={{ marginBottom: '10px' }}>Generate Token</button>
      {token && <p>Your new token: <strong>{token}</strong></p>}
    </div>
  );
};

export default TokenGenerator;