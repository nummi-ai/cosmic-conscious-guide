import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-warm">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/5 animate-gradient"></div>

      {/* Floating subtle shapes - MORE VISIBLE */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/12 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-tertiary/10 rounded-full blur-3xl animate-float-slow"></div>
      </div>

      <div className="container relative z-10 px-4 py-10 md:py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <svg width="64" height="70" viewBox="0 0 800 869" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-90">
              <path d="M163.215 208.936C169.715 202.015 176.504 195.391 183.563 189.08L411.266 107.556C420.726 107.952 430.177 108.763 439.593 109.985L163.215 208.936Z" fill="url(#paint0_linear_22_47)"/>
              <path d="M134.254 244.445C138.418 238.545 142.764 232.798 147.284 227.21L463.502 113.995C470.541 115.444 477.547 117.127 484.51 119.044L134.254 244.445Z" fill="url(#paint1_linear_22_47)"/>
              <path d="M114.094 276.805C117.041 271.411 120.126 266.115 123.346 260.922L503.397 124.853C509.181 126.822 514.927 128.956 520.627 131.255L114.094 276.805Z" fill="url(#paint2_linear_22_47)"/>
              <path d="M99.4228 307.197C100.489 304.673 101.587 302.159 102.717 299.658C103.847 297.155 105.005 294.67 106.192 292.203L536.507 138.138C538.99 139.291 541.462 140.476 543.924 141.693C546.384 142.909 548.828 144.155 551.255 145.429L99.4228 307.197Z" fill="url(#paint3_linear_22_47)"/>
              <path d="M88.7059 336.177C90.2403 331.367 91.8826 326.588 93.6327 321.842L565.024 153.071C569.388 155.627 573.691 158.278 577.929 161.021L88.7059 336.177Z" fill="url(#paint4_linear_22_47)"/>
              <path d="M81.0945 364.043C82.1508 359.419 83.3029 354.815 84.5507 350.235L590.063 169.247C593.934 171.995 597.747 174.821 601.498 177.724L81.0945 364.043Z" fill="url(#paint5_linear_22_47)"/>
              <path d="M76.0561 390.987C76.71 386.517 77.4511 382.061 78.2792 377.62L612.291 186.429C615.749 189.335 619.15 192.308 622.492 195.347L76.0561 390.987Z" fill="url(#paint6_linear_22_47)"/>
              <path d="M73.235 417.139C73.5378 412.804 73.9213 408.476 74.3856 404.157L632.142 204.464C635.242 207.507 638.286 210.608 641.271 213.766L73.235 417.139Z" fill="url(#paint7_linear_22_47)"/>
              <path d="M72.3859 442.584C72.3735 438.369 72.437 434.155 72.5762 429.946L649.909 223.244C652.688 226.409 655.411 229.625 658.077 232.89L72.3859 442.584Z" fill="url(#paint8_linear_22_47)"/>
              <path d="M73.3345 467.385C73.0323 463.279 72.8022 459.17 72.6442 455.062L665.797 242.696C668.282 245.971 670.712 249.292 673.085 252.657L73.3345 467.385Z" fill="url(#paint9_linear_22_47)"/>
              <path d="M75.9571 491.588C75.3831 487.584 74.8783 483.574 74.4428 479.56L679.956 262.769C682.167 266.147 684.322 269.566 686.42 273.025L75.9571 491.588Z" fill="url(#paint10_linear_22_47)"/>
              <path d="M80.1669 515.221C79.3335 511.313 78.5671 507.397 77.8677 503.473L692.487 283.422C694.437 286.898 696.331 290.411 698.166 293.959L80.1669 515.221Z" fill="url(#paint11_linear_22_47)"/>
              <path d="M85.9072 538.308C84.8222 534.495 83.8027 530.669 82.8486 526.832L703.464 304.634C705.162 308.205 706.802 311.808 708.384 315.444L85.9072 538.308Z" fill="url(#paint12_linear_22_47)"/>
              <path d="M93.1434 560.858C91.8111 557.137 90.5432 553.4 89.3396 549.65L712.93 326.387C714.38 330.049 715.772 333.741 717.105 337.462L93.1434 560.858Z" fill="url(#paint13_linear_22_47)"/>
              <path d="M374.649 108.096L212.201 166.256C235.836 149.52 261.765 135.941 289.436 126.034C317.107 116.127 345.763 110.163 374.649 108.096Z" fill="url(#paint14_linear_22_47)"/>
              <path d="M636.785 659.905C630.285 666.826 623.496 673.45 616.437 679.761L388.735 761.285C379.274 760.888 369.823 760.078 360.408 758.856L636.785 659.905Z" fill="url(#paint15_linear_22_47)"/>
              <path d="M665.746 624.396C661.582 630.296 657.236 636.043 652.717 641.631L336.499 754.846C329.46 753.397 322.453 751.713 315.491 749.797L665.746 624.396Z" fill="url(#paint16_linear_22_47)"/>
              <path d="M685.906 592.036C682.959 597.43 679.874 602.726 676.654 607.919L296.604 743.988C290.82 742.018 285.074 739.884 279.374 737.586L685.906 592.036Z" fill="url(#paint17_linear_22_47)"/>
              <path d="M700.577 561.644C699.511 564.168 698.413 566.682 697.283 569.183C696.153 571.686 694.995 574.171 693.808 576.638L263.494 730.703C261.011 729.55 258.539 728.365 256.077 727.148C253.616 725.931 251.173 724.686 248.746 723.412L700.577 561.644Z" fill="url(#paint18_linear_22_47)"/>
              <path d="M711.294 532.664C709.76 537.474 708.117 542.253 706.367 546.998L234.977 715.77C230.612 713.213 226.31 710.562 222.071 707.82L711.294 532.664Z" fill="url(#paint19_linear_22_47)"/>
              <path d="M718.905 504.798C717.849 509.422 716.697 514.026 715.449 518.606L209.938 699.593C206.066 696.846 202.254 694.019 198.503 691.116L718.905 504.798Z" fill="url(#paint20_linear_22_47)"/>
              <path d="M723.944 477.854C723.29 482.324 722.549 486.78 721.721 491.221L187.71 682.411C184.252 679.506 180.851 676.532 177.509 673.493L723.944 477.854Z" fill="url(#paint21_linear_22_47)"/>
              <path d="M726.765 451.701C726.462 456.037 726.078 460.365 725.614 464.684L167.859 664.376C164.759 661.334 161.715 658.232 158.73 655.074L726.765 451.701Z" fill="url(#paint22_linear_22_47)"/>
              <path d="M727.614 426.256C727.626 430.472 727.563 434.686 727.423 438.895L150.092 645.596C147.313 642.432 144.59 639.216 141.924 635.95L727.614 426.256Z" fill="url(#paint23_linear_22_47)"/>
              <path d="M726.665 401.456C726.967 405.562 727.197 409.671 727.355 413.779L134.204 626.144C131.718 622.869 129.289 619.548 126.916 616.183L726.665 401.456Z" fill="url(#paint24_linear_22_47)"/>
              <path d="M724.043 377.253C724.617 381.257 725.121 385.267 725.557 389.281L120.045 606.072C117.834 602.693 115.679 599.274 113.581 595.815L724.043 377.253Z" fill="url(#paint25_linear_22_47)"/>
              <path d="M719.833 353.62C720.666 357.527 721.433 361.444 722.132 365.367L107.514 585.418C105.564 581.942 103.67 578.429 101.835 574.881L719.833 353.62Z" fill="url(#paint26_linear_22_47)"/>
              <path d="M714.093 330.533C715.177 334.346 716.197 338.172 717.151 342.008L96.5369 564.206C94.8392 560.636 93.1988 557.032 91.617 553.397L714.093 330.533Z" fill="url(#paint27_linear_22_47)"/>
              <path d="M87.0709 542.454C85.6205 538.791 84.2286 535.099 82.8963 531.378L706.856 307.982C708.189 311.704 709.456 315.44 710.66 319.191L87.0709 542.454Z" fill="url(#paint28_linear_22_47)"/>
              <path d="M425.352 760.745L587.799 702.584C564.165 719.321 538.236 732.9 510.564 742.807C482.893 752.714 454.238 758.678 425.352 760.745Z" fill="url(#paint29_linear_22_47)"/>
              <defs>
                <linearGradient id="paint0_linear_22_47" x1="289.436" y1="126.035" x2="417.673" y2="473.44" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#C15F3C"/>
                  <stop offset="1" stopColor="white" stopOpacity="0"/>
                </linearGradient>
                <linearGradient id="paint1_linear_22_47" x1="289.436" y1="126.035" x2="417.673" y2="473.44" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#C15F3C"/>
                  <stop offset="1" stopColor="white" stopOpacity="0"/>
                </linearGradient>
                <linearGradient id="paint2_linear_22_47" x1="289.436" y1="126.035" x2="417.673" y2="473.44" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#C15F3C"/>
                  <stop offset="1" stopColor="white" stopOpacity="0"/>
                </linearGradient>
                <linearGradient id="paint3_linear_22_47" x1="289.436" y1="126.035" x2="417.673" y2="473.44" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#C15F3C"/>
                  <stop offset="1" stopColor="white" stopOpacity="0"/>
                </linearGradient>
                <linearGradient id="paint4_linear_22_47" x1="289.436" y1="126.035" x2="417.673" y2="473.44" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#C15F3C"/>
                  <stop offset="1" stopColor="white" stopOpacity="0"/>
                </linearGradient>
                <linearGradient id="paint5_linear_22_47" x1="289.436" y1="126.035" x2="417.673" y2="473.44" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#C15F3C"/>
                  <stop offset="1" stopColor="white" stopOpacity="0"/>
                </linearGradient>
                <linearGradient id="paint6_linear_22_47" x1="289.436" y1="126.035" x2="417.673" y2="473.44" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#C15F3C"/>
                  <stop offset="1" stopColor="white" stopOpacity="0"/>
                </linearGradient>
                <linearGradient id="paint7_linear_22_47" x1="289.436" y1="126.035" x2="417.673" y2="473.44" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#C15F3C"/>
                  <stop offset="1" stopColor="white" stopOpacity="0"/>
                </linearGradient>
                <linearGradient id="paint8_linear_22_47" x1="289.436" y1="126.035" x2="417.673" y2="473.44" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#C15F3C"/>
                  <stop offset="1" stopColor="white" stopOpacity="0"/>
                </linearGradient>
                <linearGradient id="paint9_linear_22_47" x1="289.436" y1="126.035" x2="417.673" y2="473.44" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#C15F3C"/>
                  <stop offset="1" stopColor="white" stopOpacity="0"/>
                </linearGradient>
                <linearGradient id="paint10_linear_22_47" x1="289.436" y1="126.035" x2="417.673" y2="473.44" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#C15F3C"/>
                  <stop offset="1" stopColor="white" stopOpacity="0"/>
                </linearGradient>
                <linearGradient id="paint11_linear_22_47" x1="289.436" y1="126.035" x2="417.673" y2="473.44" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#C15F3C"/>
                  <stop offset="1" stopColor="white" stopOpacity="0"/>
                </linearGradient>
                <linearGradient id="paint12_linear_22_47" x1="289.436" y1="126.035" x2="417.673" y2="473.44" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#C15F3C"/>
                  <stop offset="1" stopColor="white" stopOpacity="0"/>
                </linearGradient>
                <linearGradient id="paint13_linear_22_47" x1="289.436" y1="126.035" x2="417.673" y2="473.44" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#C15F3C"/>
                  <stop offset="1" stopColor="white" stopOpacity="0"/>
                </linearGradient>
                <linearGradient id="paint14_linear_22_47" x1="289.436" y1="126.035" x2="417.673" y2="473.44" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#C15F3C"/>
                  <stop offset="1" stopColor="white" stopOpacity="0"/>
                </linearGradient>
                <linearGradient id="paint15_linear_22_47" x1="510.565" y1="742.808" x2="382.328" y2="395.402" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#C15F3C"/>
                  <stop offset="1" stopColor="white" stopOpacity="0"/>
                </linearGradient>
                <linearGradient id="paint16_linear_22_47" x1="510.565" y1="742.808" x2="382.328" y2="395.402" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#C15F3C"/>
                  <stop offset="1" stopColor="white" stopOpacity="0"/>
                </linearGradient>
                <linearGradient id="paint17_linear_22_47" x1="510.565" y1="742.808" x2="382.328" y2="395.402" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#C15F3C"/>
                  <stop offset="1" stopColor="white" stopOpacity="0"/>
                </linearGradient>
                <linearGradient id="paint18_linear_22_47" x1="510.565" y1="742.808" x2="382.328" y2="395.402" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#C15F3C"/>
                  <stop offset="1" stopColor="white" stopOpacity="0"/>
                </linearGradient>
                <linearGradient id="paint19_linear_22_47" x1="510.565" y1="742.808" x2="382.328" y2="395.402" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#C15F3C"/>
                  <stop offset="1" stopColor="white" stopOpacity="0"/>
                </linearGradient>
                <linearGradient id="paint20_linear_22_47" x1="510.565" y1="742.808" x2="382.328" y2="395.402" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#C15F3C"/>
                  <stop offset="1" stopColor="white" stopOpacity="0"/>
                </linearGradient>
                <linearGradient id="paint21_linear_22_47" x1="510.565" y1="742.808" x2="382.328" y2="395.402" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#C15F3C"/>
                  <stop offset="1" stopColor="white" stopOpacity="0"/>
                </linearGradient>
                <linearGradient id="paint22_linear_22_47" x1="510.565" y1="742.808" x2="382.328" y2="395.402" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#C15F3C"/>
                  <stop offset="1" stopColor="white" stopOpacity="0"/>
                </linearGradient>
                <linearGradient id="paint23_linear_22_47" x1="510.565" y1="742.808" x2="382.328" y2="395.402" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#C15F3C"/>
                  <stop offset="1" stopColor="white" stopOpacity="0"/>
                </linearGradient>
                <linearGradient id="paint24_linear_22_47" x1="510.565" y1="742.808" x2="382.328" y2="395.402" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#C15F3C"/>
                  <stop offset="1" stopColor="white" stopOpacity="0"/>
                </linearGradient>
                <linearGradient id="paint25_linear_22_47" x1="510.565" y1="742.808" x2="382.328" y2="395.402" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#C15F3C"/>
                  <stop offset="1" stopColor="white" stopOpacity="0"/>
                </linearGradient>
                <linearGradient id="paint26_linear_22_47" x1="510.565" y1="742.808" x2="382.328" y2="395.402" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#C15F3C"/>
                  <stop offset="1" stopColor="white" stopOpacity="0"/>
                </linearGradient>
                <linearGradient id="paint27_linear_22_47" x1="510.565" y1="742.808" x2="382.328" y2="395.402" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#C15F3C"/>
                  <stop offset="1" stopColor="white" stopOpacity="0"/>
                </linearGradient>
                <linearGradient id="paint28_linear_22_47" x1="510.565" y1="742.808" x2="382.328" y2="395.402" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#C15F3C"/>
                  <stop offset="1" stopColor="white" stopOpacity="0"/>
                </linearGradient>
                <linearGradient id="paint29_linear_22_47" x1="510.565" y1="742.808" x2="382.328" y2="395.402" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#C15F3C"/>
                  <stop offset="1" stopColor="white" stopOpacity="0"/>
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-foreground">
            Your conscious AI companion.
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Get personalized Vedic astrology insights, chat with an AI that truly remembers you, and receive daily cosmic guidance — all in one beautiful app.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            {/* Play Store Button - Primary */}
            <a
              href="https://play.google.com/store/apps/details?id=com.nummi.chat.mobile"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-cosmic text-white shadow-glow hover:opacity-90 transition-all duration-300 px-8"
              >
                <span className="flex items-center gap-3">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  Get it on Play Store
                </span>
              </Button>
            </a>

            {/* App Store Button - Secondary */}
            <a
              href="/download"
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto bg-card border-2 border-border text-foreground hover:bg-muted transition-all duration-300 px-8"
              >
                <span className="flex items-center gap-3">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                  </svg>
                  Coming Soon on iOS
                </span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
