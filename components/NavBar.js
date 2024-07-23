'use client';
// components/NavBar.js
import { useState, useEffect, useRef } from "react";
import { BellIcon, UserCircleIcon } from "@heroicons/react/24/outline";

const NavBar = () => {
  const [isProfilePopupOpen, setIsProfilePopupOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isEditMode, setIsEditMode] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "123-456-7890",
    dob: "1990-01-01",
  });

  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsProfilePopupOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  const handleEditToggle = () => {
    setIsEditMode(!isEditMode);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = () => {
    // Add your save logic here
    setIsEditMode(false);
  };

  const handleUserIconClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-white  shadow-md p-4 flex justify-between items-center w-full h-fit">
      <div className="text-black font-bold">REDMATH</div>
      <div className="flex items-center">
        <BellIcon className="text-black h-6 w-6 mr-4" />
        <div className="relative">
          <div className="text-black" onClick={handleUserIconClick}>
            <UserCircleIcon className="h-8 w-8 cursor-pointer" />
          </div>
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white  shadow-lg rounded-md py-1 z-10">
              <button
                className="block hover:bg-slate-400 shadow-custom w-full text-left px-4 py-2 text-sm text-gray-700"
                onClick={() => { setIsProfilePopupOpen(true); setIsMenuOpen(false) }}
              >
                My Profile
              </button>
              <button className="block w-full shadow-custom hover:bg-slate-400 text-left px-4 py-2 text-sm text-gray-700">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
      {isProfilePopupOpen && (
        <div className="fixed inset-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 z-20">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl mb-4">Profile</h2>
            <div className="space-y-4">
              {isEditMode ? (
                <>
                  <div>
                    <label className="block text-gray-700">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={profileData.name}
                      onChange={handleInputChange}
                      className="w-full mt-1 p-2 border border-gray-300 rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={profileData.email}
                      onChange={handleInputChange}
                      className="w-full mt-1 p-2 border border-gray-300 rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700">Phone</label>
                    <input
                      type="text"
                      name="phone"
                      value={profileData.phone}
                      onChange={handleInputChange}
                      className="w-full mt-1 p-2 border border-gray-300 rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700">Date of Birth</label>
                    <input
                      type="date"
                      name="dob"
                      value={profileData.dob}
                      onChange={handleInputChange}
                      className="w-full mt-1 p-2 border border-gray-300 rounded"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <strong>Name:</strong> {profileData.name}
                  </div>
                  <div>
                    <strong>Email:</strong> {profileData.email}
                  </div>
                  <div>
                    <strong>Phone:</strong> {profileData.phone}
                  </div>
                  <div>
                    <strong>Date of Birth:</strong> {profileData.dob}
                  </div>
                </>
              )}
            </div>
            <div className="mt-4 flex justify-end space-x-2">
              {isEditMode ? (
                <button
                  onClick={handleSave}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={handleEditToggle}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Edit
                </button>
              )}
              <button
                onClick={() => { setIsProfilePopupOpen(false); setIsEditMode(false); setIsMenuOpen(false) }}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
