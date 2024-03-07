import { Welcome } from "./Welcome/Welcome";
import { Collections } from "./Collections/Collections";
import { Brand } from "./Brand/Brand";
import { Sellers } from "./Sellers/Sellers";

export const Home = () => {
  return (
    <>
      
        <Welcome />
        <Collections />
        <Brand />
        <Sellers />
      
    </>
  );
};