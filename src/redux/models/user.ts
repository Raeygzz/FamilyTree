export type FetchHeadsResponse = {
  address_1: string;
  address_2: string;
  blood_group: string;
  created_at: string;
  first_name: string;
  gender: string;
  id: number;
  image: string;
  last_name: string;
  middle_name: string;
  occupation: string;
  org_id: number;
  updated_at: string;
};

export type FetchUsersResponse = {
  id: number;
  org_id: number;
  first_name: string;
  middle_name: string;
  last_name: string;
  address_1: string;
  address_2: string;
  email: string;
  phone: string;
  gender: string;
  blood_group: string;
  occupation: string;
  date_of_birth: string;
  parent_id: number;
  generation: number;
  created_at: string;
  updated_at: string;
};

export type UserRequest = {
  org_id: string;
  first_name: string;
  last_name: string;
  address_1: string;
  phone: string;
  gender: string;
};

export type UserResponse = {
  success: boolean;
};
