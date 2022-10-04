import styled from "styled-components";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export const StyledWrite = styled.div`
  display: flex;
  gap: 20px;
  padding: 0 20px;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
  }
`;
export const Content = styled.div`
  flex: 5;
  margin: 10px 0;
  height: 550px;
`;
export const Menu = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 960px) {
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
  }
`;
export const TextField = styled(ReactQuill)`
  height: 400px;
  width: 700px;
  margin: 20px 0;
  background: white;
`;
export const Label = styled.label`
  width: 100px;
  padding: 2px 5px;
  color: ${({ theme }) => theme.color.primary};
  &.button {
    border: 1px solid ${({ theme }) => theme.color.primary};
    border-radius: 5px;
    background: ${({ theme }) => theme.color.foreground};
    transition: all 0.3s ease;
    &:hover {
      color: ${({ theme }) => theme.color.foreground};
      background: ${({ theme }) => theme.color.primary};
    }
  }
`;
export const EditorContainer = styled.div``;
export const Item = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  background: ${({ theme }) => theme.color.foreground};
  border-radius: 10px;
  margin: 10px 0;
  padding: 10px;
  width: 300px;
  @media screen and (max-width: 960px) {
    justify-content: space-between;
  }
`;
