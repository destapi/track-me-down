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
export declare type VehicleFleetUpdateFormInputValues = {
    created_at?: string;
    title?: string;
    description?: string;
};
export declare type VehicleFleetUpdateFormValidationValues = {
    created_at?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type VehicleFleetUpdateFormOverridesProps = {
    VehicleFleetUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    created_at?: PrimitiveOverrideProps<TextFieldProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type VehicleFleetUpdateFormProps = React.PropsWithChildren<{
    overrides?: VehicleFleetUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    vehicleFleet?: any;
    onSubmit?: (fields: VehicleFleetUpdateFormInputValues) => VehicleFleetUpdateFormInputValues;
    onSuccess?: (fields: VehicleFleetUpdateFormInputValues) => void;
    onError?: (fields: VehicleFleetUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: VehicleFleetUpdateFormInputValues) => VehicleFleetUpdateFormInputValues;
    onValidate?: VehicleFleetUpdateFormValidationValues;
} & React.CSSProperties>;
export default function VehicleFleetUpdateForm(props: VehicleFleetUpdateFormProps): React.ReactElement;
