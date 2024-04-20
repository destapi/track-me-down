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
export declare type PaymentMethodCreateFormInputValues = {
    created_at?: string;
    payment_type?: string;
    first_name?: string;
    last_name?: string;
    account_number?: string;
    verification_pin?: number;
};
export declare type PaymentMethodCreateFormValidationValues = {
    created_at?: ValidationFunction<string>;
    payment_type?: ValidationFunction<string>;
    first_name?: ValidationFunction<string>;
    last_name?: ValidationFunction<string>;
    account_number?: ValidationFunction<string>;
    verification_pin?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PaymentMethodCreateFormOverridesProps = {
    PaymentMethodCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    created_at?: PrimitiveOverrideProps<TextFieldProps>;
    payment_type?: PrimitiveOverrideProps<SelectFieldProps>;
    first_name?: PrimitiveOverrideProps<TextFieldProps>;
    last_name?: PrimitiveOverrideProps<TextFieldProps>;
    account_number?: PrimitiveOverrideProps<TextFieldProps>;
    verification_pin?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PaymentMethodCreateFormProps = React.PropsWithChildren<{
    overrides?: PaymentMethodCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PaymentMethodCreateFormInputValues) => PaymentMethodCreateFormInputValues;
    onSuccess?: (fields: PaymentMethodCreateFormInputValues) => void;
    onError?: (fields: PaymentMethodCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PaymentMethodCreateFormInputValues) => PaymentMethodCreateFormInputValues;
    onValidate?: PaymentMethodCreateFormValidationValues;
} & React.CSSProperties>;
export default function PaymentMethodCreateForm(props: PaymentMethodCreateFormProps): React.ReactElement;
