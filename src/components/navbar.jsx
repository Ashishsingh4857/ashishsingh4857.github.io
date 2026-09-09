import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
	const navigate = useNavigate();
	const location = useLocation();

	const handleNavClick = (id) => {
		if (location.pathname !== "/") {
			navigate("/");
			setTimeout(() => {
				document.getElementById(id)?.scrollIntoView({
					behavior: "smooth",
					block: "start",
				});
			}, 150);
		} else {
			document.getElementById(id)?.scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
		}
	};

	return (
		<div className="fixed top-5 inset-x-0 z-50 flex justify-center px-4">
			{/* Outer gold glow */}
			<div className="absolute top-0 w-[600px] h-[60px] bg-gradient-to-r from-yellow-500/0 via-yellow-300/20 to-yellow-500/0 blur-[25px] pointer-events-none"></div>

			<nav className="relative w-full max-w-[960px] h-[56px] flex items-center justify-between px-2 pl-6 rounded-full border border-yellow-200/20 bg-gradient-to-b from-white/[0.12] to-white/[0.04] backdrop-blur-[30px] shadow-[0_10px_40px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.2),inset_0_-1px_0_rgba(212,160,23,0.2)]">
				{/* Liquid gold inner border */}
				<div className="absolute inset-[1px] rounded-full bg-gradient-to-b from-yellow-100/10 to-transparent pointer-events-none"></div>

				{/* LEFT - Logo (tera wala) */}
				<Link
					to="/"
					className="relative z-10 flex items-center gap-2">
					<span className="text-yellow-300 text-[22px] font-mono font-bold tracking-tight">
						&lt;/&gt;
					</span>
					<div className="leading-[12px]">
						<p className="text-[10px] tracking-[0.2em] text-yellow-300 font-bold">
							DEV
						</p>
						<p className="text-[10px] tracking-[0.2em] text-white/70">
							PORTFOLIO
						</p>
					</div>
				</Link>

				{/* CENTER - Links (Skills add kiya) */}
				<div className="hidden md:flex items-center gap-1 p-1 rounded-full bg-black/50 border border-white/[0.06] backdrop-blur">
					<button
						onClick={() => handleNavClick("project")}
						className="px-4 py-2 rounded-full text-[11px] tracking-widest text-white/60 hover:text-white hover:bg-white/[0.08] transition flex items-center gap-1.5">
						<span className="text-yellow-300 text-[7px]">
							&#9679;
						</span>{" "}
						PROJECTS
					</button>
					<button
						onClick={() => handleNavClick("skills")}
						className="px-4 py-2 rounded-full text-[11px] tracking-widest text-white/60 hover:text-white hover:bg-white/[0.08] transition flex items-center gap-1.5">
						<span className="text-yellow-300 text-[7px]">
							&#9679;
						</span>{" "}
						SKILLS
					</button>
					<button
						onClick={() => handleNavClick("about")}
						className="px-4 py-2 rounded-full text-[11px] tracking-widest text-white/60 hover:text-white hover:bg-white/[0.08] transition flex items-center gap-1.5">
						<span className="text-yellow-300 text-[7px]">
							&#9679;
						</span>{" "}
						ABOUT
					</button>
					{/* <button
						onClick={() => handleNavClick("contact")}
						className="px-4 py-2 rounded-full text-[11px] tracking-widest text-white/60 hover:text-white hover:bg-white/[0.08] transition flex items-center gap-1.5">
						<span className="text-yellow-300 text-[7px]">
							&#9679;
						</span>{" "}
						CONTACT
					</button> */}
				</div>

				{/* RIGHT - CTA */}
				<div className="relative flex items-center gap-3">
					<button
						onClick={() => handleNavClick("contact")}
						className="h-9 px-6 rounded-full bg-gradient-to-b from-[#FDE68A] to-[#D4A017] text-black text-[12px] font-bold tracking-wide shadow-[0_0_20px_rgba(234,179,8,0.4),inset_0_1px_0_rgba(255,255,255,0.7)] hover:from-yellow-100 hover:to-yellow-500 transition flex items-center gap-1.5">
						LET&apos;S TALK{" "}
						<span className="text-[12px]">&#8599;</span>
					</button>
				</div>
			</nav>
		</div>
	);
}
