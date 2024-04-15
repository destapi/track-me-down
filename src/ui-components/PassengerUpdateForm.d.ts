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
    firstName?: string;
    lastName?: string;
    phoneNumber?: string;
    emailAddress?: string;
    dateRegistered?: string;
    activeStatus?: string;
};
export declare type PassengerUpdateFormValidationValues = {
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    phoneNumber?: ValidationFunction<string>;
    emailAddress?: ValidationFunction<string>;
    dateRegistered?: ValidationFunction<string>;
    activeStatus?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PassengerUpdateFormOverridesProps = {
    PassengerUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    phoneNumber?: PrimitiveOverrideProps<TextFieldProps>;
    emailAddress?: PrimitiveOverrideProps<TextFieldProps>;
    dateRegistered?: PrimitiveOverrideProps<TextFieldProps>;
    activeStatus?: PrimitiveOverrideProps<SelectFieldProps>;
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
