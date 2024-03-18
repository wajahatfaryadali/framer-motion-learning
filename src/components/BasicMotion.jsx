import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
const BasicMotion = () => {
    const [show, setShow] = useState(false);

    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                margin: "auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
                flexDirection: "column",
            }}
        >
            <motion.button onClick={() => setShow(!show)} className="btn" layout>
                Click Me
            </motion.button>
            <AnimatePresence mode="popLayout">
                {show && (
                    <motion.div
                        initial={{ rotate: "0deg", scale: 0, x: "100%" }}
                        animate={{ rotate: "360deg", scale: 1, x: "0%" }}
                        exit={{ rotate: "0deg", scale: 0, x: "-100%" }}
                        transition={{
                            duration: 0.5,
                            ease: "easeInOut",
                        }}
                        style={{
                            width: "150px",
                            height: "150px",
                            background: "white",
                        }}
                    ></motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default BasicMotion;
