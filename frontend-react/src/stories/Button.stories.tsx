import Button, { Props } from "../components/Button";
import { Story } from "@storybook/react/types-6-0";

const Template: Story<Props> = (args) => <Button {...args} />;

export const Primary = Template.bind({}); // precisar dar o .bind para o template não receber as propriedades do outro
Primary.args = {
  children: "Teste",
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Teste",
  disabled: true,
};

const ButtonStory = {
  title: "Components/Button", // NomeDaCategoria/NomeDaStory
  component: Button,
};

export default ButtonStory;
