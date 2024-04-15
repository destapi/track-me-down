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
export declare type GeoFenceUpdateFormInputValues = {
    title?: string;
    coordinates?: string;
    dateCreated?: string;
    validDuration?: number;
};
export declare type GeoFenceUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    coordinates?: ValidationFunction<string>;
    dateCreated?: ValidationFunction<string>;
    validDuration?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GeoFenceUpdateFormOverridesProps = {
    GeoFenceUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    coordinates?: PrimitiveOverrideProps<TextFieldProps>;
    dateCreated?: PrimitiveOverrideProps<TextFieldProps>;
    validDuration?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type GeoFenceUpdateFormProps = React.PropsWithChildren<{
    overrides?: GeoFenceUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    geoFence?: any;
    onSubmit?: (fields: GeoFenceUpdateFormInputValues) => GeoFenceUpdateFormInputValues;
    onSuccess?: (fields: GeoFenceUpdateFormInputValues) => void;
    onError?: (fields: GeoFenceUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GeoFenceUpdateFormInputValues) => GeoFenceUpdateFormInputValues;
    onValidate?: GeoFenceUpdateFormValidationValues;
} & React.CSSProperties>;
export default function GeoFenceUpdateForm(props: GeoFenceUpdateFormProps): React.ReactElement;
