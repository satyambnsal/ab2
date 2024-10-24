
/* Autogenerated file, do not edit! */

/* eslint-disable */
import {
  type AbiType,
  AztecAddress,
  type AztecAddressLike,
  CompleteAddress,
  Contract,
  type ContractArtifact,
  ContractBase,
  ContractFunctionInteraction,
  type ContractInstanceWithAddress,
  type ContractMethod,
  type ContractStorageLayout,
  type ContractNotes,
  decodeFromAbi,
  DeployMethod,
  EthAddress,
  type EthAddressLike,
  EventSelector,
  type FieldLike,
  Fr,
  type FunctionSelectorLike,
  L1EventPayload,
  loadContractArtifact,
  type NoirCompiledContract,
  NoteSelector,
  Point,
  type PublicKey,
  type UnencryptedL2Log,
  type Wallet,
  type WrappedFieldLike,
} from '@aztec/aztec.js';
import CounterContractArtifactJson from '../../contracts/nft_contracts/target/nft_contract-Counter.json' assert { type: 'json' };
export const CounterContractArtifact = loadContractArtifact(CounterContractArtifactJson as NoirCompiledContract);



/**
 * Type-safe interface for contract Counter;
 */
export class CounterContract extends ContractBase {
  
  private constructor(
    instance: ContractInstanceWithAddress,
    wallet: Wallet,
  ) {
    super(instance, CounterContractArtifact, wallet);
  }
  

  
  /**
   * Creates a contract instance.
   * @param address - The deployed contract's address.
   * @param wallet - The wallet to use when interacting with the contract.
   * @returns A promise that resolves to a new Contract instance.
   */
  public static async at(
    address: AztecAddress,
    wallet: Wallet,
  ) {
    return Contract.at(address, CounterContract.artifact, wallet) as Promise<CounterContract>;
  }

  
  /**
   * Creates a tx to deploy a new instance of this contract.
   */
  public static deploy(wallet: Wallet, headstart: (bigint | number), owner: AztecAddressLike, outgoing_viewer: AztecAddressLike) {
    return new DeployMethod<CounterContract>(Fr.ZERO, wallet, CounterContractArtifact, CounterContract.at, Array.from(arguments).slice(1));
  }

  /**
   * Creates a tx to deploy a new instance of this contract using the specified public keys hash to derive the address.
   */
  public static deployWithPublicKeysHash(publicKeysHash: Fr, wallet: Wallet, headstart: (bigint | number), owner: AztecAddressLike, outgoing_viewer: AztecAddressLike) {
    return new DeployMethod<CounterContract>(publicKeysHash, wallet, CounterContractArtifact, CounterContract.at, Array.from(arguments).slice(2));
  }

  /**
   * Creates a tx to deploy a new instance of this contract using the specified constructor method.
   */
  public static deployWithOpts<M extends keyof CounterContract['methods']>(
    opts: { publicKeysHash?: Fr; method?: M; wallet: Wallet },
    ...args: Parameters<CounterContract['methods'][M]>
  ) {
    return new DeployMethod<CounterContract>(
      opts.publicKeysHash ?? Fr.ZERO,
      opts.wallet,
      CounterContractArtifact,
      CounterContract.at,
      Array.from(arguments).slice(1),
      opts.method ?? 'constructor',
    );
  }
  

  
  /**
   * Returns this contract's artifact.
   */
  public static get artifact(): ContractArtifact {
    return CounterContractArtifact;
  }
  

  public static get storage(): ContractStorageLayout<'counters'> {
      return {
        counters: {
      slot: new Fr(1n),
    }
      } as ContractStorageLayout<'counters'>;
    }
    

  public static get notes(): ContractNotes<'ValueNote'> {
    return {
      ValueNote: {
          id: new NoteSelector(1038582377),
        }
    } as ContractNotes<'ValueNote'>;
  }
  

  /** Type-safe wrappers for the public methods exposed by the contract. */
  public declare methods: {
    
    /** compute_note_hash_and_optionally_a_nullifier(contract_address: struct, nonce: field, storage_slot: field, note_type_id: field, compute_nullifier: boolean, serialized_note: array) */
    compute_note_hash_and_optionally_a_nullifier: ((contract_address: AztecAddressLike, nonce: FieldLike, storage_slot: FieldLike, note_type_id: FieldLike, compute_nullifier: boolean, serialized_note: FieldLike[]) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** constructor(headstart: integer, owner: struct, outgoing_viewer: struct) */
    constructor: ((headstart: (bigint | number), owner: AztecAddressLike, outgoing_viewer: AztecAddressLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** get_counter(owner: struct) */
    get_counter: ((owner: AztecAddressLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** increment(owner: struct, outgoing_viewer: struct) */
    increment: ((owner: AztecAddressLike, outgoing_viewer: AztecAddressLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;
  };

  
}
