/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.5.8.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { CosmWasmClient, ExecuteResult, SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { Coin, StdFee } from "@cosmjs/amino";
export interface AllAccountsResponse {
  accounts: string[];
  [k: string]: unknown;
}
export type Uint128 = string;
export type Expiration = {
  at_height: number;
} | {
  at_time: Timestamp;
} | {
  never: {
    [k: string]: unknown;
  };
};
export type Timestamp = Uint64;
export type Uint64 = string;
export interface AllAllowancesResponse {
  allowances: AllowanceInfo[];
  [k: string]: unknown;
}
export interface AllowanceInfo {
  allowance: Uint128;
  expires: Expiration;
  spender: string;
  [k: string]: unknown;
}
export interface AllowanceResponse {
  allowance: Uint128;
  expires: Expiration;
  [k: string]: unknown;
}
export interface BalanceResponse {
  balance: Uint128;
  [k: string]: unknown;
}
export interface ClaimsResponse {
  claims: Claim[];
  [k: string]: unknown;
}
export interface Claim {
  amount: Uint128;
  release_at: Expiration;
  [k: string]: unknown;
}
export type ExecuteMsg = {
  receive: Cw20ReceiveMsg;
} | {
  unstake: {
    amount: Uint128;
    [k: string]: unknown;
  };
} | {
  claim: {
    [k: string]: unknown;
  };
} | {
  update_config: {
    duration?: Duration | null;
    manager?: string | null;
    owner?: string | null;
    [k: string]: unknown;
  };
} | {
  add_hook: {
    addr: string;
    [k: string]: unknown;
  };
} | {
  remove_hook: {
    addr: string;
    [k: string]: unknown;
  };
};
export type Binary = string;
export type Duration = {
  height: number;
} | {
  time: number;
};
export interface Cw20ReceiveMsg {
  amount: Uint128;
  msg: Binary;
  sender: string;
  [k: string]: unknown;
}
export type Addr = string;
export interface GetConfigResponse {
  manager?: Addr | null;
  owner?: Addr | null;
  token_address: Addr;
  unstaking_duration?: Duration | null;
  [k: string]: unknown;
}
export interface GetHooksResponse {
  hooks: string[];
  [k: string]: unknown;
}
export interface InstantiateMsg {
  manager?: string | null;
  owner?: string | null;
  token_address: string;
  unstaking_duration?: Duration | null;
  [k: string]: unknown;
}
export interface ListStakersResponse {
  stakers: StakerBalanceResponse[];
  [k: string]: unknown;
}
export interface StakerBalanceResponse {
  address: string;
  balance: Uint128;
  [k: string]: unknown;
}
export type QueryMsg = {
  staked_balance_at_height: {
    address: string;
    height?: number | null;
    [k: string]: unknown;
  };
} | {
  total_staked_at_height: {
    height?: number | null;
    [k: string]: unknown;
  };
} | {
  staked_value: {
    address: string;
    [k: string]: unknown;
  };
} | {
  total_value: {
    [k: string]: unknown;
  };
} | {
  get_config: {
    [k: string]: unknown;
  };
} | {
  claims: {
    address: string;
    [k: string]: unknown;
  };
} | {
  get_hooks: {
    [k: string]: unknown;
  };
} | {
  list_stakers: {
    limit?: number | null;
    start_after?: string | null;
    [k: string]: unknown;
  };
};
export interface StakedBalanceAtHeightResponse {
  balance: Uint128;
  height: number;
  [k: string]: unknown;
}
export interface StakedValueResponse {
  value: Uint128;
  [k: string]: unknown;
}
export interface TokenInfoResponse {
  decimals: number;
  name: string;
  symbol: string;
  total_supply: Uint128;
  [k: string]: unknown;
}
export interface TotalStakedAtHeightResponse {
  height: number;
  total: Uint128;
  [k: string]: unknown;
}
export interface TotalValueResponse {
  total: Uint128;
  [k: string]: unknown;
}
export interface Cw20StakeReadOnlyInterface {
  contractAddress: string;
  stakedBalanceAtHeight: ({
    address,
    height
  }: {
    address: string;
    height?: number;
  }) => Promise<StakedBalanceAtHeightResponse>;
  totalStakedAtHeight: ({
    height
  }: {
    height?: number;
  }) => Promise<TotalStakedAtHeightResponse>;
  stakedValue: ({
    address
  }: {
    address: string;
  }) => Promise<StakedValueResponse>;
  totalValue: () => Promise<TotalValueResponse>;
  getConfig: () => Promise<GetConfigResponse>;
  claims: ({
    address
  }: {
    address: string;
  }) => Promise<ClaimsResponse>;
  getHooks: () => Promise<GetHooksResponse>;
  listStakers: ({
    limit,
    startAfter
  }: {
    limit?: number;
    startAfter?: string;
  }) => Promise<ListStakersResponse>;
}
export class Cw20StakeQueryClient implements Cw20StakeReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.stakedBalanceAtHeight = this.stakedBalanceAtHeight.bind(this);
    this.totalStakedAtHeight = this.totalStakedAtHeight.bind(this);
    this.stakedValue = this.stakedValue.bind(this);
    this.totalValue = this.totalValue.bind(this);
    this.getConfig = this.getConfig.bind(this);
    this.claims = this.claims.bind(this);
    this.getHooks = this.getHooks.bind(this);
    this.listStakers = this.listStakers.bind(this);
  }

  stakedBalanceAtHeight = async ({
    address,
    height
  }: {
    address: string;
    height?: number;
  }): Promise<StakedBalanceAtHeightResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      staked_balance_at_height: {
        address,
        height
      }
    });
  };
  totalStakedAtHeight = async ({
    height
  }: {
    height?: number;
  }): Promise<TotalStakedAtHeightResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      total_staked_at_height: {
        height
      }
    });
  };
  stakedValue = async ({
    address
  }: {
    address: string;
  }): Promise<StakedValueResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      staked_value: {
        address
      }
    });
  };
  totalValue = async (): Promise<TotalValueResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      total_value: {}
    });
  };
  getConfig = async (): Promise<GetConfigResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      get_config: {}
    });
  };
  claims = async ({
    address
  }: {
    address: string;
  }): Promise<ClaimsResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      claims: {
        address
      }
    });
  };
  getHooks = async (): Promise<GetHooksResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      get_hooks: {}
    });
  };
  listStakers = async ({
    limit,
    startAfter
  }: {
    limit?: number;
    startAfter?: string;
  }): Promise<ListStakersResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      list_stakers: {
        limit,
        start_after: startAfter
      }
    });
  };
}
export interface Cw20StakeInterface extends Cw20StakeReadOnlyInterface {
  contractAddress: string;
  sender: string;
  receive: ({
    amount,
    msg,
    sender
  }: {
    amount: string;
    msg: string;
    sender: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
  unstake: ({
    amount
  }: {
    amount: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
  claim: (fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
  updateConfig: ({
    duration,
    manager,
    owner
  }: {
    duration?: Duration;
    manager?: string;
    owner?: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
  addHook: ({
    addr
  }: {
    addr: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
  removeHook: ({
    addr
  }: {
    addr: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
}
export class Cw20StakeClient extends Cw20StakeQueryClient implements Cw20StakeInterface {
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;

  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.receive = this.receive.bind(this);
    this.unstake = this.unstake.bind(this);
    this.claim = this.claim.bind(this);
    this.updateConfig = this.updateConfig.bind(this);
    this.addHook = this.addHook.bind(this);
    this.removeHook = this.removeHook.bind(this);
  }

  receive = async ({
    amount,
    msg,
    sender
  }: {
    amount: string;
    msg: string;
    sender: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: readonly Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      receive: {
        amount,
        msg,
        sender
      }
    }, fee, memo, funds);
  };
  unstake = async ({
    amount
  }: {
    amount: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: readonly Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      unstake: {
        amount
      }
    }, fee, memo, funds);
  };
  claim = async (fee: number | StdFee | "auto" = "auto", memo?: string, funds?: readonly Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      claim: {}
    }, fee, memo, funds);
  };
  updateConfig = async ({
    duration,
    manager,
    owner
  }: {
    duration?: Duration;
    manager?: string;
    owner?: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: readonly Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_config: {
        duration,
        manager,
        owner
      }
    }, fee, memo, funds);
  };
  addHook = async ({
    addr
  }: {
    addr: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: readonly Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      add_hook: {
        addr
      }
    }, fee, memo, funds);
  };
  removeHook = async ({
    addr
  }: {
    addr: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: readonly Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      remove_hook: {
        addr
      }
    }, fee, memo, funds);
  };
}