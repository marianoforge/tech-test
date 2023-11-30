export interface UserName {
  title: string;
  first: string;
  last: string;
}

export interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface Dob {
  date: number;
  age: string;
}

export interface Id {
  name: string;
  value: string;
}

export interface Location {
  street: {
    number: number;
    name: string;
  };
  city: string;
  state: string;
  country: string;
  postcode: string;
  coordinates: {
    latitude: string;
    longitude: string;
  };
  timezone: {
    offset: string;
    description: string;
  };
}

export interface Key {
  uuid: string;
}

export interface User {
  id: Id;
  login: Key;
  name: UserName;
  email: string;
  nat: string;
  gender: string;
  picture: Picture;
  cell: string;
  dob: Dob;
  phone: string;
  location: Location;
}
