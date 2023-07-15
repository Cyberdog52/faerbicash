export enum ProductType {
    DRINK = 'DRINK',
    FOOD = 'FOOD',
}

export enum Deposit {
    NONE = 'NONE',
    CUP = 'CUP',
    MUG = 'MUG',
}

export class Product {
    name: string;
    type: ProductType;
    cost: number;
    depot: Deposit;

    constructor(name: string, type: ProductType, cost: number, depot: Deposit) {
        this.name = name;
        this.type = type;
        this.cost = cost;
        this.depot = depot;
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
        default:
            return 0;
    }
}

const allProducts : Product[]  = [
    new Product("Coke", ProductType.DRINK, 2, Deposit.NONE),
];

