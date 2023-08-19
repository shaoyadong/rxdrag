import styled from "styled-components";
import { DraggableWidget } from "../DraggableWidget";
import { boxShadow } from "../utils";

export const Panel = styled(DraggableWidget).attrs({ resizable: true })`
  position: fixed;
  height:calc(100vh - 120px);
  width: 200px;
  box-shadow: ${boxShadow};
  top: 50%;
  transform: translateY(-50%);
  border: solid 1px ${props => props.theme?.token?.colorBorder};
  background-color: ${props => props.theme?.token?.colorBgContainer};
  border-radius: 4px;
  display: flex;
  flex-flow: column;
  color: ${props => props.theme?.token?.colorText};
`