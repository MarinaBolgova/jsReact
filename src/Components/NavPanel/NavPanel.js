import './NavPanel.css';

function NavPanel() {
    return (
        <div className="nav">
            <div className='Logo_box'>
                <img src="https://image.shutterstock.com/image-vector/engraving-badge-launch-rocket-vector-600w-1922257916.jpg" alt="LOGO"/>
            </div>
            <div className='Nav_box'>
             <a href=""> Состояние станции </a>
             <a href="">  </a>
             <a href=""> Контакты </a>
             <a href=""> Магазин </a>
            </div>
            <div className='Login_box'>
                <button className="button-9" role="button">Войти в сеть</button>
            </div>
        </div>

);

}

export default NavPanel;


