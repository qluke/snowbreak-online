export const languages = [
  {
    code: "en",
    name: "English",
  },
  {
    code: "cn",
    name: "Chinese Simplified",
  },
];
export const localeToLang = (locale: string | undefined) => {
  switch (locale) {
    case "en":
      return "en";
    case "cn":
      return "cn";
    default:
      return "en";
  }
};
