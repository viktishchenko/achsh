export interface IUsers {
  id: number;
  name: string;
  email: string;
  address: IAddressInfo[];
}

interface IAddressInfo {
  street: string;
  suit: string;
  city: string;
  zipcode: string;
  geo: IGeoInfo[];
  phone: string;
  website: string;
  company: ICompanyInfo[];
}

interface IGeoInfo {
  lat: string;
  lng: string;
}

interface ICompanyInfo {
  name: string;
  catchPhrase: string;
  bs: string;
}
