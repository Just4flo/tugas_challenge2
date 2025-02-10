"use client"; // Agar bisa menggunakan useState atau event handler

import React, { useEffect, useState } from "react";

export default function StudentTable() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize(); // Cek ukuran awal hanya saat komponen pertama kali dirender
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const students = [
    { no: 1, nim: "220101001", nama: "Yudha", gender: "L", prodi: "Sistem Informasi", kelas: "IF-1", semester: "4", alamat: "Garut", hobby: "Coding", citaCita: "Data Science" },
    { no: 2, nim: "220101002", nama: "Siti", gender: "P", prodi: "Sistem Informasi", kelas: "SI-2", semester: "4", alamat: "Bandung", hobby: "Design UI/UX", citaCita: "UI/UX Designer" },
    { no: 3, nim: "220101003", nama: "Purnama", gender: "L", prodi: "Teknik Elektro", kelas: "TE-1", semester: "8", alamat: "Surabaya", hobby: "Robotics", citaCita: "IoT Engineer" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Daftar Mahasiswa</h1>

      {/* UI DESKTOP */}
      {!isMobile && (
        <div className="w-full max-w-4xl overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="py-2 px-3 text-left">No</th>
                <th className="py-2 px-3 text-left">NIM</th>
                <th className="py-2 px-3 text-left">Nama</th>
                <th className="py-2 px-3 text-left">Gender</th>
                <th className="py-2 px-3 text-left">Prodi</th>
                <th className="py-2 px-3 text-left">Kelas</th>
                <th className="py-2 px-3 text-left">Semester</th>
                <th className="py-2 px-3 text-left">Alamat</th>
                <th className="py-2 px-3 text-left">Hobby</th>
                <th className="py-2 px-3 text-left">Cita-cita</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {students.map((student, index) => (
                <tr key={index} className="border-b hover:bg-gray-100">
                  <td className="py-2 px-3">{student.no}</td>
                  <td className="py-2 px-3">{student.nim}</td>
                  <td className="py-2 px-3">{student.nama}</td>
                  <td className="py-2 px-3">{student.gender}</td>
                  <td className="py-2 px-3">{student.prodi}</td>
                  <td className="py-2 px-3">{student.kelas}</td>
                  <td className="py-2 px-3">{student.semester}</td>
                  <td className="py-2 px-3">{student.alamat}</td>
                  <td className="py-2 px-3">{student.hobby}</td>
                  <td className="py-2 px-3">{student.citaCita}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* UI MOBILE */}
      {isMobile && (
        <div className="w-full max-w-xs space-y-4">
          {students.map((student, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4">
              <div className="grid grid-cols-2 gap-2 text-gray-700">
                <p className="font-bold">No:</p> <p>{student.no}</p>
                <p className="font-bold">NIM:</p> <p>{student.nim}</p>
                <p className="font-bold">Nama:</p> <p>{student.nama}</p>
                <p className="font-bold">Gender:</p> <p>{student.gender}</p>
                <p className="font-bold">Prodi:</p> <p>{student.prodi}</p>
                <p className="font-bold">Kelas:</p> <p>{student.kelas}</p>
                <p className="font-bold">Semester:</p> <p>{student.semester}</p>
                <p className="font-bold">Alamat:</p> <p>{student.alamat}</p>
                <p className="font-bold">Hobby:</p> <p>{student.hobby}</p>
                <p className="font-bold">Cita-cita:</p> <p>{student.citaCita}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
