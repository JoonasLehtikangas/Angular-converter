import { ConversionDef } from "./conversion-def.class";

export class ConverterCategoryrDef {
    constructor(
        public name: string,
        public icon: string,
        public conversions: ConversionDef[]

    ) {}
}