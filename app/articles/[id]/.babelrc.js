module.exports = {
    presets: ["next/babel"],
    plugins: [
      [
        "prismjs",
        {
          languages: ["markup","css+clike","javascript","bash","c","csharp","cpp","css-extras","csv","git","http","icon","java","json","json5","markdown","markup-templating","php","plsql","powershell","python","sql","typescript","xml-doc"],
          plugins: ["line-numbers", "show-language","remove-initial-line-feed","inline-color","autoloader","normalize-whitespace","toolbar","copy-to-clipboard"],
          theme: "okaidia",
          css: true,
        },
      ],
    ],
  };