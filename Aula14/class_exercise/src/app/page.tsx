"use client";

import { useDispatch } from "react-redux";
import ProductEditForm from "./form/page";

export default function Home() {
  const dispatch = useDispatch();

  const itemVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <ProductEditForm/>
    </div>      
  );
}