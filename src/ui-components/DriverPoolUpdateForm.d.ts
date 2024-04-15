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
export declare type DriverPoolUpdateFormInputValues = {
    poolTitle?: string;
};
export declare type DriverPoolUpdateFormValidationValues = {
    poolTitle?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DriverPoolUpdateFormOverridesProps = {
    DriverPoolUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    poolTitle?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DriverPoolUpdateFormProps = React.PropsWithChildren<{
    overrides?: DriverPoolUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    driverPool?: any;
    onSubmit?: (fields: DriverPoolUpdateFormInputValues) => DriverPoolUpdateFormInputValues;
    onSuccess?: (fields: DriverPoolUpdateFormInputValues) => void;
    onError?: (fields: DriverPoolUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DriverPoolUpdateFormInputValues) => DriverPoolUpdateFormInputValues;
    onValidate?: DriverPoolUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DriverPoolUpdateForm(props: DriverPoolUpdateFormProps): React.ReactElement;
