import { ControlValueAccessor } from '@angular/forms';
export declare const RATING_CONTROL_VALUE_ACCESSOR: any;
export declare class Ionic2Rating implements ControlValueAccessor {
    _max: number;
    _readOnly: boolean;
    _emptyStarIconName: string;
    _halfStarIconName: string;
    _starIconName: string;
    _nullable: boolean;
    max: any;
    readOnly: any;
    emptyStarIconName: any;
    halfStarIconName: any;
    starIconName: any;
    nullable: any;
    innerValue: any;
    starIndexes: Array<number>;
    onChangeCallback: (_: any) => void;
    ngOnInit(): void;
    getStarIconName(starIndex: number): any;
    value: any;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    onKeyDown(event: any): void;
    rate(value: number): void;
    private isTrueProperty(val);
    private getNumberPropertyValue(val);
}
