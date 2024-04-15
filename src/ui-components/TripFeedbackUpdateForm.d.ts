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
export declare type TripFeedbackUpdateFormInputValues = {
    comments?: string;
};
export declare type TripFeedbackUpdateFormValidationValues = {
    comments?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TripFeedbackUpdateFormOverridesProps = {
    TripFeedbackUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    comments?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TripFeedbackUpdateFormProps = React.PropsWithChildren<{
    overrides?: TripFeedbackUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    tripFeedback?: any;
    onSubmit?: (fields: TripFeedbackUpdateFormInputValues) => TripFeedbackUpdateFormInputValues;
    onSuccess?: (fields: TripFeedbackUpdateFormInputValues) => void;
    onError?: (fields: TripFeedbackUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TripFeedbackUpdateFormInputValues) => TripFeedbackUpdateFormInputValues;
    onValidate?: TripFeedbackUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TripFeedbackUpdateForm(props: TripFeedbackUpdateFormProps): React.ReactElement;
