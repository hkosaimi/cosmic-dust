import "./Templates.css";
import t1 from "../../assets/1.png";
import t2 from "../../assets/2.png";
import t3 from "../../assets/3.png";
import t4 from "../../assets/4.png";
import t5 from "../../assets/5.png";
import t6 from "../../assets/6.png";
import { motion } from "framer-motion";
function Templates() {
  return (
    <>
      <div className="templates">
        <motion.div
          className="templates__pics"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}>
          <img src={t1} />
        </motion.div>
        <motion.div
          className="templates__pics"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}>
          <img src={t2} />
        </motion.div>
        <motion.div
          className="templates__pics"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}>
          <img src={t3} />
        </motion.div>
        <motion.div
          className="templates__pics"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}>
          <img src={t4} />
        </motion.div>
        <motion.div
          className="templates__pics"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}>
          <img src={t5} />
        </motion.div>
        <motion.div
          className="templates__pics"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}>
          <img src={t6} />
        </motion.div>
      </div>
    </>
  );
}

export default Templates;
