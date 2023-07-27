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
    BOTTLE = 'Flasche',
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
        case Deposit.BOTTLE:
            return 10;
        default:
            return 0;
    }
}

export const allProducts : Product[]  = [
    new Product("Bier", '#cfefff', ProductType.DRINK, 6, Deposit.CUP, AgeRestriction.SIXTEEN_PLUS),
    new Product("Craftbeer", '#cfefff',ProductType.DRINK, 8, Deposit.CUP, AgeRestriction.SIXTEEN_PLUS),
    new Product("Moscht", '#cfefff',ProductType.DRINK, 7, Deposit.NONE, AgeRestriction.SIXTEEN_PLUS),
    new Product("Softdrink", '#ffffff',ProductType.DRINK, 5, Deposit.CUP, AgeRestriction.NONE),
    new Product("Energy Drink", '#ffffff',ProductType.DRINK, 6, Deposit.NONE, AgeRestriction.NONE),
    new Product("Bier Alkoholfrei", '#ffffff',ProductType.DRINK, 6, Deposit.NONE, AgeRestriction.NONE),
    new Product("Mule", '#cfffdf',ProductType.DRINK, 15, Deposit.MUG, AgeRestriction.EIGHTEEN_PLUS),
    new Product("Longdrink", '#dfdfef',ProductType.DRINK, 14, Deposit.CUP, AgeRestriction.EIGHTEEN_PLUS),
    new Product("Shot", '#ffcfcf',ProductType.DRINK, 5, Deposit.NONE, AgeRestriction.EIGHTEEN_PLUS),
    new Product("Virgin Mule", '#cfffdf',ProductType.DRINK, 10, Deposit.MUG, AgeRestriction.NONE),
    new Product("Virgin Sunrise", '#dfdfef',ProductType.DRINK, 10, Deposit.CUP, AgeRestriction.NONE),
    new Product("Shot Flasche", '#ffcfcf',ProductType.DRINK, 50, Deposit.BOTTLE, AgeRestriction.EIGHTEEN_PLUS),
    new Product("Aperol / Hugo", '#ffefbf',ProductType.DRINK, 12, Deposit.CUP, AgeRestriction.EIGHTEEN_PLUS),
    new Product("Gsprützte Wiisse", '#ffefbf',ProductType.DRINK, 8, Deposit.CUP, AgeRestriction.SIXTEEN_PLUS),
    new Product("Cüpli", '#ffefbf',ProductType.DRINK, 7, Deposit.CUP, AgeRestriction.SIXTEEN_PLUS),
    new Product("Burger", '#ffcfef',ProductType.FOOD, 14, Deposit.NONE, AgeRestriction.NONE),
    new Product("Nachos", '#ffcfef',ProductType.FOOD, 8, Deposit.NONE, AgeRestriction.NONE),
    new Product("Glacé", '#ffcfef',ProductType.FOOD, 6, Deposit.NONE, AgeRestriction.NONE),
    new Product("Kaffee", '#dfbfbf',ProductType.DRINK, 4, Deposit.NONE, AgeRestriction.NONE),
    new Product("Eis-Kaffee", '#dfbfbf',ProductType.DRINK, 6, Deposit.CUP, AgeRestriction.NONE),
    new Product("Bier Dose", '#cfefff',ProductType.DRINK, 6, Deposit.NONE, AgeRestriction.SIXTEEN_PLUS),
];

