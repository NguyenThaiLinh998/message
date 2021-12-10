export enum TokenType {
  ACCESS_TOKEN = "ACCESS_TOKEN",
  REFRESH_TOKEN = "REFRESH_TOKEN",
}
export enum ErrorCode {
  Unknown_Error = "Unknown_Error",
  Invalid_Input = "Invalid_Input",
  Missing_Access_Token_In_Header = "Missing_Access_Token_In_Header",
  Token_Expired = "Token_Expired",
  Refresh_Token_Expired = "Refresh_Token_Expired",
  Email_Address_Not_Exist = "Email_Address_Not_Exist",
  Email_Address_Already_Exist = "Email_Address_Already_Exist",
  User_Blocked = "User_Blocked",
  Password_Incorrect = "Password_Incorrect",
  User_Not_Found = "User_Not_Found",
}
