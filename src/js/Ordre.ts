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
        const priceArray: number[] = new Array<number>();
        this.OrdreListe.forEach((ordre) => {
            priceArray.push(ordre.SumMedMoms());
        });
        return priceArray;
    }
}
