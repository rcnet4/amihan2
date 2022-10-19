import React from "react";
import { Button } from "reactstrap";
import useAuth from "hooks/useAuth";

const LogoutNavButton = () => {
  const { logout } = useAuth();

  const handleLogoutClick = () => logout();

  return (
    <section>
      <Button className="btn btn-primary" onClick={handleLogoutClick}>
        Logout
      </Button>
    </section>
  );
};

export default LogoutNavButton;
