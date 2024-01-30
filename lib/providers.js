"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractStandardRPCProvider = void 0;
class AbstractStandardRPCProvider {
    async getBestBlockHash() {
        return this.throwNotImplementedError('getBestBlockHash');
    }
    async getBlock(hash, verbose) {
        return this.throwNotImplementedError('getBlock');
    }
    async getBlockchainInfo() {
        return this.throwNotImplementedError('getBlockchainInfo');
    }
    async getBlockCount() {
        return this.throwNotImplementedError('getBlockCount');
    }
    async getBlockFilter(blockhash) {
        return this.throwNotImplementedError('getBlockFilter');
    }
    async getBlockHash(height) {
        return this.throwNotImplementedError('getBlockHash');
    }
    async getBlockHeader(hash, verbose) {
        return this.throwNotImplementedError('getBlockHeader');
    }
    async getBlockStats(hashOrHeight) {
        return this.throwNotImplementedError('getBlockStats');
    }
    async getChainTips() {
        return this.throwNotImplementedError('getChainTips');
    }
    async getChainTxStats(nblocks, blockhash) {
        return this.throwNotImplementedError('getChainTxStats');
    }
    async getDifficulty() {
        return this.throwNotImplementedError('getDifficulty');
    }
    async getMempoolAncestors(txid, verbose) {
        return this.throwNotImplementedError('getMempoolAncestors');
    }
    async getMempoolDescendants(txid, verbose) {
        return this.throwNotImplementedError('getMempoolDescendants');
    }
    async getMempoolEntry(txid) {
        return this.throwNotImplementedError('getMempoolEntry');
    }
    async getMempoolInfo() {
        return this.throwNotImplementedError('getMempoolInfo');
    }
    async getRawMempool(verbose) {
        return this.throwNotImplementedError('getRawMempool');
    }
    async getRawTransaction(txid, verbose) {
        return this.throwNotImplementedError('getRawTransaction');
    }
    async joinPsbts(...psbts) {
        return this.throwNotImplementedError('joinPsbts');
    }
    async sendRawTransaction(hex, maxfeerate) {
        return this.throwNotImplementedError('sendRawTransaction');
    }
    async signRawTransactionWithKey(hex, keys, utxos, sighashtype) {
        return this.throwNotImplementedError('signRawTransactionWithKey');
    }
    async testMempoolAccept(...txs) {
        return this.throwNotImplementedError('testMempoolAccept');
    }
    async utxoUpdatePsbt(psbt, [utxos, bip32derivs]) {
        return this.throwNotImplementedError('utxoUpdatePsbt');
    }
    async createMultisig(nrequired, keys, addressType) {
        return this.throwNotImplementedError('createMultisig');
    }
    async deriveAddresses(descriptor, range, isRange) {
        return this.throwNotImplementedError('deriveAddresses');
    }
    async estimateSmartFee(confTarget, mode) {
        return this.throwNotImplementedError('estimateSmartFee');
    }
    async getDescriptorInfo(descriptor) {
        return this.throwNotImplementedError('getDescriptorInfo');
    }
    async getIndexInfo(index) {
        return this.throwNotImplementedError('getIndexInfo');
    }
    async signMessageWithPrivkey(privkey, message, compressed) {
        return this.throwNotImplementedError('signMessageWithPrivkey');
    }
    async validateAddress(address) {
        return this.throwNotImplementedError('validateAddress');
    }
    async verifyMessage(address, signature, message) {
        return this.throwNotImplementedError('verifyMessage');
    }
    async abandonTransaction(txid) {
        return this.throwNotImplementedError('abandonTransaction');
    }
    async abortRescan() {
        return this.throwNotImplementedError('abortRescan');
    }
    async addMultisigAddress(nrequired, keys, label, addressType) {
        return this.throwNotImplementedError('addMultisigAddress');
    }
    async backupWallet(destination) {
        return this.throwNotImplementedError('backupWallet');
    }
    async bumpFee(txid, options) {
        return this.throwNotImplementedError('bumpFee');
    }
    async createWallet(walletName, disablePrivateKeys, blank, passphrase) {
        return this.throwNotImplementedError('createWallet');
    }
    async dumpPrivKey(address) {
        return this.throwNotImplementedError('dumpPrivKey');
    }
    async dumpWallet(filename) {
        return this.throwNotImplementedError('dumpWallet');
    }
    async encryptWallet(passphrase) {
        return this.throwNotImplementedError('encryptWallet');
    }
    async getAddressesByLabel(label) {
        return this.throwNotImplementedError('getAddressesByLabel');
    }
    async getAddressInfo(address) {
        return this.throwNotImplementedError('getAddressInfo');
    }
    async getBalance(account, minconf, includeWatchonly) {
        return this.throwNotImplementedError('getBalance');
    }
    async getBalances(account, minconf, includeWatchonly) {
        return this.throwNotImplementedError('getBalances');
    }
    async getNewAddress(label, addressType) {
        return this.throwNotImplementedError('getNewAddress');
    }
    async getRawChangeAddress(addressType) {
        return this.throwNotImplementedError('getRawChangeAddress');
    }
    async getReceivedByAddress(address, minconf) {
        return this.throwNotImplementedError('getReceivedByAddress');
    }
    async getReceivedByLabel(label, minconf) {
        return this.throwNotImplementedError('getReceivedByLabel');
    }
    async getTransaction(txid, includeWatchonly) {
        return this.throwNotImplementedError('getTransaction');
    }
    async getUnconfirmedBalance() {
        return this.throwNotImplementedError('getUnconfirmedBalance');
    }
    async getWalletInfo() {
        return this.throwNotImplementedError('getWalletInfo');
    }
    async importAddress(address, label, rescan, p2sh) {
        return this.throwNotImplementedError('importAddress');
    }
    async importDescriptors(descriptors, range, timestamp) {
        return this.throwNotImplementedError('importDescriptors');
    }
    async importMulti(requests, options) {
        return this.throwNotImplementedError('importMulti');
    }
    async importPrivKey(privkey, label, rescan) {
        return this.throwNotImplementedError('importPrivKey');
    }
    async importPrunedFunds(rawTransaction, txOutProof) {
        return this.throwNotImplementedError('importPrunedFunds');
    }
    async importPubKey(pubkey, label, rescan) {
        return this.throwNotImplementedError('importPubKey');
    }
    async importWallet(filename) {
        return this.throwNotImplementedError('importWallet');
    }
    async keyPoolRefill(newsize) {
        return this.throwNotImplementedError('keyPoolRefill');
    }
    async listAddressGroupings() {
        return this.throwNotImplementedError('listAddressGroupings');
    }
    async listLabels() {
        return this.throwNotImplementedError('listLabels');
    }
    async listLockUnspent() {
        return this.throwNotImplementedError('listLockUnspent');
    }
    async listReceivedByAddress(minconf, includeEmpty, includeWatchonly) {
        return this.throwNotImplementedError('listReceivedByAddress');
    }
    async listReceivedByLabel(minconf, includeEmpty, includeWatchonly) {
        return this.throwNotImplementedError('listReceivedByLabel');
    }
    async listSinceBlock(blockhash, targetConfirmations, includeWatchonly, includeRemoved) {
        return this.throwNotImplementedError('listSinceBlock');
    }
    async listTransactions(account, count, skip, includeWatchonly) {
        return this.throwNotImplementedError('listTransactions');
    }
    async listUnspent(minconf, maxconf, addresses, includeWatchonly, queryOptions) {
        return this.throwNotImplementedError('listUnspent');
    }
    async listWalletDir() {
        return this.throwNotImplementedError('listWalletDir');
    }
    async listWallets() {
        return this.throwNotImplementedError('listWallets');
    }
    async loadWallet(filename) {
        return this.throwNotImplementedError('loadWallet');
    }
    async lockUnspent(unlock, transactions) {
        return this.throwNotImplementedError('lockUnspent');
    }
    async psbtBumpFee(psbt, options) {
        return this.throwNotImplementedError('psbtBumpFee');
    }
    async removePrunedFunds(txid) {
        return this.throwNotImplementedError('removePrunedFunds');
    }
    async rescanBlockchain(startHeight, stopHeight) {
        return this.throwNotImplementedError('rescanBlockchain');
    }
    async sendMany(fromAccount, amounts, minconf, comment, subtractFeeFromAmount, replaceable, confTarget, estimateMode) {
        return this.throwNotImplementedError('sendMany');
    }
    async sendToAddress(address, amount, comment, commentTo, subtractFeeFromAmount, replaceable, confTarget, estimateMode) {
        return this.throwNotImplementedError('sendToAddress');
    }
    async setHdSeed(newkeypool, seed) {
        return this.throwNotImplementedError('setHdSeed');
    }
    async setLabel(address, label) {
        return this.throwNotImplementedError('setLabel');
    }
    async setTxFee(fee) {
        return this.throwNotImplementedError('setTxFee');
    }
    async setWalletFlag(flag) {
        return this.throwNotImplementedError('setWalletFlag');
    }
    async signMessage(address, message) {
        return this.throwNotImplementedError('signMessage');
    }
    async signRawTransactionWithWallet(hexstring, inputs, privkeys, sighashtype) {
        return this.throwNotImplementedError('signRawTransactionWithWallet');
    }
    async unloadWallet(walletName) {
        return this.throwNotImplementedError('unloadWallet');
    }
    async upgradeWallet(walletName, upgradeToDescriptor) {
        return this.throwNotImplementedError('upgradeWallet');
    }
    async walletCreateFundedPsbt(inputs, outputs, locktime, replaceable) {
        return this.throwNotImplementedError('walletCreateFundedPsbt');
    }
    async walletLock() {
        return this.throwNotImplementedError('walletLock');
    }
    async walletPassphrase(passphrase, timeout) {
        return this.throwNotImplementedError('walletPassphrase');
    }
    async walletPassphraseChange(oldPassphrase, newPassphrase) {
        return this.throwNotImplementedError('walletPassphraseChange');
    }
    async walletProcessPsbt(psbt, sign, finalize) {
        return this.throwNotImplementedError('walletProcessPsbt');
    }
    throwNotImplementedError(methodName) {
        throw new Error(`Method not implemented: ${methodName}`);
    }
}
exports.AbstractStandardRPCProvider = AbstractStandardRPCProvider;
const mixinJsonRPCProvider = (Klass) => {
    Object.getOwnPropertyNames(Klass)
        .filter((v) => {
        return !['throwNotImplementedError'].includes(v);
    })
        .forEach((method) => {
        Object.defineProperty(Klass.prototype, method, {
            enumerable: false,
            configurable: true,
            writable: true,
            value: async function (...args) {
                return await this.call(method.toLowerCase(), args);
            },
        }, {});
    });
};
let id = 0;
function __jsonRpcProviderConstruct(uri, userFetch) {
    ;
    this._uri = uri;
    this._fetch = userFetch || fetch; // allow the developer to supply a fetch with overrides such as an agent
}
function __jsonRpcProviderCall(method, ...params) {
    const response = await this._fetch(this.uri, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: id++ * Date.now(),
            jsonrpc: '2.0',
            method,
            params,
        }),
    });
    const responseText = await response.text();
    try {
        return JSON.parse(responseText);
    }
    catch (e) {
        e.response = responseText;
        throw e;
    }
    return await response.json();
}
class StandardJsonRPCProvider extends AbstractStandardRPCProvider {
    get uri() {
        return _uri;
    }
    constructor(uri, userFetch) {
        __jsonRpcProviderConstruct.call(this, uri, userFetch);
    }
    async call(method, params) {
        return __jsonRpcProviderCall.call(this, method, params);
    }
}
class AbstractSandshrewProvider extends StandardJsonRPCProvider {
    async blocksTipHash() {
        this.throwNotImplementedError('blocksTipHash');
    }
    async blocksTipHeight() {
        this.throwNotImplementedError('blocksTipHeight');
    }
    async blockHeight(height) {
        this.throwNotImplementedError('blockHeight');
    }
    async blockStatus(hash) {
        this.throwNotImplementedError('blockStatus');
    }
    async blockTxids(hash) {
        this.throwNotImplementedError('blockTxids');
    }
    async blockHeader(hash) {
        this.throwNotImplementedError('blockHeader');
    }
    async blockRaw(hash) {
        this.throwNotImplementedError('blockRaw');
    }
    async blockTxid(hash, index) {
        this.throwNotImplementedError('blockTxid');
    }
    async blockTxs(hash, index) {
        this.throwNotImplementedError('blockTxs');
    }
    async address(scriptStr) {
        this.throwNotImplementedError('address');
    }
    async scripthash(scriptStr) {
        this.throwNotImplementedError('scripthash');
    }
    async addressTxs(scriptStr) {
        this.throwNotImplementedError('addressTxs');
    }
    async scripthashTxs(scriptStr) {
        this.throwNotImplementedError('scripthashTxs');
    }
    async addressTxsChain(scriptStr) {
        this.throwNotImplementedError('addressTxsChain');
    }
    async scriptHashTxsChain(scriptStr) {
        this.throwNotImplementedError('scriptHashTxsChain');
    }
    async addressTxsMempool(scriptStr) {
        this.throwNotImplementedError('addressTxsMempool');
    }
    async scriptHashTxsMempool(scriptStr) {
        this.throwNotImplementedError('scriptHashTxsMempool');
    }
    async addressUtxo(scriptStr) {
        this.throwNotImplementedError('addressUtxo');
    }
    async scripthashUtxo(scriptStr) {
        this.throwNotImplementedError('scripthashUtxo');
    }
    async addressPrefix(prefix) {
        this.throwNotImplementedError('addressPrefix');
    }
    async tx(hash) {
        this.throwNotImplementedError('tx');
    }
    async txHex(hash) {
        this.throwNotImplementedError('txHex');
    }
    async txRaw(hash) {
        return await this.txHex(hash);
    }
    async txStatus(hash) {
        this.throwNotImplementedError('txStatus');
    }
    async txMerkleProof(hash) {
        this.throwNotImplementedError('txMerkleProof');
    }
    async txOutspend(hash) {
        this.throwNotImplementedError('txOutspend');
    }
    async txOutspends(hash) {
        this.throwNotImplementedError('txOutspends');
    }
    async mempool() {
        this.throwNotImplementedError('mempool');
    }
    async mempoolTxids() {
        this.throwNotImplementedError('mempoolTxids');
    }
    async mempoolRecent() {
        this.throwNotImplementedError('mempoolRecent');
    }
    async feeEstimates() {
        this.throwNotImplementedError('feeEstimates');
    }
}
const url = require('url');
const __constructSandshrewURI = (network, token) => {
    return url.format({
        protocol: 'https:',
        hostname: network + '.sandshrew.io',
        pathname: '/v1/' + token,
    });
};
class SandshrewProvider extends AbstractSandshrewProvider {
    get uri() {
        return _uri;
    }
    constructor(network, token, userFetch) {
        if (typeof token === 'function' && userFetch === undefined) {
            userFetch = token;
            token = null;
        }
        if (!token)
            token = this.constructor.DEFAULT_SANDSHREW_TOKEN;
        switch (network) {
            case 'mainnet':
            case 'testnet':
            case 'signet':
                network = __constructSandshrewURI(network, token);
            default:
                this._uri = network;
        }
    }
    async call(method, params) {
        return __jsonRpcProviderCall.call(this, method, params);
    }
}
SandshrewProvider.DEFAULT_SANDSHREW_TOKEN = '154f9aaa25a986241357836c37f8d71';
const mixinSandshrew = (Klass) => {
    mixinJsonRpcProvider(Klass);
    Object.entries({
        async blocksTipHash() {
            return await this.call('esplora_blocks:tip:hash', []);
        },
        async blocksTipHeight() {
            return await this.call('esplora_blocks:tip:height', []);
        },
        async blockHeight(height) {
            return await this.call('esplora_block-height', [height]);
        },
        async block(hash) {
            return await this.call('esplora_block', [hash]);
        },
        async blockStatus(hash) {
            return await this.call('esplora_block::status', [hash]);
        },
        async blockTxids(hash) {
            return await this.call('esplora_block::txids', [hash]);
        },
        async blockHeader(hash) {
            return await this.call('esplora_block::header', [hash]);
        },
        async blockRaw(hash) {
            return await this.call('esplora_block::raw', [hash]);
        },
        async blockTxid(hash, index) {
            return await this.call('esplora_block::txid', [hash, index]);
        },
        async blockTxs(hash, index) {
            return await this.call('esplora_block::txs', [hash, index]);
        },
        async address(scriptStr) {
            return await this.call('esplora_address', [scriptStr]);
        },
        async scripthash(scriptStr) {
            return await this.address(scriptStr);
        },
        async addressTxs(scriptStr) {
            return await this.call('esplora_address::txs', [scriptStr]);
        },
        async scripthashTxs(scriptStr) {
            return await this.addressTxs(scriptStr);
        },
        async addressTxsChain(scriptStr) {
            return await this.call('esplora_address::txs:chain', [scriptStr]);
        },
        async scriptHashTxsChain(scriptStr) {
            return await this.addressTxsChain(scriptStr);
        },
        async addressTxsMempool(scriptStr) {
            return await this.call('esplora_address::txs:mempool', [scriptStr]);
        },
        async scriptHashTxsMempool(scriptStr) {
            return await this.addressTxsMempool(scriptStr);
        },
        async addressUtxo(scriptStr) {
            return await this.call('esplora_address::utxo', [scriptStr]);
        },
        async scripthashUtxo(scriptStr) {
            return await this.addressUtxo(scriptStr);
        },
        async addressPrefix(prefix) {
            return await this.call('esplora_address-prefix', [prefix]);
        },
        async tx(hash, outType) {
            return await this.call('esplora_tx', [hash, outType || 'hex']);
        },
        async txStatus(hash) {
            return await this.call('esplora_tx::status', [hash]);
        },
        async txMerkleProof(hash) {
            return await this.call('esplora_tx::merkle-proof', [hash]);
        },
        async txOutspend(hash) {
            return await this.call('esplora_tx::outspend', [hash]);
        },
        async txOutspends(hash) {
            return await this.call('esplora_tx::outspends', [hash]);
        },
        async mempool() {
            return await this.call('esplora_mempool');
        },
        async mempoolTxids() {
            return await this.call('esplora_mempool:txids');
        },
        async mempoolRecent() {
            return await this.call('esplora_mempool:recent');
        },
        async feeEstimates() {
            return await this.call('esplora_fee-estimates');
        },
        async blockQuery(block) {
            return await this.call('ord_block', [block]);
        },
        async blockCount() {
            return await this.call('ord_blockcount');
        },
        async blockhash(height) {
            return await this.call('ord_blockhash', height && [height] || []);
        },
        async blockheight() {
            return await this.call('ord_blockheight');
        },
        async blocks() {
            return await this.call('ord_blocks');
        },
        async blocktime() {
            return await this.call('ord_blocktime');
        },
        async bounties() {
            return await this.call('ord_bounties');
        },
        async children(inscriptionId, page) {
            return await this.call('ord_children', [inscriptionId].concat(page ? [String(page)] : []));
        }
    }).forEach(([method, fn]) => {
        Object.defineProperty(Klass.prototype, method, {
            enumerable: false,
            configurable: true,
            writable: true,
            value: fn,
        });
    });
};
mixinSandshrewProvider(SandshrewProvider);
//# sourceMappingURL=providers.js.map