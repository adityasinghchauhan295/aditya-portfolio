import { motion } from "framer-motion";

const SkillsCard = ({ title, level }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-[#111827] p-6 rounded-xl border border-cyan-500/20"
    >
      <div className="flex justify-between mb-3">
        <h3 className="text-lg font-semibold">{title}</h3>
        <span className="text-cyan-400">{level}%</span>
      </div>

      <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1 }}
          className="h-full bg-cyan-400 rounded-full"
        />
      </div>
    </motion.div>
  );
};

export default SkillsCard;