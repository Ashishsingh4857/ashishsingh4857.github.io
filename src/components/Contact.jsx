import { useState } from "react";
import { usePortfolio } from "../hooks/usePortfolio";
import { motion } from "framer-motion";

export default function Contact() {
	const FORMSPREE_URL = import.meta.env.VITE_FORMSPREE_URL;
	const [status, setStatus] = useState("idle");

	const { data } = usePortfolio();
	const contact = data?.contact || {
		email: "hello@devportfolio.com",
		location: "San Francisco, CA • Remote Available",
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!FORMSPREE_URL) {
			alert("VITE_FORMSPREE_URL missing in.env");
			return;
		}
		setStatus("loading");
		const formData = new FormData(e.target);
		try {
			const res = await fetch(FORMSPREE_URL, {
				method: "POST",
				body: formData,
				headers: { Accept: "application/json" },
			});
			if (res.ok) {
				setStatus("success");
				e.target.reset();
				setTimeout(() => setStatus("idle"), 4000);
			} else setStatus("error");
		} catch {
			setStatus("error");
		}
	};

	return (
		<div
			id="contact"
			className="relative bg-black py-20 overflow-hidden">
			<div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
				{/* LEFT SIDE - LEFT SE AYEGA */}
				<motion.div
					initial={{ x: -100, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.8, ease: "easeOut" }}>
					<motion.h1
						initial={{ x: -80, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7, delay: 0.1 }}
						className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tight">
						<span className="bg-gradient-to-b from-yellow-100 to-yellow-400 bg-clip-text text-transparent">
							Let's
						</span>
						<br />
						<span className="bg-gradient-to-b from-yellow-100 to-yellow-500 bg-clip-text text-transparent">
							Talk
						</span>
					</motion.h1>

					<motion.p
						initial={{ x: -60, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7, delay: 0.3 }}
						className="mt-6 text-gray-300 max-w-md text-[15px] leading-relaxed">
						Have a project in mind? I'm always open to
						discussing new opportunities,
						collaborations, or just a friendly chat.
					</motion.p>

					<motion.div
						initial={{ x: -60, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7, delay: 0.4 }}
						className="mt-10 space-y-5 text-sm text-gray-300">
						<div className="flex items-center gap-4">
							<div className="w-8 h-8 rounded-full border border-yellow-400/30 bg-white/5 backdrop-blur flex items-center justify-center">
								✉
							</div>
							<span>{contact.email}</span>
						</div>
						<div className="flex items-center gap-4">
							<div className="w-8 h-8 rounded-full border border-yellow-400/30 bg-white/5 backdrop-blur flex items-center justify-center">
								◎
							</div>
							<span>{contact.location}</span>
						</div>
						<div className="flex items-center gap-4">
							<div className="w-8 h-8 rounded-full border border-yellow-400/30 bg-white/5 backdrop-blur flex items-center justify-center">
								◷
							</div>
							<span>
								Typically responds within 24
								hours
							</span>
						</div>
					</motion.div>

					<motion.div
						initial={{ x: -60, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7, delay: 0.5 }}
						className="mt-10 flex gap-4">
						<a
							href="#"
							className="w-12 h-12 rounded-full bg-white/[0.05] border border-yellow-500/20 backdrop-blur flex items-center justify-center text-yellow-400 hover:bg-yellow-400/10 transition">
							⬡
						</a>
						<a
							href="#"
							className="w-12 h-12 rounded-full bg-white/[0.05] border border-yellow-500/20 backdrop-blur flex items-center justify-center text-yellow-400 hover:bg-yellow-400/10 transition font-bold">
							in
						</a>
						<a
							href="#"
							className="w-12 h-12 rounded-full bg-white/[0.05] border border-yellow-500/20 backdrop-blur flex items-center justify-center text-yellow-400 hover:bg-yellow-400/10 transition">
							𝕏
						</a>
					</motion.div>
				</motion.div>

				{/* RIGHT SIDE - RIGHT SE AYEGA */}
				<motion.div
					initial={{ x: 100, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{
						duration: 0.8,
						delay: 0.2,
						ease: "easeOut",
					}}
					className="relative rounded-[24px] border border-yellow-500/20 bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-xl p-7 md:p-8 shadow-[0_0_80px_rgba(234,179,8,0.15),inset_0_1px_0_rgba(255,255,255,0.08)]">
					<div className="absolute -top-16 -right-16 w-60 h-60 bg-yellow-500/20 blur-[70px] rounded-full pointer-events-none"></div>
					<h2 className="text-[28px] font-bold text-white">
						Send a Message
					</h2>
					<div className="mt-2 w-16 h-[2px] bg-gradient-to-r from-yellow-400 to-transparent"></div>
					<form
						className="mt-8 space-y-5"
						onSubmit={handleSubmit}>
						<div>
							<label className="text-[13px] text-yellow-100/60">
								Name
							</label>
							<div className="mt-2 relative group">
								<span className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-400/50 group-focus-within:text-yellow-400">
									👤
								</span>
								<input
									name="name"
									required
									placeholder="Your full name"
									className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/[0.06] border border-white/10 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-yellow-400/30 focus:bg-white/[0.08] transition"
								/>
							</div>
						</div>
						<div>
							<label className="text-[13px] text-yellow-100/60">
								Email
							</label>
							<div className="mt-2 relative group">
								<span className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-400/50 group-focus-within:text-yellow-400">
									✉️
								</span>
								<input
									name="email"
									required
									type="email"
									placeholder="your.email@example.com"
									className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/[0.06] border border-white/10 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-yellow-400/30 focus:bg-white/[0.08] transition"
								/>
							</div>
						</div>
						<div>
							<label className="text-[13px] text-yellow-100/60">
								Message
							</label>
							<div className="mt-2 relative group">
								<span className="absolute left-4 top-4 text-yellow-400/50 group-focus-within:text-yellow-400">
									💬
								</span>
								<textarea
									name="message"
									required
									rows={4}
									placeholder="Tell me about your project, ideas, or just say hello..."
									className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/[0.06] border border-white/10 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-yellow-400/30 focus:bg-white/[0.08] transition resize-none"></textarea>
							</div>
						</div>
						<button
							type="submit"
							disabled={status === "loading"}
							className="w-full py-4 rounded-xl bg-gradient-to-b from-[#E8C86A] to-[#C9A84C] text-black font-bold text-sm flex items-center justify-center gap-2 hover:from-yellow-200 hover:to-yellow-500 transition shadow-[0_0_20px_rgba(234,179,8,0.3)] disabled:opacity-60">
							{status === "loading"
								? "Sending..."
								: status === "success"
									? "Message Sent ✓"
									: "Send Message"}{" "}
							<span>✈️</span>
						</button>
						{status === "success" && (
							<p className="text-green-400 text-xs text-center">
								Done! I'll reply within 24
								hours.
							</p>
						)}
						{status === "error" && (
							<p className="text-red-400 text-xs text-center">
								Failed to send. Check env URL.
							</p>
						)}
					</form>
				</motion.div>
			</div>
		</div>
	);
}
