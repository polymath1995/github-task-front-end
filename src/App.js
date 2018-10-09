import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import Dashboard from './dashboard.js';
import 'antd/dist/antd.css';

const { Header, Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <div>
			<Layout className="layout">
				<Header>
				  <Menu
					theme="dark"
					mode="horizontal"
					defaultSelectedKeys={['1']}
					style={{ lineHeight: '64px' }}
				  >
					<Menu.Item key="1">Mr.Cooper</Menu.Item>
				  </Menu>
				</Header>
				<Content style={{ padding: '0 50px' }}>
				  <Breadcrumb style={{ margin: '16px 0' }}>
					<Breadcrumb.Item>Home</Breadcrumb.Item>
					<Breadcrumb.Item>Dashboard</Breadcrumb.Item>
				  </Breadcrumb>
				  <div style={{ background: '#fff', padding: 24, height: '65vh' }}>
					<Dashboard />
				  </div>
				</Content>
				<Footer style={{ textAlign: 'center' }}>
				  @October 2018 Created by Suryakumar
				</Footer>
			</Layout>
      </div>
    );
  }
}

export default App;
