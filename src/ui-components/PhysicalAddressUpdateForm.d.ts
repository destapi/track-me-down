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
export declare type PhysicalAddressUpdateFormInputValues = {
    created_at?: string;
    street_name?: string;
    unit_num?: string;
    city?: string;
    state?: string;
    zip_code?: string;
};
export declare type PhysicalAddressUpdateFormValidationValues = {
    created_at?: ValidationFunction<string>;
    street_name?: ValidationFunction<string>;
    unit_num?: ValidationFunction<string>;
    city?: ValidationFunction<string>;
    state?: ValidationFunction<string>;
    zip_code?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PhysicalAddressUpdateFormOverridesProps = {
    PhysicalAddressUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    created_at?: PrimitiveOverrideProps<TextFieldProps>;
    street_name?: PrimitiveOverrideProps<TextFieldProps>;
    unit_num?: PrimitiveOverrideProps<TextFieldProps>;
    city?: PrimitiveOverrideProps<TextFieldProps>;
    state?: PrimitiveOverrideProps<TextFieldProps>;
    zip_code?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PhysicalAddressUpdateFormProps = React.PropsWithChildren<{
    overrides?: PhysicalAddressUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    physicalAddress?: any;
    onSubmit?: (fields: PhysicalAddressUpdateFormInputValues) => PhysicalAddressUpdateFormInputValues;
    onSuccess?: (fields: PhysicalAddressUpdateFormInputValues) => void;
    onError?: (fields: PhysicalAddressUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PhysicalAddressUpdateFormInputValues) => PhysicalAddressUpdateFormInputValues;
    onValidate?: PhysicalAddressUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PhysicalAddressUpdateForm(props: PhysicalAddressUpdateFormProps): React.ReactElement;
