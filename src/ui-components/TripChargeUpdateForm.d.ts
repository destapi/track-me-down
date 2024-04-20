/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TripChargeUpdateFormInputValues = {
    created_at?: string;
    amount_charged?: number;
    tip_applied?: number;
    passenger?: string;
    trip_summary?: string;
};
export declare type TripChargeUpdateFormValidationValues = {
    created_at?: ValidationFunction<string>;
    amount_charged?: ValidationFunction<number>;
    tip_applied?: ValidationFunction<number>;
    passenger?: ValidationFunction<string>;
    trip_summary?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TripChargeUpdateFormOverridesProps = {
    TripChargeUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    created_at?: PrimitiveOverrideProps<TextFieldProps>;
    amount_charged?: PrimitiveOverrideProps<TextFieldProps>;
    tip_applied?: PrimitiveOverrideProps<TextFieldProps>;
    passenger?: PrimitiveOverrideProps<TextFieldProps>;
    trip_summary?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TripChargeUpdateFormProps = React.PropsWithChildren<{
    overrides?: TripChargeUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    tripCharge?: any;
    onSubmit?: (fields: TripChargeUpdateFormInputValues) => TripChargeUpdateFormInputValues;
    onSuccess?: (fields: TripChargeUpdateFormInputValues) => void;
    onError?: (fields: TripChargeUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TripChargeUpdateFormInputValues) => TripChargeUpdateFormInputValues;
    onValidate?: TripChargeUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TripChargeUpdateForm(props: TripChargeUpdateFormProps): React.ReactElement;
