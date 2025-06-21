module.exports = {
  content: ["./src/**/*.html", "./*.html"],
  theme: {
    extend: {
      fontSize: {
        h1: ["64px", { lineHeight: "120px" }],
        h2: ["48px", { lineHeight: "120px" }],
        h3: ["32px", { lineHeight: "120px" }],
        h4: ["24px", { lineHeight: "120px" }],
        "p-base": ["16px", { lineHeight: "140px" }],
        "p-sm": ["14px", { lineHeight: "140px" }],
      },
    },
  },
  plugins: [],
};
