import React from 'react';
import './App.css';
import { Row, Col, Layout, Menu, Breadcrumb } from 'antd';
import { CompA, CompB } from './components/PrimeiroComponente'
import 'antd/dist/antd.css';
import './index.css';
const { Header, Footer, Content } = Layout;

function App() {
  return (

    <div>
      <Layout className="layout">
        <Header>
          <img src="https://tabelafipecarros.com.br/dist/images/og.png" className="logo" />
          <Menu
            style={{ marginTop: 10 }}
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">
            <Row>
              <Col span={12}>
                <CompA valor="Eu sou o 1" />
              </Col>
              <Col span={12}><CompB valor="Eu sou o 2" /></Col>
            </Row>

          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Tabela fipe ©2020 Created by Vanniery</Footer>
      </Layout>

    </div >
  );

}

export default App;
