import { Content, Wrapper } from "./styles";

const ThemePicker: React.FC = () => <div>Theme Picker</div>;

export const Header: React.FC = () => (
  <Wrapper>
    <Content>
      <div>Where in the World?</div>
      <ThemePicker />
    </Content>
  </Wrapper>
);
