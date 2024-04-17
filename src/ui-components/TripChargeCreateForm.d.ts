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
export declare type TripChargeCreateFormInputValues = {
    cost?: number;
    tip?: number;
};
export declare type TripChargeCreateFormValidationValues = {
    cost?: ValidationFunction<number>;
    tip?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TripChargeCreateFormOverridesProps = {
    TripChargeCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    cost?: PrimitiveOverrideProps<TextFieldProps>;
    tip?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TripChargeCreateFormProps = React.PropsWithChildren<{
    overrides?: TripChargeCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TripChargeCreateFormInputValues) => TripChargeCreateFormInputValues;
    onSuccess?: (fields: TripChargeCreateFormInputValues) => void;
    onError?: (fields: TripChargeCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TripChargeCreateFormInputValues) => TripChargeCreateFormInputValues;
    onValidate?: TripChargeCreateFormValidationValues;
} & React.CSSProperties>;
export default function TripChargeCreateForm(props: TripChargeCreateFormProps): React.ReactElement;
