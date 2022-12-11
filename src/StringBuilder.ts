export default class StringBuilder {
    private strings: Array<string>;
    private lengthCounter: number;

    private readonly maxAllowedLength: number | null;

    constructor({
                    stringToAdd,
                    maxLength,
                }: {
        stringToAdd?: string;
        maxLength?: number;
    }) {
        this.lengthCounter = 0;
        this.strings = [];

        this.maxAllowedLength = maxLength ?? null;

        if (stringToAdd) this.add(stringToAdd);
    }

    public add(stringToAdd: string): StringBuilder {
        if (this.maxAllowedLength) {
            if (stringToAdd.length + this.lengthCounter > this.maxAllowedLength) throw new Error("String you want to add is too long");
            this.lengthCounter += stringToAdd.length;
        }

        this.strings.push(stringToAdd);

        return this;
    }

    public toString(): string {
        return this.strings.join('');
    }
}
