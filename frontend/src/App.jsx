import React, { useState, useEffect } from 'react';
import { AppConfig, UserSession, showConnect } from '@stacks/connect';
import { StacksTestnet } from '@stacks/network';
import TokenBalance from './components/TokenBalance';
import TransferForm from './components/TransferForm';
import MintForm from './components/MintForm';
import './App.css';

const appConfig = new AppConfig(['store_write', 'publish_data']);
const userSession = new UserSession({ appConfig });

function App() {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (userSession.isSignInPending()) {
      userSession.handlePendingSignIn().then((userData) => {
        setUserData(userData);
      });
    } else if (userSession.isUserSignedIn()) {
      setUserData(userSession.loadUserData());
    }
  }, []);

  const connectWallet = () => {
    showConnect({
      appDetails: {
        name: 'Simple Token DApp',
        icon: window.location.origin + '/logo.svg',
      },
      redirectTo: '/',
      onFinish: () => {
        window.location.reload();
      },
      userSession,
    });
  };

  const disconnectWallet = () => {
    userSession.signUserOut('/');
    setUserData(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>🪙 Simple Token DApp</h1>
        <p>A basic token contract with transfer functionality</p>
        
        {!userData ? (
          <div className="wallet-section">
            <h2>Connect Your Wallet</h2>
            <button onClick={connectWallet} className="connect-btn">
              Connect Hiro Wallet
            </button>
          </div>
        ) : (
          <div className="wallet-section">
            <h2>Welcome!</h2>
            <p className="wallet-address">
              Address: {userData.profile.stxAddress.testnet}
            </p>
            <button onClick={disconnectWallet} className="disconnect-btn">
              Disconnect
            </button>
          </div>
        )}
      </header>

      {userData && (
        <main className="main-content">
          <div className="token-section">
            <TokenBalance userAddress={userData.profile.stxAddress.testnet} />
          </div>
          
          <div className="mint-section">
            <MintForm userAddress={userData.profile.stxAddress.testnet} />
          </div>

          <div className="transfer-section">
            <TransferForm
              userSession={userSession}
              userAddress={userData.profile.stxAddress.testnet}
            />
          </div>
        </main>
      )}

      <footer className="App-footer">
        <p>Built with React + Stacks.js</p>
      </footer>
    </div>
  );
}

export default App;
