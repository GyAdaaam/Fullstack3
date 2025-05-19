import React from "react";
import { motion } from "framer-motion";

interface FelhasznaloInfo {
  felhasznalo_id: number;
  felhasznalo_nev: string;
  email: string;
  regisztracio_datum: string;
  felhasznalostatusz: string;
  utoljara_belepve: string;
  jog: string;
}

interface ProfileProps {
  user: FelhasznaloInfo;
}

export default function ProfileInformation({ user }: ProfileProps) {
  const formatDateDot = (dateStr: string) => (dateStr ? dateStr.replace(/-/g, ".") : "");

  const infoItems = [
    { label: "Felhasználó ID", value: user.felhasznalo_id },
    { label: "Felhasználónév", value: user.felhasznalo_nev },
    { label: "Email", value: user.email },
    { label: "Regisztráció dátuma", value: formatDateDot(user.regisztracio_datum) },
    { label: "Felhasználói státusz", value: user.felhasznalostatusz },
    { label: "Utolsó bejelentkezés", value: formatDateDot(user.utoljara_belepve) },
    { label: "Jog", value: user.jog },
  ];

  return (
    <motion.div className="justify-center p-8 rounded-lg shadow-lg space-y-6">
      <h2 className="text-3xl font-bold mb-6">Profil Információk</h2>

      <motion.div
        className="grid grid-cols-2 gap-6 justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {infoItems.map(({ label, value }) => (
          <div key={label} className="flex flex-col justify-center">
            <span className="text-sm font-medium text-gray-400">{label}</span>
            <span className="text-xl font-semibold">{value}</span>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
