import React, { useState } from 'react';


const Cabecera = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };

    const renderTabClass = (tabIndex) => {
        if (tabIndex === activeTab) {
            return 'nav-link active';
        } else {
            return 'nav-link';
        }
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Mi Tienda</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav" style={{ marginRight: '3px' }}>
                        <li className="nav-item" style={{ marginRight: '20px' }}>
                            <a className={renderTabClass(0)} aria-current="page" href="#" onMouseEnter={() => handleTabClick(0)}>Quien Soy?</a>
                        </li>
                        <li className="nav-item" style={{ marginRight: '20px' }}>
                            <a className={renderTabClass(1)} href="#" onMouseEnter={() => handleTabClick(1)}>Blog</a>
                        </li>
                        <li className="nav-item" style={{ marginRight: '20px' }}>
                            <a className={renderTabClass(2)} href="#" onMouseEnter={() => handleTabClick(2)}>Programas</a>
                        </li>
                        <li className="nav-item">
                            <a className={renderTabClass(3)} href="#" onMouseEnter={() => handleTabClick(3)}>Tienda</a>
                        </li>
                    </ul>
                </div>
            </div>
            <style>
                {`
          .navbar-brand {
            color: #1abc9c;
            font-size: 2rem;
            font-weight: bold;
          }

          .nav-link {
            color: #444;
            font-size: 1.2rem;
            margin-right: 3px;
          }

          .nav-link:hover {
            color: #1abc9c;
            text-decoration: none;
          }

          .nav-link.active {
            color: #fff;
            background-color: #1abc9c;
            border-radius: 3px;
          }
        `}
            </style>
        </nav>
    );
};

export default Cabecera;
