import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import "./MainLayout.css";

const { Header, Content, Footer } = Layout;

export default function MainLayout({ children }) {
  return (
    <Layout className="main-layout">
      <Header className="main-header">
        <Menu
          theme="dark"
          mode="horizontal"
          className="main-menu"
          items={[
            { label: <Link to="/">Inicio</Link>, key: "home" },
            { label: <Link to="Projects">Proyectos</Link>, key: "Projects" },
            { label: <Link to="/profile">Perfil</Link>, key: "profile" },
          ]}
        />
      </Header>

      <Content className="main-content">{children}</Content>

      <Footer className="main-footer">
        © {new Date().getFullYear()} Mi Portafolio
      </Footer>
    </Layout>
  );
}
