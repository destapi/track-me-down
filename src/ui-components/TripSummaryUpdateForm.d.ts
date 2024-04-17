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
export declare type TripSummaryUpdateFormInputValues = {
    totalDistance?: number;
    cancellationCharge?: number;
    tripStatus?: string;
    timeCompleted?: string;
    totalCharge?: number;
};
export declare type TripSummaryUpdateFormValidationValues = {
    totalDistance?: ValidationFunction<number>;
    cancellationCharge?: ValidationFunction<number>;
    tripStatus?: ValidationFunction<string>;
    timeCompleted?: ValidationFunction<string>;
    totalCharge?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TripSummaryUpdateFormOverridesProps = {
    TripSummaryUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    totalDistance?: PrimitiveOverrideProps<TextFieldProps>;
    cancellationCharge?: PrimitiveOverrideProps<TextFieldProps>;
    tripStatus?: PrimitiveOverrideProps<SelectFieldProps>;
    timeCompleted?: PrimitiveOverrideProps<TextFieldProps>;
    totalCharge?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TripSummaryUpdateFormProps = React.PropsWithChildren<{
    overrides?: TripSummaryUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    tripSummary?: any;
    onSubmit?: (fields: TripSummaryUpdateFormInputValues) => TripSummaryUpdateFormInputValues;
    onSuccess?: (fields: TripSummaryUpdateFormInputValues) => void;
    onError?: (fields: TripSummaryUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TripSummaryUpdateFormInputValues) => TripSummaryUpdateFormInputValues;
    onValidate?: TripSummaryUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TripSummaryUpdateForm(props: TripSummaryUpdateFormProps): React.ReactElement;
