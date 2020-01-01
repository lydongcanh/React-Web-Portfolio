import React from 'react';
import { Layout } from "antd";
import HomePage from './pages/homePage';

const { Content } = Layout;

function App() {
    return (
        <Layout>
            <Content style={{
                height: "100vh",
                padding: "15px"
            }}>
                <HomePage />
            </Content>
        </Layout>
    );
}

export default App;
