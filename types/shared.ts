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

export interface EWSSpace {
  id: string;
  status: "free" | "occupied" | "in-active";
  subscriber: Customer | null;
}

export interface EWSCenter {
  id: string;
  name: string;
  location: {
    state: string;
    area: string;
    id: string;
  };
  openTime: Date;
  closeTime: Date;
  spaces: EWSSpace[];
}
