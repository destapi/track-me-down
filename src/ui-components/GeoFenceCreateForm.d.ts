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
export declare type GeoFenceCreateFormInputValues = {
    title?: string;
    coordinates?: string;
    dateCreated?: string;
};
export declare type GeoFenceCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    coordinates?: ValidationFunction<string>;
    dateCreated?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GeoFenceCreateFormOverridesProps = {
    GeoFenceCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    coordinates?: PrimitiveOverrideProps<TextFieldProps>;
    dateCreated?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type GeoFenceCreateFormProps = React.PropsWithChildren<{
    overrides?: GeoFenceCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: GeoFenceCreateFormInputValues) => GeoFenceCreateFormInputValues;
    onSuccess?: (fields: GeoFenceCreateFormInputValues) => void;
    onError?: (fields: GeoFenceCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GeoFenceCreateFormInputValues) => GeoFenceCreateFormInputValues;
    onValidate?: GeoFenceCreateFormValidationValues;
} & React.CSSProperties>;
export default function GeoFenceCreateForm(props: GeoFenceCreateFormProps): React.ReactElement;
