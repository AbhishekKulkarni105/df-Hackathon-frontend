import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme , Avatar, Dropdown, Image,} from 'antd';

const { Header, Content, Sider ,Footer } = Layout;
import logo from "../assests/image 289.png";
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}
const items: MenuItem[] = [
   
    getItem('Home', 'sub1', <UserOutlined />),
    getItem('Category ', 'sub2', <UserOutlined />),
    getItem('Products', '9', <UserOutlined />),
  ];
  

const Dashboardhome: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ display: 'flex', alignItems: 'center' , background: "#662671" }}>
        <div className="demo-logo" >
        <Image
                src={logo}
                height={63}
                width={175}
                preview={false}
              />
        </div>
        {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}} /> */}
        <div
              style={{
                width: '100%',
                position: 'sticky',
                left: '0',
                top: '0',
                right: '0',
                zIndex: '1',
              }}
            >

                <Avatar
                  size={45}
                  style={{
                    float: 'right',
                    marginTop: '.5rem',
                    color: 'white',
                    cursor: 'pointer',
                    backgroundColor: colorBgContainer,
                  }}
                >
                 
                </Avatar>
          
            </div>
      </Header>
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
        <Menu style={{ minHeight: '90vh' , background: "#F4F4F4"}}  defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
         
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
               <img src={logo} />
               <div>
            Welcome to Digitalflake Admin
            </div>
          </Content>
         
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Dashboardhome;