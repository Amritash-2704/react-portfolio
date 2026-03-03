import Tilt from "react-parallax-tilt";
import devboy from "../../../assets/images/devboy_converted.png";

export default function Hero2() {
    return (
        <section className="relative h-screen flex items-center justify-center bg-[#0f172a] text-white overflow-hidden">

            {/* Star Background Effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.08)_1px,_transparent_1px)] bg-[size:30px_30px] opacity-20"></div>

            <div className="relative w-full px-10 md:px-20 grid md:grid-cols-2 gap-16 items-center">

                {/* Left Content */}
                <div>

                    <h1 className="text-4xl md:text-5xl font-bold mb-8 uppercase tracking-wide">
                        Let Me{" "}
                        <span className="text-cyan-400">Introduce</span> Myself
                    </h1>

                    <div className="space-y-6 text-gray-300 leading-relaxed text-lg">

                        <p>
                            I’m a Software Engineer who loves transforming ideas into reliable,
                            scalable products. Over time, I’ve explored several technologies
                            and found my passion in building high-performance systems and
                            intuitive user experiences.
                        </p>

                        <p>
                            I’m proficient in{" "}
                            <span className="text-cyan-400 font-semibold">
                                JavaScript, C++, Rust, Node.js, and Java
                            </span>{" "}
                            — and I enjoy working across both backend and frontend stacks.
                        </p>

                        <p>
                            My key areas of interest include developing{" "}
                            <span className="text-cyan-400 font-semibold">
                                Web Applications, Blockchain Solutions
                            </span>{" "}
                            and exploring new ways to bridge on-chain and off-chain systems.
                        </p>

                        <p>
                            Whenever possible, I love building projects with{" "}
                            <span className="text-cyan-400 font-semibold">Node.js</span> and
                            modern frameworks like{" "}
                            <span className="text-cyan-400 font-semibold">
                                React.js and Next.js
                            </span>.
                        </p>

                    </div>
                </div>

                {/* Right Avatar */}
                <div className="flex justify-center">

                    <Tilt
                        glareEnable={true}
                        glareMaxOpacity={0.2}
                        scale={1.05}
                        transitionSpeed={1500}
                    >
                        <div className="relative w-80 h-80 md:w-96 md:h-96">

                            {/* Glow Effect */}
                            <div className="absolute inset-0 rounded-full bg-cyan-500 blur-3xl opacity-30"></div>

                            <img
                                src={devboy}
                                alt="avatar"
                                className="relative w-full h-full object-cover rounded-full border-2 border-cyan-400 shadow-xl"
                            />
                        </div>
                    </Tilt>

                </div>

            </div>
        </section>
    );
}