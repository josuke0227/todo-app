import React from "react";
import styled from "styled-components";

const FooterText = styled.div`
  display: inline;
  color: #a9a9a9;
  font-size: 14px;
`;

const Footer = () => {
  return (
    <div className="footer-container mt-1" style={{ textAlign: "center" }}>
      <FooterText>Josuke0227 @ DevChallenges.io</FooterText>
    </div>
  );
};

export default Footer;
