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
export declare type PassengerUpdateFormInputValues = {
    created_at?: string;
    first_name?: string;
    last_name?: string;
    email_address?: string;
    phone_number?: string;
    active_status?: string;
};
export declare type PassengerUpdateFormValidationValues = {
    created_at?: ValidationFunction<string>;
    first_name?: ValidationFunction<string>;
    last_name?: ValidationFunction<string>;
    email_address?: ValidationFunction<string>;
    phone_number?: ValidationFunction<string>;
    active_status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PassengerUpdateFormOverridesProps = {
    PassengerUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    created_at?: PrimitiveOverrideProps<TextFieldProps>;
    first_name?: PrimitiveOverrideProps<TextFieldProps>;
    last_name?: PrimitiveOverrideProps<TextFieldProps>;
    email_address?: PrimitiveOverrideProps<TextFieldProps>;
    phone_number?: PrimitiveOverrideProps<TextFieldProps>;
    active_status?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type PassengerUpdateFormProps = React.PropsWithChildren<{
    overrides?: PassengerUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    passenger?: any;
    onSubmit?: (fields: PassengerUpdateFormInputValues) => PassengerUpdateFormInputValues;
    onSuccess?: (fields: PassengerUpdateFormInputValues) => void;
    onError?: (fields: PassengerUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PassengerUpdateFormInputValues) => PassengerUpdateFormInputValues;
    onValidate?: PassengerUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PassengerUpdateForm(props: PassengerUpdateFormProps): React.ReactElement;
