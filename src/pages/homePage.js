import React from "react";
import { Layout, Menu, Icon } from 'antd';

const { Content } = Layout;

export default function HomePage() {
    function handleClick(e) {
        console.log("click " + e.key);
    }

    return (
        <Layout>
            <Menu
                onClick={handleClick}
                mode="horizontal"
                defaultSelectedKeys="1"
            >
                <Menu.Item key="1">
                    <Icon type="project"/>
                    Projects
                </Menu.Item>
                <Menu.Item key="2">
                    <Icon type="coffee" />
                    Blog
                </Menu.Item>
                <Menu.Item key="3">
                    <Icon type="user" />
                    About me
                </Menu.Item>
            </Menu>
            <Content style={{ padding: '15px', backgroundColor: "white" }}>
                
            </Content>
        </Layout>
    );
}