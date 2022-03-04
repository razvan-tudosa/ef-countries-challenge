import { Content, Wrapper } from "./styles";
import { ThemePicker } from "./ThemePicker";

export const Header: React.FC = () => (
  <Wrapper>
    <Content>
      <div>Where in the World?</div>
      <ThemePicker />
    </Content>
  </Wrapper>
);
