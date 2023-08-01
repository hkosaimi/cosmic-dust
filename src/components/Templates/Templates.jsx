import "./Templates.css";
import t1 from "../../assets/1.png";
import t2 from "../../assets/2.png";
import t3 from "../../assets/3.png";
import t4 from "../../assets/4.png";
import t5 from "../../assets/5.png";
import t6 from "../../assets/6.png";
function Templates() {
  return (
    <>
      <div className="templates">
        <div className="templates__pics">
          <img src={t1} />
        </div>
        <div className="templates__pics">
          <img src={t2} />
        </div>
        <div className="templates__pics">
          <img src={t3} />
        </div>
        <div className="templates__pics">
          <img src={t4} />
        </div>
        <div className="templates__pics">
          <img src={t5} />
        </div>
        <div className="templates__pics">
          <img src={t6} />
        </div>
      </div>
    </>
  );
}

export default Templates;
