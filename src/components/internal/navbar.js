import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const NavigationInternal = () => {
  return (
    <div className='navInternal'style={{ display: 'flex', height: '100vh', overflow: 'scroll initial', backgroundColor: '#0f0f0f'}}>
      <CDBSidebar toggled textColor='#fff'>
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: 'inherit' }}
          >
            Thera.Py
          </a>
        </CDBSidebarHeader>
        <CDBSidebarContent>
          <CDBSidebarMenu className="text-decoration-none sidebar-content d-flex flex-column align-content-center" style={{backgroundColor: '#0f0f0f'}}>
            <NavLink exact to="/dashboard" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">
                Logout
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
  );
};

export default NavigationInternal