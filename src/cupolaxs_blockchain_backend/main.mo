import Array "mo:base/Array";
import Principal "mo:base/Principal";
import Text "mo:base/Text";
import HashMap "mo:base/HashMap";
import Hash "mo:base/Hash";
import Nat "mo:base/Nat";


actor {
    type UserId = Principal;
    type CellId = Nat;
    type Cell = {
        id: CellId;
        isBooked: Bool;
        bookedBy: ?UserId;
        price: Nat;
        dateStartBooking: Text;
        dateEndBooking: Text;
    };

      type FirstName = Text;
      type LastName = Text;
      type Company = Text;
      type Email = Text;
      type Description = Text;
      type AvailableLoyaltyPoints = Nat;
      type LastUpdateDate = Text;
      type StartLoyaltyDate = Text;

      type UserInfo = {
        firstName: FirstName;
        lastName: LastName;
        company: Company;
        email: Email;
        description: Description;
        availableLoyaltyPoints: AvailableLoyaltyPoints;
        lastUpdateDate: LastUpdateDate;
        startLoyaltyDate: LastUpdateDate;
      };

  let usersInfo = HashMap.HashMap<UserId, UserInfo>(
    10, // Initial capacity
    func (x: UserId, y: UserId): Bool {
      Principal.equal(x, y)
    }, // Comparison function
    func (id: UserId): Hash.Hash {
      Principal.hash(id)
    } // Hash function
  );

  public query func getUserData(userId: UserId) : async ?UserInfo {
    return usersInfo.get(userId);
  };

  public func setUserData(userId: UserId, firstName: FirstName, lastName: LastName, company: Company, email: Email,
  description: Description, availableLoyaltyPoints: AvailableLoyaltyPoints, lastUpdateDate: LastUpdateDate, startLoyaltyDate: StartLoyaltyDate) : async () {
    let userInfo = {
      firstName = firstName;
      lastName = lastName;
      company = company;
      email = email;
      description = description;
      availableLoyaltyPoints = availableLoyaltyPoints;
      lastUpdateDate = lastUpdateDate;
      startLoyaltyDate = startLoyaltyDate;
    };
    usersInfo.put(userId, userInfo);
  };

    private var cells: [Cell] = [
        { id = 1; isBooked = false; bookedBy = null; price = 500; dateStartBooking = "Not booked yet"; dateEndBooking = "Not booked yet"},
        { id = 2; isBooked = false; bookedBy = null; price = 500; dateStartBooking = "Not booked yet"; dateEndBooking = "Not booked yet"},
        { id = 3; isBooked = false; bookedBy = null; price = 500; dateStartBooking = "Not booked yet"; dateEndBooking = "Not booked yet"},
        { id = 4; isBooked = false; bookedBy = null; price = 100; dateStartBooking = "Not booked yet"; dateEndBooking = "Not booked yet"},
        { id = 5; isBooked = false; bookedBy = null; price = 600; dateStartBooking = "Not booked yet"; dateEndBooking = "Not booked yet"},
        { id = 6; isBooked = false; bookedBy = null; price = 3000; dateStartBooking = "Not booked yet"; dateEndBooking = "Not booked yet"}
    ];

    private var users: [UserId] = [];

  public func registerUser(user: Principal): async Bool {
         // Check if user already exists
         if (Array.find(users, func(u: UserId): Bool { return u == user; }) == null) {
             // Use Array.append for clarity
             users := Array.append(users, [user]);
             return true;
         };
         return false;
     };

    public func bookCell(user: UserId, id: CellId, startBookingDate: Text): async Bool {
        var found = false;
        cells := Array.map(cells, func(c : Cell) : Cell {
            if (c.id == id and not c.isBooked) {
                found := true;
                return {
                    id = c.id;
                    isBooked = true;
                    bookedBy = ?user;
                    price = c.price;
                    dateStartBooking = startBookingDate;
                    dateEndBooking = "";
                };
            };
            return c;
        });
        return found;
    };

    public query func checkCell(id: CellId): async ?Cell {
        return Array.find(cells, func(c : Cell) : Bool { c.id == id });
    };

    public query func listCells(): async [Cell] {
        return cells;
    };

  public query func getCellDetails(cellId: CellId): async ?Cell {
      return Array.find(cells, func(c: Cell): Bool { return c.id == cellId });
  };

  public func updateCellEndDate(id: CellId, newEndDate: Text): async Bool {
          var updated = false;
          cells := Array.map(cells, func(c : Cell) : Cell {
              if (c.id == id and c.isBooked) {
                  updated := true;
                  return {
                      id = c.id;
                      isBooked = c.isBooked;
                      bookedBy = c.bookedBy;
                      price = c.price;
                      dateStartBooking = c.dateStartBooking;
                      dateEndBooking = newEndDate;
                  };
              };
              return c;
          });
          return updated;
      };

}
