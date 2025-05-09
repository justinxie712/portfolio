import { motion } from "framer-motion";

const HoverExpand = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      className={className}
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ display: "inline-block" }}
    >
      {children}
    </motion.div>
  );
};
export default HoverExpand;
