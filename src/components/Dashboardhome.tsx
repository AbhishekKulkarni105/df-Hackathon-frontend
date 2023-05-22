import React from 'react';
import {  UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme , Avatar, Dropdown, Image} from 'antd';

const { Header, Content, Sider ,Footer } = Layout;
import logo from "../assests/image 289.png";

  

const Dashboardhome: React.FC = () => {
 
  return (
  <>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              // background: colorBgContainer,
            }}
          >
               <img src={logo} />
               <div>
            Welcome to Digitalflake Admin
            </div>
          </Content>
          </>
       
  );
};

export default Dashboardhome;