import { useState } from "react";
import logo from "../assets/logo.png";
import {
  MagnifyingGlassIcon,
  HeartIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  UserIcon,
  UserGroupIcon,
  ClipboardDocumentListIcon,
  Cog6ToothIcon,
  ArrowLeftOnRectangleIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/20/solid";
import { navItems } from "../constants/navbaritems";
import { motion, AnimatePresence } from "framer-motion";

interface User {
  avatar: string;
  felhasznalo_nev: string;
  email: string;
  jog: string;
}

interface NavbarProps {
  user: User | null;
  handleLogout: () => void;
  avatarRefreshTrigger?: number;
}

export default function Navbar({
  user,
  handleLogout,
  avatarRefreshTrigger,
}: NavbarProps) {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleNavbar = () => setMobileDrawerOpen(!mobileDrawerOpen);

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    if (searchOpen) {
      setSearchQuery("");
    }
  };

  return (
    <>
      <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 bg-neutral-900/100">
        <div className="container mx-auto flex items-center justify-between px-6">
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img className="h-12 w-12 mr-3" src={logo} alt="logo" />
            <a className="text-2xl font-bold" href="/">
              LevelUpDeals
            </a>
          </motion.div>

          <div className="relative w-1/3 hidden md:block backdrop-blur-lg sticky">
            <form className="relative w-full">
              <div className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                <MagnifyingGlassIcon className="h-5 w-5" />
                <span className="mx-2">|</span>
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Keresés..."
                className="w-full pl-12 pr-4 py-2 border border-gray-300 font-semibold rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-grey-200"
              />
            </form>
          </div>

          <div className="flex items-center space-x-6">
            <div className="hidden md:flex space-x-6">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center gap-1 font-semibold"
                >
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3 ml-20">
              <button
                onClick={toggleSearch}
                className="md:hidden flex items-center justify-center h-8 w-8"
              >
                <MagnifyingGlassIcon className="h-6 w-6 text-white hover:text-red-500 transition" />
              </button>
              <a href="/kosar">
                <ShoppingBagIcon className="h-6 w-6 text-white hover:text-red-500 transition" />
              </a>
              <a href="/kedvencek">
                <HeartIcon className="h-6 w-6 text-white hover:text-red-500 transition" />
              </a>
              <div className="relative">
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="flex items-center"
                >
                  {user?.avatar ? (
                    <img
                      src={`http://localhost:8080/profilepictures/${user.avatar}?t=${Date.now()}`}
                      alt="Avatar"
                      className="h-auto w-auto max-h-8 max-w-8 rounded-full border-2 border-transparent cursor-pointer"
                    />
                  ) : (
                    <UserCircleIcon className="h-7 w-7 text-white hover:text-red-500 transition cursor-pointer" />
                  )}
                </button>
                {menuOpen && (
                  <div className="absolute right-0 mt-2 w-56 rounded-lg shadow-lg overflow-hidden z-50 backdrop-blur-lg border border-neutral-700/80 bg-neutral-900/100">
                    {user ? (
                      <>
                        <div className="flex items-center space-x-3 p-4 border-b">
                          <img
                            src={`http://localhost:8080/profilepictures/${user.avatar}?t=${avatarRefreshTrigger}`}
                            alt="Avatar"
                            className="h-auto w-auto max-h-10 max-w-10 rounded-full border-2 border-transparent cursor-pointer"
                          />
                          <div>
                            <p className="font-semibold text-lg sm:text-base xs:text-sm break-words">
                              {user.felhasznalo_nev}
                            </p>
                            <p className="text-xs">{user.jog}</p>
                            <p className="text-sm text-gray-500">{user.email}</p>
                          </div>
                        </div>
                        <a
                          href="/userprofile"
                          className="flex items-center px-4 py-2 text-sm hover:bg-gray-700"
                        >
                          <UserIcon className="w-5 h-5 mr-2" /> Profil adatok
                        </a>
                        <a
                          href="/friends"
                          className="flex items-center px-4 py-2 text-sm hover:bg-gray-700"
                        >
                          <UserGroupIcon className="w-5 h-5 mr-2" /> Barátok
                        </a>
                        <a
                          href="/orders"
                          className="flex items-center px-4 py-2 text-sm hover:bg-gray-700"
                        >
                          <ClipboardDocumentListIcon className="w-5 h-5 mr-2" />{" "}
                          Vásárlásaim
                        </a>
                        <a
                          href="/settings"
                          className="flex items-center px-4 py-2 text-sm hover:bg-gray-700"
                        >
                          <Cog6ToothIcon className="w-5 h-5 mr-2" /> Beállítások
                        </a>
                        <button
                          onClick={handleLogout}
                          className="flex items-center w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-500 hover:text-white"
                        >
                          <ArrowLeftOnRectangleIcon className="w-5 h-5 mr-2" />{" "}
                          Kijelentkezés
                        </button>
                      </>
                    ) : (
                      <>
                        <a
                          href="/bejelentkezes"
                          className="flex items-center px-4 py-2 text-sm hover:bg-gray-700"
                        >
                          <ArrowRightOnRectangleIcon className="w-5 h-5 mr-2" />{" "}
                          Bejelentkezés
                        </a>
                        <a
                          href="/regisztracio"
                          className="flex items-center px-4 py-2 text-sm hover:bg-gray-700"
                        >
                          <UserPlusIcon className="w-5 h-5 mr-2" /> Regisztráció
                        </a>
                      </>
                    )}
                  </div>
                )}
              </div>
              <button
                onClick={toggleNavbar}
                className="md:hidden flex items-center justify-center"
                aria-label="Toggle menu"
              >
                <Bars3Icon className="h-7 w-7 text-white hover:text-red-500 transition" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileDrawerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black bg-opacity-90 z-40"
              onClick={toggleNavbar}
            />
            <motion.div
              className="fixed inset-y-0 right-0 w-full max-w-xs bg-neutral-900 p-6 shadow-lg flex flex-col space-y-6 z-50"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
            >
              <button onClick={toggleNavbar} className="self-end">
                <XMarkIcon className="h-6 w-6 text-white" />
              </button>
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-white text-lg"
                  onClick={toggleNavbar}
                >
                  {item.label}
                </a>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
