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
export declare type TripChargeUpdateFormInputValues = {
    cost?: number;
    tip?: number;
};
export declare type TripChargeUpdateFormValidationValues = {
    cost?: ValidationFunction<number>;
    tip?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TripChargeUpdateFormOverridesProps = {
    TripChargeUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    cost?: PrimitiveOverrideProps<TextFieldProps>;
    tip?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TripChargeUpdateFormProps = React.PropsWithChildren<{
    overrides?: TripChargeUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    tripCharge?: any;
    onSubmit?: (fields: TripChargeUpdateFormInputValues) => TripChargeUpdateFormInputValues;
    onSuccess?: (fields: TripChargeUpdateFormInputValues) => void;
    onError?: (fields: TripChargeUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TripChargeUpdateFormInputValues) => TripChargeUpdateFormInputValues;
    onValidate?: TripChargeUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TripChargeUpdateForm(props: TripChargeUpdateFormProps): React.ReactElement;
