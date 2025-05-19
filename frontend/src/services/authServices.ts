import http from '../http-common';

export interface UserData {
  felhasznalo_id: number;
  felhasznalo_nev: string;
  email: string;
  regisztracio_datum: string;
  felhasznalostatusz_id: number;
  utoljara_belepve: string | null;
  jog_id: number;
  avatar: string;
}

export interface LoginResponse {
  data: UserData;
  token: string;
}

export interface RegisterResponse {
  data: UserData;
  token: string;
}


const loginUser = async (email: string, password: string): Promise<LoginResponse> => {
  try {
    const res = await http.post<LoginResponse>('auth/login', { email, password });
    return res.data;
  } catch (error) {
    console.error('Hiba a bejelentkezés során:', error);
    throw error;
  }
};

const registerUser = async (username: string, email: string, password: string): Promise<RegisterResponse> => {
  try {
    const res = await http.post<RegisterResponse>('auth/register', { 
      username, 
      email, 
      password 
    });
    return res.data;
  } catch (error) {
    console.error('Hiba a regisztráció során:', error);
    throw error;
  }
};  


export default {
  loginUser,
  registerUser
};
