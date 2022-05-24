import fields from "./data";

function getDate(timeVal: string | null) {
  if (!timeVal) return timeVal;
  if (timeVal.indexOf("T")) {
    return timeVal.substring(0, timeVal.indexOf("T")).trim();
  }

  return timeVal;
}

function getDirection(direction: string | null) {

  if (!direction) return "";

  const map = new Map();

  map.set("Buy (in Spot/Outright deals)", 1);
  map.set("Sell (in Spot/Outright deals)", 2);
  map.set("Buy and Sell (in Swap deals)", 3);
  map.set("Sell and Buy (in Swap deals)", 4);
  map.set("Lend (in Deposit deals)", 5);
  map.set("Borrow (in Deposit deals)", 6);
  map.set("Lend (in FRA deals)", 7);
  map.set("Borrow (in FRA deals)", 8);
  map.set("Receive (in OIS/IRS deals)", 9);
  map.set("Pay (in OIS/IRS deals)", 10);
  return map.get(direction);
}

let feed = "";
feed += "<fields>";
fields.map((f) => {

  //Change COMMENT_TEXT to notes
  if (f.name === "COMMENT_TEXT") f.name = "notes";

  //Get date from dateTime value
  if (f.name === "dealTime") f.value = getDate(f.value);

  //Get date from dateTime value
  if (f.name === "direction") {
    f.format = "Number";
    f.value = getDirection(f.value);
  }

  feed += `<element><name>${f.name}</name><format>${f.format}</format><value>${f.value?.toString().trim()}</value></element>`;
});
feed += "</fields>";

console.log(feed);

// console.log("Hello TS ", fields);
