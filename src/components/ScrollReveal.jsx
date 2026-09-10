import { motion } from "framer-motion";

export default function ScrollReveal({ children, delay = 0, y = 60 }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: y, filter: "blur(10px)" }}
			whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
			viewport={{ once: true, amount: 0.2 }}
			transition={{
				duration: 0.8,
				delay: delay,
				ease: [0.25, 0.1, 0.25, 1],
			}}>
			{children}
		</motion.div>
	);
}
