import React, { useState } from 'react';
import { StacksTestnet } from '@stacks/network';
import { 
  makeContractCall,
  standardPrincipalCV,
  uintCV,
  noneCV,
  broadcastTransaction
} from '@stacks/transactions';
import { openContractCall } from '@stacks/connect';

const TransferForm = ({ userSession, userAddress }) => {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const [txId, setTxId] = useState(null);
  const [error, setError] = useState(null);

  // TODO: Replace with your deployed contract address
  // You can use your address: ST6K43RGM0M693W7SDGKFG1VNZKY7EHDVZVJ57EZ
  const contractAddress = 'ST6K43RGM0M693W7SDGKFG1VNZKY7EHDVZVJ57EZ'; // Testnet deployer address
  const contractName = 'simple-token';

  const handleTransfer = async (e) => {
    e.preventDefault();
    
    if (!recipient || !amount) {
      setError('Please fill in all fields');
      return;
    }

    if (parseFloat(amount) <= 0) {
      setError('Amount must be greater than 0');
      return;
    }

    setLoading(true);
    setError(null);
    setTxId(null);

    try {
      // Convert amount to micro-tokens (multiply by 1,000,000 for 6 decimals)
      const amountInMicroTokens = Math.floor(parseFloat(amount) * 1000000);

      const functionArgs = [
        uintCV(amountInMicroTokens),
        standardPrincipalCV(userAddress),
        standardPrincipalCV(recipient),
        noneCV()
      ];

      const txOptions = {
        contractAddress,
        contractName,
        functionName: 'transfer',
        functionArgs,
        network: new StacksTestnet(),
        appDetails: {
          name: 'Simple Token DApp',
          icon: window.location.origin + '/logo.svg',
        },
        onFinish: (data) => {
          console.log('Transaction submitted:', data);
          setTxId(data.txId);
          setLoading(false);
          // Clear form
          setRecipient('');
          setAmount('');
        },
        onCancel: () => {
          console.log('Transaction cancelled');
          setLoading(false);
        },
      };

      await openContractCall(txOptions);
    } catch (err) {
      console.error('Transfer error:', err);
      setError('Transfer failed: ' + err.message);
      setLoading(false);
    }
  };

  return (
    <div className="transfer-form">
      <h3>💸 Transfer Tokens</h3>
      
      <form onSubmit={handleTransfer}>
        <div className="form-group">
          <label htmlFor="recipient">Recipient Address:</label>
          <input
            type="text"
            id="recipient"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            placeholder="ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM"
            disabled={loading}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="amount">Amount (SIMP tokens):</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.000001"
            step="0.000001"
            min="0.000001"
            disabled={loading}
            required
          />
          <small>Minimum: 0.000001 SIMP</small>
        </div>

        <button type="submit" disabled={loading} className="transfer-btn">
          {loading ? 'Processing...' : 'Transfer Tokens'}
        </button>
      </form>

      {error && (
        <div className="error-message">
          <p>❌ {error}</p>
        </div>
      )}

      {txId && (
        <div className="success-message">
          <p>✅ Transfer submitted!</p>
          <p>Transaction ID: <code>{txId}</code></p>
          <p>
            <a 
              href={`https://explorer.stacks.co/txid/${txId}?chain=testnet`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Explorer
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default TransferForm;
