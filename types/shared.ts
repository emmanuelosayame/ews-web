export interface UserData {
  id: string;
  firstName: string;
  lastName: string;
}

export interface Customer {
  id: string;
}

export interface EWSSpace {
  id: string;
  status: "free" | "occupied" | "in-active";
  subscriber: Customer;
}

export interface EWSCenter {
  id: string;
  name: string;
  location: string;
  openTime: Date;
  closeTime: Date;
  spaces: EWSSpace[];
}
