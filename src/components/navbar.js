import React from "react";
import "../styles/nav.css";
function Navbar() {

  const darkLight = () =>{
    const d = document.getElementsByClassName('dark-light')[0]
    const path = document.getElementById('path-ref')
    const temp = document.getElementsByClassName('rotate-left')
    if(document.getElementsByClassName('rotate-left').length>0){
      temp[0].classList.remove("rotate-left")
      d.classList.add('rotate-right')
      path.style.fill = "#C5C6C8"
      path.style.stroke = '#C5C6C8'
    }
    else if(document.getElementsByClassName('rotate-right').length>0){
      document.getElementsByClassName('rotate-right')[0].classList.remove('rotate-right')
      d.classList.add('rotate-left')
      path.style.fill = "#202833"
      path.style.stroke = '#202833'
    }
    else{
      d.classList.add('rotate-left')
      path.style.fill = "#202833"
      path.style.stroke = '#202833'

    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <svg
          width="54"
          height="93"
          viewBox="0 0 54 93"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M49.7695 49.7667C49.7695 57.5024 47.6219 63.4218 43.3266 67.5247C39.0314 71.6063 32.8449 73.6471 24.7672 73.6471H11.657V26.7838H26.1456C33.6035 26.7838 39.4053 28.7925 43.551 32.81C47.6967 36.8274 49.7695 42.4797 49.7695 49.7667ZM41.6919 50.0231C41.6919 38.8041 36.4457 33.1946 25.9532 33.1946H19.318V67.2042H24.7672C36.0503 67.2042 41.6919 61.4771 41.6919 50.0231Z"
            fill="#66FCF1"
          />
          <path
            d="M44.2989 46.1196C44.2989 53.8554 42.1513 59.7747 37.856 63.8776C33.5608 67.9592 27.3743 70 19.2966 70H6.18647V23.1367H20.675C28.1329 23.1367 33.9347 25.1454 38.0804 29.1629C42.2261 33.1804 44.2989 38.8326 44.2989 46.1196ZM36.2213 46.376C36.2213 35.1571 30.9751 29.5476 20.4827 29.5476H13.8474V63.5571H19.2966C30.5797 63.5571 36.2213 57.8301 36.2213 46.376Z"
            fill="#46A29F"
          />
        </svg>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span className="nos">01.</span>
              <span className="link-name">Projects</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span className="nos">02.</span>
              <span className="link-name">About</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span className="nos">03.</span>
              <span className="link-name">Experience</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span className="nos">04.</span>
              <span className="link-name">Contact</span>
            </a>
          </li>
          <div className="dark-light-toggle" onClick={darkLight}>
            <svg
            className="dark-light"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Group 4">
                <circle
                  id="Ellipse 1"
                  cx="15"
                  cy="15"
                  r="14.5"
                  stroke="#C5C6C8"
                />
                <g id="Ellipse 2">
                  <mask id="path-2-inside-1_203_47" fill="white">
                    <path d="M15 27C16.5759 27 18.1363 26.6896 19.5922 26.0866C21.0481 25.4835 22.371 24.5996 23.4853 23.4853C24.5996 22.371 25.4835 21.0481 26.0866 19.5922C26.6896 18.1363 27 16.5759 27 15C27 13.4241 26.6896 11.8637 26.0866 10.4078C25.4835 8.95189 24.5996 7.62902 23.4853 6.51472C22.371 5.40041 21.0481 4.5165 19.5922 3.91344C18.1363 3.31039 16.5759 3 15 3L15 15L15 27Z" />
                  </mask>
                  <path id="path-ref"
                    d="M15 27C16.5759 27 18.1363 26.6896 19.5922 26.0866C21.0481 25.4835 22.371 24.5996 23.4853 23.4853C24.5996 22.371 25.4835 21.0481 26.0866 19.5922C26.6896 18.1363 27 16.5759 27 15C27 13.4241 26.6896 11.8637 26.0866 10.4078C25.4835 8.95189 24.5996 7.62902 23.4853 6.51472C22.371 5.40041 21.0481 4.5165 19.5922 3.91344C18.1363 3.31039 16.5759 3 15 3L15 15L15 27Z"
                    fill="#C5C6C8"
                    stroke="#C5C6C8"
                    strokeWidth="2"
                    mask="url(#path-2-inside-1_203_47)"
                  />
                </g>
              </g>
            </svg>
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
