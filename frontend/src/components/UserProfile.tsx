import { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  UserIcon,
  ShieldCheckIcon,
  ShoppingBagIcon,
  UserGroupIcon,
  TicketIcon,
  StarIcon,
  CogIcon,
  BellIcon,
  QuestionMarkCircleIcon,
  ArrowRightEndOnRectangleIcon,
  XMarkIcon,
  ChevronDoubleRightIcon,
} from '@heroicons/react/20/solid'
import Profileinformation from './Userprofile/Profileinformation'
import UserService from '../services/userServices'

interface UserProfileProps {
  onAvatarUpdate: (newAvatar: string) => void
  setAvatarRefreshTrigger: React.Dispatch<React.SetStateAction<number>>
  avatarRefreshTrigger: number
  onLogout: () => void
}

export default function UserProfile({
  onAvatarUpdate,
  setAvatarRefreshTrigger,
  avatarRefreshTrigger,
  onLogout,
}: UserProfileProps) {
  const navigate = useNavigate()
  const [user, setUser] = useState<any | null>(null)
  const [loading, setLoading] = useState(true)
  const [selectedMenu, setSelectedMenu] = useState('Fiók adatok')
  const [isNavOpen, setIsNavOpen] = useState(true)
  const [editing, setEditing] = useState(false)
  const [preview, setPreview] = useState<string | null>(null)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [showConfirmModal, setShowConfirmModal] = useState(false)
  const [uploadSuccess, setUploadSuccess] = useState(false)
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    } else {
      navigate('/bejelentkezes')
    }
    setLoading(false)
  }, [navigate])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    setSelectedFile(file)
    const reader = new FileReader()
    reader.onloadend = () => {
      setPreview(reader.result as string)
      setShowConfirmModal(true)
      setUploadSuccess(false)
    }
    reader.readAsDataURL(file)
  }

  const uploadProfilePicture = async () => {
    if (!selectedFile) return
    try {
      const data = await UserService.uploadAvatar(selectedFile)
      if (data.success) {
        const updatedUser = { ...user, avatar: data.filename }
        setUser(updatedUser)
        localStorage.setItem('user', JSON.stringify(updatedUser))
        setUploadSuccess(true)
        setTimeout(() => {
          setPreview(null)
          setSelectedFile(null)
          setShowConfirmModal(false)
          setUploadSuccess(false)
          setEditing(false)
          setAvatarRefreshTrigger(Date.now())
          onAvatarUpdate(data.filename)
        }, 3000)
      }
    } catch (error) {
      console.error('Hiba a feltöltés során:', error)
      alert('Hiba történt a feltöltés során. Próbáld újra.')
    }
  }

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-white text-xl animate-pulse">Betöltés...</p>
      </div>
    )
  }

  const formatDateDot = (dateStr: string) => {
    if (!dateStr) return ''
    return dateStr.replace(/-/g, '.')
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex min-h-screen text-white"
    >
      {isNavOpen && (
        <motion.aside
          className="w-1/4 p-6 flex flex-col items-center border-r relative"
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 60 }}
        >
          <button
            className="absolute top-2 right-2 text-white z-10"
            onClick={toggleNav}
            aria-label="Navigáció bezárása"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>

          <motion.div
            className="relative h-64 w-64 rounded-full overflow-hidden border-4 border-[#E30419] cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onClick={() => fileInputRef.current?.click()}
          >
            <motion.img
              src={
                preview ??
                `http://localhost:8080/profilepictures/${user.avatar}?t=${Date.now()}`
              }
              alt="Avatar"
              className="object-cover h-full w-full"
              animate={{ filter: editing ? 'blur(4px)' : 'blur(0px)' }}
              transition={{ duration: 0.3 }}
            />

            <motion.div
              initial={false}
              animate={{ opacity: editing ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white font-semibold text-center text-sm pointer-events-none"
            >
              Profilkép szerkesztése
            </motion.div>
          </motion.div>

          <input
            type="file"
            accept="image/*"
            className="hidden"
            ref={fileInputRef}
            onChange={handleFileChange}
          />

          <p className="text-xl font-semibold mt-6">
            {user?.felhasznalo_nev ?? 'N/A'}
          </p>
          <p className="text-xs text-gray-400">
            {formatDateDot(user.regisztracio_datum)}
          </p>
          <p className="text-sm text-gray-400">{user?.jog ?? 'N/A'}</p>
          <p className="text-sm text-gray-400">{user?.email ?? 'N/A'}</p>

          <nav className="w-full mb-6 space-y-2 mt-2">
            {[
              'Fiók adatok',
              'VIP tagság',
              'Vásárlások',
              'Barátok',
              'Címek kezelése',
              'Kedvencek',
              'Beállítások',
              'Értesítések',
              'Biztonság',
              'Segítség',
            ].map((menu) => (
              <motion.button
                key={menu}
                onClick={() => setSelectedMenu(menu)}
                className={`w-full px-4 py-2 flex items-center space-x-2 rounded-lg text-white transition duration-300 ${
                  selectedMenu === menu ? 'bg-[#2c2c2c]' : 'hover:bg-[#b20000]'
                }`}
                whileTap={{ scale: 0.98 }}
                aria-current={selectedMenu === menu ? 'page' : undefined}
              >
                {menu === 'Fiók adatok' && <UserIcon className="h-5 w-5" />}
                {menu === 'VIP tagság' && <ShieldCheckIcon className="h-5 w-5" />}
                {menu === 'Vásárlások' && <ShoppingBagIcon className="h-5 w-5" />}
                {menu === 'Barátok' && <UserGroupIcon className="h-5 w-5" />}
                {menu === 'Címek kezelése' && <TicketIcon className="h-5 w-5" />}
                {menu === 'Kedvencek' && <StarIcon className="h-5 w-5" />}
                {menu === 'Beállítások' && <CogIcon className="h-5 w-5" />}
                {menu === 'Értesítések' && <BellIcon className="h-5 w-5" />}
                {menu === 'Biztonság' && <ShieldCheckIcon className="h-5 w-5" />}
                {menu === 'Segítség' && (
                  <QuestionMarkCircleIcon className="h-5 w-5" />
                )}
                <span>{menu}</span>
              </motion.button>
            ))}
          </nav>

          <motion.button
            onClick={onLogout}
            className="w-full px-4 py-2 bg-[#E30419] rounded-lg text-white hover:bg-red-700 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowRightEndOnRectangleIcon className="h-6 w-6 inline-block mr-2" />{' '}
            Kijelentkezés
          </motion.button>
        </motion.aside>
      )}

      {!isNavOpen && (
        <button
          className="fixed bottom-2 left-2 bg-[#E30419] text-white p-4 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 ease-in-out z-10"
          onClick={toggleNav}
          aria-label="Navigáció megnyitása"
        >
          <ChevronDoubleRightIcon className="h-6 w-6" />
        </button>
      )}

      <motion.div
        className={`w-full p-8 mb-32`}
        style={{ marginLeft: isNavOpen ? '25%' : '0' }}
      >
        {selectedMenu === 'Fiók adatok' && <Profileinformation user={user} />}
      </motion.div>

      {showConfirmModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-[#1f1f1f] rounded-lg p-8 max-w-md w-full text-white shadow-lg">
            <h2 className="text-xl font-semibold mb-6 text-center">
              Profilkép feltöltése
            </h2>
            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="mx-auto mb-6 rounded-full w-40 h-40 object-cover border-4 border-[#E30419]"
              />
            )}
            {!uploadSuccess ? (
              <div className="flex justify-between space-x-4">
                <button
                  onClick={() => {
                    setShowConfirmModal(false)
                    setPreview(null)
                    setSelectedFile(null)
                  }}
                  className="w-1/2 py-2 bg-gray-600 rounded-lg hover:bg-gray-700 transition"
                >
                  Mégse
                </button>
                <button
                  onClick={uploadProfilePicture}
                  className="w-1/2 py-2 bg-[#E30419] rounded-lg hover:bg-red-700 transition"
                >
                  Feltöltés
                </button>
              </div>
            ) : (
              <p className="text-center text-green-400 font-semibold">
                Feltöltés sikeres!
              </p>
            )}
          </div>
        </div>
      )}
    </motion.div>
  )
}
