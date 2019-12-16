import React from "react";
import { Terminal } from "../components/terminal";
import { Container, Row } from "reactstrap";

class IndexPage extends React.Component {
  render() {
    return (
      <Container
        style={{
          marginLeft: '5vw', 
          marginRight: '5vw', 
          maxWidth: '90vw'
        }}
      >
        <Row 
          style={{
            marginTop: "5vh"
          }}
        >
          <Terminal/>
        </Row>
      </Container>
    );
  }
}

export default IndexPage;
