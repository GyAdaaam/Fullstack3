import { UserIcon, LockClosedIcon, EyeIcon, EyeSlashIcon } from "@heroicons/react/20/solid";
import { useState, FormEvent } from "react";
import LoginUserServices from '../services/authServices';
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError("A jelszavak nem egyeznek.");
      return;
    }

    try {
      await LoginUserServices.registerUser(username, email, password);
      navigate("/bejelentkezes");
    } catch (err: any) {
      if (err.response && err.response.data && err.response.data.error) {
        setError(err.response.data.error);
      } else {
        setError("Hiba történt a regisztráció során.");
      }
      console.error("Regisztrációs hiba:", err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center background">
      <form
        onSubmit={handleSubmit}
        className="bg-opacity-50 backdrop-blur-lg rounded-lg shadow-lg p-8 w-full max-w-sm flex flex-col items-center border-2 border-white"
      >
        <motion.div 
          whileHover={{ scale: 1.1 }} 
          className="h-1/2 w-1/2 items-center justify-center mx-auto"
        >
          <img src="/logo.png" alt="Logo" />
        </motion.div>

        <p className="text-3xl text-white font-bold mb-2">Regisztráció</p>
        <p className="text-gray-400 mb-6">Üdv! Jó, hogy csatlakozol!</p>

        <div className="relative w-full mb-4">
          <div className="flex items-center border-b-2 border-gray-300 focus-within:border-red-500">
            <span className="text-gray-400 pl-2">
              <UserIcon className="h-5 w-5" />
            </span>
            <input
              placeholder="Felhasználónév"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full h-10 bg-transparent text-white focus:outline-none pl-2"
              type="text"
              aria-label="Felhasználónév"
              required
            />
          </div>
        </div>

        <div className="relative w-full mb-4">
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

        <div className="relative w-full mb-4">
          <div className="flex items-center border-b-2 border-gray-300 focus-within:border-red-500 relative">
            <span className="text-gray-400 pl-2">
              <LockClosedIcon className="h-5 w-5" />
            </span>
            <input
              placeholder="Jelszó"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-10 bg-transparent text-white focus:outline-none pl-2 pr-8"
              type={showPassword ? "text" : "password"}
              aria-label="Jelszó"
              required
            />
            <span
              className="absolute right-2 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Jelszó elrejtése" : "Jelszó mutatása"}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeSlashIcon className="h-5 w-5 text-gray-400" />
              ) : (
                <EyeIcon className="h-5 w-5 text-gray-400" />
              )}
            </span>
          </div>
        </div>

        <div className="relative w-full mb-6">
          <div className="flex items-center border-b-2 border-gray-300 focus-within:border-red-500 relative">
            <span className="text-gray-400 pl-2">
              <LockClosedIcon className="h-5 w-5" />
            </span>
            <input
              placeholder="Jelszó megerősítése"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full h-10 bg-transparent text-white focus:outline-none pl-2 pr-8"
              type={showConfirmPassword ? "text" : "password"}
              aria-label="Jelszó megerősítése"
              required
            />
            <span
              className="absolute right-2 cursor-pointer"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              aria-label={showConfirmPassword ? "Jelszó elrejtése" : "Jelszó mutatása"}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
                <EyeSlashIcon className="h-5 w-5 text-gray-400" />
              ) : (
                <EyeIcon className="h-5 w-5 text-gray-400" />
              )}
            </span>
          </div>
        </div>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <div className="flex items-center justify-between w-full mb-4">
          <label className="text-white flex items-center cursor-pointer">
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
          Regisztráció
        </motion.button>
      </form>
    </div>
  );
}
