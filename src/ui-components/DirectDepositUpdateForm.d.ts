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
export declare type DirectDepositUpdateFormInputValues = {
    created_at?: string;
    routing_number?: string;
    account_number?: string;
    amount_designated?: number;
    percent_designated?: number;
};
export declare type DirectDepositUpdateFormValidationValues = {
    created_at?: ValidationFunction<string>;
    routing_number?: ValidationFunction<string>;
    account_number?: ValidationFunction<string>;
    amount_designated?: ValidationFunction<number>;
    percent_designated?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DirectDepositUpdateFormOverridesProps = {
    DirectDepositUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    created_at?: PrimitiveOverrideProps<TextFieldProps>;
    routing_number?: PrimitiveOverrideProps<TextFieldProps>;
    account_number?: PrimitiveOverrideProps<TextFieldProps>;
    amount_designated?: PrimitiveOverrideProps<TextFieldProps>;
    percent_designated?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DirectDepositUpdateFormProps = React.PropsWithChildren<{
    overrides?: DirectDepositUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    directDeposit?: any;
    onSubmit?: (fields: DirectDepositUpdateFormInputValues) => DirectDepositUpdateFormInputValues;
    onSuccess?: (fields: DirectDepositUpdateFormInputValues) => void;
    onError?: (fields: DirectDepositUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DirectDepositUpdateFormInputValues) => DirectDepositUpdateFormInputValues;
    onValidate?: DirectDepositUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DirectDepositUpdateForm(props: DirectDepositUpdateFormProps): React.ReactElement;
