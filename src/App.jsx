import React, { useState } from 'react';

export default function App() {
  const [isLogin, setIsLogin] = useState(true);

  const loginImage = "https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?q=80&w=2070&auto=format&fit=crop";
  const registerImage = "https://wallpapers.com/images/hd/live-rock-concert-guitarists-jdbl8tjsiqqveuv9.jpg=crop";

  return (
    <div className="min-h-screen flex items-center justify-center p-4 font-sans selection:bg-red-500 relative bg-[#09090b]">
      
      {/* 1. BACKGROUND IMAGE UNTUK MOBILE (Full Screen) */}
      <div className="absolute inset-0 z-0 md:hidden">
        <img 
          src={isLogin ? loginImage : registerImage} 
          className="w-full h-full object-cover transition-all duration-1000"
          alt="mobile-bg"
        />
        {/* Overlay hitam transparan biar form tetap kebaca */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
      </div>

      {/* 2. CONTAINER UTAMA */}
      {/* Di HP kita pakai bg-transparent / bg-zinc-900/60 agar tembus ke gambar belakang */}
      <div className="z-10 flex flex-col md:flex-row bg-zinc-900/80 md:bg-[#121214] rounded-[2rem] shadow-2xl overflow-hidden max-w-5xl w-full border border-white/10 backdrop-blur-md md:backdrop-blur-none">
        
        {/* SISI KIRI: Visual (Desktop Only) */}
        <div className="md:w-1/2 relative hidden md:block overflow-hidden border-r border-white/5">
          <img 
            key={isLogin ? 'login' : 'reg'} 
            src={isLogin ? loginImage : registerImage} 
            className="h-full w-full object-cover animate-in fade-in duration-700"
            alt="desktop-visual"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent"></div>
          <div className="absolute bottom-12 left-10">
            <h1 className="text-4xl font-black text-white italic uppercase">
              Chord<span className="text-red-600">Galaxy</span>
            </h1>
          </div>
        </div>

        {/* SISI KANAN: Form Content */}
        <div className="md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
          
          {/* Logo khusus HP agar user tahu nama websitenya */}
          <div className="md:hidden text-center mb-6">
             <h1 className="text-3xl font-black text-white italic uppercase tracking-tighter">
              Chord<span className="text-red-600">Galaxy</span>
            </h1>
          </div>

          {isLogin ? (
            /* --- FORM LOGIN --- */
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-3xl font-bold text-white mb-2">Masuk</h2>
              <p className="text-zinc-400 text-sm mb-8">Siap untuk beraksi lagi di panggung?</p>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Email" className="w-full bg-white/10 border border-white/10 text-white px-4 py-3 rounded-xl focus:ring-2 focus:ring-red-600 outline-none transition-all" />
                <input type="password" placeholder="Password" className="w-full bg-white/10 border border-white/10 text-white px-4 py-3 rounded-xl focus:ring-2 focus:ring-red-600 outline-none transition-all" />
                
                <div className="flex items-center justify-between text-xs text-zinc-400">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="accent-red-600 h-4 w-4" /> Ingat saya
                  </label>
                  <a href="#" className="hover:text-red-500 transition">Lupa?</a>
                </div>

                <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-red-900/40 transition-all mt-4">
                  Sign In
                </button>
              </form>

              <p className="text-center text-zinc-400 text-sm mt-8">
                Belum punya akun? {" "}
                <button onClick={() => setIsLogin(false)} className="text-red-500 font-bold hover:underline">Daftar</button>
              </p>
            </div>
          ) : (
            /* --- FORM DAFTAR --- */
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-3xl font-bold text-white mb-2">Daftar</h2>
              <p className="text-zinc-400 text-sm mb-8">Mulai perjalanan musikmu sekarang.</p>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Nama Lengkap" className="w-full bg-white/10 border border-white/10 text-white px-4 py-3 rounded-xl focus:ring-2 focus:ring-red-600 outline-none" />
                <input type="email" placeholder="Email" className="w-full bg-white/10 border border-white/10 text-white px-4 py-3 rounded-xl focus:ring-2 focus:ring-red-600 outline-none" />
                <input type="password" placeholder="Password" className="w-full bg-white/10 border border-white/10 text-white px-4 py-3 rounded-xl focus:ring-2 focus:ring-red-600 outline-none" />
                <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-red-900/40 transition-all mt-4">
                  Buat Akun
                </button>
              </form>

              <p className="text-center text-zinc-400 text-sm mt-8">
                Sudah punya akun? {" "}
                <button onClick={() => setIsLogin(true)} className="text-red-500 font-bold hover:underline">Login</button>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}