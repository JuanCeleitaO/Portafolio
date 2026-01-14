import { Card } from "antd";
import { GithubOutlined, EyeOutlined } from "@ant-design/icons";
import "./Pcards.css";

const { Meta } = Card;

export default function ProjectCard({ project }) {
  return (
    <Card
      className="project-card"
      hoverable
      cover={<img alt={project.title} src={project.image} />}
      actions={[
        project.github && (
          <a href={project.github} target="_blank" rel="noreferrer">
            <GithubOutlined />
          </a>
        ),
        project.demo && (
          <a href={project.demo} target="_blank" rel="noreferrer">
            <EyeOutlined />
          </a>
        ),
      ]}
    >
      <Meta title={project.title} description={project.description} />
    </Card>
  );
}
