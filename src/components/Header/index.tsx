import { Layout } from "../Header/Layout"
import { useProps } from "../Header/useProps";

export const Header = () => {
  return <Layout {...useProps}/>;
}