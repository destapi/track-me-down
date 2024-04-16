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
export declare type TripPlanUpdateFormInputValues = {
    pickUpTime?: string;
};
export declare type TripPlanUpdateFormValidationValues = {
    pickUpTime?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TripPlanUpdateFormOverridesProps = {
    TripPlanUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    pickUpTime?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TripPlanUpdateFormProps = React.PropsWithChildren<{
    overrides?: TripPlanUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    tripPlan?: any;
    onSubmit?: (fields: TripPlanUpdateFormInputValues) => TripPlanUpdateFormInputValues;
    onSuccess?: (fields: TripPlanUpdateFormInputValues) => void;
    onError?: (fields: TripPlanUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TripPlanUpdateFormInputValues) => TripPlanUpdateFormInputValues;
    onValidate?: TripPlanUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TripPlanUpdateForm(props: TripPlanUpdateFormProps): React.ReactElement;
