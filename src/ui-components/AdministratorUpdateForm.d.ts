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
export declare type AdministratorUpdateFormInputValues = {
    created_at?: string;
    first_name?: string;
    last_name?: string;
    email_address?: string;
    phone_number?: string;
    form_of_id?: string;
};
export declare type AdministratorUpdateFormValidationValues = {
    created_at?: ValidationFunction<string>;
    first_name?: ValidationFunction<string>;
    last_name?: ValidationFunction<string>;
    email_address?: ValidationFunction<string>;
    phone_number?: ValidationFunction<string>;
    form_of_id?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AdministratorUpdateFormOverridesProps = {
    AdministratorUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    created_at?: PrimitiveOverrideProps<TextFieldProps>;
    first_name?: PrimitiveOverrideProps<TextFieldProps>;
    last_name?: PrimitiveOverrideProps<TextFieldProps>;
    email_address?: PrimitiveOverrideProps<TextFieldProps>;
    phone_number?: PrimitiveOverrideProps<TextFieldProps>;
    form_of_id?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type AdministratorUpdateFormProps = React.PropsWithChildren<{
    overrides?: AdministratorUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    administrator?: any;
    onSubmit?: (fields: AdministratorUpdateFormInputValues) => AdministratorUpdateFormInputValues;
    onSuccess?: (fields: AdministratorUpdateFormInputValues) => void;
    onError?: (fields: AdministratorUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AdministratorUpdateFormInputValues) => AdministratorUpdateFormInputValues;
    onValidate?: AdministratorUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AdministratorUpdateForm(props: AdministratorUpdateFormProps): React.ReactElement;
