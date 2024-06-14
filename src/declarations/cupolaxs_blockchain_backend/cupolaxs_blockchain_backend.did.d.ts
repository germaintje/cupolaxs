import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export type AvailableLoyaltyPoints = bigint;
export interface Cell {
  'id' : CellId,
  'bookedBy' : [] | [UserId],
  'dateEndBooking' : string,
  'dateStartBooking' : string,
  'isBooked' : boolean,
  'price' : bigint,
}
export type CellId = bigint;
export type Company = string;
export type Description = string;
export type Email = string;
export type FirstName = string;
export type LastName = string;
export type LastUpdateDate = string;
export type StartLoyaltyDate = string;
export type UserId = Principal;
export interface UserInfo {
  'description' : Description,
  'startLoyaltyDate' : LastUpdateDate,
  'lastUpdateDate' : LastUpdateDate,
  'email' : Email,
  'company' : Company,
  'availableLoyaltyPoints' : AvailableLoyaltyPoints,
  'lastName' : LastName,
  'firstName' : FirstName,
}
export interface _SERVICE {
  'bookCell' : ActorMethod<[UserId, CellId, string], boolean>,
  'checkCell' : ActorMethod<[CellId], [] | [Cell]>,
  'getCellDetails' : ActorMethod<[CellId], [] | [Cell]>,
  'getUserData' : ActorMethod<[UserId], [] | [UserInfo]>,
  'listCells' : ActorMethod<[], Array<Cell>>,
  'registerUser' : ActorMethod<[Principal], boolean>,
  'setUserData' : ActorMethod<
    [
      UserId,
      FirstName,
      LastName,
      Company,
      Email,
      Description,
      AvailableLoyaltyPoints,
      LastUpdateDate,
      StartLoyaltyDate,
    ],
    undefined
  >,
  'updateCellEndDate' : ActorMethod<[CellId, string], boolean>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
