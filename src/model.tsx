export enum ProductType {
    DRINK = 'DRINK',
    FOOD = 'FOOD',
}

export enum Deposit {
    NONE = 'NONE',
    CUP = 'Becher',
    MUG = 'Mule',
    GLASS = 'Glasflasche',
}

export class Product {
    name: string;
    type: ProductType;
    price: number;
    depot: Deposit;
    backgroundColor: string;
    textColor: string;

    constructor(name: string, type: ProductType, price: number, depot: Deposit, backgroundColor: string = '#ffffff', textColor: string = '#282c34') {
        this.name = name;
        this.type = type;
        this.price = price;
        this.depot = depot;
        this.backgroundColor = backgroundColor;
        this.textColor = textColor;
    }

    getDepositCost(): number {
        return getDepositPrice(this.depot);
    }
}

export function getDepositPrice(deposit: Deposit): number {
    switch (deposit) {
        case Deposit.CUP:
            return 2;
        case Deposit.MUG:
            return 10;
        case Deposit.GLASS:
            return 10;
        default:
            return 0;
    }
}

export const allProducts : Product[]  = [
    new Product("Bier", ProductType.DRINK, 7, Deposit.CUP, '#fdcd04', '#000001'),
    new Product("Craftbeer", ProductType.DRINK, 8, Deposit.CUP, '#a88c10', '#ffffff'),
    new Product("Moscht", ProductType.DRINK, 7, Deposit.NONE, '#f5a142', '#000001'),
    new Product("Bier Alkoholfrei", ProductType.DRINK, 6, Deposit.NONE, '#ffe66d', '#000001'),
    new Product("Softdrink", ProductType.DRINK, 5, Deposit.CUP, '#4ffff9', '#000001'),
    new Product("Energy Drink", ProductType.DRINK, 6, Deposit.NONE, '#1e3688', '#d3cdd2'),
    new Product("Shot", ProductType.DRINK, 5, Deposit.NONE, '#00bcc1', '#ffffff'),
    new Product("Shot Flasche", ProductType.DRINK, 50, Deposit.GLASS, '#8301ff', '#ffffff'),
    new Product("Mule", ProductType.DRINK, 15, Deposit.MUG, '#4cbb00', '#ffffff'),
    new Product("Virgin Mule", ProductType.DRINK, 12, Deposit.MUG, '#84b069', '#000000'),
    new Product("Longdrink", ProductType.DRINK, 14, Deposit.CUP, '#f32a2a', '#ffffff'),
    new Product("Virgin Sunrise", ProductType.DRINK, 12, Deposit.CUP, '#ff9494', '#000000'),
    new Product("Aperol / Hugo", ProductType.DRINK, 12, Deposit.CUP, '#e86116', '#ffffff'),
    new Product("Gsprützte Wiise", ProductType.DRINK, 8, Deposit.CUP, '#f5dcd1', '#000000'),
    new Product("Cüpli", ProductType.DRINK, 7, Deposit.CUP, '#f0de94', '#000000'),
    new Product("Kaffee", ProductType.DRINK, 4, Deposit.CUP, '#542f0a', '#ffffff'),
    new Product("Burger", ProductType.FOOD, 14, Deposit.NONE, '#60311d', '#ffffff'),
    new Product("Nachos", ProductType.FOOD, 12, Deposit.NONE, '#f5a142', '#000001'),
    new Product("Glacé", ProductType.FOOD, 6, Deposit.NONE, '#ff00f2', '#ffffff'),
    new Product("Eis-Kaffee", ProductType.DRINK, 6, Deposit.CUP, '#c27f65', '#ffffff'),
];

