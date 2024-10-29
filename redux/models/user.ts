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
