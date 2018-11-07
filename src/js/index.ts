import { Ordre } from "./Ordre";
import { OrdreLinie } from "./OrdreLinie";

const o: OrdreLinie = new OrdreLinie(1, 0, 100, 10);

console.log("Order details: " + "quantity " + o.OrderQty + ", Id: " +
o.ProductId + ", Unit price: " + o.UnitPrice + " & Discount: " + o.UnitPriceDiscount);
console.log("The sum is: " + o.BeregnSum());
console.log("The tax sum is: " + o.Moms());
console.log("The sum with tax is: " + o.SumMedMoms());

const oArray: OrdreLinie[] = new Array<OrdreLinie>();
oArray.push(new OrdreLinie(2, 1, 200, 20));
oArray.push(new OrdreLinie(1, 2, 500, 0));
oArray.push(new OrdreLinie(4, 3, 50, 5));
const myO = new Ordre(1, oArray);

console.log(myO.TotalSum());
