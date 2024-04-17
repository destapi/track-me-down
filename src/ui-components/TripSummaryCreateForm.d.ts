/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type TripSummaryCreateFormInputValues = {
    totalDistance?: number;
    cancellationCharge?: number;
    tripStatus?: string;
    timeCompleted?: string;
    totalCharge?: number;
};
export declare type TripSummaryCreateFormValidationValues = {
    totalDistance?: ValidationFunction<number>;
    cancellationCharge?: ValidationFunction<number>;
    tripStatus?: ValidationFunction<string>;
    timeCompleted?: ValidationFunction<string>;
    totalCharge?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TripSummaryCreateFormOverridesProps = {
    TripSummaryCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    totalDistance?: PrimitiveOverrideProps<TextFieldProps>;
    cancellationCharge?: PrimitiveOverrideProps<TextFieldProps>;
    tripStatus?: PrimitiveOverrideProps<SelectFieldProps>;
    timeCompleted?: PrimitiveOverrideProps<TextFieldProps>;
    totalCharge?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TripSummaryCreateFormProps = React.PropsWithChildren<{
    overrides?: TripSummaryCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TripSummaryCreateFormInputValues) => TripSummaryCreateFormInputValues;
    onSuccess?: (fields: TripSummaryCreateFormInputValues) => void;
    onError?: (fields: TripSummaryCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TripSummaryCreateFormInputValues) => TripSummaryCreateFormInputValues;
    onValidate?: TripSummaryCreateFormValidationValues;
} & React.CSSProperties>;
export default function TripSummaryCreateForm(props: TripSummaryCreateFormProps): React.ReactElement;
