/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getPaymentMethod } from "../graphql/queries";
import { updatePaymentMethod } from "../graphql/mutations";
const client = generateClient();
export default function PaymentMethodUpdateForm(props) {
  const {
    id: idProp,
    paymentMethod: paymentMethodModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    paymentType: "",
    accountNumber: "",
    firstName: "",
    lastName: "",
    expiryDate: "",
    verificationCode: "",
  };
  const [paymentType, setPaymentType] = React.useState(
    initialValues.paymentType
  );
  const [accountNumber, setAccountNumber] = React.useState(
    initialValues.accountNumber
  );
  const [firstName, setFirstName] = React.useState(initialValues.firstName);
  const [lastName, setLastName] = React.useState(initialValues.lastName);
  const [expiryDate, setExpiryDate] = React.useState(initialValues.expiryDate);
  const [verificationCode, setVerificationCode] = React.useState(
    initialValues.verificationCode
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = paymentMethodRecord
      ? { ...initialValues, ...paymentMethodRecord }
      : initialValues;
    setPaymentType(cleanValues.paymentType);
    setAccountNumber(cleanValues.accountNumber);
    setFirstName(cleanValues.firstName);
    setLastName(cleanValues.lastName);
    setExpiryDate(cleanValues.expiryDate);
    setVerificationCode(cleanValues.verificationCode);
    setErrors({});
  };
  const [paymentMethodRecord, setPaymentMethodRecord] = React.useState(
    paymentMethodModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getPaymentMethod.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getPaymentMethod
        : paymentMethodModelProp;
      setPaymentMethodRecord(record);
    };
    queryData();
  }, [idProp, paymentMethodModelProp]);
  React.useEffect(resetStateValues, [paymentMethodRecord]);
  const validations = {
    paymentType: [{ type: "Required" }],
    accountNumber: [{ type: "Required" }],
    firstName: [{ type: "Required" }],
    lastName: [{ type: "Required" }],
    expiryDate: [{ type: "Required" }],
    verificationCode: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          paymentType,
          accountNumber,
          firstName,
          lastName,
          expiryDate,
          verificationCode,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updatePaymentMethod.replaceAll("__typename", ""),
            variables: {
              input: {
                id: paymentMethodRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "PaymentMethodUpdateForm")}
      {...rest}
    >
      <SelectField
        label="Payment type"
        placeholder="Please select an option"
        isDisabled={false}
        value={paymentType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              paymentType: value,
              accountNumber,
              firstName,
              lastName,
              expiryDate,
              verificationCode,
            };
            const result = onChange(modelFields);
            value = result?.paymentType ?? value;
          }
          if (errors.paymentType?.hasError) {
            runValidationTasks("paymentType", value);
          }
          setPaymentType(value);
        }}
        onBlur={() => runValidationTasks("paymentType", paymentType)}
        errorMessage={errors.paymentType?.errorMessage}
        hasError={errors.paymentType?.hasError}
        {...getOverrideProps(overrides, "paymentType")}
      >
        <option
          children="Creditcard"
          value="CREDITCARD"
          {...getOverrideProps(overrides, "paymentTypeoption0")}
        ></option>
        <option
          children="Debitcard"
          value="DEBITCARD"
          {...getOverrideProps(overrides, "paymentTypeoption1")}
        ></option>
        <option
          children="Paypal"
          value="PAYPAL"
          {...getOverrideProps(overrides, "paymentTypeoption2")}
        ></option>
        <option
          children="Stripe"
          value="STRIPE"
          {...getOverrideProps(overrides, "paymentTypeoption3")}
        ></option>
      </SelectField>
      <TextField
        label="Account number"
        isRequired={true}
        isReadOnly={false}
        value={accountNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              paymentType,
              accountNumber: value,
              firstName,
              lastName,
              expiryDate,
              verificationCode,
            };
            const result = onChange(modelFields);
            value = result?.accountNumber ?? value;
          }
          if (errors.accountNumber?.hasError) {
            runValidationTasks("accountNumber", value);
          }
          setAccountNumber(value);
        }}
        onBlur={() => runValidationTasks("accountNumber", accountNumber)}
        errorMessage={errors.accountNumber?.errorMessage}
        hasError={errors.accountNumber?.hasError}
        {...getOverrideProps(overrides, "accountNumber")}
      ></TextField>
      <TextField
        label="First name"
        isRequired={true}
        isReadOnly={false}
        value={firstName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              paymentType,
              accountNumber,
              firstName: value,
              lastName,
              expiryDate,
              verificationCode,
            };
            const result = onChange(modelFields);
            value = result?.firstName ?? value;
          }
          if (errors.firstName?.hasError) {
            runValidationTasks("firstName", value);
          }
          setFirstName(value);
        }}
        onBlur={() => runValidationTasks("firstName", firstName)}
        errorMessage={errors.firstName?.errorMessage}
        hasError={errors.firstName?.hasError}
        {...getOverrideProps(overrides, "firstName")}
      ></TextField>
      <TextField
        label="Last name"
        isRequired={true}
        isReadOnly={false}
        value={lastName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              paymentType,
              accountNumber,
              firstName,
              lastName: value,
              expiryDate,
              verificationCode,
            };
            const result = onChange(modelFields);
            value = result?.lastName ?? value;
          }
          if (errors.lastName?.hasError) {
            runValidationTasks("lastName", value);
          }
          setLastName(value);
        }}
        onBlur={() => runValidationTasks("lastName", lastName)}
        errorMessage={errors.lastName?.errorMessage}
        hasError={errors.lastName?.hasError}
        {...getOverrideProps(overrides, "lastName")}
      ></TextField>
      <TextField
        label="Expiry date"
        isRequired={true}
        isReadOnly={false}
        type="date"
        value={expiryDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              paymentType,
              accountNumber,
              firstName,
              lastName,
              expiryDate: value,
              verificationCode,
            };
            const result = onChange(modelFields);
            value = result?.expiryDate ?? value;
          }
          if (errors.expiryDate?.hasError) {
            runValidationTasks("expiryDate", value);
          }
          setExpiryDate(value);
        }}
        onBlur={() => runValidationTasks("expiryDate", expiryDate)}
        errorMessage={errors.expiryDate?.errorMessage}
        hasError={errors.expiryDate?.hasError}
        {...getOverrideProps(overrides, "expiryDate")}
      ></TextField>
      <TextField
        label="Verification code"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={verificationCode}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              paymentType,
              accountNumber,
              firstName,
              lastName,
              expiryDate,
              verificationCode: value,
            };
            const result = onChange(modelFields);
            value = result?.verificationCode ?? value;
          }
          if (errors.verificationCode?.hasError) {
            runValidationTasks("verificationCode", value);
          }
          setVerificationCode(value);
        }}
        onBlur={() => runValidationTasks("verificationCode", verificationCode)}
        errorMessage={errors.verificationCode?.errorMessage}
        hasError={errors.verificationCode?.hasError}
        {...getOverrideProps(overrides, "verificationCode")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || paymentMethodModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || paymentMethodModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
