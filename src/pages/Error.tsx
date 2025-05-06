import './Error.css';

export default function Error() {
  return (
    <div className="Error-container">
      <section className="error-section">
        <div className="error-content">
          <h1 className="error-title">404</h1>
          <p className="error-message">Что-то пошло не так, страница не найдена...</p>
          <p className="error-promo">
            Если ты попал сюда, когда искал акцию, не беда! Назови промокод <strong>404</strong> администратору при
            регистрации и получи <strong>200₽</strong> на баланс!
          </p>
        </div>

        <div className="booking-form">
          <h2 className="form-title"></h2>
          <form>
            <label htmlFor="name">Имя</label>
            <input type="text" id="name" placeholder="Введите ваше имя" />

            <label htmlFor="date">Дата</label>
            <input type="date" id="date" />

            <label htmlFor="time">Время</label>
            <input type="time" id="time" />

            <label htmlFor="guests">Количество гостей</label>
            <input type="number" id="guests" placeholder="2" />

            <label htmlFor="phone">Номер телефона</label>
            <input type="tel" id="phone" placeholder="Ваш номер телефона" />

            <label htmlFor="wishes">Ваши пожелания</label>
            <textarea id="wishes" placeholder="Ваши пожелания"></textarea>

            <button type="submit" className="btn">Отправить жалобу! </button>
          </form>
        </div>
      </section>
    </div>
  );
}
