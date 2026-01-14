// Project.jsx
import { Row, Col } from "antd";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import { projects } from "../../data/projects";
import "./Project.css";

export default function Projects() {
  return (
    <div className="projects-page">
      <Row gutter={[24, 24]}>
        {projects.map((p) => (
          <Col xs={24} sm={12} md={8} key={p.id}>
            <ProjectCard project={p} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
