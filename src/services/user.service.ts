import UserModel, { User } from "../models/user.model";

//makes all properties optional
export function createUser(input: Partial<User>) {
  return UserModel.create(input);
}

export function findUserById(id: string) {
  return UserModel.findById(id);
}

export function findUserByEmail(email: string) {
  //.lean() - is going to return json object of the document
  return UserModel.findOne({ email });
}
