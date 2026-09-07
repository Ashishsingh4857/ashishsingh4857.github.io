export default function Contact() {
	return (
		<div className="min-h-screen bg-black relative overflow-hidden">
			{/* BG liquid gold */}
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(234,179,8,0.18),transparent_70%)]"></div>
			<div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=80&w=2000')] bg-cover mix-blend-soft-light"></div>
			<div className="absolute inset-0 bg-black/40"></div>

			<div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20 grid md:grid-cols-2 gap-12 items-center">
				{/* LEFT */}
				<div>
					<h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tight">
						<span className="bg-gradient-to-b from-yellow-200 to-yellow-500 bg-clip-text text-transparent">
							Let's
						</span>
						<br />
						<span className="bg-gradient-to-b from-yellow-200 to-yellow-600 bg-clip-text text-transparent">
							Talk
						</span>
					</h1>

					<p className="mt-6 text-gray-300 max-w-md text-[15px] leading-relaxed">
						Have a project in mind? I'm always open to
						discussing new opportunities,
						collaborations, or just a friendly chat.
					</p>

					<div className="mt-10 space-y-5 text-sm text-gray-300">
						<div className="flex items-center gap-4">
							<div className="w-8 h-8 rounded-full border border-yellow-400/30 flex items-center justify-center text-yellow-400">
								✉
							</div>
							<span>hello@devportfolio.com</span>
						</div>
						<div className="flex items-center gap-4">
							<div className="w-8 h-8 rounded-full border border-yellow-400/30 flex items-center justify-center text-yellow-400">
								◎
							</div>
							<span>
								San Francisco, CA • Remote
								Available
							</span>
						</div>
						<div className="flex items-center gap-4">
							<div className="w-8 h-8 rounded-full border border-yellow-400/30 flex items-center justify-center text-yellow-400">
								◷
							</div>
							<span>
								Typically responds within 24
								hours
							</span>
						</div>
					</div>

					<div className="mt-10 flex gap-4">
						<a
							href="#"
							className="w-12 h-12 rounded-full bg-white/[0.05] border border-yellow-500/20 backdrop-blur flex items-center justify-center text-yellow-400">
							⬡
						</a>
						<a
							href="#"
							className="w-12 h-12 rounded-full bg-white/[0.05] border border-yellow-500/20 backdrop-blur flex items-center justify-center text-yellow-400 font-bold text-xl">
							in
						</a>
						<a
							href="#"
							className="w-12 h-12 rounded-full bg-white/[0.05] border border-yellow-500/20 backdrop-blur flex items-center justify-center text-yellow-400 text-xl">
							𝕏
						</a>
					</div>
				</div>

				{/* RIGHT FORM */}
				<div className="relative rounded-[22px] border border-yellow-500/20 bg-gradient-to-b from-white/[0.07] to-white/[0.03] backdrop-blur-xl p-7 md:p-8 shadow-[0_0_80px_rgba(234,179,8,0.15),inset_0_1px_0_rgba(255,255,255,0.08)]">
					<div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-400/20 blur-[50px] rounded-full"></div>

					<h2 className="text-3xl font-bold text-white">
						Send a Message
					</h2>
					<div className="mt-2 w-16 h-[2px] bg-gradient-to-r from-yellow-400/60 to-transparent"></div>

					<form
						className="mt-7 space-y-5"
						onSubmit={(e) => {
							e.preventDefault();
							alert("Message Sent!");
						}}>
						<div>
							<label className="text-sm text-yellow-100/70">
								Name
							</label>
							<div className="mt-2 relative">
								<span className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-400/70">
									👤
								</span>
								<input
									required
									placeholder="Your full name"
									className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/[0.12] border border-white/10 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-yellow-400/40"
								/>
							</div>
						</div>
						<div>
							<label className="text-sm text-yellow-100/70">
								Email
							</label>
							<div className="mt-2 relative">
								<span className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-400/70">
									✉️
								</span>
								<input
									required
									type="email"
									placeholder="your.email@example.com"
									className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/[0.12] border border-white/10 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-yellow-400/40"
								/>
							</div>
						</div>
						<div>
							<label className="text-sm text-yellow-100/70">
								Message
							</label>
							<div className="mt-2 relative">
								<span className="absolute left-4 top-4 text-yellow-400/70">
									💬
								</span>
								<textarea
									required
									rows="4"
									placeholder="Tell me about your project, ideas, or just say hello..."
									className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/[0.12] border border-white/10 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-yellow-400/40 resize-none"></textarea>
							</div>
						</div>
						<button
							type="submit"
							className="w-full py-4 rounded-xl bg-gradient-to-b from-[#E8C86A] to-[#C9A84C] text-black font-bold flex items-center justify-center gap-2">
							Send Message ✈️
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
