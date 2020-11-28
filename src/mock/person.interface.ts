export interface Person {
    firstName?: string;
    lastName?: string;
    age?: number;
    address?: Address;
    children?: Person[];
}

export interface Address {
    streetName?: string;
}