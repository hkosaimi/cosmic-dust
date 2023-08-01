import "./Brand.css";
import { google, dropbox, atlassian, slack, shopify } from "./imports";
function Brand() {
  return (
    <>
      <div className="brand">
        <div className="brand__slide">
          <img src={google} />
          <img src={dropbox} />
          <img src={atlassian} />
          <img src={slack} />
          <img src={shopify} />
          <img src={google} />
          <img src={dropbox} />
        </div>
        <div className="brand__slide">
          <img src={google} />
          <img src={dropbox} />
          <img src={atlassian} />
          <img src={slack} />
          <img src={shopify} />
          <img src={google} />
          <img src={dropbox} />
        </div>
      </div>
    </>
  );
}

export default Brand;
