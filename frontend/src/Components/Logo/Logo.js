import { ReactComponent as LightLogo } from "./light.svg";
import { ReactComponent as DarkLogo } from "./dark.svg";
import { ReactComponent as HorizontalLogo } from "./horizontal.svg";

const Logo = ({ size, type }) => {
  const logos = {
    light: <LightLogo />,
    dark: <DarkLogo />,
    horizontal: <HorizontalLogo />,
  };

  return <div>{logos[type]}</div>;
};

export default Logo;
