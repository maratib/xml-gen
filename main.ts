import fields from "./data";
let feed = "";
feed += "<fields>";
fields.map((f) => {
  if (f.name === "COMMENT_TEXT") f.name = "notes";
  feed += `<element><name>${f.name}</name><format>${f.format}</format><value>${f.value}</value></element>`;
});
feed += "</fields>";

console.log(feed);

// console.log("Hello TS ", fields);
