"use client";

import { createContext, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export type ToastContextType = typeof toast;

const Context = createContext<ToastContextType | undefined>(undefined);

export default function ToastProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Context.Provider value={toast}>
      <ToastContainer />
      <>{children}</>
    </Context.Provider>
  );
}

export const useToast = () => {
  let context = useContext(Context);

  if (context === undefined) {
    throw new Error("useToast must be used inside ToastProvider");
  }

  return context;
};
