# 🚀 Hướng Dẫn Deploy và Chạy Thử Dự Án

## 📋 Thông Tin Deployment

### ✅ Smart Contract đã được Deploy
- **Network**: Stacks Testnet
- **Contract Address**: `ST6K43RGM0M693W7SDGKFG1VNZKY7EHDVZVJ57EZ.simple-token`
- **Deployer Address**: `ST6K43RGM0M693W7SDGKFG1VNZKY7EHDVZVJ57EZ`
- **Status**: ✅ Deployed và hoạt động
- **Token Symbol**: SIMP
- **Decimals**: 6
- **Initial Supply**: 1,000,000 SIMP

## 🛠️ Yêu Cầu Hệ Thống

### Prerequisites
- **Node.js** v16 hoặc cao hơn
- **npm** hoặc **yarn**
- **Clarinet CLI** (đã cài đặt)
- **Hiro Wallet** browser extension
- **STX testnet tokens** (để trả phí giao dịch)

## 📥 Cài Đặt và Chạy

### 1. Clone Repository
```bash
git clone <repository-url>
cd project1_simple_token
```

### 2. Cài Đặt Dependencies
```bash
# Root project dependencies
npm install

# Frontend dependencies
cd frontend
npm install
cd ..
```

### 3. Kiểm Tra Smart Contract
```bash
# Kiểm tra syntax contract
clarinet check

# Contract đã được deploy, không cần deploy lại
# Nhưng bạn có thể xem deployment plan:
cat deployments/default.testnet-plan.yaml
```

### 4. Chạy Frontend Application
```bash
cd frontend
npm run dev
```

Frontend sẽ chạy tại: **http://localhost:3000**

## 🌐 Hướng Dẫn Sử Dụng DApp

### Bước 1: Cài Đặt Hiro Wallet
1. Cài đặt [Hiro Wallet Extension](https://wallet.hiro.so/)
2. Tạo hoặc import wallet
3. **Quan trọng**: Chuyển sang **Testnet mode**
4. Lấy testnet STX từ [Stacks Testnet Faucet](https://explorer.stacks.co/sandbox/faucet?chain=testnet)

### Bước 2: Kết Nối Wallet
1. Mở http://localhost:3000
2. Click "Connect Hiro Wallet"
3. Approve connection trong Hiro Wallet
4. Wallet address sẽ hiển thị trên giao diện

### Bước 3: Kiểm Tra Token Balance
- Balance sẽ tự động hiển thị sau khi connect wallet
- Click "🔄 Refresh Balance" để cập nhật
- Hiển thị cả formatted balance và raw micro-tokens

### Bước 4: Transfer Tokens
1. Nhập địa chỉ người nhận (Stacks address)
2. Nhập số lượng token (ví dụ: 1.5)
3. Click "Transfer Tokens"
4. Confirm transaction trong Hiro Wallet
5. Đợi transaction được confirm (khoảng 1-2 phút)

## 🧪 Test Cases

### Test 1: Wallet Connection
- ✅ Connect wallet thành công
- ✅ Hiển thị đúng address
- ✅ Disconnect wallet hoạt động

### Test 2: Balance Display
- ✅ Hiển thị balance chính xác
- ✅ Refresh balance hoạt động
- ✅ Format số đúng (6 decimals)

### Test 3: Token Transfer
- ✅ Transfer giữa 2 addresses
- ✅ Validation input (amount > 0)
- ✅ Transaction confirmation
- ✅ Balance update sau transfer

## 🔧 Troubleshooting

### Lỗi "Contract not found"
- Đảm bảo đang sử dụng Testnet
- Kiểm tra contract address trong code
- Contract address: `ST6K43RGM0M693W7SDGKFG1VNZKY7EHDVZVJ57EZ.simple-token`

### Lỗi "Insufficient balance"
- Kiểm tra STX balance cho transaction fees
- Lấy testnet STX từ faucet
- Đảm bảo có đủ SIMP tokens để transfer

### Wallet không connect
- Đảm bảo Hiro Wallet đã cài đặt
- Chuyển sang Testnet mode
- Refresh trang và thử lại

### Transaction bị stuck
- Đợi 2-3 phút cho confirmation
- Kiểm tra transaction trên Stacks Explorer
- Thử lại với gas fee cao hơn

## 📊 Demo Script

### Scenario 1: First Time User
1. "Tôi sẽ demo một DApp token đơn giản trên Stacks"
2. Mở http://localhost:3000
3. "Đây là giao diện chính, cần connect wallet trước"
4. Click "Connect Hiro Wallet"
5. "Wallet đã connect, hiển thị address và balance"
6. "Balance hiện tại là X SIMP tokens"

### Scenario 2: Token Transfer
1. "Bây giờ tôi sẽ demo transfer token"
2. Nhập địa chỉ test: `ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM`
3. Nhập amount: `10.5`
4. Click "Transfer Tokens"
5. "Hiro Wallet popup để confirm transaction"
6. Confirm trong wallet
7. "Transaction đang được process..."
8. "Transfer thành công! Balance đã update"

## 🎯 Key Features Demo

### 1. Real-time Balance
- Balance tự động load khi connect wallet
- Refresh button để update manual
- Hiển thị cả formatted và raw values

### 2. Secure Transfer
- Input validation (amount > 0, valid address)
- Transaction signing qua Hiro Wallet
- Real-time transaction status

### 3. User Experience
- Responsive design
- Clear error messages
- Loading states
- Transaction feedback

## 📱 Mobile Testing
- Mở http://localhost:3000 trên mobile browser
- Cài Hiro Wallet mobile app
- Test wallet connection và transfers
- Verify responsive design

## 🔗 Useful Links

- **Frontend**: http://localhost:3000
- **Contract Explorer**: https://explorer.stacks.co/address/ST6K43RGM0M693W7SDGKFG1VNZKY7EHDVZVJ57EZ?chain=testnet
- **Testnet Faucet**: https://explorer.stacks.co/sandbox/faucet?chain=testnet
- **Hiro Wallet**: https://wallet.hiro.so/

## 📞 Support

Nếu gặp vấn đề:
1. Kiểm tra console browser (F12)
2. Verify network settings (Testnet)
3. Đảm bảo có STX testnet tokens
4. Check Hiro Wallet connection status

---

**🎉 Chúc bạn demo thành công!**
