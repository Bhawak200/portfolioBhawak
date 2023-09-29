import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => {
        return (
          <li key={index}>
            <NavLink title={link.title} href={link.path} />;
          </li>
        );
      })}
    </ul>
  );
};

export default MenuOverlay;
