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
    primaryColor: string;
    type: ProductType;
    price: number;
    depot: Deposit;
    ageRestriction: AgeRestriction = AgeRestriction.NONE;

    constructor(name: string, primaryColor: string, type: ProductType, price: number, depot: Deposit, ageRestriction: AgeRestriction = AgeRestriction.NONE) {
        this.name = name;
        this.primaryColor = primaryColor;
        this.type = type;
        this.price = price;
        this.depot = depot;
        this.ageRestriction = ageRestriction;
    }

    getDepositCost(): number {
        return getDepositPrice(this.depot);
    }

    getPrimaryColor(): string {
        return this.primaryColor;
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
    new Product("Bier", '#ffffff', ProductType.DRINK, 6, Deposit.CUP, AgeRestriction.SIXTEEN_PLUS),
    new Product("Craftbeer", '#ffffff',ProductType.DRINK, 8, Deposit.CUP, AgeRestriction.SIXTEEN_PLUS),
    new Product("Bier Alkoholfrei", '#ffffff',ProductType.DRINK, 6, Deposit.NONE, AgeRestriction.SIXTEEN_PLUS),
    new Product("Softdrink", '#ffffff',ProductType.DRINK, 5, Deposit.CUP, AgeRestriction.NONE),
    new Product("Energy Drink", '#ffffff',ProductType.DRINK, 6, Deposit.NONE, AgeRestriction.NONE),
    new Product("Moscht", '#ffffff',ProductType.DRINK, 7, Deposit.NONE, AgeRestriction.SIXTEEN_PLUS),
    new Product("Mule", '#ffffff',ProductType.DRINK, 15, Deposit.MUG, AgeRestriction.EIGHTEEN_PLUS),
    new Product("Longdrink", '#ffffff',ProductType.DRINK, 14, Deposit.CUP, AgeRestriction.EIGHTEEN_PLUS),
    new Product("Shot", '#ffffff',ProductType.DRINK, 5, Deposit.NONE, AgeRestriction.EIGHTEEN_PLUS),
    new Product("Virgin Mule", '#ffffff',ProductType.DRINK, 10, Deposit.MUG, AgeRestriction.NONE),
    new Product("Virgin Sunrise", '#ffffff',ProductType.DRINK, 10, Deposit.CUP, AgeRestriction.NONE),
    new Product("Shot Flasche", '#ffffff',ProductType.DRINK, 50, Deposit.GLASS, AgeRestriction.EIGHTEEN_PLUS),
    new Product("Aperol / Hugo", '#ffffff',ProductType.DRINK, 12, Deposit.CUP, AgeRestriction.EIGHTEEN_PLUS),
    new Product("Gsprützte Wiise", '#ffffff',ProductType.DRINK, 8, Deposit.CUP, AgeRestriction.SIXTEEN_PLUS),
    new Product("Cüpli", '#ffffff',ProductType.DRINK, 7, Deposit.CUP, AgeRestriction.SIXTEEN_PLUS),
    new Product("Burger", '#ffffff',ProductType.FOOD, 14, Deposit.NONE, AgeRestriction.NONE),
    new Product("Nachos", '#ffffff',ProductType.FOOD, 12, Deposit.NONE, AgeRestriction.NONE),
    new Product("Glacé", '#ffffff',ProductType.FOOD, 6, Deposit.NONE, AgeRestriction.NONE),
    new Product("Kaffee", '#ffffff',ProductType.DRINK, 4, Deposit.NONE, AgeRestriction.NONE),
    new Product("Eis-Kaffee", '#ffffff',ProductType.DRINK, 6, Deposit.CUP, AgeRestriction.NONE),
    new Product("Bier Dose", '#ffffff',ProductType.DRINK, 6, Deposit.NONE, AgeRestriction.SIXTEEN_PLUS),
];

