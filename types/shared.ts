export interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNo: string;
  address: {};
  subscription: {
    type: "milkshake" | "mag";
    status: "active" | "in-active";
    date: {
      start: Date;
      end: Date;
    };
  };
}
