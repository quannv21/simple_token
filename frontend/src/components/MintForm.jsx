import React, { useState } from 'react';
import { StacksTestnet } from '@stacks/network';
import { openContractCall } from '@stacks/connect';
import { uintCV, standardPrincipalCV } from '@stacks/transactions';

const MintForm = ({ userAddress }) => {
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');
  const [loading, setLoading] = useState(false);
  const [txId, setTxId] = useState('');

  // Contract details
  const contractAddress = 'ST6K43RGM0M693W7SDGKFG1VNZKY7EHDVZVJ57EZ';
  const contractName = 'simple-token';

  const handleMint = async (e) => {
    e.preventDefault();
    
    if (!userAddress) {
      alert('Please connect your wallet first');
      return;
    }

    if (!amount || !recipient) {
      alert('Please fill in all fields');
      return;
    }

    setLoading(true);
    setTxId('');

    try {
      // Convert amount to micro-tokens (multiply by 1,000,000 for 6 decimals)
      const amountInMicroTokens = Math.floor(parseFloat(amount) * 1000000);

      const functionArgs = [
        uintCV(amountInMicroTokens),
        standardPrincipalCV(recipient)
      ];

      const txOptions = {
        contractAddress,
        contractName,
        functionName: 'mint',
        functionArgs,
        network: new StacksTestnet(),
        appDetails: {
          name: 'Simple Token DApp',
          icon: window.location.origin + '/logo.svg',
        },
        onFinish: (data) => {
          console.log('Mint transaction submitted:', data);
          setTxId(data.txId);
          setLoading(false);
          // Clear form
          setRecipient('');
          setAmount('');
        },
        onCancel: () => {
          console.log('Mint transaction cancelled');
          setLoading(false);
        },
      };

      await openContractCall(txOptions);
    } catch (error) {
      console.error('Error minting tokens:', error);
      alert('Error minting tokens: ' + error.message);
      setLoading(false);
    }
  };

  return (
    <div className="mint-form">
      <h3>🏭 Mint Tokens (Owner Only)</h3>
      <form onSubmit={handleMint}>
        <div className="form-group">
          <label htmlFor="recipient">Recipient Address:</label>
          <input
            type="text"
            id="recipient"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            placeholder="Enter recipient address or use your own"
            disabled={loading}
          />
          <button 
            type="button" 
            onClick={() => setRecipient(userAddress)}
            disabled={loading || !userAddress}
            className="use-my-address-btn"
          >
            Use My Address
          </button>
        </div>
        
        <div className="form-group">
          <label htmlFor="amount">Amount (SIMP tokens):</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount to mint"
            step="0.000001"
            min="0"
            disabled={loading}
          />
        </div>
        
        <button type="submit" disabled={loading || !userAddress}>
          {loading ? 'Minting...' : 'Mint Tokens'}
        </button>
      </form>
      
      {txId && (
        <div className="transaction-result">
          <p>✅ Mint transaction submitted!</p>
          <p>Transaction ID: <code>{txId}</code></p>
          <a 
            href={`https://explorer.hiro.so/txid/${txId}?chain=testnet`}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Explorer
          </a>
        </div>
      )}
    </div>
  );
};

export default MintForm;
