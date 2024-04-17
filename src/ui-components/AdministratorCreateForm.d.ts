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
export declare type AdministratorCreateFormInputValues = {
    firstName?: string;
    lastName?: string;
    phoneNumber?: string;
    emailAddress?: string;
    dateRegistered?: string;
};
export declare type AdministratorCreateFormValidationValues = {
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    phoneNumber?: ValidationFunction<string>;
    emailAddress?: ValidationFunction<string>;
    dateRegistered?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AdministratorCreateFormOverridesProps = {
    AdministratorCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    phoneNumber?: PrimitiveOverrideProps<TextFieldProps>;
    emailAddress?: PrimitiveOverrideProps<TextFieldProps>;
    dateRegistered?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AdministratorCreateFormProps = React.PropsWithChildren<{
    overrides?: AdministratorCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AdministratorCreateFormInputValues) => AdministratorCreateFormInputValues;
    onSuccess?: (fields: AdministratorCreateFormInputValues) => void;
    onError?: (fields: AdministratorCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AdministratorCreateFormInputValues) => AdministratorCreateFormInputValues;
    onValidate?: AdministratorCreateFormValidationValues;
} & React.CSSProperties>;
export default function AdministratorCreateForm(props: AdministratorCreateFormProps): React.ReactElement;
