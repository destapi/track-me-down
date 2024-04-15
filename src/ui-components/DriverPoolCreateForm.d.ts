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
export declare type DriverPoolCreateFormInputValues = {
    poolTitle?: string;
};
export declare type DriverPoolCreateFormValidationValues = {
    poolTitle?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DriverPoolCreateFormOverridesProps = {
    DriverPoolCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    poolTitle?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DriverPoolCreateFormProps = React.PropsWithChildren<{
    overrides?: DriverPoolCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DriverPoolCreateFormInputValues) => DriverPoolCreateFormInputValues;
    onSuccess?: (fields: DriverPoolCreateFormInputValues) => void;
    onError?: (fields: DriverPoolCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DriverPoolCreateFormInputValues) => DriverPoolCreateFormInputValues;
    onValidate?: DriverPoolCreateFormValidationValues;
} & React.CSSProperties>;
export default function DriverPoolCreateForm(props: DriverPoolCreateFormProps): React.ReactElement;
