import React from "react";
import { NavLink, Outlet } from "react-router-dom";

type Props = {};

export const Index: React.FC<Props> = ({}) => {
  return (
    <>
      <NavLink
        className={(active) => (active ? `active` : "")}
        to="/profile/general"
      >
        General
      </NavLink>
      <NavLink
        className={(active) => (active ? `active` : "")}
        to="/profile/security"
      >
        Security
      </NavLink>

      <Outlet />
    </>
  );
};

Index.defaultProps = {};

export default Index;
