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
export declare type VehicleCreateFormInputValues = {
    vin?: string;
    make?: string;
    model?: string;
    year?: number;
    registrationNum?: string;
    registrationState?: string;
    registrationCopy?: string;
    insuranceProof?: string;
};
export declare type VehicleCreateFormValidationValues = {
    vin?: ValidationFunction<string>;
    make?: ValidationFunction<string>;
    model?: ValidationFunction<string>;
    year?: ValidationFunction<number>;
    registrationNum?: ValidationFunction<string>;
    registrationState?: ValidationFunction<string>;
    registrationCopy?: ValidationFunction<string>;
    insuranceProof?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type VehicleCreateFormOverridesProps = {
    VehicleCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    vin?: PrimitiveOverrideProps<TextFieldProps>;
    make?: PrimitiveOverrideProps<TextFieldProps>;
    model?: PrimitiveOverrideProps<TextFieldProps>;
    year?: PrimitiveOverrideProps<TextFieldProps>;
    registrationNum?: PrimitiveOverrideProps<TextFieldProps>;
    registrationState?: PrimitiveOverrideProps<TextFieldProps>;
    registrationCopy?: PrimitiveOverrideProps<TextFieldProps>;
    insuranceProof?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type VehicleCreateFormProps = React.PropsWithChildren<{
    overrides?: VehicleCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: VehicleCreateFormInputValues) => VehicleCreateFormInputValues;
    onSuccess?: (fields: VehicleCreateFormInputValues) => void;
    onError?: (fields: VehicleCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: VehicleCreateFormInputValues) => VehicleCreateFormInputValues;
    onValidate?: VehicleCreateFormValidationValues;
} & React.CSSProperties>;
export default function VehicleCreateForm(props: VehicleCreateFormProps): React.ReactElement;
