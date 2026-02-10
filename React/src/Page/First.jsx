
import { useState } from "react";

function First() {
    const [active, setActive] = useState(null);
    const [activeTab, setActiveTab] = useState("muscle");

    return (

        <>
            {/* SECTION 1 — HERO TEXT */}
            <section className="w-full min-h-screen flex justify-center items-center">
                <div className="flex items-center justify-center px-6 py-16 m-10 p-10 max-w-3xl">

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 leading-tight text-center">

                        Mitopure® is the

                        <span className="relative inline-flex items-center mx-2">

                            <span>supplement</span>

                            <span className="ml-2 w-20 h-20">
                                <img
                                    src="https://cdn.sanity.io/images/bxsu76x0/timeline-nutrition/354783ebfd041f0c941c51a750ac446148d17831-1200x1200.png?w=3840&h=3840&q=80&fit=crop&auto=format"
                                    alt="Mitopure"
                                    className="w-full h-full object-contain"
                                />
                            </span>

                        </span>

                        that changes how cells age.

                    </h1>
                </div>
            </section>

            {/* SECTION 2 — IMAGE BANNER */}
            <section className="w-full h-[500px] overflow-hidden">

                <img
                    src="https://cdn.sanity.io/images/bxsu76x0/timeline-nutrition/88607c574cd02d60d8487359fcffbb4fe56e4832-1596x2038.png?rect=0,221,1596,1596&w=1920&h=1920&q=80&fit=crop&auto=format"
                    alt="banner"
                    className="w-full h-full object-cover"
                />

            </section>


            <section className="w-full h-[160vh] relative overflow-hidden mt-4">

                {/* Background Image */}
                <img
                    src="https://cdn.sanity.io/images/bxsu76x0/timeline-nutrition/1620d46dfde74bf360162c9420c1218b1c1eaf2f-4096x3202.jpg?w=1920&h=1501&q=80&fit=crop&auto=format"
                    alt="banner"
                    className="w-full h-full object-cover"
                />

                {/* Dark Overlay */}
                {/* <div className="absolute inset-0"></div> */}

                {/* Text Content */}
                <div className="absolute inset-0 flex items-start justify-center text-center px-6 ">

                    <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold max-w-3xl leading-tight mt-15">
                        Weak mitochondria affect every system in your body.
                    </h2>


                    <div className="absolute top-[22%] left-[30%] z-20">

                        {/* Button */}
                        <button
                            onClick={() => setActive(active === 1 ? null : 1)}
                            className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black font-bold shadow-lg hover:scale-110 transition"
                        >
                            +
                        </button>

                        {/* Popup */}
                        {active === 1 && (
                            <div className="absolute left-12 top-0 w-[360px] bg-white p-5 rounded-xl shadow-2xl text-left max-h-[350px] overflow-y-auto">

                                {/* Title */}
                                <h3 className="font-semibold text-2xl mb-2">
                                    Brain
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                                    The human brain uses about 25% of the human body’s metabolic energy
                                    and is particularly sensitive to the aging process. Scientists are
                                    studying mitochondria’s role in brain health, with early research
                                    suggesting they are key players in cognitive function and aging.
                                </p>

                                {/* Research */}
                                <div className="border-t pt-3">

                                    <p className="text-2xl font-medium mb-2">
                                        Scientific Research
                                    </p>

                                    <ul className="text-xs text-gray-600 space-y-2">

                                        <li>
                                            Grimm, A. &amp; Eckert, A. (2017). Brain aging and neurodegeneration:
                                            from a mitochondrial point of view. <i>J. Neurochem.</i>, 143, 418–431.
                                            <br />
                                            <a
                                                href="https://doi.org/10.1111/jnc.14037"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 underline"
                                            >
                                                https://doi.org/10.1111/jnc.14037
                                            </a>
                                        </li>

                                        <li>
                                            Fang et al. (2019). Mitophagy inhibits amyloid-β and tau pathology and
                                            reverses cognitive deficits in models of Alzheimer's disease.
                                            <i> Nature Neuroscience</i>, 22(3), 401–412.
                                            <br />
                                            <a
                                                href="https://doi.org/10.1038/s41593-018-0332-9"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 underline"
                                            >
                                                https://doi.org/10.1038/s41593-018-0332-9
                                            </a>
                                        </li>

                                    </ul>

                                </div>

                            </div>
                        )}

                    </div>

                    {/* HOTSPOT 2 (Example) */}
                    <div className="absolute top-[35%] left-[38%] z-20">

                        <button
                            onClick={() => setActive(active === 2 ? null : 2)}
                            className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black font-bold shadow-lg hover:scale-110 transition"
                        >
                            +
                        </button>

                        {active === 2 && (
                            <div className="absolute left-12 top-0 w-[360px] bg-white p-4 rounded-lg shadow-xl text-left max-h-[350px] overflow-y-auto">

                                <h3 className="font-semibold text-2xl mb-2">
                                    Energy
                                </h3>

                                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                                    Skin requires a lot of energy provided by mitochondria. As you age,
                                    dysfunctional mitochondria lead to reduced energy production,
                                    cellular decline and signs of aging like sagginess, dullness,
                                    wrinkles and weakened skin barrier. Enhanced mitochondrial
                                    function can improve skin cellular energy, youthfulness,
                                    resilience and overall health.


                                </p>
                                {/* Research */}
                                <div className="border-t pt-3">

                                    <p className="text-2xl font-medium mb-2">
                                        Scientific Research
                                    </p>

                                    <ul className="text-xs text-gray-600 space-y-2">

                                        <li>
                                            Martini H, Passos JF. Cellular senescence: all roads lead to mitochondria. FEBS J. 2023;290(5):1186- 1202.
                                            <br />

                                        </li>
                                        <li>
                                            Dodig S, Čepelak I, Pavić I. Hallmarks of senescence and aging. Biochem Med (Zagreb). 2019;29(3):030501. doi:10.11613/BM.2019.030501


                                            <br />
                                            <a
                                                href="https://doi.org/10.1038/s41593-018-0332-9"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 underline"
                                            >
                                                https://doi.org/10.1038/s41593-018-0332-9
                                            </a>
                                        </li>

                                    </ul>

                                </div>
                            </div>
                        )}
                    </div>


                    {/* HOTSPOT 3 (Example) */}
                    <div className="absolute top-[50%] left-[52%] z-20">

                        <button
                            onClick={() => setActive(active === 3 ? null : 3)}
                            className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black font-bold shadow-lg hover:scale-110 transition"
                        >
                            +
                        </button>

                        {active === 3 && (
                            <div className="absolute left-12 top-0 w-[360px] bg-white p-4 rounded-lg shadow-xl text-left max-h-[350px] overflow-y-auto">

                                <h3 className="font-semibold text-2xl mb-3 ">
                                    Immune system
                                </h3>

                                <p className="text-sm text-gray-600 ">
                                    The immune system becomes less effective over time. Evidence is rising on the
                                    importance of mitochondria in immune aging.

                                </p>
                                {/* Research */}
                                <div className="border-t pt-4">

                                    <p className="text-2xl font-medium mb-3 flex ">
                                        Scientific Research
                                    </p>

                                    <ul className="text-xs text-gray-600 space-y-2">

                                        <li>
                                            Denk, D., Petrocelli, V., Rinsch, C., Greten, F. R., et al. (2022).
                                            Expansion of T memory stem cells with superior anti-tumor immunity by
                                            Urolithin A-induced mitophagy. <i>Immunity</i>, 55(11).
                                            <br />
                                            <a
                                                href="https://doi.org/10.1016/j.immuni.2022.09.014"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 underline"
                                            >
                                                https://doi.org/10.1016/j.immuni.2022.09.014
                                            </a>
                                        </li>
                                        <li>
                                            Fang, E. F., Hou, Y., Palikaras, K., et al. (2019).
                                            Mitophagy inhibits amyloid-β and tau pathology and reverses cognitive
                                            deficits in models of Alzheimer’s disease. <i>Nat Neurosci</i>, 22,
                                            401–412.
                                            <br />
                                            <a
                                                href="https://doi.org/10.1038/s41593-018-0332-9"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 underline"
                                            >
                                                https://doi.org/10.1038/s41593-018-0332-9
                                            </a>
                                        </li>
                                        <li>
                                            Jang, J. Y., Blum, A., Liu, J., &amp; Finkel, T. (2018).
                                            The role of mitochondria in aging. <i>J. Clin. Invest.</i>, 128(9),
                                            3662–3670.
                                            <br />
                                            <a
                                                href="https://doi.org/10.1172/JCI120842"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 underline"
                                            >
                                                https://doi.org/10.1172/JCI120842
                                            </a>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        )}
                    </div>
                    {/* HOTSPOT 4 (Example) */}
                    <div className="absolute top-[60%] left-[38%] z-20">

                        <button
                            onClick={() => setActive(active === 4 ? null : 4)}
                            className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black font-bold shadow-lg hover:scale-110 transition"
                        >
                            +
                        </button>

                        {active === 4 && (
                            <div className="absolute left-12 top-0 w-[360px] bg-white p-4 rounded-lg shadow-xl text-left  max-h-[350px] overflow-y-auto">

                                <h3 className="font-semibold text-2xl mb-2">
                                    Joints
                                </h3>

                                <p className="text-sm text-gray-600 ">
                                    Joint health is key for mobility, independence and quality of life as you age.
                                    The cells that keep joints functional progressively decline in function.
                                    There is emerging science around the link between mitochondrial health and joint health.

                                </p>
                                {/*Research */}
                                <div className="border-t pt-3">
                                    <p className="text-2xl font-medium mb-2">
                                        Scientific Research
                                    </p>
                                    <ul className="text-xs text-gray-600 space-y-2">
                                        <li>
                                            Mao X, Fu P, Wang L and Xiang C (2020) Mitochondria: Potential Targets for Osteoarthritis. Front. Med. 7:581402. doi:

                                            <br />
                                            <a
                                                href="https://doi.org/10.1038/s41593-018-0332-9"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 underline"
                                            >
                                                https://doi.org/10.1038/s41593-018-0332-9
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                    {/* HOTSPOT 4 (Example) */}
                    <div className="absolute top-[72%] left-[66%] z-20">

                        <button
                            onClick={() => setActive(active === 5 ? null : 5)}
                            className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black font-bold shadow-lg hover:scale-110 transition"
                        >
                            +
                        </button>

                        {active === 5 && (
                            <div className="absolute left-12 top-0 w-[360px] bg-white p-4 rounded-lg shadow-xl text-left  max-h-[350px] overflow-y-auto">

                                <h3 className="font-semibold text-2xl mb-2">
                                    Digestive system
                                </h3>

                                <p className="text-sm text-gray-600 mb-2">
                                    The digestive system is essential to metabolic health, immunity and
                                    overall well-being. Mitochondrial health has been associated with
                                    improved gut barrier health.
                                </p>
                                {/*Research */}
                                <div className="border-t pt-3">
                                    <p className="text-2xl font-medium mb-2">
                                        Scientific Research
                                    </p>
                                    <ul className="text-xs text-gray-600 space-y-2">
                                        <li>
                                            Singh, R. &amp;, Chandrashekharappa, S., Bodduluri, S.R. et al. Enhancement of the gut barrier
                                            integrity by a microbial metabolite through the Nrf2 pathway.
                                            <i>Nat Commun 10.</i> , 89 (2019).
                                            <br />
                                            <a
                                                href="https://www.nature.com/articles/s41467-018-07859-7"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 underline"
                                            >
                                                https://www.nature.com/articles/s41467-018-07859-7                                            </a>
                                        </li>
                                        <li>
                                            Toney, A.M. &amp;, Fan, R., Xian, Y., Chaidez, V., Ramer-Tait, A.E. and Chung, S. (2019), Urolithin A, a Gut Metabolite,
                                            Improves Insulin Sensitivity Through Augmentation of Mitochondrial Function and Biogenesis.<i> Obesity </i>, 27: 612-620.
                                            <br />
                                            <a
                                                href="https://onlinelibrary.wiley.com/doi/10.1002/oby.22404"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 underline"
                                            >
                                                https://onlinelibrary.wiley.com/doi/10.1002/oby.22404                                                </a>
                                        </li>
                                        <li>
                                            Urolithin A Prevents Cisplatin-Induced Nephrotoxicity Melissa Guada, Raghu Ganugula, Manicka Vadhanam and Majeti N.V. Ravi Kumar Journal of
                                            Pharmacology and Experimental Therapeutics October 1, 2017, 363 (1) 58-65; DOI:
                                            <br />
                                            <a
                                                href="https://linkinghub.elsevier.com/retrieve/pii/S0022356524271731"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 underline"
                                            >
                                                https://linkinghub.elsevier.com/retrieve/pii/S0022356524271731                                                                                         </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="absolute top-[90%] left-[44%] z-20">

                        <button
                            onClick={() => setActive(active === 6 ? null : 6)}
                            className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black font-bold shadow-lg hover:scale-110 transition"
                        >
                            +
                        </button>

                        {active === 6 && (
                            <div className="absolute left-12 -top-54 w-[360px] bg-white p-4 rounded-lg shadow-xl max-h-[350px] overflow-y-auto text-left ">

                                <h3 className="font-semibold text-2xl mb-2">
                                    Skeletal muscle

                                </h3>

                                <p className="text-sm text-gray-600">
                                    During strenuous exercise, the rate of energy use in skeletal muscles can increase more than 100-fold almost instantly. Muscle cells need healthy mitochondria in order to meet this energy demand. Our clinical studies have shown improved muscle strength as a result of improved mitochondrial function
                                </p>
                                {/* Research */}
                                <div className="border-t pt-3">
                                    <p className="text-sm text-gray-700 leading-relaxed mb-4">
                                        Scientific Research
                                    </p>
                                    <ul className="text-xs text-gray-600 space-y-2">
                                        <li>
                                            Andreux, P.A. &amp;, van Diemen, M.P.J., Heezen, M.R. et al.
                                            Mitochondrial function is impaired in the skeletal muscle of pre-frail elderly.<i> Sci Rep 8 </i>, 8548 (2018).
                                            <br />
                                            <a
                                                href="https://www.nature.com/articles/s41598-018-26944-x"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 underline"
                                            >
                                                https://www.nature.com/articles/s41598-018-26944-x
                                            </a>
                                        </li>
                                        <li>
                                            Ryu, D. &amp;, Mouchiroud, L., Andreux, P. et al. Urolithin A induces mitophagy and prolongs lifespan in C.
                                            elegans and increases muscle function in rodents. <i>Nat Med 22</i>, 879–888 (2016).
                                            <br />
                                            <a
                                                href="https://www.nature.com/articles/nm.4132"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 underline"
                                            >
                                                https://www.nature.com/articles/nm.4132
                                            </a>
                                        </li>
                                        <li>
                                            Luan P &amp;, D'Amico D, Andreux PA, Laurila PP, Wohlwend M, Li H, Imamura de Lima T, Place N, Rinsch C, Zanou N, Auwerx J.
                                            Urolithin A improves muscle function by inducing mitophagy in muscular dystrophy.<i>Sci Transl Med 13</i> : eabb0319, 2021.
                                            <br />
                                            <a
                                                href="https://www.science.org/doi/10.1126/scitranslmed.abb0319"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 underline"
                                            >
                                                https://www.science.org/doi/10.1126/scitranslmed.abb0319
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

            </section>

            {/* SECTION 3 — BACKGROUND IMAGE + TEXT */}
            <section className="w-full h-[600px] mt-4">

                <div
                    className="w-full h-full bg-cover bg-center flex flex-row-reverse items-center"
                    style={{
                        backgroundImage:
                            "url('https://framerusercontent.com/images/Jce5yrUyXMpP7QT3ntPhYnNq7AU.png?width=1184&height=864')",
                    }}
                >
                    <div className="flex ">
                        <div className="max-w-3xl px-6 text-black justify-end">

                            <h1 className="text-5xl font-semibold mb-4">
                                ~90% of our cellular energy is produced by mitochondria
                            </h1>

                            <p className="leading-relaxed text-[18px] text-gray-600">
                                Mitochondria are our cellular powerhouses. The trillions of cells that
                                comprise our body tissues run on the energy created by them.
                            </p>

                        </div>
                    </div>
                </div>

            </section>

            <section>
                <div className="flex mt-4">
                    <div className="w-280 h-200 sticky top-0">
                        <img src="https://framerusercontent.com/images/lhYregdmE8CAlEFJAfnpegYVsGY.png?scale-down-to=1024&width=2048&height=2048" alt="network issue"
                            loading="lazy"
                            className="w-full h-full object-cover " />
                    </div>
                    <div >
                        <div className="w-full h-50 justify-start overflow-y-auto">
                            <h1 className="text-5xl font-medium mb-4">
                                This decline starts earlier than you might think</h1>

                            <p className="text-[18px] text-gray-600">
                                Age-associated mitochondrial decline leads to a progressive decline in our metabolism, our overall energy levels,
                                our resiliency, our skin health and our muscle function.
                            </p>
                        </div>
                        <div className=" h-10 w-full">
                            <span >
                                <button className={`text-[18px]  ${activeTab == "muscle" ? "underline font-semibold" : "text-gray-500"}`} onClick={() => setActiveTab("muscle")}> Muscle Function</button></span>
                            <span className="ml-8">
                                <button className={`text-[18px] ${activeTab == "skin" ? "underline font-semibold" : "text-gray-500"}`} onClick={() => setActiveTab("skin")}> Skin Health</button></span>
                        </div>
                        <div className="h-140 w-full">
                            {activeTab === "muscle" && (
                                <img
                                    src="https://framerusercontent.com/images/6QTQuvwC3MO78yEDidqQvn9gUEI.png?width=1212&height=1008"
                                    alt="Muscle Function"
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            )}
                            {activeTab === "skin" && (
                                <img
                                    src="https://framerusercontent.com/images/izWslMMHMxOjWNtTVviYv62Ygg.png?scale-down-to=1024&width=1240&height=1010"
                                    alt="Skin Health"
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            )}
                        </div>
                        <div>
                            <p className="text-[18px] text-gray-600 mt-2">
                                Age-associated mitochondrial decline leads to a progressive decline in our metabolism, our overall energy levels,
                                our resiliency, our skin health and our muscle function.
                            </p>
                        </div>
                    </div>
                </div>

            </section>
            <section>
                <div className="flex mt-16">
                    <div className="w-340 h-200 sticky top-0">
                        <img src="https://framerusercontent.com/images/mrwQTr8nmT9NwJAlyxFFxgBpms.png?scale-down-to=1024&width=2048&height=2048" alt="network issue"
                            loading="lazy"
                            className="w-full h-full object-cover " />
                    </div>
                    <div >
                        <div className="w-full h-50 justify-start overflow-y-auto">
                            <h1 className="text-5xl font-medium mb-6">
                                Healthy cells rely on a powerful recycling process</h1>

                            <p className="text-[17px] text-gray-600 ">
                                A process called mitophagy cleans up defective mitochondria and allows the mitochondria to repair
                                themselves and improve their performance. This recycling and cleansing mechanism is proven to provide valuable health benefits.

                            </p>
                        </div>

                        <div className="flex gap-12">
                            <div className="flex flex-col items-start gap-3 h-45 w-25">

                                {/* Icon */}
                                <svg
                                    viewBox="0 0 24 24"
                                    className="w-6 h-6 text-gray-700"
                                    aria-hidden="true"
                                >
                                    <use href="#3325540311" />
                                </svg>

                                {/* Divider */}
                                <div className="w-35 h-[1px] bg-gray-400" />

                                {/* Text */}
                                <p className="text-[20px] text-gray-600">
                                    Better mitochondria quality
                                </p>

                            </div>
                            <div className="flex flex-col items-start gap-3 h-45 w-25">

                                {/* Icon */}
                                <svg
                                    viewBox="0 0 24 24"
                                    className="w-6 h-6 text-gray-700"
                                    aria-hidden="true"
                                >
                                    <use href="#3325540311" />
                                </svg>

                                {/* Divider */}
                                <div className="w-35 h-[1px] bg-gray-400" />

                                {/* Text */}
                                <p className="text-[20px] text-gray-600">
                                    Improved cellular health                                </p>

                            </div>
                            <div className="flex flex-col items-start gap-3 h-45 w-25">

                                {/* Icon */}
                                <svg
                                    viewBox="0 0 24 24"
                                    className="w-6 h-6 text-gray-700"
                                    aria-hidden="true"
                                >
                                    <use href="#3325540311" />
                                </svg>

                                {/* Divider */}
                                <div className="w-35 h-[1px] bg-gray-400" />

                                {/* Text */}
                                <p className="text-[20px] text-gray-600">
                                    Improved muscle strength
                                </p>

                            </div>
                            <div className="flex flex-col items-start gap-3 h-45 w-25">

                                {/* Icon */}
                                <svg
                                    viewBox="0 0 24 24"
                                    className="w-6 h-6 text-gray-700"
                                    aria-hidden="true"
                                >
                                    <use href="#3325540311" />
                                </svg>

                                {/* Divider */}
                                <div className="w-35 h-[1px] bg-gray-400" />

                                {/* Text */}
                                <p className="text-[20px] text-gray-600">
                                    Improved skin health

                                </p>

                            </div>
                        </div>
                        <div className="flex gap-2 ">
                            <div className="w-10 h-10 mt-2 rounded-full border border-gray-400 flex items-center justify-center bg-gray shadow">

                                <svg
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-800"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1"
                                    onClick={() => setActiveTab("NewSection")}
                                >
                                    <path d="M12 5v14M5 12h14" />
                                </svg>

                            </div>
                            <span className="text-[16px] mt-4 underline text-gray-600">HOW METHODOLOGY WORKS</span>
                        </div>
                    </div>
                </div>

            </section>
            {activeTab === "NewSection" && (
  <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">

    {/* Modal Box */}
    <div className="relative bg-[#faf9f6] w-[95%] max-w-7xl max-h-[90vh] overflow-y-auto rounded-lg p-8">

      {/* ❌ Close Button */}
      <button
        onClick={() => setActiveTab(null)}
        className="absolute top-4 right-4 text-2xl text-gray-600 hover:text-black"
      >
        ✕
      </button>

      {/* Content */}
      <section>

        {/* Heading */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            <span className="text-red-500 mr-2">002</span>
            Scientific Research
          </h2>

          <p className="mt-4 text-gray-600 max-w-6xl text-[25px]">
            During the past decade, our research has explored the efficacy of
            Urolithin A and its effects have been validated in numerous
            peer-reviewed pre-clinical and clinical trials.
          </p>

          <button className="mt-5 px-5 py-2 border border-gray-500 rounded-full text-sm hover:bg-gray-100 transition">
            Our Studies →
          </button>
        </div>

        {/* Image */}
        <div className="w-full flex justify-start">
          <img
            src="https://framerusercontent.com/images/hii5gAGZp77kl9LH2sOM8ujBeE.png?scale-down-to=1024&width=2088&height=1248"
            alt="Scientific Research Graph"
            className="w-full max-w-4xl object-contain"
          />
        </div>

      </section>
    </div>
  </div>
)}
            <section className="w-full h-[600px] mt-4">

                <div
                    className="w-full h-full bg-cover bg-center flex flex-row-reverse items-center"
                    style={{
                        backgroundImage:
                            "url('https://framerusercontent.com/images/MTUNUS9x90cDqWoxGr17o7Sug.png?width=1200&height=800')",
                    }}
                >
                    <div className="flex ">
                        <div className="max-w-3xl px-10 text-black justify-end">

                            <h1 className="text-5xl font-semibold mb-4">
                                Meet Urolithin A, a rare molecule that renews our cellular powerhouses                            </h1>

                            <p className="leading-relaxed text-[17px] text-gray-600">
                                Our scientists unlocked the power of Urolithin A, a molecule that stimulates this crucial recycling and cleansing process
                                - ultimately protecting cells from age-associated decline.


                            </p>
                            <div className="w-10 h-10 mt-2 rounded-full border border-gray-400 flex items-center justify-center bg-gray shadow">

                                <svg
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-800"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1"
                                >
                                    <path d="M12 5v14M5 12h14" />
                                </svg>

                            </div>

                        </div>

                    </div>
                </div>

            </section>

            {/*Section 7 */}
            <section className="w-full h-[400px] mt-4 px-6 bg-black">
                <div
                    className="w-full h-full bg-cover bg-center flex  items-center"
                    style={{
                        backgroundImage:
                            "url('https://cdn.sanity.io/images/bxsu76x0/timeline-nutrition/8c611702abdea847d301886430526fc7180c3e84-2800x739.jpg?rect=1,0,2799,739&w=1920&h=507&q=80&fit=crop&auto=format')",
                    }}
                >
                    <div className="grid">
                        <div className="flex h-15 w-55">
                            <h1 className="text-white text-[18px]">Powered by</h1>
                            <svg
                                viewBox="0 0 86 24"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-22 h-auto text-white ml-2"
                                focusable="false"
                            >
                                {/* Background */}
                                <path
                                    d="M73.4042 24H12C5.40416 24 0 18.5958 0 12C0 5.40416 5.40416 0 12 0H73.4042C80 0 85.4042 5.40416 85.4042 12C85.4042 18.5958 80 24 73.4042 24Z"
                                    fill="currentColor"
                                />

                                {/* Text/Icon */}
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M48.4431 8.42509C49.1636 8.85003..."
                                    fill="#FFFFFC"
                                />
                            </svg>
                        </div>
                        <div className="w-130 text-3xl">
                            <span>
                                <h1 className="text-white">
                                    Change how your cells age.Explore our</h1></span>
                            <span>
                                <h1 className="text-gray-500">science-backed longevity solutions.
                                </h1></span>
                        </div>
                        <div className="group bg-white w-42 h-10  p-2 px-3 mt-4 rounded-sm hover:bg-gray-500">
                            <button className="text-[13px] text-black group-hover:text-white">SHOP SUPPLEMENTS</button>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}

export default First;