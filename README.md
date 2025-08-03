# 🪙 Simple Token DApp

A basic token contract implementation on Stacks blockchain with React frontend for hackathon MVP.

## 📋 Project Overview

This project implements a simple SIP-010 compliant token contract with essential functionality:
- Token creation and management
- Transfer functionality between users
- Balance queries
- Mint function (owner only)
- React frontend for user interaction

## 🎯 Token Concept & Utility

**Token Name:** Simple Token (SIMP)
**Decimals:** 6
**Initial Supply:** 1,000,000 tokens to contract owner

### Use Cases
- **Learning Tool:** Perfect for understanding Stacks token development
- **MVP Foundation:** Base for more complex token projects
- **Testing:** Ideal for testing wallet integrations and DeFi protocols
- **Community Rewards:** Can be used for community engagement and rewards

### Key Features
- ✅ SIP-010 compliant fungible token
- ✅ Secure transfer mechanism
- ✅ Owner-controlled minting
- ✅ Balance tracking
- ✅ Web3 wallet integration
- ✅ Responsive React frontend

## 🏗️ Project Structure

```
project1_simple_token/
├── contracts/
│   ├── simple-token.clar          # Main token contract
│   └── tests/
│       └── simple-token_test.ts   # Contract tests
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TokenBalance.jsx   # Balance display component
│   │   │   └── TransferForm.jsx   # Transfer form component
│   │   ├── App.jsx                # Main React app
│   │   ├── App.css                # Styling
│   │   └── main.jsx               # React entry point
│   ├── package.json               # Frontend dependencies
│   ├── vite.config.js             # Vite configuration
│   └── index.html                 # HTML template
├── Clarinet.toml                  # Clarinet project config
├── project1_simple_token_plan.md  # Project plan
└── README.md                      # This file
```

## 🚀 Quick Start Guide

### Prerequisites
- [Clarinet](https://github.com/hirosystems/clarinet) installed
- [Node.js](https://nodejs.org/) (v16 or higher)
- [Hiro Wallet](https://wallet.hiro.so/) browser extension

### 1. Smart Contract Setup

```bash
# Navigate to project directory
cd project1_simple_token

# Run contract tests
clarinet test

# Check contract syntax
clarinet check

# Start local devnet (optional)
clarinet integrate
```

### 2. Deploy Contract to Testnet

```bash
# Deploy to testnet (requires STX testnet tokens)
clarinet deploy --testnet

# Note the contract address for frontend configuration
```

### 3. Frontend Setup

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

The frontend will be available at `http://localhost:3000`

### 4. Configure Contract Address

Update the contract address in the frontend components:
- `src/components/TokenBalance.jsx`
- `src/components/TransferForm.jsx`

Replace `ST6K43RGM0M693W7SDGKFG1VNZKY7EHDVZVJ57EZ` with your deployed contract address.

## 🧪 Testing

### Smart Contract Tests
```bash
clarinet test
```

### Frontend Testing
1. Connect Hiro Wallet to Stacks testnet
2. Ensure you have testnet STX for transaction fees
3. Test wallet connection
4. Test balance display
5. Test token transfers

## 📱 User Guide

### Connecting Wallet
1. Install Hiro Wallet browser extension
2. Create or import a Stacks wallet
3. Switch to testnet mode
4. Visit the DApp and click "Connect Hiro Wallet"

### Checking Balance
- Your token balance is displayed automatically after connecting
- Click "Refresh Balance" to update the display
- Balance shows both formatted tokens and raw micro-tokens

### Transferring Tokens
1. Enter recipient's Stacks address
2. Enter amount to transfer (minimum 0.000001 SIMP)
3. Click "Transfer Tokens"
4. Confirm transaction in Hiro Wallet
5. Wait for transaction confirmation

## 🔧 Technical Details

### Smart Contract Functions

#### Read-Only Functions
- `get-name()` - Returns token name
- `get-symbol()` - Returns token symbol  
- `get-decimals()` - Returns decimal places
- `get-total-supply()` - Returns total token supply
- `get-balance(user)` - Returns user's token balance

#### Public Functions
- `transfer(amount, from, to, memo)` - Transfer tokens between users
- `mint(amount, to)` - Mint new tokens (owner only)

### Frontend Architecture
- **React 18** with Vite for fast development
- **@stacks/connect** for wallet integration
- **@stacks/transactions** for blockchain interactions
- **Responsive design** for mobile and desktop

## 🌐 Deployment Information

### ✅ Live Testnet Deployment
- **Network**: Stacks Testnet
- **Contract Address**: `ST6K43RGM0M693W7SDGKFG1VNZKY7EHDVZVJ57EZ.simple-token`
- **Deployer Address**: `ST6K43RGM0M693W7SDGKFG1VNZKY7EHDVZVJ57EZ`
- **Transaction ID**: `26e252eea9a7e32f9a875931f26a30...` (confirmed)
- **Explorer**: [View on Stacks Explorer](https://explorer.stacks.co/txid/0x26e252eea9a7e32f9a875931f26a30?chain=testnet)
- **Frontend URL**: http://localhost:3000 (when running locally)

### Mainnet Considerations
- Audit smart contract before mainnet deployment
- Test thoroughly on testnet
- Consider gas optimization
- Implement proper error handling

## 🎯 Success Metrics

- ✅ Contract deploys successfully to testnet
- ✅ All unit tests pass
- ✅ Frontend connects to Hiro Wallet
- ✅ Users can view token balances
- ✅ Users can transfer tokens successfully
- ✅ Transaction confirmations work properly

## 🔮 Future Enhancements

- [ ] Burn functionality
- [ ] Allowance system for delegated transfers
- [ ] Transaction history display
- [ ] Token metadata and branding
- [ ] Multi-signature support
- [ ] Governance features


