import { motion } from "framer-motion";
import imgShakesMenu from "../img/undraw_refreshing.svg";

const MenuShakes = ({ shakes, items }) => {
  const itemContainer = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
    exit: { opacity: 0 } // Aggiunto per uscita rapida
  };
  return (
    <>
      {shakes &&
        items
          .filter((item) => item.category === "shakes")
          .map((item, i) => (
            <motion.div
              className="menu-items"
              key={item.id}
              variants={itemContainer}
              transition={{ delay: i * 0.1, duration: 0.3 }}
            >
              <img src={imgShakesMenu} alt="food burger" />
              <motion.div className="item-content">
                <motion.div className="item-title-box">
                  <motion.h5 className="item-title">{item.title}</motion.h5>
                  <motion.h5 className="item-price">${item.price}</motion.h5>
                </motion.div>
                <motion.p className="item-desc">{item.desc}</motion.p>
              </motion.div>
            </motion.div>
          ))}
    </>
  );
};

export default MenuShakes;
