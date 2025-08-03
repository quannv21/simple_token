import React, { useState, useEffect } from 'react';
import { StacksTestnet } from '@stacks/network';
import { callReadOnlyFunction, standardPrincipalCV } from '@stacks/transactions';

const TokenBalance = ({ userAddress }) => {
  const [balance, setBalance] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // TODO: Replace with your deployed contract address
  // You can use your address: ST6K43RGM0M693W7SDGKFG1VNZKY7EHDVZVJ57EZ
  const contractAddress = 'ST6K43RGM0M693W7SDGKFG1VNZKY7EHDVZVJ57EZ'; // Testnet deployer address
  const contractName = 'simple-token';

  const fetchBalance = async () => {
    if (!userAddress) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const network = new StacksTestnet();
      
      console.log('Calling contract:', contractAddress + '.' + contractName);
      console.log('Function: get-balance');
      console.log('User address:', userAddress);

      const result = await callReadOnlyFunction({
        contractAddress,
        contractName,
        functionName: 'get-balance',
        functionArgs: [standardPrincipalCV(userAddress)],
        network,
        senderAddress: userAddress,
      });

      console.log('Balance call result:', result);
      console.log('Result type:', result.type);
      console.log('Result value:', result.value);

      // Check if result is successful (type 7 is ok in Stacks)
      if (result.type === 7 || result.type === 'ok') {
        // Handle different response formats
        let balanceValue;
        if (result.value && result.value.value !== undefined) {
          balanceValue = result.value.value;
        } else if (result.value) {
          balanceValue = result.value;
        } else {
          balanceValue = result;
        }

        console.log('Extracted balance value:', balanceValue);
        setBalance(balanceValue.toString());
      } else {
        console.error('Balance call failed:', result);
        setError('Failed to fetch balance: ' + JSON.stringify(result));
      }
    } catch (err) {
      console.error('Error fetching balance:', err);
      if (err.message.includes('NoSuchContract')) {
        setError('Contract not found. Please deploy the contract first or update the contract address.');
      } else {
        setError('Error fetching balance: ' + err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBalance();
  }, [userAddress]);

  const formatBalance = (balance) => {
    if (!balance) return '0';
    // Convert from micro-tokens (6 decimals) to tokens
    const balanceNum = parseInt(balance);
    return (balanceNum / 1000000).toFixed(6);
  };

  return (
    <div className="token-balance">
      <h3>💰 Token Balance</h3>
      
      <div className="balance-display">
        {loading ? (
          <div className="loading">Loading balance...</div>
        ) : error ? (
          <div className="error">
            <p>{error}</p>
            <button onClick={fetchBalance} className="retry-btn">
              Retry
            </button>
          </div>
        ) : (
          <div className="balance-info">
            <div className="balance-amount">
              {formatBalance(balance)} SIMP
            </div>
            <div className="balance-raw">
              Raw: {balance || '0'} micro-tokens
            </div>
          </div>
        )}
      </div>

      <button onClick={fetchBalance} className="refresh-btn" disabled={loading}>
        🔄 Refresh Balance
      </button>
    </div>
  );
};

export default TokenBalance;
