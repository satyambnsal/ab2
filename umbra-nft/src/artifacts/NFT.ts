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
} from '@aztec/aztec.js'
import NFTContractArtifactJson from '../../contracts/nft_contracts/target/nft_contract-NFT.json' assert { type: 'json' }
export const NFTContractArtifact = loadContractArtifact(
  NFTContractArtifactJson as NoirCompiledContract
)

export type NFTTransfer = {
  from: AztecAddressLike
  to: AztecAddressLike
  token_id: FieldLike
}

/**
 * Type-safe interface for contract NFT;
 */
export class NFTContract extends ContractBase {
  private constructor(instance: ContractInstanceWithAddress, wallet: Wallet) {
    super(instance, NFTContractArtifact, wallet)
  }

  /**
   * Creates a contract instance.
   * @param address - The deployed contract's address.
   * @param wallet - The wallet to use when interacting with the contract.
   * @returns A promise that resolves to a new Contract instance.
   */
  public static async at(address: AztecAddress, wallet: Wallet) {
    return Contract.at(address, NFTContract.artifact, wallet) as Promise<NFTContract>
  }

  /**
   * Creates a tx to deploy a new instance of this contract.
   */
  public static deploy(wallet: Wallet, admin: AztecAddressLike, name: string, symbol: string) {
    return new DeployMethod<NFTContract>(
      Fr.ZERO,
      wallet,
      NFTContractArtifact,
      NFTContract.at,
      Array.from(arguments).slice(1)
    )
  }

  /**
   * Creates a tx to deploy a new instance of this contract using the specified public keys hash to derive the address.
   */
  public static deployWithPublicKeysHash(
    publicKeysHash: Fr,
    wallet: Wallet,
    admin: AztecAddressLike,
    name: string,
    symbol: string
  ) {
    return new DeployMethod<NFTContract>(
      publicKeysHash,
      wallet,
      NFTContractArtifact,
      NFTContract.at,
      Array.from(arguments).slice(2)
    )
  }

  /**
   * Creates a tx to deploy a new instance of this contract using the specified constructor method.
   */
  public static deployWithOpts<M extends keyof NFTContract['methods']>(
    opts: { publicKeysHash?: Fr; method?: M; wallet: Wallet },
    ...args: Parameters<NFTContract['methods'][M]>
  ) {
    return new DeployMethod<NFTContract>(
      opts.publicKeysHash ?? Fr.ZERO,
      opts.wallet,
      NFTContractArtifact,
      NFTContract.at,
      Array.from(arguments).slice(1),
      opts.method ?? 'constructor'
    )
  }

  /**
   * Returns this contract's artifact.
   */
  public static get artifact(): ContractArtifact {
    return NFTContractArtifact
  }

  public static get storage(): ContractStorageLayout<
    'symbol' | 'name' | 'admin' | 'minters' | 'private_nfts' | 'nft_exists' | 'public_owners'
  > {
    return {
      symbol: {
        slot: new Fr(1n),
      },
      name: {
        slot: new Fr(2n),
      },
      admin: {
        slot: new Fr(3n),
      },
      minters: {
        slot: new Fr(4n),
      },
      private_nfts: {
        slot: new Fr(5n),
      },
      nft_exists: {
        slot: new Fr(6n),
      },
      public_owners: {
        slot: new Fr(7n),
      },
    } as ContractStorageLayout<
      'symbol' | 'name' | 'admin' | 'minters' | 'private_nfts' | 'nft_exists' | 'public_owners'
    >
  }

  public static get notes(): ContractNotes<'NFTNote' | 'ValueNote'> {
    return {
      NFTNote: {
        id: new NoteSelector(3595710486),
      },
      ValueNote: {
        id: new NoteSelector(1038582377),
      },
    } as ContractNotes<'NFTNote' | 'ValueNote'>
  }

  /** Type-safe wrappers for the public methods exposed by the contract. */
  public declare methods: {
    /** cancel_authwit(inner_hash: field) */
    cancel_authwit: ((inner_hash: FieldLike) => ContractFunctionInteraction) &
      Pick<ContractMethod, 'selector'>

    /** compute_note_hash_and_optionally_a_nullifier(contract_address: struct, nonce: field, storage_slot: field, note_type_id: field, compute_nullifier: boolean, serialized_note: array) */
    compute_note_hash_and_optionally_a_nullifier: ((
      contract_address: AztecAddressLike,
      nonce: FieldLike,
      storage_slot: FieldLike,
      note_type_id: FieldLike,
      compute_nullifier: boolean,
      serialized_note: FieldLike[]
    ) => ContractFunctionInteraction) &
      Pick<ContractMethod, 'selector'>

    /** constructor(admin: struct, name: string, symbol: string) */
    constructor: ((
      admin: AztecAddressLike,
      name: string,
      symbol: string
    ) => ContractFunctionInteraction) &
      Pick<ContractMethod, 'selector'>

    /** finalize_transfer_to_private(token_id: field, transfer_preparer_storage_slot_commitment: field) */
    finalize_transfer_to_private: ((
      token_id: FieldLike,
      transfer_preparer_storage_slot_commitment: FieldLike
    ) => ContractFunctionInteraction) &
      Pick<ContractMethod, 'selector'>

    /** get_admin() */
    get_admin: (() => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>

    /** get_private_nfts(owner: struct, page_index: integer) */
    get_private_nfts: ((
      owner: AztecAddressLike,
      page_index: bigint | number
    ) => ContractFunctionInteraction) &
      Pick<ContractMethod, 'selector'>

    /** is_minter(minter: struct) */
    is_minter: ((minter: AztecAddressLike) => ContractFunctionInteraction) &
      Pick<ContractMethod, 'selector'>

    /** mint(to: struct, token_id: field) */
    mint: ((to: AztecAddressLike, token_id: FieldLike) => ContractFunctionInteraction) &
      Pick<ContractMethod, 'selector'>

    /** owner_of(token_id: field) */
    owner_of: ((token_id: FieldLike) => ContractFunctionInteraction) &
      Pick<ContractMethod, 'selector'>

    /** prepare_transfer_to_private(from: struct, to: struct, transient_storage_slot_randomness: field) */
    prepare_transfer_to_private: ((
      from: AztecAddressLike,
      to: AztecAddressLike,
      transient_storage_slot_randomness: FieldLike
    ) => ContractFunctionInteraction) &
      Pick<ContractMethod, 'selector'>

    /** private_get_name() */
    private_get_name: (() => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>

    /** private_get_symbol() */
    private_get_symbol: (() => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>

    /** public_dispatch(selector: field) */
    public_dispatch: ((selector: FieldLike) => ContractFunctionInteraction) &
      Pick<ContractMethod, 'selector'>

    /** public_get_name() */
    public_get_name: (() => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>

    /** public_get_symbol() */
    public_get_symbol: (() => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>

    /** set_admin(new_admin: struct) */
    set_admin: ((new_admin: AztecAddressLike) => ContractFunctionInteraction) &
      Pick<ContractMethod, 'selector'>

    /** set_minter(minter: struct, approve: boolean) */
    set_minter: ((minter: AztecAddressLike, approve: boolean) => ContractFunctionInteraction) &
      Pick<ContractMethod, 'selector'>

    /** transfer_in_private(from: struct, to: struct, token_id: field, nonce: field) */
    transfer_in_private: ((
      from: AztecAddressLike,
      to: AztecAddressLike,
      token_id: FieldLike,
      nonce: FieldLike
    ) => ContractFunctionInteraction) &
      Pick<ContractMethod, 'selector'>

    /** transfer_in_public(from: struct, to: struct, token_id: field, nonce: field) */
    transfer_in_public: ((
      from: AztecAddressLike,
      to: AztecAddressLike,
      token_id: FieldLike,
      nonce: FieldLike
    ) => ContractFunctionInteraction) &
      Pick<ContractMethod, 'selector'>

    /** transfer_to_public(from: struct, to: struct, token_id: field, nonce: field) */
    transfer_to_public: ((
      from: AztecAddressLike,
      to: AztecAddressLike,
      token_id: FieldLike,
      nonce: FieldLike
    ) => ContractFunctionInteraction) &
      Pick<ContractMethod, 'selector'>
  }

  // Partial application is chosen is to avoid the duplication of so much codegen.
  private static decodeEvent<T>(
    eventSelector: EventSelector,
    eventType: AbiType
  ): (payload: L1EventPayload | UnencryptedL2Log | undefined) => T | undefined {
    return (payload: L1EventPayload | UnencryptedL2Log | undefined): T | undefined => {
      if (payload === undefined) {
        return undefined
      }

      if (payload instanceof L1EventPayload) {
        if (!eventSelector.equals(payload.eventTypeId)) {
          return undefined
        }
        return decodeFromAbi([eventType], payload.event.items) as T
      } else {
        let items = []
        for (let i = 0; i < payload.data.length; i += 32) {
          items.push(new Fr(payload.data.subarray(i, i + 32)))
        }

        return decodeFromAbi([eventType], items) as T
      }
    }
  }

  public static get events(): {
    NFTTransfer: {
      decode: (payload: L1EventPayload | UnencryptedL2Log | undefined) => NFTTransfer | undefined
      eventSelector: EventSelector
      fieldNames: string[]
    }
  } {
    return {
      NFTTransfer: {
        decode: this.decodeEvent(
          EventSelector.fromSignature('NFTTransfer((Field),(Field),Field)'),
          {
            fields: [
              {
                name: 'from',
                type: {
                  fields: [
                    {
                      name: 'inner',
                      type: {
                        kind: 'field',
                      },
                    },
                  ],
                  kind: 'struct',
                  path: 'authwit::aztec::protocol_types::address::aztec_address::AztecAddress',
                },
              },
              {
                name: 'to',
                type: {
                  fields: [
                    {
                      name: 'inner',
                      type: {
                        kind: 'field',
                      },
                    },
                  ],
                  kind: 'struct',
                  path: 'authwit::aztec::protocol_types::address::aztec_address::AztecAddress',
                },
              },
              {
                name: 'token_id',
                type: {
                  kind: 'field',
                },
              },
            ],
            kind: 'struct',
            path: 'NFT::NFTTransfer',
          }
        ),
        eventSelector: EventSelector.fromSignature('NFTTransfer((Field),(Field),Field)'),
        fieldNames: ['from', 'to', 'token_id'],
      },
    }
  }
}