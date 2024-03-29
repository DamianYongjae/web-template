const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    container: {
      center: true,
    },
    // screens: {
    //   sm: "640px",
    //   md: "768px",
    //   lg: "1124px",
    //   xl: "1380px",
    //   "2xl": "1536px",
    // },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      borderWidth: {
        1.5: "1.5px",
        3: "3px",
      },
      zIndex: {
        1: "1",
        2: "2",
        999: "999",
        9999: "9999",
        99999: "99999",
      },
      translateZ: {
        1: "1",
      },
      fontSize: {
        "2xs": [
          "0.45rem",
          {
            lineHeight: "0.5rem",
          },
        ],
      },
      colors: {
        "logo-color": "#A386BE",
        "favicon-color": "#ED1E2A",
        green: colors.emerald,
        yellow: colors.amber,
        purple: colors.violet,
        red: colors.rose,
        "primary-color": "#536C9D",
        primary: "#536C9D",
        "login-color": "#292C32",
        "main-bg": "#1E1E1E",
        "main-bg!": "#1E1E1E !important",
        "main-blue": "#536C9D",
        "main-font-color": "#FFFFFF",
        "main-font-color!": "#FFFFFF !important",
        "main-date-color": "#BCBCBC",
        "club-dark-blue": "#334F85",
        "club-light-blue": "#C4D4ED",
        "mypage-bg": "#292C32",
        "main-red": "#9D1D22",
        "other-red": "#BD2433",
        "page-unselect": "#898989",
        "menu-bg": "#1B1F25",
        "menu-select-color": "#536C9D",
      },
      keyframes: {
        "chat-show": {
          "0%": { maxHeight: "4rem" },
          "50%": { maxHeight: "10rem" },
          "100%": { maxHeight: "100%" },
        },
        "width-full": {
          "0%": { transform: "scaleX(0)", transformOrigin: "left" },
          "50%": { transform: "scaleX(50%)", transformOrigin: "left" },
          "100%": { transform: "scaleX(100%)", transformOrigin: "left" },
        },
        "move-to-left": {
          "0%": { right: "-100%" },
          "50%": { right: "-50%" },
          "100%": { right: "0" },
        },
        "move-to-right": {
          "0%": { right: "0" },
          "50%": { right: "-50%" },
          "100%": { right: "-100%" },
        },
        "move-left-to-right": {
          "0%": { left: "0%" },
          "50%": { left: "50%" },
          "100%": { left: "0%" },
        },
        "menu-to-up": {
          "0%": { transform: "translateY(40px)", opacity: 0, display: "block" },
          "50%": { transform: "translateY(20px)", opacity: 0.5 },
          "100%": { transform: "translateY(0px)", opacity: 1 },
        },
        "menu-to-down": {
          "0%": {
            transform: "translateY(0px)",
            opacity: 1,
            zIndex: "999",
          },
          "50%": { transform: "translateY(20px)", opacity: 0.5 },
          "100%": {
            transform: "translateY(40px)",
            opacity: 0,
            zIndex: "-999",
          },
        },
        "loader-dots1": {
          "0%": {
            transform: "scale(0)",
            // "animation-timing-function": "cubic-bezier(0, 1, 1, 0)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        "loader-dots2": {
          "0%": {
            transform: "translate(0, 0)",
          },
          "100%": {
            transform: "translate(24px, 0)",
          },
        },
        "loader-dots3": {
          "0%": {
            transform: "scale(1)",
          },
          "100%": {
            transform: "scale(0)",
          },
        },
      },
      animation: {
        "chat-show": "chat-show 0.3s ease-in-out",
        "width-full": "width-full 0.3s ease-in-out",
        "move-to-left": "move-to-left 0.3s linear",
        "move-to-right": "move-to-right 0.3s linear",
        "loader-dots-1": "loader-dots1 0.6s infinite",
        "loader-dots-2": "loader-dots2 0.6s infinite",
        "loader-dots-3": "loader-dots2 0.6s infinite",
        "loader-dots-4": "loader-dots3 0.6s infinite",
        "menu-to-up": "menu-to-up 0.3s linear",
        "menu-to-down": "menu-to-down 0.3s linear",
        "left-to-right": "move-left-to-right 3s infinite",
      },
      transitionProperty: {
        width: "width",
        height: "height",
        "max-height": "max-height",
        "min-height": "min-height",
        right: "right",
        left: "left",
        top: "top",
        bottom: "bottom",
        visibility: "visibility",
        pl: "padding-left",
        pr: "padding-right",
        pt: "padding-top",
        padding: "padding",
      },
      scale: {
        50: "0.5",
      },
      left: {
        "1/12": "8.333333%",
        "2/12": "16.666667%",
        "3/12": "25%",
        "4/12": "33.333333%",
        "5/12": "41.666667%",
        "6/12": "50%",
        "7/12": "58.333333%",
        "8/12": "66.666667%",
        "9/12": "75%",
        "10/12": "83.333333%",
        "11/12": "91.666667%",
        "12/12": "100%",
      },
      padding: { "fluid-video": "56.25%" },
      width: {
        "10%": "10%",
        "30%": "30%",
        "1/24": "4.166666%",
        "2/24": "8.333333%",
        "3/24": "12.5%",
        "4/24": "16.666666%",
        "5/24": "20.833333%",
        "6/24": "25%",
        "7/24": "29.161616%",
        "8/24": "33.333333%",
        "9/24": "37.5%",
        "10/24": "41.666666%",
        "11/24": "45.833333%",
        "12/24": "50%",
        "13/24": "54.166666%",
        "14/24": "58.3333333%",
        "15/24": "62.5%",
        "16/24": "66.6666667%",
        "17/24": "70.833333%",
        "18/24": "75%",
        "19/24": "79.166666%",
        "20/24": "83.3333333%",
        "21/24": "87.5%",
        "22/24": "91.6666667%",
        "23/24": "95.833333%",
        "24/24": "100%",
        "1/36": "2.777777%",
        "2/36": "5.555554%",
        "3/36": "8.333331%",
        "4/36": "11.111108%",
        "5/36": "13.888885%",
        "6/36": "16.666662%",
        "7/36": "19.444439%",
        "8/36": "22.222216%",
        "9/36": "25%",
        "10/36": "27.77777%",
        "11/36": "30.555547%",
        "12/36": "33.333324%",
        "13/36": "36.111101%",
        "14/36": "38.888878%",
        "15/36": "41.666655%",
        "16/36": "44.444432%",
        "17/36": "47.222209%",
        "18/36": "50%",
        "19/36": "52.777777%",
        "20/36": "55.555554%",
        "21/36": "58.333331%",
        "22/36": "61.111108%",
        "23/36": "63.888885%",
        "24/36": "66.666662%",
        "25/36": "69.444439%",
        "26/36": "72.222216%",
        "27/36": "75%",
        "28/36": "77.777777%",
        "29/36": "80.555554%",
        "30/36": "83.333331%",
        "31/36": "86.111108%",
        "32/36": "88.888885%",
        "33/36": "91.666662%",
        "34/36": "94.444439%",
        "35/36": "97.222216%",
        "36/36": "100%",
        "1/48": "2.083333%",
        "2/48": "4.166666%",
        "3/48": "6.25%",
        "4/48": "8.333333%",
        "5/48": "10.416666%",
        "6/48": "12.5%",
        "7/48": "14.583332%",
        "8/48": "16.666665%",
        "9/48": "18.75%",
        "10/48": "20.833333%",
        "11/48": "22.916666%",
        "12/48": "25%",
        "13/48": "27.083333%",
        "14/48": "29.166666%",
        "15/48": "31.25%",
        "16/48": "33.333333%",
        "17/48": "35.416666%",
        "18/48": "37.5%",
        "19/48": "39.583333%",
        "20/48": "41.666666%",
        "21/48": "43.75%",
        "22/48": "45.833333%",
        "23/48": "47.916666%",
        "24/48": "50%",
        "25/48": "52.083333%",
        "26/48": "54.166666%",
        "27/48": "56.25%",
        "28/48": "58.333333%",
        "29/48": "60.416666%",
        "30/48": "62.5%",
        "31/48": "54.583332%",
        "32/48": "66.666665%",
        "33/48": "68.75%",
        "34/48": "70.833333%",
        "35/48": "72.916666%",
        "36/48": "75%",
        "37/48": "77.083333%",
        "38/48": "79.166666%",
        "39/48": "81.25%",
        "40/48": "83.333333%",
        "41/48": "85.416666%",
        "42/48": "87.5%",
        "43/48": "89.583333%",
        "44/48": "91.666666%",
        "45/48": "93.75%",
        "46/48": "95.833333%",
        "47/48": "97.916666%",
        "48/48": "100%",
        fit: "fit-content",
      },
      height: {
        "1/12": "8.333333%",
        "2/12": "16.666667%",
        "3/12": "25%",
        "4/12": "33.333333%",
        "5/12": "41.666667%",
        "6/12": "50%",
        "7/12": "58.333333%",
        "8/12": "66.666667%",
        "9/12": "75%",
        "10/12": "83.333333%",
        "11/12": "91.666667%",
        "12/12": "100%",
        "1/24": "4.166666%",
        "2/24": "8.333333%",
        "3/24": "12.5%",
        "4/24": "16.666666%",
        "5/24": "20.833333%",
        "6/24": "25%",
        "7/24": "29.161616%",
        "8/24": "33.333333%",
        "9/24": "37.5%",
        "10/24": "41.666666%",
        "11/24": "45.833333%",
        "12/24": "50%",
        "13/24": "54.166666%",
        "14/24": "58.3333333%",
        "15/24": "62.5%",
        "16/24": "66.6666667%",
        "17/24": "70.833333%",
        "18/24": "75%",
        "19/24": "79.166666%",
        "20/24": "83.3333333%",
        "21/24": "87.5%",
        "22/24": "91.6666667%",
        "23/24": "95.833333%",
        "1/36": "2.777777%",
        "2/36": "5.555554%",
        "3/36": "8.333331%",
        "4/36": "11.111108%",
        "5/36": "13.888885%",
        "6/36": "16.666662%",
        "7/36": "19.444439%",
        "8/36": "22.222216%",
        "9/36": "25%",
        "10/36": "27.77777%",
        "11/36": "30.555547%",
        "12/36": "33.333324%",
        "13/36": "36.111101%",
        "14/36": "38.888878%",
        "15/36": "41.666655%",
        "16/36": "44.444432%",
        "17/36": "47.222209%",
        "18/36": "50%",
        "19/36": "52.777777%",
        "20/36": "55.555554%",
        "21/36": "58.333331%",
        "22/36": "61.111108%",
        "23/36": "63.888885%",
        "24/36": "66.666662%",
        "25/36": "69.444439%",
        "26/36": "72.222216%",
        "27/36": "75%",
        "28/36": "77.777777%",
        "29/36": "80.555554%",
        "30/36": "83.333331%",
        "31/36": "86.111108%",
        "32/36": "88.888885%",
        "33/36": "91.666662%",
        "34/36": "94.444439%",
        "35/36": "97.222216%",
        "36/36": "100%",
        "1/48": "2.083333%",
        "2/48": "4.166666%",
        "3/48": "6.25%",
        "4/48": "8.333333%",
        "5/48": "10.416666%",
        "6/48": "12.5%",
        "7/48": "14.583332%",
        "8/48": "16.666665%",
        "9/48": "18.75%",
        "10/48": "20.833333%",
        "11/48": "22.916666%",
        "12/48": "25%",
        "13/48": "27.083333%",
        "14/48": "29.166666%",
        "15/48": "31.25%",
        "16/48": "33.333333%",
        "17/48": "35.416666%",
        "18/48": "37.5%",
        "19/48": "39.583333%",
        "20/48": "41.666666%",
        "21/48": "43.75%",
        "22/48": "45.833333%",
        "23/48": "47.916666%",
        "24/48": "50%",
        "25/48": "52.083333%",
        "26/48": "54.166666%",
        "27/48": "56.25%",
        "28/48": "58.333333%",
        "29/48": "60.416666%",
        "30/48": "62.5%",
        "31/48": "54.583332%",
        "32/48": "66.666665%",
        "33/48": "68.75%",
        "34/48": "70.833333%",
        "35/48": "72.916666%",
        "36/48": "75%",
        "37/48": "77.083333%",
        "38/48": "79.166666%",
        "39/48": "81.25%",
        "40/48": "83.333333%",
        "41/48": "85.416666%",
        "42/48": "87.5%",
        "43/48": "89.583333%",
        "44/48": "91.666666%",
        "45/48": "93.75%",
        "46/48": "95.833333%",
        "47/48": "97.916666%",
        "48/48": "100%",
        fit: "fit-content",
        vertical: "72vh",
        "vertical-lg": "70vh",
        landscape: "55vh",
        uploaders: "66vh",
        "10vh": "10vh",
        "20vh": "20vh",
        "30vh": "30vh",
        "35vh": "35vh",
        "40vh": "40vh",
        "50vh": "50vh",
        "60vh": "60vh",
        "65vh": "65vh",
        "70vh": "70vh",
        "75vh": "75vh",
        "80vh": "80vh",
        "85vh": "85vh",
        "90vh": "90vh",
        "100vh": "100vh",
        "10vh!": "10vh !important",
        "20vh!": "20vh !important",
        "30vh!": "30vh !important",
        "35vh!": "35vh !important",
        "40vh!": "40vh !important",
        "45vh!": "45vh !important",
        "50vh!": "50vh !important",
        "60vh!": "60vh !important",
        "65vh!": "65vh !important",
        "70vh!": "70vh !important",
        "71vh!": "71vh !important",
        "72vh!": "72vh !important",
        "73vh!": "73vh !important",
        "74vh!": "74vh !important",
        "75vh!": "75vh !important",
        "80vh!": "80vh !important",
        "85vh!": "85vh !important",
        "90vh!": "90vh !important",
        "100vh!": "100vh !important",
      },
      minHeight: {
        96: "24rem",
        "1/12": "8.333333%",
        "2/12": "16.666667%",
        "3/12": "25%",
        "4/12": "33.333333%",
        "5/12": "41.666667%",
        "6/12": "50%",
        "7/12": "58.333333%",
        "8/12": "66.666667%",
        "9/12": "75%",
        "10/12": "83.333333%",
        "11/12": "91.666667%",
        "12/12": "100%",
        "1/24": "4.166666%",
        "2/24": "8.333333%",
        "3/24": "12.5%",
        "4/24": "16.666666%",
        "5/24": "20.833333%",
        "6/24": "25%",
        "7/24": "29.161616%",
        "8/24": "33.333333%",
        "9/24": "37.5%",
        "10/24": "41.666666%",
        "11/24": "45.833333%",
        "12/24": "50%",
        "13/24": "54.166666%",
        "14/24": "58.3333333%",
        "15/24": "62.5%",
        "16/24": "66.6666667%",
        "17/24": "70.833333%",
        "18/24": "75%",
        "19/24": "79.166666%",
        "20/24": "83.3333333%",
        "21/24": "87.5%",
        "22/24": "91.6666667%",
        "23/24": "95.833333%",
        "1/36": "2.777777%",
        "2/36": "5.555554%",
        "3/36": "8.333331%",
        "4/36": "11.111108%",
        "5/36": "13.888885%",
        "6/36": "16.666662%",
        "7/36": "19.444439%",
        "8/36": "22.222216%",
        "9/36": "25%",
        "10/36": "27.77777%",
        "11/36": "30.555547%",
        "12/36": "33.333324%",
        "13/36": "36.111101%",
        "14/36": "38.888878%",
        "15/36": "41.666655%",
        "16/36": "44.444432%",
        "17/36": "47.222209%",
        "18/36": "50%",
        "19/36": "52.777777%",
        "20/36": "55.555554%",
        "21/36": "58.333331%",
        "22/36": "61.111108%",
        "23/36": "63.888885%",
        "24/36": "66.666662%",
        "25/36": "69.444439%",
        "26/36": "72.222216%",
        "27/36": "75%",
        "28/36": "77.777777%",
        "29/36": "80.555554%",
        "30/36": "83.333331%",
        "31/36": "86.111108%",
        "32/36": "88.888885%",
        "33/36": "91.666662%",
        "34/36": "94.444439%",
        "35/36": "97.222216%",
        "36/36": "100%",
        "1/48": "2.083333%",
        "2/48": "4.166666%",
        "3/48": "6.25%",
        "4/48": "8.333333%",
        "5/48": "10.416666%",
        "6/48": "12.5%",
        "7/48": "14.583332%",
        "8/48": "16.666665%",
        "9/48": "18.75%",
        "10/48": "20.833333%",
        "11/48": "22.916666%",
        "12/48": "25%",
        "13/48": "27.083333%",
        "14/48": "29.166666%",
        "15/48": "31.25%",
        "16/48": "33.333333%",
        "17/48": "35.416666%",
        "18/48": "37.5%",
        "19/48": "39.583333%",
        "20/48": "41.666666%",
        "21/48": "43.75%",
        "22/48": "45.833333%",
        "23/48": "47.916666%",
        "24/48": "50%",
        "25/48": "52.083333%",
        "26/48": "54.166666%",
        "27/48": "56.25%",
        "28/48": "58.333333%",
        "29/48": "60.416666%",
        "30/48": "62.5%",
        "31/48": "54.583332%",
        "32/48": "66.666665%",
        "33/48": "68.75%",
        "34/48": "70.833333%",
        "35/48": "72.916666%",
        "36/48": "75%",
        "37/48": "77.083333%",
        "38/48": "79.166666%",
        "39/48": "81.25%",
        "40/48": "83.333333%",
        "41/48": "85.416666%",
        "42/48": "87.5%",
        "43/48": "89.583333%",
        "44/48": "91.666666%",
        "45/48": "93.75%",
        "46/48": "95.833333%",
        "47/48": "97.916666%",
        "48/48": "100%",
        "10rme": "10rem",
        "30rem": "30rem",
        "40rem": "40rem",
        "10vh!": "10vh !important",
        "20vh!": "20vh !important",
        "30vh!": "30vh !important",
        "35vh!": "35vh !important",
        "40vh!": "40vh !important",
        "45vh!": "45vh !important",
        "50vh!": "50vh !important",
        "60vh!": "60vh !important",
        "65vh!": "65vh !important",
        "70vh!": "70vh !important",
        "71vh!": "71vh !important",
        "72vh!": "72vh !important",
        "73vh!": "73vh !important",
        "74vh!": "74vh !important",
        "75vh!": "75vh !important",
        "80vh!": "80vh !important",
        "85vh!": "85vh !important",
        "90vh!": "90vh !important",
      },
      maxHeight: {
        "15rem": "15rem",
        "25rem": "25rem",
        "30rem": "30rem",
        "10vh": "10vh",
        "20vh": "20vh",
        "30vh": "30vh",
        "35vh": "35vh",
        "40vh": "40vh",
        "45vh": "45vh",
        "50vh": "50vh",
        "60vh": "60vh",
        "65vh": "65vh",
        "70vh": "70vh",
        "72vh": "72vh",
        "75vh": "75vh",
        "80vh": "80vh",
        "85vh": "85vh",
        "90vh": "90vh",
        "10vh!": "10vh !important",
        "20vh!": "20vh !important",
        "30vh!": "30vh !important",
        "35vh!": "35vh !important",
        "40vh!": "40vh !important",
        "45vh!": "45vh !important",
        "50vh!": "50vh !important",
        "60vh!": "60vh !important",
        "65vh!": "65vh !important",
        "70vh!": "70vh !important",
        "71vh!": "71vh !important",
        "72vh!": "72vh !important",
        "73vh!": "73vh !important",
        "74vh!": "74vh !important",
        "75vh!": "75vh !important",
        "80vh!": "80vh !important",
        "85vh!": "85vh !important",
        "90vh!": "90vh !important",
      },
      maxWidth: {
        "1/2": "50%",
        "1/3": "33.33334%",
        "2/3": "66.66667%",
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "7/10": "70%",
        xs: "12rem",
        sm: "24rem",
        xl: "36rem",
        "5xl": "64rem",
        "60rem": "60rem",
      },
      "inset-x": {
        "1/8": "12.5%",
        "2/8": "25%",
        "3/8": "37.5%",
        "4/8": "50%",
        "5/8": "62.5%",
        "6/8": "75%",
        "7/8": "87.5%",
        "8/8": "100%",
      },
      inset: {
        "-1/20": "-5%",
        "-1/10": "-10%",
        "-2/10": "-20%",
        "-3/10": "-30%",
        "-4/10": "-40%",
        "-5/10": "-50%",
        "-6/10": "-60%",
        "-7/10": "-70%",
        "-8/10": "-80%",
        "-9/10": "-90%",
      },
      top: {
        "-12": "-3rem",
      },
      gridTemplateColumns: {
        13: "repeat(13, minmax(0, 1fr))",
        14: "repeat(14, minmax(0, 1fr))",
        15: "repeat(15, minmax(0, 1fr))",
        16: "repeat(16, minmax(0, 1fr))",
        17: "repeat(17, minmax(0, 1fr))",
        18: "repeat(18, minmax(0, 1fr))",
        19: "repeat(19, minmax(0, 1fr))",
        20: "repeat(20, minmax(0, 1fr))",
        21: "repeat(21, minmax(0, 1fr))",
        22: "repeat(22, minmax(0, 1fr))",
        23: "repeat(23, minmax(0, 1fr))",
        24: "repeat(24, minmax(0, 1fr))",
      },
      gridTemplateRows: {
        7: "repeat(7, minmax(0, 1fr))",
        8: "repeat(8, minmax(0, 1fr))",
        9: "repeat(9, minmax(0, 1fr))",
        10: "repeat(10, minmax(0, 1fr))",
      },
      gridColumn: {
        "span-13": "span 13 / span 13",
        "span-14": "span 14 / span 14",
        "span-15": "span 15 / span 15",
        "span-16": "span 16 / span 16",
        "span-17": "span 17 / span 17",
        "span-18": "span 18 / span 18",
        "span-19": "span 19 / span 19",
        "span-20": "span 20 / span 20",
        "span-21": "span 21 / span 21",
        "span-22": "span 22 / span 22",
        "span-23": "span 23 / span 23",
        "span-24": "span 24 / span 24",
      },
    },
  },
  plugins: [],
};
