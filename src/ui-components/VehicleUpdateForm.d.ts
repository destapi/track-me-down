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
export declare type VehicleUpdateFormInputValues = {
    created_at?: string;
    vin?: string;
    make?: string;
    year?: string;
    registration_plate?: string;
};
export declare type VehicleUpdateFormValidationValues = {
    created_at?: ValidationFunction<string>;
    vin?: ValidationFunction<string>;
    make?: ValidationFunction<string>;
    year?: ValidationFunction<string>;
    registration_plate?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type VehicleUpdateFormOverridesProps = {
    VehicleUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    created_at?: PrimitiveOverrideProps<TextFieldProps>;
    vin?: PrimitiveOverrideProps<TextFieldProps>;
    make?: PrimitiveOverrideProps<TextFieldProps>;
    year?: PrimitiveOverrideProps<TextFieldProps>;
    registration_plate?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type VehicleUpdateFormProps = React.PropsWithChildren<{
    overrides?: VehicleUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    vehicle?: any;
    onSubmit?: (fields: VehicleUpdateFormInputValues) => VehicleUpdateFormInputValues;
    onSuccess?: (fields: VehicleUpdateFormInputValues) => void;
    onError?: (fields: VehicleUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: VehicleUpdateFormInputValues) => VehicleUpdateFormInputValues;
    onValidate?: VehicleUpdateFormValidationValues;
} & React.CSSProperties>;
export default function VehicleUpdateForm(props: VehicleUpdateFormProps): React.ReactElement;
