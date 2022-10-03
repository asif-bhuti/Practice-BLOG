import styled from "styled-components";

export const StyledWrite = styled.div`
  display: flex;
  gap: 20px;
  padding: 0 20px;
  background: ${({ theme }) => theme.color.foreground};
`;
export const Content = styled.div`
  flex: 5;
  margin: 10px 0;
  height: 400px;
`;
export const Menu = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const EditorContainer = styled.div``;
export const Item = styled.div``;
