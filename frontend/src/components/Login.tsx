import { UserIcon, LockClosedIcon, EyeIcon, EyeSlashIcon } from "@heroicons/react/20/solid";
import { useState, FormEvent } from "react";
import LoginUserServices, { UserData } from '../services/authServices';
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

interface LoginProps {
  onLogin: (user: UserData, token: string) => void;
}

export default function Login({ onLogin }: LoginProps) {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await LoginUserServices.loginUser(email, password);
      const user = response.data;
      const token = response.token;

      setLoginError(null);

      if (rememberMe) {
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", token);
      } else {
        sessionStorage.setItem("user", JSON.stringify(user));
        sessionStorage.setItem("token", token);
      }

      onLogin(user, token);
      navigate("/userprofile");
    } catch (error: any) {
      setLoginError(error.message || "Hiba történt a bejelentkezés során.");
      console.error("Bejelentkezési hiba:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center background">
      <form
        onSubmit={handleSubmit}
        className="bg-opacity-50 backdrop-blur-lg rounded-lg shadow-lg p-8 w-full max-w-sm flex flex-col items-center border-2 border-white"
      >
        <p className="text-3xl text-white font-bold mb-2">Bejelentkezés</p>
        <p className="text-gray-400 mb-6">Üdv! Jó téged újra látni!</p>

        <div className="relative w-full mb-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="h-1/2 w-1/2 items-center justify-center mx-auto"
          >
            <img src="/logo.png" alt="Logo" />
          </motion.div>
          <div className="flex items-center border-b-2 border-gray-300 focus-within:border-red-500">
            <span className="text-gray-400 pl-2">
              <UserIcon className="h-5 w-5" />
            </span>
            <input
              placeholder="Email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-10 bg-transparent text-white focus:outline-none pl-2"
              type="email"
              aria-label="Email"
              required
            />
          </div>
        </div>

        <div className="relative w-full mb-6">
          <div className="flex items-center border-b-2 border-gray-300 focus-within:border-red-500">
            <span className="text-gray-400 pl-2">
              <LockClosedIcon className="h-5 w-5" />
            </span>
            <input
              placeholder="Jelszó"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-10 bg-transparent text-white focus:outline-none pl-2"
              type={showPassword ? "text" : "password"}
              aria-label="Password"
              required
            />
            <span
              className="absolute right-2 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeSlashIcon className="h-5 w-5 text-gray-400" />
              ) : (
                <EyeIcon className="h-5 w-5 text-gray-400" />
              )}
            </span>
          </div>
        </div>

        {loginError && (
          <p className="text-red-500 text-sm mb-4">{loginError}</p>
        )}

        <div className="flex items-center justify-between w-full mb-4">
          <label className="text-white flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            Emlékezz rám
          </label>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full h-10 bg-[#E30419] text-white rounded-full mb-4"
        >
          Bejelentkezés
        </motion.button>

        <p className="text-sm text-gray-400 mb-4">Elfelejtetted jelszavadat?</p>
        <div className="flex items-center justify-center w-full mb-4">
          <hr className="w-1/3 border-gray-500" />
          <span className="text-gray-500 mx-2 text-center">Vagy (Hamarosan)</span>
          <hr className="w-1/3 border-gray-500" />
        </div>
        <div className="flex justify-center items-center text-xs text-gray-400">
          <span>
            Új Vagy Itt? <a href="/regisztracio" className="text-white">Regisztráció</a>
          </span>
        </div>
        <div className="flex justify-between w-full text-xs text-gray-500 mt-4">
          <a href="/services" className="text-left text-xs">
            Általános szerződési feltételek
          </a>
          <a href="#" className="text-center text-xs">
            Ügyfélszolgálat
          </a>
          <a href="/privacy" className="text-right text-xs">
            Adatvédelmi irányelv
          </a>
        </div>
      </form>
    </div>
  );
}
