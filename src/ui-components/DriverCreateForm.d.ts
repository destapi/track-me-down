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
export declare type DriverCreateFormInputValues = {
    created_at?: string;
    first_name?: string;
    last_name?: string;
    email_address?: string;
    phone_number?: string;
    earning_tier?: string;
    active_status?: string;
};
export declare type DriverCreateFormValidationValues = {
    created_at?: ValidationFunction<string>;
    first_name?: ValidationFunction<string>;
    last_name?: ValidationFunction<string>;
    email_address?: ValidationFunction<string>;
    phone_number?: ValidationFunction<string>;
    earning_tier?: ValidationFunction<string>;
    active_status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DriverCreateFormOverridesProps = {
    DriverCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    created_at?: PrimitiveOverrideProps<TextFieldProps>;
    first_name?: PrimitiveOverrideProps<TextFieldProps>;
    last_name?: PrimitiveOverrideProps<TextFieldProps>;
    email_address?: PrimitiveOverrideProps<TextFieldProps>;
    phone_number?: PrimitiveOverrideProps<TextFieldProps>;
    earning_tier?: PrimitiveOverrideProps<SelectFieldProps>;
    active_status?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type DriverCreateFormProps = React.PropsWithChildren<{
    overrides?: DriverCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DriverCreateFormInputValues) => DriverCreateFormInputValues;
    onSuccess?: (fields: DriverCreateFormInputValues) => void;
    onError?: (fields: DriverCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DriverCreateFormInputValues) => DriverCreateFormInputValues;
    onValidate?: DriverCreateFormValidationValues;
} & React.CSSProperties>;
export default function DriverCreateForm(props: DriverCreateFormProps): React.ReactElement;
