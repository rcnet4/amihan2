import React from "react";
import { Outlet } from "react-router-dom";
import navBarMenus from "data/navbarMenus";
import NavigationBar from "components/ui/navigationBar/NavigationBar";
import LogoutNavButton from "components/features/logoutNavButton/LogoutNavButton";
import Footer from "components/ui/footer/Footer";
import "./layout.scss";

const FullLayout = () => {
  return (
    <>
      <div className="full-layout-wrapper">
        <NavigationBar
          companyLink="https://rcnetlabs.com"
          navBarBrandText="BLOCKS"
          menuAlignment="start"
          //brandLogo="/images/logo/logo.png"
          //brandLogoAlternateText="d'BLOCK"
          menus={navBarMenus.menus}
          navBarRightPane={<LogoutNavButton />}
        />
        <section className="content-wrapper">
          <section className="route-section">
            <main role="main">
              <Outlet />
            </main>
          </section>
        </section>
        <Footer>
          <div className="mx-4">
            Ryan Cristobal{"  "}
            <a
              href="https://rcnetlabs.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              Rcnet
            </a>
          </div>
        </Footer>
      </div>
    </>
  );
};

export default FullLayout;
