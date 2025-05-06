import logo from "../../assets/logo.svg";
import { Link, useLocation } from "react-router-dom";
import React from "react";

const nav = [
  { id: 1, path: "/", name: "Главная" },
  { id: 2, path: "/tarif", name: "Тарифы" },
  { id: 3, path: "Бронирование", name: "Бронирование" },
  { id: 4, path: "Контакты", name: "Контакты" },
  { id: 5, path: "Авторизация/Регистрация", name: "Авторизация/Регистрация" },
];

function Header() {
  const location = useLocation();
  return (
    <header className="bg-[url('./src/assets/phone.png')] min-h-screen bg-no-repeat bg-cover">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center min-h-[200px] mb-5">
          <div className="flex items-center gap-4 transition-all duration-300 cursor-pointer hover:scale-90
  mt-[50px] ml-[30px] sm:mt-[60px] sm:ml-[40px] md:mt-[70px] md:ml-[60px] lg:mt-[80px] lg:ml-[70px]">
            <img src={logo} alt="Logo" className="w-20 h-20" />
            <h1 className="italic font-black text-white text-[clamp(14px,2vw,50px)]">
              КИБЕРТЕКА
              <span className="block font-semibold text-[clamp(20px,2vw,30px)]">
                НА ПРОФСОЮЗНОЙ
              </span>
            </h1>
          </div>

          <nav>
            <ul className="flex gap-5">
              {nav.map((item) => (
                <li key={item.id} className="list-none">
                  <Link
                    to={item.path}
                    className={`flex items-center gap-2 text-white text-[clamp(12px,2vw,30px)] ${location.pathname === item.path
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
                      } transition-all`}
                  >
                    ‣ {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Блок с адресом и кнопкой */}
        <div className="pt-[80px] text-left max-w-md ml-24">
          <ul className="space-y-2">
            <li className="text-white text-[clamp(15px,2vw,24px)] font-light flex items-center gap-2">
              <span>▶</span> Профсоюзная улица 22/10к1
            </li>
            <li className="text-white text-[clamp(15px,2vw,24px)] font-light flex items-center gap-2">
              <span>▶</span> Работаем круглосуточно!
            </li>
            <li className="text-white text-[clamp(15px,2vw,24px)] font-light flex items-center gap-2">
              <span>▶</span> 8 977 320 88 88
            </li>
          </ul>

          <button className="bg-white text-pink-600 font-semibold text-[clamp(14px,2vw,20px)] rounded-lg w-[250px] h-[50px] mt-6 transition hover:bg-pink-100 shadow-md">
            Забронировать!
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
