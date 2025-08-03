# Project 1: Simple Token Contract

## 📋 Overview
Tạo một token contract cơ bản với chức năng mint, transfer và balance tracking, kết hợp với React frontend để tương tác.

## 🎯 Objectives
- Smart contract quản lý token với Clarity
- React frontend để interact với contract
- Wallet integration với Stacks

## 🏗️ Architecture

### Smart Contract (Clarity)
```
contracts/
├── simple-token.clar
└── tests/
    └── simple-token_test.ts
```

### React Frontend
```
frontend/
├── src/
│   ├── components/
│   │   ├── TokenBalance.jsx
│   │   ├── TransferForm.jsx
│   │   └── MintForm.jsx
│   ├── hooks/
│   │   ├── useWallet.js
│   │   └── useTokenContract.js
│   ├── utils/
│   │   └── contractUtils.js
│   └── App.jsx
├── package.json
└── public/
```

## 📝 Implementation Steps (6 Hours Total)

### Phase 1: Smart Contract (2 hours)
1. **Quick Setup**
   - Use existing Clarinet template
   - Basic SIP-010 token implementation

2. **Core Functions Only**
   - `transfer` - basic transfer
   - `get-balance` - check balance
   - `mint` - simple mint function
   - Skip complex error handling for MVP

3. **Minimal Testing**
   - Basic function tests only
   - Deploy to devnet immediately

### Phase 2: React Frontend (3 hours)
1. **Rapid Setup (30 mins)**
   - Use Vite React template
   - Install only essential deps:
     - @stacks/connect
     - @stacks/transactions

2. **Essential Components (2 hours)**
   - `WalletConnection`: Basic connect/disconnect
   - `TokenBalance`: Simple balance display
   - `TransferForm`: Basic transfer form
   - Skip mint form for MVP

3. **Quick Integration (30 mins)**
   - Connect to devnet
   - Basic error handling
   - Simple loading states

### Phase 3: Demo Prep (1 hour)
1. **Final Testing (30 mins)**
   - Test core user flow
   - Fix critical bugs only

2. **Quick Documentation (30 mins)**
   - Basic README
   - Demo instructions

## 🔧 Technical Requirements

### Smart Contract Features (MVP)
- [x] Basic token creation
- [x] Transfer functionality
- [x] Balance queries
- [x] Simple mint function
- [ ] ~~Total supply tracking~~ (Skip for MVP)
- [ ] ~~Complex error handling~~ (Basic only)

### Frontend Features (MVP)
- [x] Wallet connection (Hiro Wallet)
- [x] Display token balance
- [x] Transfer tokens
- [ ] ~~Mint tokens~~ (Skip for MVP)
- [ ] ~~Transaction history~~ (Skip for MVP)
- [x] Basic responsive design

## 🧪 Testing Strategy
- Unit tests cho smart contract
- Integration tests cho frontend
- Manual testing trên devnet
- User acceptance testing

## 📦 Deliverables
1. Clarity smart contract
2. React frontend application
3. Test suite
4. Documentation
5. Deployment scripts

## ⏱️ Timeline
**Total: 6 hours (Hackathon MVP)**
- Smart Contract: 2 hours
- Frontend: 3 hours
- Demo Prep: 1 hour

## 🚀 Success Criteria
- Contract deploys successfully
- All tests pass
- Frontend connects to wallet
- Users can transfer tokens
- Clean, documented code

## 📋 Deliverables Required
1. **Link GitHub hoặc tệp code** (kèm README mô tả ý tưởng và chức năng chính)
   - Repository với source code đầy đủ
   - README.md chi tiết về token concept
   - Mô tả use cases và utility
   - Danh sách chức năng chính

2. **Hướng dẫn chạy thử dự án** (nếu có giao diện UI)
   - Setup instructions cho development
   - Cách deploy token contract
   - Cách chạy frontend application
   - User guide cho transfer process

3. **Địa chỉ ví Stacks**
   - Stacks wallet address để nhận rewards
   - Testnet address cho testing
   - Token contract deployment address


