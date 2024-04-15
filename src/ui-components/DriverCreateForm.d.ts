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
    firstName?: string;
    lastName?: string;
    ssn?: string;
    dob?: string;
    dLCopy?: string;
    phoneNumber?: string;
    emailAddress?: string;
    earningTier?: string;
    registrationDate?: string;
    activeStatus?: string;
};
export declare type DriverCreateFormValidationValues = {
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    ssn?: ValidationFunction<string>;
    dob?: ValidationFunction<string>;
    dLCopy?: ValidationFunction<string>;
    phoneNumber?: ValidationFunction<string>;
    emailAddress?: ValidationFunction<string>;
    earningTier?: ValidationFunction<string>;
    registrationDate?: ValidationFunction<string>;
    activeStatus?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DriverCreateFormOverridesProps = {
    DriverCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    ssn?: PrimitiveOverrideProps<TextFieldProps>;
    dob?: PrimitiveOverrideProps<TextFieldProps>;
    dLCopy?: PrimitiveOverrideProps<TextFieldProps>;
    phoneNumber?: PrimitiveOverrideProps<TextFieldProps>;
    emailAddress?: PrimitiveOverrideProps<TextFieldProps>;
    earningTier?: PrimitiveOverrideProps<SelectFieldProps>;
    registrationDate?: PrimitiveOverrideProps<TextFieldProps>;
    activeStatus?: PrimitiveOverrideProps<SelectFieldProps>;
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
