import { Clarinet, Tx, Chain, Account, types } from 'https://deno.land/x/clarinet@v1.0.0/index.ts';
import { assertEquals } from 'https://deno.land/std@0.90.0/testing/asserts.ts';

Clarinet.test({
    name: "Ensure that token has correct metadata",
    async fn(chain: Chain, accounts: Map<string, Account>) {
        const deployer = accounts.get('deployer')!;
        
        let block = chain.mineBlock([
            Tx.contractCall('simple-token', 'get-name', [], deployer.address),
            Tx.contractCall('simple-token', 'get-symbol', [], deployer.address),
            Tx.contractCall('simple-token', 'get-decimals', [], deployer.address),
        ]);
        
        assertEquals(block.receipts.length, 3);
        block.receipts[0].result.expectOk().expectAscii("Simple Token");
        block.receipts[1].result.expectOk().expectAscii("SIMP");
        block.receipts[2].result.expectOk().expectUint(6);
    },
});

Clarinet.test({
    name: "Ensure that owner has initial balance",
    async fn(chain: Chain, accounts: Map<string, Account>) {
        const deployer = accounts.get('deployer')!;
        
        let block = chain.mineBlock([
            Tx.contractCall('simple-token', 'get-balance', [types.principal(deployer.address)], deployer.address),
        ]);
        
        assertEquals(block.receipts.length, 1);
        block.receipts[0].result.expectOk().expectUint(1000000);
    },
});

Clarinet.test({
    name: "Ensure that transfer works correctly",
    async fn(chain: Chain, accounts: Map<string, Account>) {
        const deployer = accounts.get('deployer')!;
        const wallet1 = accounts.get('wallet_1')!;
        
        let block = chain.mineBlock([
            Tx.contractCall('simple-token', 'transfer', [
                types.uint(1000),
                types.principal(deployer.address),
                types.principal(wallet1.address),
                types.none()
            ], deployer.address),
        ]);
        
        assertEquals(block.receipts.length, 1);
        block.receipts[0].result.expectOk().expectBool(true);
        
        // Check balances after transfer
        let balanceBlock = chain.mineBlock([
            Tx.contractCall('simple-token', 'get-balance', [types.principal(deployer.address)], deployer.address),
            Tx.contractCall('simple-token', 'get-balance', [types.principal(wallet1.address)], deployer.address),
        ]);
        
        balanceBlock.receipts[0].result.expectOk().expectUint(999000);
        balanceBlock.receipts[1].result.expectOk().expectUint(1000);
    },
});

Clarinet.test({
    name: "Ensure that only owner can mint",
    async fn(chain: Chain, accounts: Map<string, Account>) {
        const deployer = accounts.get('deployer')!;
        const wallet1 = accounts.get('wallet_1')!;
        
        // Owner can mint
        let block = chain.mineBlock([
            Tx.contractCall('simple-token', 'mint', [
                types.uint(5000),
                types.principal(wallet1.address)
            ], deployer.address),
        ]);
        
        assertEquals(block.receipts.length, 1);
        block.receipts[0].result.expectOk().expectBool(true);
        
        // Non-owner cannot mint
        let failBlock = chain.mineBlock([
            Tx.contractCall('simple-token', 'mint', [
                types.uint(5000),
                types.principal(wallet1.address)
            ], wallet1.address),
        ]);
        
        assertEquals(failBlock.receipts.length, 1);
        failBlock.receipts[0].result.expectErr().expectUint(100);
    },
});