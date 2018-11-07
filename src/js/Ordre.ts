import { OrdreLinie } from "./OrdreLinie";

export class Ordre {
    public OrdreListe: OrdreLinie[];
    public OrdreId: number;

    constructor(ordreId: number, ordreArray: OrdreLinie[]) {
        this.OrdreListe = ordreArray;
        this.OrdreId = ordreId;
    }

    /**
     * TotalSum
     */
    public TotalSum() {
        let priceTotal: number = 0;
        this.OrdreListe.forEach((ordre) => {
            priceTotal += ordre.SumMedMoms();
        });
        return priceTotal;
    }
}
