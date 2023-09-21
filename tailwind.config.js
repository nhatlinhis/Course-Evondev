/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "primary-gradiant": `linear-gradient( 
          59deg,
          #7d6aff 0%,
          #ffb86c 53.13%,
          #fc2872 100%
        );`,
        "secondary-gradiant": `linear-gradient(59deg, #20e3b2, #2cccff)`,
      },
    },
    plugins: [],
  },
};
