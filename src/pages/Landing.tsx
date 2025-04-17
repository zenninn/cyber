import './Landing.css';

export default function Landing() {
  return (
    <div className="landing-container">
      
      <header className="header">
        <div className="container">
          <h1>РАЗНЫЕ ЗОНЫ С РАЗНЫМИ УСЛОВИЯМИ</h1>
          <div className="header-top">
            <div className="background-images">
              <div className="item">
                <p>Игровой ПК и ПЕРИФЕРИЯ</p>
                <p>СТАНДАРТ</p>
                <img src="./src/assets/1room.png" alt="bg" />
                <p>Общая зона</p>
                <a href="#" className="btn">Подробнее →</a>
              </div>
              <div className="item">
                <p>360GhZ Монитор/4090RTX</p>
                <p>VIP ROOM</p>
                <img src="./src/assets/2room.png" alt="bg" />
                <p>Кресла Dxracer</p>
                <a href="#" className="btn">Подробнее →</a>
              </div>
              <div className="item">
                <p>Подписка PS+ и два геймпада</p>
                <p>ПРИСТАВКА</p>
                <img src="./src/assets/3room.png" alt="bg" />
                <p>Диван+PS5</p>
                <a href="#" className="btn">Подробнее →</a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
