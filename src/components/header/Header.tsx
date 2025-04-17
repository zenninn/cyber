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
          <div className="flex items-center gap-4 transition-all duration-300 cursor-pointer hover:scale-90">
            <img src={logo} alt="Logo" className="w-20 h-20" />
            <h1 className="italic font-black text-white text-[clamp(14px,2vw,50px)]">
              КИБЕРТЕКА{" "}
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
                    className={`flex items-center gap-2 text-white text-[clamp(12px,2vw,30px)] ${
                      location.pathname === item.path
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
         <div className="pt-[150px] text-center">
          <ul>
            <li className="text-white text-[clamp(15px,2vw,34px)] font-light pb-2">
              Профсоюзная улица 22/10к1
            </li>
            <li className="text-white text-[clamp(15px,2vw,34px)] font-light pb-2">
              Работаем круглосуточно!
            </li>
            <li className="text-white text-[clamp(15px,2vw,34px)] font-light pb-2">
              8 977 320 88 88
            </li>
          </ul>
          <button className="block mx-auto bg-white text-pink-500 font-semibold text-[clamp(14px,2vw,34px)] rounded-lg w-[331px] h-[63px] mt-6 transition hover:bg-pink-100">
            Забронировать
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
