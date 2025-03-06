"use client";

import { useDispatch } from "react-redux";
import { incrementByAmount } from "@/redux/counterSlice";
import UserList from "@/components/userList";
import { motion } from "framer-motion";
import { X } from "lucide-react";

export default function Home() {
  const dispatch = useDispatch();

  const itemVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <motion.div
        initial={{ scale: 0.5 }}
        animate={{ scale: 1, rotate: 360 }}
        transition={{ type: "spring", stiffness: 500, damping: 20 }}
        className="w-32 h-32 bg-red-500 rounded-lg"
        />

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => dispatch(incrementByAmount(1))}
        className="p-4 mt-4 bg-blue-500 rounded-lg"
      >Button to increment</motion.button>

      <motion.ul initial="hidden" animate="visible">
        {[1, 2, 3].map((item) => (
          <motion.li
            key={item}
            variants={itemVariant}
            transition={{ duration: 1, delay: item }}
            className="p-2 bg-blue-500 my-2 text-white rounded-lg"
          >
            Item {item}
          </motion.li>
        ))}
      </motion.ul>
    </div>      
  );
}