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
    paymentType?: string;
    accountNumber?: string;
    firstName?: string;
    lastName?: string;
    expiryDate?: string;
    verificationCode?: number;
};
export declare type PaymentMethodCreateFormValidationValues = {
    paymentType?: ValidationFunction<string>;
    accountNumber?: ValidationFunction<string>;
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    expiryDate?: ValidationFunction<string>;
    verificationCode?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PaymentMethodCreateFormOverridesProps = {
    PaymentMethodCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    paymentType?: PrimitiveOverrideProps<SelectFieldProps>;
    accountNumber?: PrimitiveOverrideProps<TextFieldProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    expiryDate?: PrimitiveOverrideProps<TextFieldProps>;
    verificationCode?: PrimitiveOverrideProps<TextFieldProps>;
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
