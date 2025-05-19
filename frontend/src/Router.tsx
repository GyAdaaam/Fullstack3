import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loading from './Loading';


const Home = lazy(() => import('./components/Home'));
const Login = lazy(() => import('./components/Login'));
const UserProfile = lazy(() => import('./components/UserProfile'));
const Gamelist = lazy(() => import('./components/Gamelist'));
const Register = lazy(() => import('./components/Register'));
const NotFound = lazy(() => import('./components/Notfound'));

interface RoutesComponentProps {
  handleLogin: (userData: any) => void;
  handleAvatarUpdate: (newAvatar: string) => void;
  avatarRefreshTrigger: number;
  setAvatarRefreshTrigger: React.Dispatch<React.SetStateAction<number>>;
  handleLogout: () => void;
}

export default function RoutesComponent({handleLogin,handleAvatarUpdate,avatarRefreshTrigger,setAvatarRefreshTrigger,handleLogout,} : RoutesComponentProps) {
  return (
    <Suspense fallback={<div><Loading/></div>}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bejelentkezes" element={<Login onLogin={handleLogin} />} />
      <Route path="/regisztracio" element={<Register />} />
      <Route path="/userprofile" element={<UserProfile onAvatarUpdate={handleAvatarUpdate} setAvatarRefreshTrigger={setAvatarRefreshTrigger} avatarRefreshTrigger={avatarRefreshTrigger} onLogout={handleLogout}/>}/>
      <Route path="/jatekok" element={<Gamelist />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </Suspense>
  );
}
