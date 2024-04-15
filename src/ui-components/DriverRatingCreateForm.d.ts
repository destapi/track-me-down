/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps } from "@aws-amplify/ui-react";
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
export declare type DriverRatingCreateFormInputValues = {};
export declare type DriverRatingCreateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DriverRatingCreateFormOverridesProps = {
    DriverRatingCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type DriverRatingCreateFormProps = React.PropsWithChildren<{
    overrides?: DriverRatingCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DriverRatingCreateFormInputValues) => DriverRatingCreateFormInputValues;
    onSuccess?: (fields: DriverRatingCreateFormInputValues) => void;
    onError?: (fields: DriverRatingCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DriverRatingCreateFormInputValues) => DriverRatingCreateFormInputValues;
    onValidate?: DriverRatingCreateFormValidationValues;
} & React.CSSProperties>;
export default function DriverRatingCreateForm(props: DriverRatingCreateFormProps): React.ReactElement;
