import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import { IndexLinkContainer, LinkContainer } from "react-router-bootstrap";


export default function NavigationView(props) {

    let items = [];
    let topMenus = props.menus;

    if (topMenus != null) {
      for (let m = 0; m < topMenus.length; m++) {
        if (topMenus[m].values[0].rendered) {
          let children = [];
          if (topMenus[m].code === "SUBMENU" && topMenus[m].children != null) {
            let childList = topMenus[m].children;
            for (let c = 0; c < childList.length; c++) {
              if (childList[c].values[0].rendered) {
                children.push(
                  <LinkContainer key={"submenu-"+childList[c].menuId} to={childList[c].values[0].href}>
                   <MenuItem >{childList[c].values[0].value}</MenuItem>
                  </LinkContainer>
                );
              }
            }
          }
          if (children.length > 0) {
            items.push(
              <NavDropdown key={topMenus[m].menuId} title={topMenus[m].values[0].value} id={topMenus[m].code} >
                {children}
              </NavDropdown>
            );
          } else {
            items.push(
              <LinkContainer key={topMenus[m].menuId} to={topMenus[m].values[0].href}>
                 <NavItem>
                  {topMenus[m].values[0].value}
                 </NavItem>
              </LinkContainer>
            );
          }
        }
      }
    }
    return (
      <Navbar inverse collapseOnSelect fixedTop >
        <Navbar.Header className="page-scroll">
          <Navbar.Brand className="page-scroll">
            <a href="#page-top" className="desktop-only">{props.appPrefs.headerName}</a>
          </Navbar.Brand>
          <Navbar.Toggle>
            <span className="sr-only">Toggle navigation</span> Menu{" "}
            <i className="fa fa-bars" />
          </Navbar.Toggle>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>{items}</Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}


  NavigationView.propTypes = {
    appPrefs: PropTypes.object,
    menus: PropTypes.array,
    activeTab: PropTypes.string,
    changeTab: PropTypes.func
  };
