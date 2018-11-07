import { OrdreLinie } from "./OrdreLinie";

const o: OrdreLinie = new OrdreLinie(1, 0, 100, 10);

console.log("Order details: " + "quantity " + o.OrderQty + ", Id: " +
o.ProductId + ", Unit price: " + o.UnitPrice + " & Discount: " + o.UnitPriceDiscount);
console.log("The sum is: " + o.BeregnSum());
console.log("The tax sum is: " + o.Moms());
console.log("The sum with tax is: " + o.SumMedMoms());
