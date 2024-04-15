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
export declare type TripFeedbackCreateFormInputValues = {
    comments?: string;
};
export declare type TripFeedbackCreateFormValidationValues = {
    comments?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TripFeedbackCreateFormOverridesProps = {
    TripFeedbackCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    comments?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TripFeedbackCreateFormProps = React.PropsWithChildren<{
    overrides?: TripFeedbackCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TripFeedbackCreateFormInputValues) => TripFeedbackCreateFormInputValues;
    onSuccess?: (fields: TripFeedbackCreateFormInputValues) => void;
    onError?: (fields: TripFeedbackCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TripFeedbackCreateFormInputValues) => TripFeedbackCreateFormInputValues;
    onValidate?: TripFeedbackCreateFormValidationValues;
} & React.CSSProperties>;
export default function TripFeedbackCreateForm(props: TripFeedbackCreateFormProps): React.ReactElement;
