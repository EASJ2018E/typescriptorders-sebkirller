import { IOrdreLinie } from "./IOrdreLinie";

export class OrdreLinie implements IOrdreLinie {
    public OrderQty: number;
    public ProductId: number;
    public UnitPrice: number;
    public UnitPriceDiscount: number;

    constructor(ordreQty: number, productId: number, unitPrice: number, unitPriceDiscount: number) {
        this.OrderQty = ordreQty;
        this.ProductId = productId;
        this.UnitPrice = unitPrice;
        this.UnitPriceDiscount = unitPriceDiscount;
    }

    /**
     * BeregnSum
     */
    public BeregnSum() {
        return this.OrderQty * (this.UnitPrice - this.UnitPriceDiscount);
    }

    /**
     * Moms
     */
    public Moms() {
        return this.BeregnSum() * 0.25;
    }
}
