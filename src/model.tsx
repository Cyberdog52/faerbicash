export enum ProductType {
    DRINK = 'DRINK',
    FOOD = 'FOOD',
}

export enum Deposit {
    NONE = 'NONE',
    CUP = 'CUP',
    MUG = 'MUG',
    GLASS = 'GLASS',
}

export class Product {
    name: string;
    type: ProductType;
    cost: number;
    depot: Deposit;
    backgroundColor: string;
    textColor: string;

    constructor(name: string, type: ProductType, cost: number, depot: Deposit, backgroundColor: string = '#ffffff', textColor: string = '#282c34') {
        this.name = name;
        this.type = type;
        this.cost = cost;
        this.depot = depot;
        this.backgroundColor = backgroundColor;
        this.textColor = textColor;
    }

    getDepositCost(): number {
        return getDepositCost(this.depot);
    }
}

export function getDepositCost(deposit: Deposit): number {
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
    new Product("Bier", ProductType.DRINK, 7, Deposit.CUP),
    new Product("Craftbeer", ProductType.DRINK, 8, Deposit.CUP),
    new Product("Moscht", ProductType.DRINK, 7, Deposit.NONE),
    new Product("Bier Alkoholfrei", ProductType.DRINK, 6, Deposit.NONE),
    new Product("Softdrink", ProductType.DRINK, 5, Deposit.CUP),
    new Product("Engergy Drink", ProductType.DRINK, 6, Deposit.NONE),
    new Product("Shot", ProductType.DRINK, 5, Deposit.NONE),
    new Product("Shot Flasche", ProductType.DRINK, 50, Deposit.GLASS),
    new Product("Mule", ProductType.DRINK, 15, Deposit.MUG),
    new Product("Virgin Mule", ProductType.DRINK, 12, Deposit.MUG),
    new Product("Longdrink", ProductType.DRINK, 14, Deposit.CUP),
    new Product("5400 Gin", ProductType.DRINK, 15, Deposit.CUP),
    new Product("Aperol / Hugo", ProductType.DRINK, 12, Deposit.CUP),
    new Product("Gsprützte Wiise", ProductType.DRINK, 8, Deposit.CUP),
    new Product("Cüpli", ProductType.DRINK, 7, Deposit.CUP),
    new Product("Kaffee", ProductType.DRINK, 4, Deposit.CUP),
    new Product("Burger", ProductType.FOOD, 14, Deposit.NONE),
    new Product("Nachos", ProductType.FOOD, 12, Deposit.NONE),
    new Product("Glacé", ProductType.FOOD, 6, Deposit.NONE),
    new Product("Eis-Kaffee", ProductType.DRINK, 6, Deposit.CUP),
];

