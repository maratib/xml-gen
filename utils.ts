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


console.log(map.get("Sell (in Spot/Outright deals)"));
