import { Card, Avatar } from "antd";
import perfil from "../../assets/imagens/yo.jpeg";
import {
  GithubOutlined,
  InstagramOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  MailOutlined,
} from "@ant-design/icons";

import "./Profile.css";
export default function Profile() {
  return (
    <Card title="Mi Perfil" className="profile-card">
      <Avatar className="avatar-profile" size={300} src={perfil} />
      <p style={{ marginTop: "16px" }}>
        Hola, mi nombre es Juan Celeita (ByDevCe_), soy estudiante de ingeniería
        en sistemas y este blog es para compartir mis proyectos y avances en el
        desarrollo web, quiero usarlo como mi vitacora personal y profesional.
        Soy apasionado por la tecnología, el desarrollo web y los videojuegos.
      </p>
      <div className="contacto">
        <a href=" https://github.com/JuanCeleitaO" target="_blank">
          <GithubOutlined className="git-icon" />
        </a>
        <a
          href=" https://www.instagram.com/juan_celeita_?igsh=cWg2MGhoazNiaDlx"
          target="_blank"
        >
          <InstagramOutlined className="git-icon" />
        </a>
        <a href="https://www.facebook.com/share/17UTFkVAfJ/ " target="_blank">
          <FacebookOutlined className="git-icon" />
        </a>
        <a
          href=" https://www.linkedin.com/in/david-celeita-12a771362"
          target="_blank"
        >
          <LinkedinOutlined className="git-icon" />
        </a>
        <a href="celeitaospinajuan@gmail.com" target="_blank">
          <MailOutlined className="git-icon" />
        </a>
      </div>
    </Card>
  );
}
