import React from 'react';
import PlaidLink from 'react-plaid-link';

export const initiateLinkAccount = () => {
  const handleOnSuccess = async (public_token, metadata) => {
    try {
      const response = await fetch('http://localhost:5000/exchange-token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ public_token })
      });

      if (response.ok) {
        const data = await response.json(); 

        // Handle successful account data (received in 'data')
        // 1. Update your component's state to store the data.
        // 2. Display the account data in your UI.
        console.log('Received account data:', data);
      } else {
        // Handle API errors (non-200 status codes)
        const errorData = await response.json();
        console.error('Error exchanging token:', errorData); 
        // Display an error message to the user
      }
    } catch (error) {
      // Handle network errors or other unexpected errors
      console.error('Error fetching account data:', error);
      // Display an error message to the user
    }
  };

  const handleOnExit = (error, metadata) => {
    console.log('Link exited with error: ', error);
    console.log('Metadata: ', metadata);
  };

  return (
    <PlaidLink
      clientName="Mango"
      env="development" 
      product={['auth', 'transactions']}
      publicKey="63b46fbf2ff1ae0012d36ee9" // Replace with your actual public key
      onExit={handleOnExit}
      onSuccess={handleOnSuccess}
    >
      Open Link and connect your bank!
    </PlaidLink>
  );
};
