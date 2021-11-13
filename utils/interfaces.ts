export interface User {
  id: Number;
  name: String;
}

export interface Message {
    type:string;
    sender:User;
    data:string;
}
