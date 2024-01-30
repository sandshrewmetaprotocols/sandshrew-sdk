type ProcessedPsbt = void
type SignedTransaction = any
type WalletInfo = any
type BumpFeeResult = any
type ValidatedAddress = any
type BumpFeeOptions = any
type BlockchainInfo = any
type AddMultisigAddressResult = any
type Block = any
type BlockFilter = any
type BlockHeader = any
type BlockStats = any
type ChainTip = any
type ChainTxStats = any
type MempoolAncestors = any
type MempoolDescendants = any
type MempoolEntry = any
type MempoolInfo = any
type RawMempool = any
type RawTransaction = any
type TestMempoolAccept = any
type Utxo = any
type MultisigInfo = any
type EstimateSmartFee = any
type DescriptorInfo = any
type IndexInfo = any
type FundedPsbt = any
type Psbt = any
type QueryOptions = any
type Transaction = any
type TransactionHistory = any
type LabelBalance = any
type AddressBalance = any
type AddressGrouping = any
type ImportMultiResult = any
type PsbtOutput = any
type ImportMultiOptions = any
type ImportMultiRequest = any
type AddressInfo = any
type PsbtInput = any
type SignRawTransactionInput = any
type WalletFlag = any
type PsbtBumpFeeOptions = any
type ImportDescriptorsResult = any
type TransactionInfo = any
type Balances = any

export class AbstractStandardRPCProvider {
  async getBestBlockHash(): Promise<string> {
    return this.throwNotImplementedError('getBestBlockHash')
  }

  async getBlock(hash: string, verbose?: boolean): Promise<Block> {
    return this.throwNotImplementedError('getBlock')
  }

  async getBlockchainInfo(): Promise<BlockchainInfo> {
    return this.throwNotImplementedError('getBlockchainInfo')
  }

  async getBlockCount(): Promise<number> {
    return this.throwNotImplementedError('getBlockCount')
  }

  async getBlockFilter(blockhash: string): Promise<BlockFilter> {
    return this.throwNotImplementedError('getBlockFilter')
  }

  async getBlockHash(height: number): Promise<string> {
    return this.throwNotImplementedError('getBlockHash')
  }

  async getBlockHeader(hash: string, verbose?: boolean): Promise<BlockHeader> {
    return this.throwNotImplementedError('getBlockHeader')
  }

  async getBlockStats(hashOrHeight: string | number): Promise<BlockStats> {
    return this.throwNotImplementedError('getBlockStats')
  }

  async getChainTips(): Promise<ChainTip[]> {
    return this.throwNotImplementedError('getChainTips')
  }

  async getChainTxStats(
    nblocks?: number,
    blockhash?: string,
  ): Promise<ChainTxStats> {
    return this.throwNotImplementedError('getChainTxStats')
  }

  async getDifficulty(): Promise<number> {
    return this.throwNotImplementedError('getDifficulty')
  }

  async getMempoolAncestors(
    txid: string,
    verbose?: boolean,
  ): Promise<MempoolAncestors> {
    return this.throwNotImplementedError('getMempoolAncestors')
  }

  async getMempoolDescendants(
    txid: string,
    verbose?: boolean,
  ): Promise<MempoolDescendants> {
    return this.throwNotImplementedError('getMempoolDescendants')
  }

  async getMempoolEntry(txid: string): Promise<MempoolEntry> {
    return this.throwNotImplementedError('getMempoolEntry')
  }

  async getMempoolInfo(): Promise<MempoolInfo> {
    return this.throwNotImplementedError('getMempoolInfo')
  }

  async getRawMempool(verbose?: boolean): Promise<RawMempool> {
    return this.throwNotImplementedError('getRawMempool')
  }

  async getRawTransaction(
    txid: string,
    verbose?: boolean,
  ): Promise<RawTransaction> {
    return this.throwNotImplementedError('getRawTransaction')
  }

  async joinPsbts(...psbts: string[]): Promise<string> {
    return this.throwNotImplementedError('joinPsbts')
  }

  async sendRawTransaction(hex: string, maxfeerate?: number): Promise<string> {
    return this.throwNotImplementedError('sendRawTransaction')
  }

  async signRawTransactionWithKey(
    hex: string,
    keys: string[],
    utxos?: Utxo[],
    sighashtype?: string,
  ): Promise<SignedTransaction> {
    return this.throwNotImplementedError('signRawTransactionWithKey')
  }

  async testMempoolAccept(...txs: string[]): Promise<TestMempoolAccept> {
    return this.throwNotImplementedError('testMempoolAccept')
  }

  async utxoUpdatePsbt(
    psbt: string,
    [utxos, bip32derivs]: [Utxo[], string[]],
  ): Promise<string> {
    return this.throwNotImplementedError('utxoUpdatePsbt')
  }

  async createMultisig(
    nrequired: number,
    keys: string[],
    addressType?: string,
  ): Promise<MultisigInfo> {
    return this.throwNotImplementedError('createMultisig')
  }
  async deriveAddresses(
    descriptor: string,
    range: number[],
    isRange?: boolean,
  ): Promise<string[]> {
    return this.throwNotImplementedError('deriveAddresses')
  }

  async estimateSmartFee(
    confTarget: number,
    mode?: string,
  ): Promise<EstimateSmartFee> {
    return this.throwNotImplementedError('estimateSmartFee')
  }

  async getDescriptorInfo(descriptor: string): Promise<DescriptorInfo> {
    return this.throwNotImplementedError('getDescriptorInfo')
  }

  async getIndexInfo(index: string): Promise<IndexInfo> {
    return this.throwNotImplementedError('getIndexInfo')
  }

  async signMessageWithPrivkey(
    privkey: string,
    message: string,
    compressed?: boolean,
  ): Promise<string> {
    return this.throwNotImplementedError('signMessageWithPrivkey')
  }

  async validateAddress(address: string): Promise<ValidatedAddress> {
    return this.throwNotImplementedError('validateAddress')
  }

  async verifyMessage(
    address: string,
    signature: string,
    message: string,
  ): Promise<boolean> {
    return this.throwNotImplementedError('verifyMessage')
  }

  async abandonTransaction(txid: string): Promise<void> {
    return this.throwNotImplementedError('abandonTransaction')
  }

  async abortRescan(): Promise<void> {
    return this.throwNotImplementedError('abortRescan')
  }

  async addMultisigAddress(
    nrequired: number,
    keys: string[],
    label?: string,
    addressType?: string,
  ): Promise<AddMultisigAddressResult> {
    return this.throwNotImplementedError('addMultisigAddress')
  }

  async backupWallet(destination: string): Promise<void> {
    return this.throwNotImplementedError('backupWallet')
  }

  async bumpFee(
    txid: string,
    options?: BumpFeeOptions,
  ): Promise<BumpFeeResult> {
    return this.throwNotImplementedError('bumpFee')
  }

  async createWallet(
    walletName: string,
    disablePrivateKeys?: boolean,
    blank?: boolean,
    passphrase?: string,
  ): Promise<void> {
    return this.throwNotImplementedError('createWallet')
  }
  async dumpPrivKey(address: string): Promise<string> {
    return this.throwNotImplementedError('dumpPrivKey')
  }

  async dumpWallet(filename: string): Promise<void> {
    return this.throwNotImplementedError('dumpWallet')
  }

  async encryptWallet(passphrase: string): Promise<void> {
    return this.throwNotImplementedError('encryptWallet')
  }

  async getAddressesByLabel(
    label: string,
  ): Promise<{ [address: string]: string }> {
    return this.throwNotImplementedError('getAddressesByLabel')
  }

  async getAddressInfo(address: string): Promise<AddressInfo> {
    return this.throwNotImplementedError('getAddressInfo')
  }

  async getBalance(
    account?: string,
    minconf?: number,
    includeWatchonly?: boolean,
  ): Promise<number> {
    return this.throwNotImplementedError('getBalance')
  }

  async getBalances(
    account?: string,
    minconf?: number,
    includeWatchonly?: boolean,
  ): Promise<Balances> {
    return this.throwNotImplementedError('getBalances')
  }

  async getNewAddress(label?: string, addressType?: string): Promise<string> {
    return this.throwNotImplementedError('getNewAddress')
  }

  async getRawChangeAddress(addressType?: string): Promise<string> {
    return this.throwNotImplementedError('getRawChangeAddress')
  }

  async getReceivedByAddress(
    address: string,
    minconf?: number,
  ): Promise<number> {
    return this.throwNotImplementedError('getReceivedByAddress')
  }

  async getReceivedByLabel(label: string, minconf?: number): Promise<number> {
    return this.throwNotImplementedError('getReceivedByLabel')
  }

  async getTransaction(
    txid: string,
    includeWatchonly?: boolean,
  ): Promise<TransactionInfo> {
    return this.throwNotImplementedError('getTransaction')
  }

  async getUnconfirmedBalance(): Promise<number> {
    return this.throwNotImplementedError('getUnconfirmedBalance')
  }

  async getWalletInfo(): Promise<WalletInfo> {
    return this.throwNotImplementedError('getWalletInfo')
  }

  async importAddress(
    address: string,
    label?: string,
    rescan?: boolean,
    p2sh?: boolean,
  ): Promise<void> {
    return this.throwNotImplementedError('importAddress')
  }

  async importDescriptors(
    descriptors: string[],
    range?: number,
    timestamp?: number,
  ): Promise<ImportDescriptorsResult> {
    return this.throwNotImplementedError('importDescriptors')
  }
  async importMulti(
    requests: ImportMultiRequest[],
    options?: ImportMultiOptions,
  ): Promise<ImportMultiResult> {
    return this.throwNotImplementedError('importMulti')
  }

  async importPrivKey(
    privkey: string,
    label?: string,
    rescan?: boolean,
  ): Promise<void> {
    return this.throwNotImplementedError('importPrivKey')
  }

  async importPrunedFunds(
    rawTransaction: string,
    txOutProof: string,
  ): Promise<void> {
    return this.throwNotImplementedError('importPrunedFunds')
  }

  async importPubKey(
    pubkey: string,
    label?: string,
    rescan?: boolean,
  ): Promise<void> {
    return this.throwNotImplementedError('importPubKey')
  }

  async importWallet(filename: string): Promise<void> {
    return this.throwNotImplementedError('importWallet')
  }

  async keyPoolRefill(newsize?: number): Promise<void> {
    return this.throwNotImplementedError('keyPoolRefill')
  }

  async listAddressGroupings(): Promise<AddressGrouping[]> {
    return this.throwNotImplementedError('listAddressGroupings')
  }

  async listLabels(): Promise<string[]> {
    return this.throwNotImplementedError('listLabels')
  }

  async listLockUnspent(): Promise<Utxo[]> {
    return this.throwNotImplementedError('listLockUnspent')
  }

  async listReceivedByAddress(
    minconf?: number,
    includeEmpty?: boolean,
    includeWatchonly?: boolean,
  ): Promise<AddressBalance[]> {
    return this.throwNotImplementedError('listReceivedByAddress')
  }

  async listReceivedByLabel(
    minconf?: number,
    includeEmpty?: boolean,
    includeWatchonly?: boolean,
  ): Promise<LabelBalance[]> {
    return this.throwNotImplementedError('listReceivedByLabel')
  }

  async listSinceBlock(
    blockhash?: string,
    targetConfirmations?: number,
    includeWatchonly?: boolean,
    includeRemoved?: boolean,
  ): Promise<TransactionHistory> {
    return this.throwNotImplementedError('listSinceBlock')
  }

  async listTransactions(
    account?: string,
    count?: number,
    skip?: number,
    includeWatchonly?: boolean,
  ): Promise<Transaction[]> {
    return this.throwNotImplementedError('listTransactions')
  }

  async listUnspent(
    minconf?: number,
    maxconf?: number,
    addresses?: string[],
    includeWatchonly?: boolean,
    queryOptions?: QueryOptions,
  ): Promise<Utxo[]> {
    return this.throwNotImplementedError('listUnspent')
  }

  async listWalletDir(): Promise<string> {
    return this.throwNotImplementedError('listWalletDir')
  }

  async listWallets(): Promise<string[]> {
    return this.throwNotImplementedError('listWallets')
  }

  async loadWallet(filename: string): Promise<void> {
    return this.throwNotImplementedError('loadWallet')
  }

  async lockUnspent(
    unlock: boolean,
    transactions: { txid: string; vout: number }[],
  ): Promise<boolean> {
    return this.throwNotImplementedError('lockUnspent')
  }
  async psbtBumpFee(psbt: string, options?: PsbtBumpFeeOptions): Promise<Psbt> {
    return this.throwNotImplementedError('psbtBumpFee')
  }

  async removePrunedFunds(txid: string): Promise<void> {
    return this.throwNotImplementedError('removePrunedFunds')
  }

  async rescanBlockchain(
    startHeight?: number,
    stopHeight?: number,
  ): Promise<void> {
    return this.throwNotImplementedError('rescanBlockchain')
  }

  async sendMany(
    fromAccount: string,
    amounts: { [address: string]: number },
    minconf?: number,
    comment?: string,
    subtractFeeFromAmount?: boolean,
    replaceable?: boolean,
    confTarget?: number,
    estimateMode?: string,
  ): Promise<string> {
    return this.throwNotImplementedError('sendMany')
  }

  async sendToAddress(
    address: string,
    amount: number,
    comment?: string,
    commentTo?: string,
    subtractFeeFromAmount?: boolean,
    replaceable?: boolean,
    confTarget?: number,
    estimateMode?: string,
  ): Promise<string> {
    return this.throwNotImplementedError('sendToAddress')
  }

  async setHdSeed(newkeypool?: boolean, seed?: string): Promise<void> {
    return this.throwNotImplementedError('setHdSeed')
  }

  async setLabel(address: string, label: string): Promise<void> {
    return this.throwNotImplementedError('setLabel')
  }

  async setTxFee(fee: number): Promise<boolean> {
    return this.throwNotImplementedError('setTxFee')
  }

  async setWalletFlag(flag: WalletFlag): Promise<void> {
    return this.throwNotImplementedError('setWalletFlag')
  }

  async signMessage(address: string, message: string): Promise<string> {
    return this.throwNotImplementedError('signMessage')
  }

  async signRawTransactionWithWallet(
    hexstring: string,
    inputs?: SignRawTransactionInput[],
    privkeys?: string[],
    sighashtype?: string,
  ): Promise<SignedTransaction> {
    return this.throwNotImplementedError('signRawTransactionWithWallet')
  }

  async unloadWallet(walletName: string): Promise<void> {
    return this.throwNotImplementedError('unloadWallet')
  }

  async upgradeWallet(
    walletName: string,
    upgradeToDescriptor: boolean,
  ): Promise<void> {
    return this.throwNotImplementedError('upgradeWallet')
  }

  async walletCreateFundedPsbt(
    inputs: PsbtInput[],
    outputs: PsbtOutput[],
    locktime?: number,
    replaceable?: boolean,
  ): Promise<FundedPsbt> {
    return this.throwNotImplementedError('walletCreateFundedPsbt')
  }

  async walletLock(): Promise<void> {
    return this.throwNotImplementedError('walletLock')
  }

  async walletPassphrase(passphrase: string, timeout: number): Promise<void> {
    return this.throwNotImplementedError('walletPassphrase')
  }

  async walletPassphraseChange(
    oldPassphrase: string,
    newPassphrase: string,
  ): Promise<void> {
    return this.throwNotImplementedError('walletPassphraseChange')
  }

  async walletProcessPsbt(
    psbt: string,
    sign?: boolean,
    finalize?: boolean,
  ): Promise<ProcessedPsbt> {
    return this.throwNotImplementedError('walletProcessPsbt')
  }

  private throwNotImplementedError(methodName: string): never {
    throw new Error(`Method not implemented: ${methodName}`)
  }
}

const mixinJsonRPCProvider = (Klass) => {
  Object.getOwnPropertyNames(Klass)
    .filter((v) => {
      return !['throwNotImplementedError'].includes(v)
    })
    .forEach((method) => {
      Object.defineProperty(
        Klass.prototype,
        method,
        {
          enumerable: false,
          configurable: true,
          writable: true,
          value: async function (...args) {
            return await this.call(method.toLowerCase(), args)
          },
        },
        {},
      )
    })
}

let id = 0

function __jsonRpcProviderConstruct(
  uri,
  userFetch?: (...args: any[]) => ReturnType<typeof fetch>,
) {
  ;(this as any)._uri = uri
  ;(this as any)._fetch = userFetch || fetch // allow the developer to supply a fetch with overrides such as an agent
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
  })
  const responseText = await response.text()
  try {
    return JSON.parse(responseText)
  } catch (e) {
    e.response = responseText
    throw e
  }
  return await response.json()
}

class StandardJsonRPCProvider extends AbstractStandardRPCProvider {
  private _uri
  private _fetch
  get uri() {
    return _uri
  }
  constructor(uri, userFetch?: (...args: any[]) => ReturnType<typeof fetch>) {
    __jsonRpcProviderConstruct.call(this, uri, userFetch)
  }
  async call(method, params) {
    return __jsonRpcProviderCall.call(this, method, params)
  }
}

class AbstractSandshrewProvider extends StandardJsonRPCProvider {
  async blocksTipHash(): Promise<string> {
    this.throwNotImplementedError('blocksTipHash')
  }
  async blocksTipHeight(): Promise<string> {
    this.throwNotImplementedError('blocksTipHeight')
  }
  async blockHeight(height: number): Promise<string> {
    this.throwNotImplementedError('blockHeight')
  }
  async blockStatus(hash: string): Promise<any> {
    this.throwNotImplementedError('blockStatus')
  }
  async blockTxids(hash: string): Promise<any> {
    this.throwNotImplementedError('blockTxids')
  }
  async blockHeader(hash: string): Promise<any> {
    this.throwNotImplementedError('blockHeader')
  }
  async blockRaw(hash: string): Promise<any> {
    this.throwNotImplementedError('blockRaw')
  }
  async blockTxid(hash: string, index: string): Promise<any> {
    this.throwNotImplementedError('blockTxid')
  }
  async blockTxs(hash: string, index: string): Promise<any> {
    this.throwNotImplementedError('blockTxs')
  }
  async address(scriptStr: string): Promise<any> {
    this.throwNotImplementedError('address')
  }
  async scripthash(scriptStr: string): Promise<any> {
    this.throwNotImplementedError('scripthash')
  }
  async addressTxs(scriptStr: string): Promise<any> {
    this.throwNotImplementedError('addressTxs')
  }
  async scripthashTxs(scriptStr: string): Promise<any> {
    this.throwNotImplementedError('scripthashTxs')
  }
  async addressTxsChain(scriptStr: string): Promise<any> {
    this.throwNotImplementedError('addressTxsChain')
  }
  async scriptHashTxsChain(scriptStr: string): Promise<any> {
    this.throwNotImplementedError('scriptHashTxsChain')
  }
  async addressTxsMempool(scriptStr: string): Promise<any> {
    this.throwNotImplementedError('addressTxsMempool')
  }
  async scriptHashTxsMempool(scriptStr: string): Promise<any> {
    this.throwNotImplementedError('scriptHashTxsMempool')
  }
  async addressUtxo(scriptStr: string): Promise<any> {
    this.throwNotImplementedError('addressUtxo')
  }
  async scripthashUtxo(scriptStr: string): Promise<any> {
    this.throwNotImplementedError('scripthashUtxo')
  }
  async addressPrefix(prefix: string): Promise<any> {
    this.throwNotImplementedError('addressPrefix')
  }
  async tx(hash: string): Promise<any> {
    this.throwNotImplementedError('tx')
  }
  async txHex(hash: string): Promise<any> {
    this.throwNotImplementedError('txHex')
  }
  async txRaw(hash: string): Promise<any> {
    return await this.txHex(hash)
  }
  async txStatus(hash: string): Promise<any> {
    this.throwNotImplementedError('txStatus')
  }
  async txMerkleProof(hash: string): Promise<any> {
    this.throwNotImplementedError('txMerkleProof')
  }
  async txOutspend(hash: string): Promise<any> {
    this.throwNotImplementedError('txOutspend')
  }
  async txOutspends(hash: string): Promise<any> {
    this.throwNotImplementedError('txOutspends')
  }
  async mempool(): Promise<any> {
    this.throwNotImplementedError('mempool')
  }
  async mempoolTxids(): Promise<any> {
    this.throwNotImplementedError('mempoolTxids')
  }
  async mempoolRecent(): Promise<any> {
    this.throwNotImplementedError('mempoolRecent')
  }
  async feeEstimates(): Promise<any> {
    this.throwNotImplementedError('feeEstimates')
  }
}

const url = require('url')

const __constructSandshrewURI = (network, token) => {
  return url.format({
    protocol: 'https:',
    hostname: network + '.sandshrew.io',
    pathname: '/v1/' + token,
  })
}

class SandshrewProvider extends AbstractSandshrewProvider {
  static DEFAULT_SANDSHREW_TOKEN = '154f9aaa25a986241357836c37f8d71'
  private _uri
  private _fetch
  get uri() {
    return _uri
  }
  constructor(
    network,
    token?: string,
    userFetch?: (...args: any[]) => ReturnType<typeof fetch>,
  ) {
    if (typeof token === 'function' && userFetch === undefined) {
      userFetch = token
      token = null
    }
    if (!token) token = (this.constructor as any).DEFAULT_SANDSHREW_TOKEN
    switch (network) {
      case 'mainnet':
      case 'testnet':
      case 'signet':
        network = __constructSandshrewURI(network, token)
      default:
        this._uri = network
    }
  }
  async call(method, params) {
    return __jsonRpcProviderCall.call(this, method, params)
  }
}

const mixinSandshrew = (Klass) => {
  mixinJsonRpcProvider(Klass)
  Object.entries({
    async blocksTipHash(): Promise<string> {
      return await this.call('esplora_blocks:tip:hash', [])
    },
    async blocksTipHeight(): Promise<string> {
      return await this.call('esplora_blocks:tip:height', [])
    },
    async blockHeight(height: number): Promise<string> {
      return await this.call('esplora_block-height', [height])
    },
    async block(hash: string): Promise<any> {
      return await this.call('esplora_block', [hash])
    },
    async blockStatus(hash: string): Promise<any> {
      return await this.call('esplora_block::status', [hash])
    },
    async blockTxids(hash: string): Promise<any> {
      return await this.call('esplora_block::txids', [hash])
    },
    async blockHeader(hash: string): Promise<any> {
      return await this.call('esplora_block::header', [hash])
    },
    async blockRaw(hash: string): Promise<any> {
      return await this.call('esplora_block::raw', [hash])
    },
    async blockTxid(hash: string, index: string): Promise<any> {
      return await this.call('esplora_block::txid', [hash, index])
    },
    async blockTxs(hash: string, index: string): Promise<any> {
      return await this.call('esplora_block::txs', [hash, index])
    },
    async address(scriptStr: string): Promise<any> {
      return await this.call('esplora_address', [scriptStr])
    },
    async scripthash(scriptStr: string): Promise<any> {
      return await this.address(scriptStr)
    },
    async addressTxs(scriptStr: string): Promise<any> {
      return await this.call('esplora_address::txs', [scriptStr])
    },
    async scripthashTxs(scriptStr: string): Promise<any> {
      return await this.addressTxs(scriptStr)
    },
    async addressTxsChain(scriptStr: string): Promise<any> {
      return await this.call('esplora_address::txs:chain', [scriptStr])
    },
    async scriptHashTxsChain(scriptStr: string): Promise<any> {
      return await this.addressTxsChain(scriptStr)
    },
    async addressTxsMempool(scriptStr: string): Promise<any> {
      return await this.call('esplora_address::txs:mempool', [scriptStr])
    },
    async scriptHashTxsMempool(scriptStr: string): Promise<any> {
      return await this.addressTxsMempool(scriptStr)
    },
    async addressUtxo(scriptStr: string): Promise<any> {
      return await this.call('esplora_address::utxo', [scriptStr])
    },
    async scripthashUtxo(scriptStr: string): Promise<any> {
      return await this.addressUtxo(scriptStr)
    },
    async addressPrefix(prefix: string): Promise<any> {
      return await this.call('esplora_address-prefix', [prefix])
    },
    async tx(hash: string, outType?: string): Promise<any> {
      return await this.call('esplora_tx', [hash, outType || 'hex'])
    },
    async txStatus(hash: string): Promise<any> {
      return await this.call('esplora_tx::status', [hash])
    },
    async txMerkleProof(hash: string): Promise<any> {
      return await this.call('esplora_tx::merkle-proof', [hash])
    },
    async txOutspend(hash: string): Promise<any> {
      return await this.call('esplora_tx::outspend', [hash])
    },
    async txOutspends(hash: string): Promise<any> {
      return await this.call('esplora_tx::outspends', [hash])
    },
    async mempool(): Promise<any> {
      return await this.call('esplora_mempool')
    },
    async mempoolTxids(): Promise<any> {
      return await this.call('esplora_mempool:txids')
    },
    async mempoolRecent(): Promise<any> {
      return await this.call('esplora_mempool:recent')
    },
    async feeEstimates(): Promise<any> {
      return await this.call('esplora_fee-estimates')
    },
    async blockQuery(block: string): Promise<any> {
      return await this.call('ord_block', [ block ]);
    },
    async blockCount(): Promise<any> {
      return await this.call('ord_blockcount');
    },
    async blockhash(height?: string): Promise<any> {
      return await this.call('ord_blockhash', height && [ height ] || []);
    },
    async blockheight(): Promise<any> {
      return await this.call('ord_blockheight');
    },
    async blocks(): Promise<any> {
      return await this.call('ord_blocks');
    },
    async blocktime(): Promise<any> {
      return await this.call('ord_blocktime');
    },
    async bounties(): Promise<any> {
      return await this.call('ord_bounties');
    },
    async children(inscriptionId: string, page?: number | string ): Promise<any> {
      return await this.call('ord_children', [ inscriptionId ].concat(page ? [ String(page) ] : []));
    }
  }).forEach(([method, fn]) => {
    Object.defineProperty(Klass.prototype, method, {
      enumerable: false,
      configurable: true,
      writable: true,
      value: fn,
    })
  })
}

mixinSandshrewProvider(SandshrewProvider)
