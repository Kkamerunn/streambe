import { ChangeEventHandler } from "react";

export interface InputProps {
  id: string;
  placeholder: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  name: string;
  value: string;
  type: string;
}

export interface AuthData {
  email: string;
  password: string;
}

export interface authUser {
  username: string;
  name: string;
  lastname: string;
  roles: string[];
  token_type: string;
  access_token: string;
  expires_in: number;
  refresh_token: string;
}

export interface AlertProps {
  textContent: string;
  type: string;
}

export interface User {
  birthDate: string;
  contactId: number | null;
  email: string;
  gender: string;
  name: string;
  phone: string;
  photo: string | null;
  profesion: string;
  surnames: string;
}
