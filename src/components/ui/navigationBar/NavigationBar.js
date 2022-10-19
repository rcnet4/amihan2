import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const NavigationBar = ({
  menus,
  companyLink,
  brandLogo,
  navBarBrandText,
  brandLogoAlternateText,
  fixed,
  navBarRightPane,
  showBrand,
  menuAlignment,
  containerCss,
  contentStyle,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const menuAlignmentClass = menuAlignment === "start" ? "me-auto" : "ms-auto";

  const renderMenu = (menu, i) => {
    if (!menu.type) {
      return (
        <NavItem key={i}>
          <NavLink
            to={menu.url}
            className={({ isActive }) =>
              isActive ? "nav-link navbar-active" : "nav-link"
            }
          >
            {menu.label}
          </NavLink>
        </NavItem>
      );
    }

    return (
      <UncontrolledDropdown key={i} nav inNavbar>
        <DropdownToggle nav caret>
          {menu.label}
        </DropdownToggle>
        <DropdownMenu end>
          {menu.subMenus.map((o, indx) => (
            <div key={indx}>
              {o.type === "divider" ? (
                <DropdownItem divider />
              ) : (
                <DropdownItem tag="a" href={o.url}>
                  {o.label}
                </DropdownItem>
              )}
            </div>
          ))}
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  };

  return (
    <div className="rca-nav-bar">
      <Navbar
        dark
        expand="lg"
        className="navbar-bg-color"
        container="fluid"
        fixed={fixed}
      >
        {showBrand && (
          <>
            {navBarBrandText ? (
              <div className="navbar-brand-text-container me-4">
                <NavbarBrand href={companyLink} target="_blank">
                  {navBarBrandText}
                </NavbarBrand>
              </div>
            ) : (
              <NavbarBrand href={companyLink} target="_blank">
                <img
                  src={brandLogo}
                  alt={brandLogoAlternateText}
                  className="navbar-brand-logo"
                />
              </NavbarBrand>
            )}
          </>
        )}
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className={`${menuAlignmentClass}`} navbar>
            {menus.map((o, i) => renderMenu(o, i))}
          </Nav>
          {navBarRightPane && <NavbarText>{navBarRightPane}</NavbarText>}
        </Collapse>
      </Navbar>
    </div>
  );
};

NavigationBar.propTypes = {
  menus: PropTypes.array,
  companyLink: PropTypes.string,
  navBarBrandText: PropTypes.string,
  brandLogo: PropTypes.string,
  brandLogoAlternateText: PropTypes.string,
  showBrand: PropTypes.bool,
  navBarRightPane: PropTypes.object,
  fixed: PropTypes.string,
  menuAlignment: PropTypes.string,
  containerCss: PropTypes.string,
  contentStyle: PropTypes.object,
};

NavigationBar.defaultProps = {
  menus: [],
  companyLink: "",
  brandLogo: "",
  brandLogoAlternateText: "",
  showBrand: true,
  menuAlignment: "start",
  fixed: "top",
};

export default NavigationBar;
