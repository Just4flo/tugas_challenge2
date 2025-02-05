import React from "react";
import { FaUser, FaTools, FaBriefcase, FaEnvelope } from "react-icons/fa";

const sections = [
  { id: "about", title: "About Me", icon: <FaUser className="text-black" />, content: "Saya adalah mahasiswa semester 4 di universitas masoem" },
  { id: "skills", title: "Skills", icon: <FaTools className="text-black" />, content: "JavaScript, HTML, php, css" },
  { id: "services", title: "Services", icon: <FaBriefcase className="text-black" />, content: "bisa memperbaiki kode error dengan bantuan AI" },
  { id: "portfolio", title: "Portfolio", icon: <FaBriefcase className="text-black" />, content: "Proyek yang telah saya kerjakan adalah membuat website jual beli komputer, aplikasi pencatatan nilai" },
  { id: "contact", title: "Contact", icon: <FaEnvelope className="text-black" />, content: "Email: yp0363@gmail.com | WhatsApp: 08123456789" },
];

export default function CVPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mb-4 text-black">CV Online</h1>
      <div className="w-full max-w-2xl bg-white p-6 rounded-2xl shadow-md space-y-6">
        {/* Gambar profil dengan path yang benar */}
        <img src="/profile.jpg" alt="Profile" className="w-32 h-32 rounded-full mx-auto mb-4 border border-gray-300" />

        {/* Menampilkan setiap bagian */}
        {sections.map((section) => (
          <div key={section.id} id={section.id} className="p-4 border-b">
            <h2 className="text-2xl font-semibold flex items-center gap-2 text-black">
              {section.icon} {section.title}
            </h2>
            <p className="mt-2 text-black">{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
