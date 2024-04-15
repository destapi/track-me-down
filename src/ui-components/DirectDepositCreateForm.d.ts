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
export declare type DirectDepositCreateFormInputValues = {
    routingNumber?: string;
    accountNumber?: string;
    amountDesignated?: number;
    percentageDesignated?: number;
};
export declare type DirectDepositCreateFormValidationValues = {
    routingNumber?: ValidationFunction<string>;
    accountNumber?: ValidationFunction<string>;
    amountDesignated?: ValidationFunction<number>;
    percentageDesignated?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DirectDepositCreateFormOverridesProps = {
    DirectDepositCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    routingNumber?: PrimitiveOverrideProps<TextFieldProps>;
    accountNumber?: PrimitiveOverrideProps<TextFieldProps>;
    amountDesignated?: PrimitiveOverrideProps<TextFieldProps>;
    percentageDesignated?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DirectDepositCreateFormProps = React.PropsWithChildren<{
    overrides?: DirectDepositCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DirectDepositCreateFormInputValues) => DirectDepositCreateFormInputValues;
    onSuccess?: (fields: DirectDepositCreateFormInputValues) => void;
    onError?: (fields: DirectDepositCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DirectDepositCreateFormInputValues) => DirectDepositCreateFormInputValues;
    onValidate?: DirectDepositCreateFormValidationValues;
} & React.CSSProperties>;
export default function DirectDepositCreateForm(props: DirectDepositCreateFormProps): React.ReactElement;
