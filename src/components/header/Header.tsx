import styles from "./Header.module.css"
import logo from "../../assets/logo.svg"
import { Link, useLocation } from "react-router";
const nav = [
    { id: 1, path: "/", name: 'Главная' },
    { id: 2, path: '/tarif', name: 'Тарифы' },
    { id: 3, path: 'Бронирование', name: 'Тарифы' },
    { id: 4, path: 'Контакты', name: 'Контакты' },
    { id: 5, path: 'Авторизация/Регистрация', name: 'Авторнизация/Регистрация' }
]

function Header() {
    const location = useLocation();
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.header_top}>
                    <div className={styles.logo}>
                        <img src={logo} alt="" />
                        <h1>КИБЕРТЕКА <span>НА ПРОФСОЮЗНОЙ</span></h1>
                    </div>
                    <nav>
                        <ul className={styles.nav}>
                            {/* <li><a className={styles.active_nav} href="">Главная</a></li>
                            <li><a href="">Тарифы</a></li>
                            <li><a href="">Бронирование</a></li>
                            <li><a href="">Контакты</a></li>
                            <li><a href="">Авторизация/Регистрация</a></li> */}
                            {
                                nav.map((Items) => {
                                    if (location.pathname == Items.path) {
                                        return (<li key={Items.id}><Link to={Items.path} className={styles.active_nav}>{Items.name}</Link></li>)

                                    } else {
                                        return (<li key={Items.id}><Link to={Items.path}>{Items.name}</Link></li>)
                                    }
                                    
                                })
                            }
                        </ul>
                    </nav>
                </div>
                <div className={styles.header_bottom}>
                    <ul>
                        <li>Профсоюзная улица 22/10к1</li>
                        <li>Работаем круглосуточно!</li>
                        <li>8 977 320 88 88
                        </li>
                    </ul>
                    <button>Забронировать</button>
                </div>
            </div>
        </header>
    )
}

export default Header
