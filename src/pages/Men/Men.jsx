import { Deal } from "../Home/Deal/Deal";
import { Welcome } from "../Home/Welcome/Welcome";
import { Collections } from "../Home/Collections/Collections";
import { Brand } from "../Home/Brand/Brand";
import { Sellers } from "../Home/Sellers/Sellers";

export const Men = () => {
    return (
      <>
        <Deal/>
        <Sellers />
        <Welcome/>
        <Collections />
        <Brand />
      </>
    );
};
