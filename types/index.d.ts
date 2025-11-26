declare global {
    export interface Countdown {
        start: number | Date;
        expiry: number | Date;
        days: number | string;
        hours: number | string;
        minutes: number | string;
        seconds: number | string;
        expired: boolean;
        total: CountdownTotal;
    }

    export interface CountdownTotal {
        days: number;
        hours: number;
        minutes: number;
        seconds: number;
    }

    export interface DropDownOption {
        id: string;
        label: string;
        emit: string;
    }

}

export { }