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
export declare type AdministratorUpdateFormInputValues = {
    firstName?: string;
    lastName?: string;
    phoneNumber?: string;
    emailAddress?: string;
    dateRegistered?: string;
};
export declare type AdministratorUpdateFormValidationValues = {
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    phoneNumber?: ValidationFunction<string>;
    emailAddress?: ValidationFunction<string>;
    dateRegistered?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AdministratorUpdateFormOverridesProps = {
    AdministratorUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    phoneNumber?: PrimitiveOverrideProps<TextFieldProps>;
    emailAddress?: PrimitiveOverrideProps<TextFieldProps>;
    dateRegistered?: PrimitiveOverrideProps<TextFieldProps>;
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
