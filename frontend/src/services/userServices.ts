import authHttp from '../http/authHttp';

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

export interface UploadAvatarResponse {
  success: boolean;
  filename: string;
}

const getUserProfile = async () => {
  const token = sessionStorage.getItem('token') || localStorage.getItem('token');
  if (!token) throw new Error('Token not found');

  try {
    const response = await authHttp.getUserProfile(token);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


const updateUserProfile = async (userId: number, updatedData: Partial<UserData>): Promise<UserData> => {
  const token = sessionStorage.getItem('token') || localStorage.getItem('token');
  if (!token) throw new Error('Token not found');

  try {
    const response = await authHttp.updateUserProfile(userId, updatedData, token);
    return response.data;
  } catch (error) {
    console.error('Hiba történt a profil frissités során:', error);
    throw error;
  }
};

const uploadAvatar = async (file: File): Promise<UploadAvatarResponse> => {
  const token = sessionStorage.getItem('token') || localStorage.getItem('token');
  if (!token) throw new Error('Token not found');

  try {
    const response = await authHttp.uploadAvatar(file, token);
    return response.data;
  } catch (error) {
    console.error('Hiba történt a profilkép feltöltése során:', error);
    throw error;
  }
};


export default {
  getUserProfile,
  updateUserProfile,
  uploadAvatar,
};
