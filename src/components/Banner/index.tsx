import { useProps } from "./useProps";
import { Layout } from "./Layout";

export const Banner = () => {
  return <Layout {...useProps}/>
};

// export const Banner = () => {
//   const fetchUrl = "your-fetch-url-here"; // 適切なfetchUrlを指定してください
//   const props = useProps(fetchUrl);

//   return <Layout {...props} />;
// };