module.exports = {
  locales: ["en", "th"],
  defaultLocale: "th",
  loadLocaleFrom: (lang, ns) =>
    import(`./src/locales/${lang}/${ns}.json`).then((m) => m.default),
  pages: {
    "*": ["common"],
  },
  localeDetection: false,
};
