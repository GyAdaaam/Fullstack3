import http from '../http-common';

const authHttp = {
  postLogin: (email: string, password: string) =>
    http.post('/auth/login', { email, password }),

  registerUser: (felhasznalo_nev: string, email: string, password: string) =>
    http.post('/auth/register', { felhasznalo_nev, email, password }),

  uploadAvatar: (file: File, token: string) => {
    const formData = new FormData();
    formData.append('avatar', file);

    return http.post('/auth/upload-avatar', formData, {
      headers: {
        'x-access-token': token,
      },
    });
  },

  getUserProfile: (token: string) => {
    return http.get('/user/profile', {
      headers: {
        'x-access-token': token,
      },
    });
  },

  updateUserProfile: (userId: number, updatedData: Partial<any>, token: string) => {
  return http.put(`/user/${userId}`, updatedData, {
      headers: {
        'x-access-token': token,
      },
    });
  },
};

export default authHttp;
