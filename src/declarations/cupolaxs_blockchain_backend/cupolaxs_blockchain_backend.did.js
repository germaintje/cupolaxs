export const idlFactory = ({ IDL }) => {
  const UserId = IDL.Principal;
  const CellId = IDL.Nat;
  const Cell = IDL.Record({
    'id' : CellId,
    'bookedBy' : IDL.Opt(UserId),
    'dateEndBooking' : IDL.Text,
    'dateStartBooking' : IDL.Text,
    'isBooked' : IDL.Bool,
    'price' : IDL.Nat,
  });
  const Description = IDL.Text;
  const LastUpdateDate = IDL.Text;
  const Email = IDL.Text;
  const Company = IDL.Text;
  const AvailableLoyaltyPoints = IDL.Nat;
  const LastName = IDL.Text;
  const FirstName = IDL.Text;
  const UserInfo = IDL.Record({
    'description' : Description,
    'startLoyaltyDate' : LastUpdateDate,
    'lastUpdateDate' : LastUpdateDate,
    'email' : Email,
    'company' : Company,
    'availableLoyaltyPoints' : AvailableLoyaltyPoints,
    'lastName' : LastName,
    'firstName' : FirstName,
  });
  const StartLoyaltyDate = IDL.Text;
  return IDL.Service({
    'bookCell' : IDL.Func([UserId, CellId, IDL.Text], [IDL.Bool], []),
    'checkCell' : IDL.Func([CellId], [IDL.Opt(Cell)], ['query']),
    'getCellDetails' : IDL.Func([CellId], [IDL.Opt(Cell)], ['query']),
    'getUserData' : IDL.Func([UserId], [IDL.Opt(UserInfo)], ['query']),
    'listCells' : IDL.Func([], [IDL.Vec(Cell)], ['query']),
    'registerUser' : IDL.Func([IDL.Principal], [IDL.Bool], []),
    'setUserData' : IDL.Func(
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
        [],
        [],
      ),
    'updateCellEndDate' : IDL.Func([CellId, IDL.Text], [IDL.Bool], []),
  });
};
export const init = ({ IDL }) => { return []; };
