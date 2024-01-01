const url=require("url");

const mdnUrl="https://developer.mozilla.org/en-US/docs/Glossary/Node.js?retiredLocale=hu&language=hu";

let parsedMdn=url.parse(mdnUrl, true);

// console.log(parsedMdn);

console.log(parsedMdn.host);

console.log(parsedMdn.hostname);

console.log(parsedMdn.path);

console.log(parsedMdn.pathname);

console.log(parsedMdn.query);

console.log(parsedMdn.query.language);
