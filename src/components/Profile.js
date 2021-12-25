import React from "react";

export default function Profile() {
  return (
    <div>
      <div className="d-flex align-items-center">
        <a
          className="dropdown-toggle d-flex align-items-center hidden-arrow"
          href="/"
          role="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            className="rounded-circle"
            height="45"
            alt="Black and White Portrait of a Man"
            loading="lazy"
          />
        </a>
        <ul
          className="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuLink"
        >
          <li>
            <a className="dropdown-item" href="/">
              My profile
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/">
              Settings
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/">
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
