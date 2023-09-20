import React from "react";

function Header() {
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <h1>ImageApp</h1>

            <div>
              <ul>
                <li>
                  <a href="/">Login</a>
                </li>
                <li>
                  <a href="/home">Home</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
