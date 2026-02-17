import { useEffect, useRef, useState } from "react";

function First() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("muscle");
  const [active, setActive] = useState(null);

  const sectionsRef = useRef([]);

  const data = [
    {
      image:
        "https://framerusercontent.com/images/lhYregdmE8CAlEFJAfnpegYVsGY.png?scale-down-to=1024&width=2048&height=2048",
    },
    {
      image:
        "https://framerusercontent.com/images/mrwQTr8nmT9NwJAlyxFFxgBpms.png?scale-down-to=1024&width=2048&height=2048",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setActiveIndex(index);
          }
        });
      },
      {
        threshold: 0.5, // important
      }
    );

    sectionsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
  return (

    <div className="w-full ">
      {/* SECTION 1 — HERO BANNER */}
      <section className="w-full px-4 md:px-8 lg:px-6 mt-4">
        <div className="relative w-full h-[55vh] sm:h-[65vh] md:h-[75vh] lg:h-[90vh] rounded-3xl overflow-hidden">

          {/* HERO IMAGE */}
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1920&q=80"
            alt="Hero banner"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
      {/* SECTION 2 — IMAGE BANNER */}
      <section className="w-full h-[40vh] lg:min-h-screen flex justify-center items-center">
        <div className="flex items-center justify-center px-5 py-12  p-6 ">

          <h1 className="text-2xl sm:text-3xl md:text-6xl lg:text-7xl 
                    font-medium text-gray-900 leading-snug text-center">
            Mitopure® is the
            <div className="flex justify-center w-max h-65px">
              <div className="inline-flex items-center text-2xl lg:text-7xl font-medium ">

                <span>supplement</span>

                <span className="w-14 h-12 sm:w-24 sm:h-24 flex-shrink-0">
                  <img
                    src="https://cdn.sanity.io/images/bxsu76x0/timeline-nutrition/354783ebfd041f0c941c51a750ac446148d17831-1200x1200.png?w=3840&h=3840&q=80&fit=crop&auto=format"
                    alt="Mitopure"
                    className="w-full h-full object-contain"
                  />
                </span>
                <span>that changes</span>

              </div>
            </div>
            how cells age.

          </h1>
        </div>
      </section>

      <section className="w-full min-h-screen lg:h-[160vh] h-full relative overflow-hidden mt-4">
        {/* Background Image */}
        {/* ================= MOBILE IMAGE ================= */}
        <div className="lg:hidden w-full h-screen relative overflow-hidden rounded-2xl">

          <img
            src="https://cdn.sanity.io/images/bxsu76x0/timeline-nutrition/1620d46dfde74bf360162c9420c1218b1c1eaf2f-4096x3202.jpg?w=1920&h=1501&q=80&fit=crop&auto=format"
            alt="banner"
            className="w-full h-full object-cover"
          />

        </div>
        <div className="hidden lg:block w-full h-full">

          <img
            src="https://cdn.sanity.io/images/bxsu76x0/timeline-nutrition/1620d46dfde74bf360162c9420c1218b1c1eaf2f-4096x3202.jpg?w=1920&h=1501&q=80&fit=crop&auto=format"
            alt="banner"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 flex items-start justify-center text-center px-6 ">

          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold max-w-3xl leading-tight mt-15">
            Weak mitochondria affect every system in your body.
          </h2>


          {/* HOTSPOT 1 */}
          <div
            className="absolute 
    top-[30%] left-[22%] 
    lg:top-[22%] lg:left-[30%] 
    z-20"
          >
            {/*  Button  */}
            {active !== 1 && (
              <button
                onClick={() => setActive(1)}
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black font-bold shadow-lg hover:scale-110 transition"
              >
                +
              </button>
            )}

            {/* Popup */}
            {active === 1 && (
              <div
                className="
        fixed inset-0 z-50 flex items-center justify-center bg-black/40
        sm:absolute sm:left-12 sm:top-0 sm:w-[360px] sm:bg-transparent sm:block
      "
              >
                <div
                  className="
          relative
          w-full h-full
          bg-white
                    text-left

          rounded-none
          shadow-none
          flex flex-col
          overflow-hidden

          sm:w-[360px] sm:h-auto sm:rounded-xl sm:shadow-2xl sm:max-h-[350px]
        "
                >
                  {/* Close Button */}
                  <button
                    onClick={() => setActive(null)}
                    className="absolute top-4 right-4 text-gray-500 hover:text-black"
                  >
                    ✕
                  </button>

                  {/* Scrollable Content */}
                  <div className="flex-1 overflow-y-auto p-4 sm:p-5">
                    {/* Title */}
                    <h3 className="font-semibold text-2xl sm:text-2xl mb-2">
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
                      <p className="text-2xl sm:text-2xl font-medium mb-2">
                        Scientific Research
                      </p>

                      <ul className="text-xs text-gray-600 space-y-3">
                        <li>
                          Grimm, A. &amp; Eckert, A. (2017). Brain aging and neurodegeneration.
                          <br />
                          <a
                            href="https://doi.org/10.1111/jnc.14037"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline break-all"
                          >
                            https://doi.org/10.1111/jnc.14037
                          </a>
                        </li>

                        <li>
                          Fang et al. (2019). Mitophagy inhibits amyloid-β.
                          <br />
                          <a
                            href="https://doi.org/10.1038/s41593-018-0332-9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline break-all"
                          >
                            https://doi.org/10.1038/s41593-018-0332-9
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* HOTSPOT 2 */}
          <div
            className="absolute 
    top-[40%] left-[35%] 
    lg:top-[35%] lg:left-[38%] 
    z-20"
          >
            {/*  Button  */}
            {active !== 2 && (
              <button
                onClick={() => setActive(2)}
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black font-bold shadow-lg hover:scale-110 transition"
              >
                +
              </button>
            )}

            {/* Popup */}
            {active === 2 && (
              <div
                className="
        fixed inset-0 z-50 flex items-center justify-center bg-black/40
        sm:absolute sm:left-12 sm:top-0 sm:w-[360px] sm:bg-transparent sm:block
      "
              >
                <div
                  className="
    relative
    w-full h-full
    bg-white
    rounded-none
          text-left

    sm:w-[360px] sm:h-auto sm:rounded-xl
          rounded-xl
          shadow-2xl
          flex flex-col
          overflow-hidden

          sm:h-auto sm:max-h-[350px]
        "
                >
                  {/* Close Button */}
                  <button
                    onClick={() => setActive(null)}
                    className="absolute top-4 right-4 text-gray-500 hover:text-black"
                  >
                    ✕
                  </button>

                  {/* Scrollable Content */}
                  <div className="flex-1 overflow-y-auto p-4">
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
                          Martini H, Passos JF. Cellular senescence: all roads lead to
                          mitochondria. FEBS J. 2023;290(5):1186-1202.
                        </li>

                        <li>
                          Dodig S, Čepelak I, Pavić I. Hallmarks of senescence and aging.
                          Biochem Med (Zagreb). 2019;29(3):030501.
                          doi:10.11613/BM.2019.030501
                          <br />
                          <a
                            href="https://doi.org/10.1038/s41593-018-0332-9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline break-all"
                          >
                            https://doi.org/10.1038/s41593-018-0332-9
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>


          {/* HOTSPOT 3 */}
          <div
            className="absolute 
    top-[48%] left-[45%] 
    lg:top-[50%] lg:left-[52%] 
    z-20"
          >
            {/* Button  */}
            {active !== 3 && (
              <button
                onClick={() => setActive(3)}
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black font-bold shadow-lg hover:scale-110 transition"
              >
                +
              </button>
            )}

            {/* Popup */}
            {active === 3 && (
              <div
                className="
        fixed inset-0 z-50 flex items-center justify-center bg-black/40
        sm:absolute sm:left-12 sm:top-0 sm:w-[360px] sm:bg-transparent sm:block
      "
              >
                <div
                  className="
          relative
          w-full h-full
          bg-white
          text-left
          rounded-none
          shadow-none
          flex flex-col
          overflow-hidden

          sm:w-[360px] sm:h-auto sm:rounded-xl sm:shadow-2xl sm:max-h-[350px]
        "
                >
                  {/* Close Button */}
                  <button
                    onClick={() => setActive(null)}
                    className="absolute top-4 right-4 text-gray-500 hover:text-black"
                  >
                    ✕
                  </button>

                  {/* Scrollable Content */}
                  <div className="flex-1 overflow-y-auto p-4">
                    <h3 className="font-semibold text-2xl mb-3">
                      Immune system
                    </h3>

                    <p className="text-sm text-gray-600 mb-3">
                      The immune system becomes less effective over time. Evidence is rising on the
                      importance of mitochondria in immune aging.
                    </p>

                    {/* Research */}
                    <div className="border-t pt-4">
                      <p className="text-2xl font-medium mb-3  flex">
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
                            className="text-blue-600 underline break-all"
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
                            className="text-blue-600 underline break-all"
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
                            className="text-blue-600 underline break-all"
                          >
                            https://doi.org/10.1172/JCI120842
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* HOTSPOT 4 */}
          <div
            className="absolute 
    top-[58%] left-[28%] 
    lg:top-[60%] lg:left-[38%] 
    z-20"
          >
            {/*  Button  */}
            {active !== 4 && (
              <button
                onClick={() => setActive(4)}
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black font-bold shadow-lg hover:scale-110 transition"
              >
                +
              </button>
            )}

            {/* Popup */}
            {active === 4 && (
              <div
                className="
        fixed inset-0 z-50 flex items-center justify-center bg-black/40
        sm:absolute sm:left-12 sm:top-0 sm:w-[360px] sm:bg-transparent sm:block
      "
              >
                <div
                  className="
          relative
          w-full h-full
          bg-white
                    text-left

          rounded-none
          shadow-none
          flex flex-col
          overflow-hidden

          sm:w-[360px] sm:h-auto sm:rounded-xl sm:shadow-2xl sm:max-h-[350px]
        "
                >
                  {/* Close Button */}
                  <button
                    onClick={() => setActive(null)}
                    className="absolute top-4 right-4 text-gray-500 hover:text-black"
                  >
                    ✕
                  </button>

                  {/* Scrollable Content */}
                  <div className="flex-1 overflow-y-auto p-4">
                    <h3 className="font-semibold text-2xl mb-2">
                      Joints
                    </h3>

                    <p className="text-sm text-gray-600 mb-3">
                      Joint health is key for mobility, independence and quality of life as you age.
                      The cells that keep joints functional progressively decline in function.
                      There is emerging science around the link between mitochondrial health and joint health.
                    </p>

                    {/* Research */}
                    <div className="border-t pt-3">
                      <p className="text-2xl font-medium mb-2">
                        Scientific Research
                      </p>

                      <ul className="text-xs text-gray-600 space-y-2">
                        <li>
                          Mao X, Fu P, Wang L and Xiang C (2020) Mitochondria: Potential Targets
                          for Osteoarthritis. Front. Med. 7:581402.
                          <br />
                          <a
                            href="https://doi.org/10.1038/s41593-018-0332-9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline break-all"
                          >
                            https://doi.org/10.1038/s41593-018-0332-9
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* HOTSPOT 5 */}
          <div
            className="absolute 
    top-[68%] left-[55%] 
    lg:top-[72%] lg:left-[66%] 
    z-20"
          >
            {/* + Button (Hide when active) */}
            {active !== 5 && (
              <button
                onClick={() => setActive(5)}
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black font-bold shadow-lg hover:scale-110 transition"
              >
                +
              </button>
            )}

            {/* Popup */}
            {active === 5 && (
              <div
                className="
        fixed inset-0 z-50 flex items-center justify-center bg-black/40
        sm:absolute sm:left-12 sm:top-0 sm:w-[360px] sm:bg-transparent sm:block
      "
              >
                <div
                  className="
          relative
          w-full h-full
          bg-white
                    text-left

          rounded-none
          shadow-none
          flex flex-col
          overflow-hidden

          sm:w-[360px] sm:h-auto sm:rounded-xl sm:shadow-2xl sm:max-h-[350px]
        "
                >
                  {/* Close Button */}
                  <button
                    onClick={() => setActive(null)}
                    className="absolute top-4 right-4 text-gray-500 hover:text-black"
                  >
                    ✕
                  </button>

                  {/* Scrollable Content */}
                  <div className="flex-1 overflow-y-auto p-4">
                    <h3 className="font-semibold text-2xl mb-2">
                      Digestive system
                    </h3>

                    <p className="text-sm text-gray-600 mb-2">
                      The digestive system is essential to metabolic health, immunity and
                      overall well-being. Mitochondrial health has been associated with
                      improved gut barrier health.
                    </p>

                    {/* Research */}
                    <div className="border-t pt-3">
                      <p className="text-2xl font-medium mb-2">
                        Scientific Research
                      </p>

                      <ul className="text-xs text-gray-600 space-y-2">
                        <li>
                          Singh, R. &amp;, ChandrashekharFirsta, S., Bodduluri, S.R. et al.
                          Enhancement of the gut barrier integrity by a microbial metabolite
                          through the Nrf2 pathway. <i>Nat Commun 10.</i>, 89 (2019).
                          <br />
                          <a
                            href="https://www.nature.com/articles/s41467-018-07859-7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline break-all"
                          >
                            https://www.nature.com/articles/s41467-018-07859-7
                          </a>
                        </li>

                        <li>
                          Toney, A.M. &amp;, Fan, R., Xian, Y., Chaidez, V., Ramer-Tait, A.E.
                          and Chung, S. (2019), Urolithin A, a Gut Metabolite, Improves Insulin
                          Sensitivity Through Augmentation of Mitochondrial Function and
                          Biogenesis. <i>Obesity</i>, 27: 612-620.
                          <br />
                          <a
                            href="https://onlinelibrary.wiley.com/doi/10.1002/oby.22404"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline break-all"
                          >
                            https://onlinelibrary.wiley.com/doi/10.1002/oby.22404
                          </a>
                        </li>

                        <li>
                          Urolithin A Prevents Cisplatin-Induced Nephrotoxicity Melissa Guada,
                          Raghu Ganugula, Manicka Vadhanam and Majeti N.V. Ravi Kumar Journal of
                          Pharmacology and Experimental Therapeutics October 1, 2017, 363 (1)
                          58-65.
                          <br />
                          <a
                            href="https://linkinghub.elsevier.com/retrieve/pii/S0022356524271731"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline break-all"
                          >
                            https://linkinghub.elsevier.com/retrieve/pii/S0022356524271731
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* HOTSPOT 6 */}
          <div
            className="absolute 
    top-[80%] left-[40%] 
    lg:top-[85%] lg:left-[44%] 
    z-20"
          >
            {/* + Button (Hide when active) */}
            {active !== 6 && (
              <button
                onClick={() => setActive(6)}
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black font-bold shadow-lg hover:scale-110 transition"
              >
                +
              </button>
            )}

            {/* Popup */}
            {active === 6 && (
              <div
                className="
        fixed inset-0 z-50 flex items-center justify-center bg-black/40
        sm:absolute sm:left-12 sm:top-0 sm:w-[360px] sm:bg-transparent sm:block
      "
              >
                <div
                  className="
          relative
          w-full h-full
          bg-white
                    text-left

          rounded-none
          shadow-none
          flex flex-col
          overflow-hidden

          sm:w-[360px] sm:h-auto sm:rounded-xl sm:shadow-2xl sm:max-h-[350px]
        "
                >
                  {/* Close Button */}
                  <button
                    onClick={() => setActive(null)}
                    className="absolute top-4 right-4 text-gray-500 hover:text-black"
                  >
                    ✕
                  </button>

                  {/* Scrollable Content */}
                  <div className="flex-1 overflow-y-auto p-4">
                    <h3 className="font-semibold text-2xl mb-2">
                      Skeletal muscle
                    </h3>

                    <p className="text-sm text-gray-600 mb-3">
                      During strenuous exercise, the rate of energy use in skeletal muscles
                      can increase more than 100-fold almost instantly. Muscle cells need
                      healthy mitochondria in order to meet this energy demand. Our clinical
                      studies have shown improved muscle strength as a result of improved
                      mitochondrial function.
                    </p>

                    {/* Research */}
                    <div className="border-t pt-3">
                      <p className="text-sm text-gray-700 leading-relaxed mb-4">
                        Scientific Research
                      </p>

                      <ul className="text-xs text-gray-600 space-y-2">
                        <li>
                          Andreux, P.A., van Diemen, M.P.J., Heezen, M.R. et al.
                          Mitochondrial function is impaired in the skeletal muscle of
                          pre-frail elderly. <i>Sci Rep 8</i>, 8548 (2018).
                          <br />
                          <a
                            href="https://www.nature.com/articles/s41598-018-26944-x"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline break-all"
                          >
                            https://www.nature.com/articles/s41598-018-26944-x
                          </a>
                        </li>

                        <li>
                          Ryu, D., Mouchiroud, L., Andreux, P. et al.
                          Urolithin A induces mitophagy and prolongs lifespan in C. elegans
                          and increases muscle function in rodents.
                          <i> Nat Med 22</i>, 879–888 (2016).
                          <br />
                          <a
                            href="https://www.nature.com/articles/nm.4132"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline break-all"
                          >
                            https://www.nature.com/articles/nm.4132
                          </a>
                        </li>

                        <li>
                          Luan P, D'Amico D, Andreux PA, Laurila PP, Wohlwend M, Li H,
                          Imamura de Lima T, Place N, Rinsch C, Zanou N, Auwerx J.
                          Urolithin A improves muscle function by inducing mitophagy in
                          muscular dystrophy.
                          <i> Sci Transl Med 13</i>: eabb0319, 2021.
                          <br />
                          <a
                            href="https://www.science.org/doi/10.1126/scitranslmed.abb0319"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline break-all"
                          >
                            https://www.science.org/doi/10.1126/scitranslmed.abb0319
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

      </section>

      {/* SECTION 3 — BACKGROUND IMAGE + TEXT */}
      <section className="w-full mt-4 min-h-[400px] lg:h-[600px]">

        {/* MOBILE LAYOUT */}
        <div className="flex flex-col lg:hidden">

          {/* TEXT */}
          <div className="px-2 py-2 text-black ">
            <h1 className="text-2xl font-semibold mb-4">
              ~90% of our cellular energy is produced by mitochondria
            </h1>

            <p className="leading-relaxed text-[14px] text-gray-600">
              Mitochondria are our cellular powerhouses. The trillions of cells that
              comprise our body tissues run on the energy created by them.
            </p>
          </div>

          {/* IMAGE */}
          <img
            src="https://framerusercontent.com/images/Jce5yrUyXMpP7QT3ntPhYnNq7AU.png?width=1184&height=864"
            alt="Mitochondria"
            className="w-full h-[280px] object-cover"
          />

        </div>

        <div
          className="hidden lg:flex w-full h-full bg-cover bg-center flex-row-reverse items-center"
          style={{
            backgroundImage:
              "url('https://framerusercontent.com/images/Jce5yrUyXMpP7QT3ntPhYnNq7AU.png?width=1184&height=864')",
          }}
        >
          <div className="max-w-3xl px-6 text-black">

            <h1 className="text-5xl font-semibold mb-4">
              ~90% of our cellular energy is produced by mitochondria
            </h1>

            <p className="leading-relaxed text-[18px] text-gray-600">
              Mitochondria are our cellular powerhouses. The trillions of cells that
              comprise our body tissues run on the energy created by them.
            </p>

          </div>
        </div>

      </section>

      {/*New Section with text and images */}
      <section className="w-full bg-white lg:px-5 py-10 lg:mb-4">
        <div className=" lg:flex lg:flex-row justify-left flex flex-col-reverse">
          {/* LEFT CONTENT */}
          <div className="lg:w-[58rem] w-full">
            <h1 className="text-5xl lg:text-6xl font-semibold leading-tight text-gray-900 lg:m-0 m-4">
              Mitopure® Urolithin A, the <br />
              nutrient that can reenergize cells
            </h1>

            <p className=" text-gray-600 text-[17px] lg:text-[17px] md:text-lg lg:m-0 m-4">
              As we age, our cells age. Mitopure® is a pure and patented form of
              Urolithin A, the first postbiotic nutrient shown to trigger a crucial
              recycling process within our cells called mitophagy, targeting
              age-related cellular decline.*
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full sm:w-[20rem] md:w-[28rem] lg:w-[44rem] h-auto lg:h-[38rem] mx-auto md:ml-auto mt-2 mb-2">
            <img
              src="https://framerusercontent.com/images/GUS3ttJJ9DvsFB8TXPtgUzpkmg.png?width=1290&height=1292"
              alt="Smiling woman"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </section>

      <section className="min-h-[200vh] relative ">

        <div className="flex flex-col lg:flex-row gap-12 max-w-10xl  px-2">

          {/* LEFT — STICKY IMAGE */}
          <div className="w-100 lg:w-180">

            <div className="sticky  lg:top-20 mt-2 lg:mt-0 lg:h-[100vh] overflow-hidden rounded-xl">

              <img
                src={data[activeIndex].image}
                alt="Scroll visual"
                className="w-full h-full object-cover transition-all duration-700 ease-in-out"
              />

            </div>

          </div>


          {/* RIGHT — SCROLL CONTENT */}
          <div className="w-full lg:w-1/2">

            {/* BLOCK 1 */}
            <div
              ref={(el) => (sectionsRef.current[0] = el)}
              data-index="0"
              className=" lg:min-h-screen flex flex-col justify-center space-y-6"
            >

              <h1 className="text-2xl mx-2 lg:mx-2 sm:text-3xl lg:text-5xl font-medium mb-4">
                This decline starts earlier than you might think</h1>

              <p className="text-[15px] mx-2 lg:mx-2 sm:text-[17px] lg:text-[18px] text-gray-600">
                Age-associated mitochondrial decline leads to a progressive decline in our metabolism, our overall energy levels,
                our resiliency, our skin health and our muscle function.
              </p>

              {/* Tabs */}
              <div className="flex gap-6">

                <button
                  className={` lg:text-lg ${activeTab === "muscle"
                    ? "underline font-semibold"
                    : "text-gray-500"
                    }`}
                  onClick={() => setActiveTab("muscle")}
                >
                  Muscle Function
                </button>

                <button
                  className={`lg:text-lg ${activeTab === "skin"
                    ? "underline font-semibold"
                    : "text-gray-500"
                    }`}
                  onClick={() => setActiveTab("skin")}
                >
                  Skin Health
                </button>

              </div>


              {/* Graph */}
              <div className="w-full h-[260px]">

                {activeTab === "muscle" && (
                  <img
                    src="https://framerusercontent.com/images/6QTQuvwC3MO78yEDidqQvn9gUEI.png?width=1212&height=1008"
                    className="w-full h-full object-cover"
                    alt=""
                  />
                )}

                {activeTab === "skin" && (
                  <img
                    src="https://framerusercontent.com/images/izWslMMHMxOjWNtTVviYv62Ygg.png?scale-down-to=1024&width=1240&height=1010"
                    className="w-full h-full object-cover"
                    alt=""
                  />
                )}

              </div>
              <div>
                <p className="text-[15px] mx-2 lg:mx-2 lg:mx-0 lg:text-[18px] text-gray-600 mt-2">
                  Age-associated mitochondrial decline leads to a progressive decline in our metabolism, our overall energy levels,
                  our resiliency, our skin health and our muscle function.
                </p>
              </div>
            </div>


            {/* BLOCK 2 */}
            <div
              ref={(el) => (sectionsRef.current[1] = el)}
              data-index="1"
              className="min-h-screen flex flex-col justify-center space-y-6"
            >
              {/* IMAGE 2 */}
              <img
                src="https://framerusercontent.com/images/mrwQTr8nmT9NwJAlyxFFxgBpms.png?scale-down-to=1024&width=2048&height=2048"
                className="w-full h-[260px] object-cover rounded-lg lg:hidden"
                alt=""
              />
              <h1 className="text-2xl sm:text-3xl lg:text-5xl font-medium mb-6">
                Healthy cells rely on a powerful recycling process
              </h1>

              <p className="text-[15px] sm:text-[16px] lg:text-[17px] text-gray-600">
                A process called mitophagy cleans up defective mitochondria and allows
                the mitochondria to repair themselves and improve their performance.
                This recycling and cleansing mechanism is proven to provide valuable
                health benefits.
              </p>


              {/* FEATURES GRID */}
              <div className="flex flex-wrap lg:flex-nowrap gap-6 lg:gap-12">

                {[
                  "Better mitochondria quality",
                  "Improved cellular health",
                  "Improved muscle strength",
                  "Improved skin health",
                ].map((text, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-start gap-2 ml-2 lg:ml-0 lg:gap-3  h-28 w-28 lg:h-45 lg:w-25"
                  >

                    <svg
                      viewBox="0 0 24 24"
                      className="w-3 h-3 lg:w-6 lg:h-6 text-gray-700"
                      aria-hidden="true"
                    >
                      <use href="#3325540311" />
                    </svg>

                    <div className="w-35 h-[1px] bg-gray-400" />

                    <p className=" text-[14px] ml-2 lg:text-[20px] text-gray-600">{text}</p>

                  </div>
                ))}

              </div>
              <div className="flex gap-2 mt-4">

                <div className="flex gap-2 ">
                  <div className="w-10 h-10 mt-2 rounded-full border border-gray-400 flex items-center justify-center bg-gray shadow">

                    <svg
                      viewBox="0 0 22 22"
                      className="w-4 h-4 lg:w-8 lg:h-8 text-gray-800"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      onClick={() => setActiveTab("NewSectionPage")}

                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>

                  </div>
                  <span className="text-[16px] mt-4 underline text-gray-600">HOW METHODOLOGY WORKS</span>
                </div>


              </div>
            </div>

          </div>

        </div>

      </section>

      {activeTab === "NewSectionPage" && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">


          {/* =================  MOBILE VIEW ================= */}
          <div className="lg:hidden relative bg-white w-full h-full overflow-y-auto p-5">

            {/* Close */}
            <button
              onClick={() => setActiveTab(null)}
              className="absolute top-4 right-4 text-2xl text-gray-600"
            >
              ✕
            </button>


            {/* Header */}
            <div className="mb-6">
              <h2 className="text-xl font-medium text-gray-800">
                <span className="text-red-500 mr-2">001</span>
                Topic Name
              </h2>
            </div>


            {/* Image */}
            <img
              src="https://framerusercontent.com/images/3tXWvlFWx7bl8bwlT98iA9U5pL0.png?scale-down-to=1024&width=1254&height=1596"
              alt="Mitochondria Process"
              className="w-full max-w-xs mx-auto mb-8"
            />


            {/* Sections */}
            <div className="space-y-8 text-gray-700">

              <div>
                <p className="text-red-500 text-sm font-medium mb-1">001</p>
                <h3 className="text-lg font-medium mb-2">Fission</h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  Mitochondria are broken down into smaller fragments and any that
                  are damaged are separated so that they can be targeted by
                  mitophagy.
                </p>
              </div>


              <div>
                <p className="text-red-500 text-sm font-medium mb-1">002</p>
                <h3 className="text-lg font-medium mb-2">Mitophagy</h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  Born out of a decade of rigorous scientific research and
                  discovery, we have unlocked the bioactive properties.
                </p>
              </div>


              <div>
                <p className="text-red-500 text-sm font-medium mb-1">003</p>
                <h3 className="text-lg font-medium mb-2">Biogenesis</h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  A process that takes place when new healthy mitochondria are
                  regenerated by our cells.
                </p>
              </div>

            </div>
          </div>



          {/* =================DESKTOP VIEW ================= */}
          <div className="hidden lg:block relative bg-white w-full h-full max-w-none max-h-none overflow-y-auto p-4 sm:p-8">

            {/* Close Button */}
            <button
              onClick={() => setActiveTab(null)}
              className="absolute top-4 right-4 text-2xl text-gray-600 hover:text-black"
            >
              ✕
            </button>


            {/* Header */}
            <h2 className="text-4xl font-medium mb-10">
              <span className="text-red-500 mr-2">001</span>
              Topic Name
            </h2>


            {/* Content */}
            <div className="grid md:grid-cols-2 gap-12 items-start">


              {/* Left Image */}
              <img
                src="https://framerusercontent.com/images/3tXWvlFWx7bl8bwlT98iA9U5pL0.png?scale-down-to=1024&width=1254&height=1596"
                alt="Mitochondria Process"
                className="w-full max-w-md mx-auto"
              />


              {/* Right Text */}
              <div className="space-y-10 text-gray-700">

                <div>
                  <p className="text-red-500 text-2xl font-medium">001</p>
                  <h3 className="text-2xl font-normal">Fission</h3>
                  <p className="mt-2 text-gray-500 text-[19px]">
                    Mitochondria are broken down into smaller fragments and any that
                    are damaged are separated so that they can be targeted by
                    mitophagy.
                  </p>
                </div>


                <div>
                  <p className="text-red-500 text-2xl font-medium">002</p>
                  <h3 className="text-2xl font-normal">Mitophagy</h3>
                  <p className="mt-2 text-gray-500 text-[19px]">
                    Born out of a decade of rigorous scientific research.
                  </p>
                </div>


                <div>
                  <p className="text-red-500 text-2xl font-medium">003</p>
                  <h3 className="text-2xl font-normal">Biogenesis</h3>
                  <p className="mt-2 text-gray-500 text-[19px]">
                    A process that takes place when new healthy mitochondria are
                    regenerated.
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>
      )}
      {
        activeTab === "NewSection" && (
          <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">


            {/* ================= MOBILE VIEW ================= */}
            <div className="lg:hidden relative bg-white w-full h-full overflow-y-auto p-5">

              {/* Close Button */}
              <button
                onClick={() => setActiveTab(null)}
                className="absolute top-4 right-4 text-2xl text-gray-600"
              >
                ✕
              </button>


              {/* Heading */}
              <div className="mb-6">

                <h2 className="text-xl font-semibold text-gray-800">
                  <span className="text-red-500 mr-2">002</span>
                  Scientific Research
                </h2>

                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  During the past decade, our research has explored the efficacy of
                  Urolithin A and its effects have been validated in numerous
                  peer-reviewed pre-clinical and clinical trials.
                </p>

                <button className="mt-4 px-4 py-2 border border-gray-500 rounded-full text-sm">
                  Our Studies →
                </button>

              </div>


              {/* Image */}
              <img
                src="https://framerusercontent.com/images/hii5gAGZp77kl9LH2sOM8ujBeE.png?scale-down-to=1024&width=2088&height=1248"
                alt="Scientific Research Graph"
                className="w-full object-contain"
              />

            </div>



            {/* ================= DESKTOP VIEW  ================= */}
            <div className="hidden lg:block relative bg-white w-full h-full max-w-none max-h-none overflow-y-auto p-8">

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
        )
      }
      <section className="w-full mt-4 min-h-[400px] lg:h-[600px]">

        <div className="lg:hidden flex flex-col">

          {/* TEXT */}
          <div className="px-6 py-8 text-black bg-white">

            <h1 className="text-2xl font-semibold mb-4 leading-snug">
              Meet Urolithin A, a rare molecule that renews our cellular powerhouses
            </h1>

            <p className="text-[15px] text-gray-600 leading-relaxed mb-6">
              Our scientists unlocked the power of Urolithin A, a molecule that
              stimulates this crucial recycling and cleansing process – ultimately
              protecting cells from age-associated decline.
            </p>

            <button
              onClick={() => setActiveTab("NewSection")}
              className="flex items-center gap-2 text-sm uppercase tracking-wide border-b border-gray-700 pb-1"
            >
              <span className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center">
                +
              </span>
              Scientific Research
            </button>

          </div>

          {/* IMAGE */}
          <img
            src="https://framerusercontent.com/images/MTUNUS9x90cDqWoxGr17o7Sug.png?width=1200&height=800"
            alt="Urolithin A"
            className="w-full h-[300px] object-cover"
          />

        </div>


        <div
          className="w-full h-full bg-cover bg-center hidden lg:flex flex-row-reverse items-center"
          style={{
            backgroundImage:
              "url('https://framerusercontent.com/images/MTUNUS9x90cDqWoxGr17o7Sug.png?width=1200&height=800')",
          }}
        >
          <div className="flex ">
            <div className="max-w-3xl px-10 text-black justify-end">

              <h1 className="text-5xl font-semibold mb-4">
                Meet Urolithin A, a rare molecule that renews our cellular powerhouses</h1>

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
                  onClick={() => setActiveTab("NewSection")}

                >
                  <path d="M12 5v14M5 12h14" />
                </svg>

              </div>

            </div>

          </div>
        </div>

      </section>

      {/*Section 7 */}
      <section className="w-full mt-4">

        <div className="lg:hidden w-full  mx-auto rounded-xl overflow-hidden shadow-lg">

          {/* Image */}
          <img
            src="https://cdn.sanity.io/images/bxsu76x0/timeline-nutrition/8c611702abdea847d301886430526fc7180c3e84-2800x739.jpg?rect=1,0,2799,739&w=1920&h=507&q=80&fit=crop&auto=format"
            alt="Banner"
            className="w-full h-[220px] object-fit"
          />

          {/* Content */}
          <div className="bg-[#1f2430] p-6 text-center">

            <p className="text-white text-sm mb-3">
              Powered by{" "}
              <span className="bg-[#C2483F] px-2 py-1 rounded text-xs ml-1">
                mitopure®
              </span>
            </p>

            <h2 className="text-white text-xl font-medium leading-snug">
              Change how your cells age.
            </h2>

            <p className="text-gray-400 text-base mt-2">
              Explore our science-backed longevity solutions.
            </p>

            <button className="mt-5 px-6 py-2 bg-white text-black text-sm rounded hover:bg-gray-200 transition">
              SHOP SUPPLEMENTS
            </button>

          </div>
        </div>


        <div
          className="hidden lg:flex w-full h-[400px] bg-cover bg-center items-center"
          style={{
            backgroundImage:
              "url('https://cdn.sanity.io/images/bxsu76x0/timeline-nutrition/8c611702abdea847d301886430526fc7180c3e84-2800x739.jpg?rect=1,0,2799,739&w=1920&h=507&q=80&fit=crop&auto=format')",
          }}
        >
          <div className="grid mx-2">

            <div className="flex h-15 w-55">
              <h1 className="text-white text-[18px]">
                Powered by{" "}
                <span className="bg-[#C2483F] text-white text-[16px] p-1 rounded-md mx-2">
                  mitopure®
                </span>
              </h1>
            </div>

            <div className="w-full max-w-xl text-xl sm:text-3xl">
              <h1 className="text-white">
                Change how your cells age. Explore our
              </h1>

              <h1 className="text-gray-500">
                science-backed longevity solutions.
              </h1>
            </div>

            <div className="group bg-white w-42 h-10 p-2 px-3 mt-4 rounded-sm hover:bg-gray-500">
              <button className="text-[13px] text-black group-hover:text-white">
                SHOP SUPPLEMENTS
              </button>
            </div>

          </div>
        </div>

      </section>

      {/*Section-8 */}
      <section className="w-full bg-[#faf9f6] px-4 lg:px-6 md:px-12 py-10 lg:py-20">
        <div className="w-full">

          {/* GRID */}
          <div className="grid grid-cols-3 md:grid-cols-3 gap-1 lg:gap-6">

            {/* CARD 1 */}
            <div className="bg-[#f1f0ec] rounded-2xl p-10 flex flex-col items-center justify-center text-center">
              <img
                src="https://dummyimage.com/80x80/000/fff&text=P"
                alt="Placebo"
                className="mb-6"
              />
              <p className="text-sm tracking-widest text-gray-600">
                PLACEBO-CONTROLLED
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-[#f1f0ec] rounded-2xl p-10 flex flex-col items-center justify-center text-center">
              <img
                src="https://dummyimage.com/80x80/000/fff&text=FDA"
                alt="FDA"
                className="mb-6"
              />
              <p className="text-sm tracking-widest text-gray-600">FDA GRAS</p>
            </div>

            {/* CARD 3 */}
            <div className="bg-[#f1f0ec] rounded-2xl p-10 flex flex-col items-center justify-center text-center">
              <img
                src="https://dummyimage.com/80x80/000/fff&text=NSF"
                alt="NSF"
                className="mb-6"
              />
              <p className="text-sm tracking-widest text-gray-600">
                NSF CERTIFIED
              </p>
            </div>

            {/* CARD 4 */}
            <div className="bg-[#f1f0ec] rounded-2xl p-10 flex flex-col items-center justify-center text-center">
              <img
                src="https://dummyimage.com/80x80/000/fff&text=FSSC"
                alt="FSSC"
                className="mb-6"
              />
              <p className="text-sm tracking-widest text-gray-600">FSSC 22000</p>
            </div>

            {/* CARD 5 */}
            <div className="bg-[#f1f0ec] rounded-2xl p-10 flex flex-col items-center justify-center text-center">
              <img
                src="https://dummyimage.com/80x80/000/fff&text=SMETA"
                alt="SMETA"
                className="mb-6"
              />
              <p className="text-sm tracking-widest text-gray-600">SMETA</p>
            </div>

            {/* CARD 6 */}
            <div className="bg-[#f1f0ec] rounded-2xl p-10 flex flex-col items-center justify-center text-center">
              <img
                src="https://dummyimage.com/80x80/000/fff&text=SEDEX"
                alt="Sedex"
                className="mb-6"
              />
              <p className="text-sm tracking-widest text-gray-600">SEDEX</p>
            </div>
          </div>

          {/* FULL CARD */}
          <div className="mt-2 lg:mt-6  bg-[#f1f0ec] rounded-2xl p-14 flex flex-col items-center text-center">
            <img
              src="https://dummyimage.com/120x80/000/fff&text=ISO"
              alt="ISO"
              className="lg:mb-6 mb-2 "
            />
            <p className="text-sm tracking-widest text-gray-600">
              ISO 14001 CERTIFICATION &nbsp;&nbsp; ISO 45001 CERTIFICATION
            </p>
          </div>

        </div>
      </section>
      {/*New Section */}
      <section className="bg-[#f7f6f2]  py-6 md:py-20">
        <div className="m-2" >

          {/* Heading */}
          <h2 className="text-4xl  md:text-4xl font-semibold text-gray-900 lg:ml-0 m-2">
            Rigorously tested and made from high-quality ingredients
          </h2>

          {/* Description */}
          <p className="text-lg md:text-base text-gray-700 w-full p-2">
            We believe that it's our responsibility to take the extra steps necessary
            to ensure that our products are safe and effective, and we are committed
            to upholding these high standards for all of our dietary supplements.
          </p>

          {/* Divider */}
          <div className="mt-8 border-t border-dotted border-gray-300" />

          {/* List */}
          <div className="mt-4">

            {[
              "Placebo Controlled Clinical Studies",
              "FDA GRAS",
              "NSF for Sports",
              "FSSC 22000",
              "SMETA",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b border-dotted border-gray-300 py-4"
              >
                <span className="text-gray-800 text-xl font-medium">{item}</span>
                <span className="text-2xl font-light">+</span>
              </div>
            ))}

          </div>
        </div>
      </section>
      {/*New Section 10 */}
      <section className="bg-[#f6f5f1] px-4 py-12 md:py-20">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-900">
              7 placebo-controlled <br className="hidden md:block" />
              clinical studies
            </h2>

            <p className="mt-4 text-sm md:text-base text-gray-700 leading-relaxed max-w-md">
              For over 15 years, we have pioneered meaningful scientific discoveries
              on Urolithin A and put them to the scrutiny of the scientific community
              by publishing in high impact, peer-reviewed journals.
            </p>

            <button className="mt-6 inline-flex items-center gap-3 bg-[#2b2b26] text-white px-6 py-3 text-sm font-medium rounded-md hover:bg-black transition">
              OUR STUDIES
              <span className="text-lg">→</span>
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center md:justify-end">
            <img
              src="https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=600&q=80"
              alt="Scientific pipette"
              className="w-48 md:w-72 object-contain"
            />
          </div>

        </div>

        {/* BOTTOM TEXT */}
        <div className="mt-12 text-center">
          <h3 className="text-4xl md:text-4xl font-semibold text-gray-900">
            Life-Altering Science™
          </h3>
        </div>
      </section>
    </div >
  );
}

export default First;