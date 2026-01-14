import { Button, Space } from "antd";
import { GithubOutlined, RocketOutlined } from "@ant-design/icons";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Juan Celeita</h1>

      <p className="home-subtitle">
        Estudiante de Ingeniería en Sistemas · Desarrollo Web · Videojuegos
      </p>

      <p className="home-description">
        Bienvenido a mi portafolio. Este espacio es mi vitácora personal y
        profesional, donde comparto mis proyectos y mi crecimiento como
        desarrollador.
      </p>

      <Space size="large">
        <Button
          type="primary"
          icon={<RocketOutlined />}
          size="large"
          href="/projects"
        >
          Ver proyectos
        </Button>

        <Button
          icon={<GithubOutlined />}
          size="large"
          href="https://github.com/JuanCeleitaO"
          target="_blank"
        >
          GitHub
        </Button>
      </Space>
    </div>
  );
}
