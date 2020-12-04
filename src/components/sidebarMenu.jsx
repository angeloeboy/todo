import React from "react";
import styled from "styled-components";

const Div = styled.div`
  background-color: #17182d;
  min-height: 100%;
  min-width: 50px;
  max-width: 50px;
  display: inline-block;
`;

export default function SidebarMenu() {
  return (
    <Div>
      <p> Hi im angelo zuniga</p>
    </Div>
  );
}
