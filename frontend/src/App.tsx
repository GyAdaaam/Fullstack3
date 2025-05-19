import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RoutesComponent from './Router';
import { useNavigate } from 'react-router-dom';
import './index.css';

interface User {
  avatar: string;
  email: string;
  felhasznalo_id: number;
  felhasznalo_nev: string;
  felhasznalostatusz: string;
  jog: string;
  regisztracio_datum: string;
  utoljara_belepve: string;
}

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();
  const [avatarRefreshTrigger, setAvatarRefreshTrigger] = useState<number>(Date.now());
  
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        const parsedUser: User = JSON.parse(storedUser);
        setUser(parsedUser);
      }
    } catch (error) {
      console.error("Failed to parse user from localStorage", error);
    }
  }, []);

  const handleLogin = (userData: any) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
    console.log("User data at login:", userData);
  };

    const handleAvatarUpdate = (newAvatar: string) => {
    if (!user) return;
    const updatedUser = { ...user, avatar: newAvatar };
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
  };


const handleLogout = () => {
  const keysToRemove = ["user", "token"];
  keysToRemove.forEach((key) => {
    localStorage.removeItem(key);
    sessionStorage.removeItem(key);
  });
  setUser(null);
  navigate('/bejelentkezes');
};


  return (
    <div className="app-container">
      <Navbar user={user} handleLogout={handleLogout} avatarRefreshTrigger={avatarRefreshTrigger} />
      <main className="main-container">
        <RoutesComponent handleLogin={handleLogin} handleAvatarUpdate={handleAvatarUpdate} handleLogout={handleLogout} avatarRefreshTrigger={avatarRefreshTrigger} setAvatarRefreshTrigger={setAvatarRefreshTrigger}/>
      </main>
      <footer className="footer mt-auto">
        <Footer />
      </footer>
    </div>
  );
};

export default App;
