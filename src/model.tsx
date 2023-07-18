export enum ProductType {
    DRINK = 'DRINK',
    FOOD = 'FOOD',
}

export enum AgeRestriction {
    EIGHTEEN_PLUS = 'EIGHTEEN_PLUS',
    SIXTEEN_PLUS = 'SIXTEEN_PLUS',
    NONE = 'NONE',
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
    ageRestriction: AgeRestriction = AgeRestriction.NONE;

    constructor(name: string, type: ProductType, price: number, depot: Deposit, ageRestriction: AgeRestriction = AgeRestriction.NONE) {
        this.name = name;
        this.type = type;
        this.price = price;
        this.depot = depot;
        this.ageRestriction = ageRestriction;
    }

    getDepositCost(): number {
        return getDepositPrice(this.depot);
    }

    getPrimaryColor(): string {
        return '#ffffff';
    }

    getSecondaryColor(): string {
        return '#000000';
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
    new Product("Bier", ProductType.DRINK, 7, Deposit.CUP, AgeRestriction.SIXTEEN_PLUS),
    new Product("Craftbeer", ProductType.DRINK, 8, Deposit.CUP, AgeRestriction.SIXTEEN_PLUS),
    new Product("Moscht", ProductType.DRINK, 7, Deposit.NONE, AgeRestriction.SIXTEEN_PLUS),
    new Product("Bier Alkoholfrei", ProductType.DRINK, 6, Deposit.NONE, AgeRestriction.SIXTEEN_PLUS),
    new Product("Softdrink", ProductType.DRINK, 5, Deposit.CUP, AgeRestriction.NONE),
    new Product("Energy Drink", ProductType.DRINK, 6, Deposit.NONE, AgeRestriction.NONE),
    new Product("Shot", ProductType.DRINK, 5, Deposit.NONE, AgeRestriction.EIGHTEEN_PLUS),
    new Product("Shot Flasche", ProductType.DRINK, 50, Deposit.GLASS, AgeRestriction.EIGHTEEN_PLUS),
    new Product("Mule", ProductType.DRINK, 15, Deposit.MUG, AgeRestriction.EIGHTEEN_PLUS),
    new Product("Virgin Mule", ProductType.DRINK, 12, Deposit.MUG, AgeRestriction.NONE),
    new Product("Longdrink", ProductType.DRINK, 14, Deposit.CUP, AgeRestriction.EIGHTEEN_PLUS),
    new Product("Virgin Sunrise", ProductType.DRINK, 12, Deposit.CUP, AgeRestriction.NONE),
    new Product("Aperol / Hugo", ProductType.DRINK, 12, Deposit.CUP, AgeRestriction.EIGHTEEN_PLUS),
    new Product("Gsprützte Wiise", ProductType.DRINK, 8, Deposit.CUP, AgeRestriction.SIXTEEN_PLUS),
    new Product("Cüpli", ProductType.DRINK, 7, Deposit.CUP, AgeRestriction.SIXTEEN_PLUS),
    new Product("Kaffee", ProductType.DRINK, 4, Deposit.NONE, AgeRestriction.NONE),
    new Product("Burger", ProductType.FOOD, 14, Deposit.NONE, AgeRestriction.NONE),
    new Product("Nachos", ProductType.FOOD, 12, Deposit.NONE, AgeRestriction.NONE),
    new Product("Glacé", ProductType.FOOD, 6, Deposit.NONE, AgeRestriction.NONE),
    new Product("Eis-Kaffee", ProductType.DRINK, 6, Deposit.CUP, AgeRestriction.NONE),
];

