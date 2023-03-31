import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "./Jobresume.pdf";
import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "./skills.scss";
import bg from "../assets/home-bg.jpg";
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const resumeLink = `https://raw.githubusercontent.com/Pankaj-Jogale/my-react-app/final-portfolio/src/components/Jobresume.pdf`;

const Resume1 = () => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        width: "100%",
        minHeight: "93vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container fluid className="resume-section">
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px", marginTop: "20px", marginLeft: "25px" }}
          >
            &nbsp;Download Resume
          </Button>
        </Row>

        <Row className="resume">
          <Document
            file={resumeLink}
            className="d-flex justify-content-center "
          >
            <Page
              pageNumber={1}
              scale={width > 786 ? 1.7 : 0.6}
              className="square border border-dark"
            />
          </Document>
        </Row>
      </Container>
    </div>
  );
};

export default Resume1;
