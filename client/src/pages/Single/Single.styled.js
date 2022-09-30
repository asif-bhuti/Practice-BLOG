import styled from "styled-components";
import { Container } from "../../components/styles/globalstyles";

export const ContentDiv = styled.div`
  flex: 5;
`;

export const MenuDiv = styled.div`
  flex: 2;
`;

export const SingleContainer = styled(Container)`
  gap: 50px;
  ${Container}
`;
