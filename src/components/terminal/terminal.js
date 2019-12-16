import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image';

import "./terminal.less";

const TERMINAL_STR = "./tamudatathon_2020"

const TerminalInputPrefix = () => (
  <span className="terminal-input-prefix">></span>
)

const TerminalOutput = (outputStr, inputLine) => (
  <span className="terminal-output">
    {
      (inputLine) ? <TerminalInputPrefix/> : <span style={{marginRight: "10px"}}/>
    }
    {outputStr}
  </span>
)

const TDLogo = (props) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "horizontal_logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return <Img fluid={data.placeholderImage.childImageSharp.fluid} className={props.className}/>;
}

class Terminal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      terminalInputStr: "",
      terminalOutputStr: "",
      showTitle: false,
    }

    this.typeStringToTerminal = this.typeStringToTerminal.bind(this);
    this.writeStringToTerminal = this.writeStringToTerminal.bind(this);
  }

  async componentDidMount() {
    await this.typeStringToTerminal(TERMINAL_STR, false);

    await this.typeStringToTerminal("Loading something awesome...", true, 20);

    setTimeout(() => this.setState({showTitle: true}), 500);
  }

  async typeStringToTerminal(inputString, isOutput, timeout=120) {
    for (var i = 1; i <= inputString.length; i++) {
      await this.writeStringToTerminal(inputString.substring(0, i), isOutput, timeout);
    }
  }

  async writeStringToTerminal(inputString, isOutput, timeout) {
    return new Promise(resolve => {
      setTimeout(() => {
        if (isOutput) this.setState({terminalOutputStr: inputString});
        else this.setState({terminalInputStr: inputString});
        resolve();
      }, timeout);
    })
  }

  render() {
    const tdLogoClasses = (this.state.showTitle) ? "tdLogo show" : "tdLogo hide"
    return (
      <div className="terminalDiv">
        <div className="terminalHeader">
          <div className="terminalDot" id="terminalRedDot">
          </div>
          <div className="terminalDot" id="terminalYellowDot">
          </div>
          <div className="terminalDot" id="terminalGreenDot">
          </div>
        </div>
        <div className="terminalTextDiv">
          {TerminalOutput(this.state.terminalInputStr, true)}
          <br/>
          {TerminalOutput(this.state.terminalOutputStr, false)}
          <br/>
          <TDLogo className={tdLogoClasses}/>
        </div>
      </div>
    );
  }
}

export default Terminal;
