/**
 * Object describes user info
 */
export interface UserModel {
  account: string;
  password: string;
  profile?: UserProfileModel;
}

/**
 * Object describes user profile
 */
export interface UserProfileModel {
  name: string;
  phone: string;
  email: string;
}