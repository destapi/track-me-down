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
export declare type DriverUpdateFormInputValues = {
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
export declare type DriverUpdateFormValidationValues = {
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
export declare type DriverUpdateFormOverridesProps = {
    DriverUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type DriverUpdateFormProps = React.PropsWithChildren<{
    overrides?: DriverUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    driver?: any;
    onSubmit?: (fields: DriverUpdateFormInputValues) => DriverUpdateFormInputValues;
    onSuccess?: (fields: DriverUpdateFormInputValues) => void;
    onError?: (fields: DriverUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DriverUpdateFormInputValues) => DriverUpdateFormInputValues;
    onValidate?: DriverUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DriverUpdateForm(props: DriverUpdateFormProps): React.ReactElement;
