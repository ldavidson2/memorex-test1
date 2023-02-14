import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerUsers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Users, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly SK: string;
  readonly companyName?: string | null;
  readonly companyEmail?: string | null;
  readonly companyNumber?: number | null;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly email?: string | null;
  readonly phoneNumber?: number | null;
  readonly specialty?: string | null;
  readonly securityLevel?: number | null;
  readonly clinicName?: string | null;
  readonly dateOfBirth?: string | null;
  readonly gender?: string | null;
  readonly preferredContact?: string | null;
  readonly dementiaLikelihood?: string | null;
  readonly notes?: string | null;
  readonly tests?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUsers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Users, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly SK: string;
  readonly companyName?: string | null;
  readonly companyEmail?: string | null;
  readonly companyNumber?: number | null;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly email?: string | null;
  readonly phoneNumber?: number | null;
  readonly specialty?: string | null;
  readonly securityLevel?: number | null;
  readonly clinicName?: string | null;
  readonly dateOfBirth?: string | null;
  readonly gender?: string | null;
  readonly preferredContact?: string | null;
  readonly dementiaLikelihood?: string | null;
  readonly notes?: string | null;
  readonly tests?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Users = LazyLoading extends LazyLoadingDisabled ? EagerUsers : LazyUsers

export declare const Users: (new (init: ModelInit<Users>) => Users) & {
  copyOf(source: Users, mutator: (draft: MutableModel<Users>) => MutableModel<Users> | void): Users;
}