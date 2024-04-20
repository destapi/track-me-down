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
    created_at: "",
    payment_type: "",
    first_name: "",
    last_name: "",
    account_number: "",
    verification_pin: "",
  };
  const [created_at, setCreated_at] = React.useState(initialValues.created_at);
  const [payment_type, setPayment_type] = React.useState(
    initialValues.payment_type
  );
  const [first_name, setFirst_name] = React.useState(initialValues.first_name);
  const [last_name, setLast_name] = React.useState(initialValues.last_name);
  const [account_number, setAccount_number] = React.useState(
    initialValues.account_number
  );
  const [verification_pin, setVerification_pin] = React.useState(
    initialValues.verification_pin
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = paymentMethodRecord
      ? { ...initialValues, ...paymentMethodRecord }
      : initialValues;
    setCreated_at(cleanValues.created_at);
    setPayment_type(cleanValues.payment_type);
    setFirst_name(cleanValues.first_name);
    setLast_name(cleanValues.last_name);
    setAccount_number(cleanValues.account_number);
    setVerification_pin(cleanValues.verification_pin);
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
    created_at: [{ type: "Required" }],
    payment_type: [{ type: "Required" }],
    first_name: [{ type: "Required" }],
    last_name: [{ type: "Required" }],
    account_number: [{ type: "Required" }],
    verification_pin: [{ type: "Required" }],
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
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
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
          created_at,
          payment_type,
          first_name,
          last_name,
          account_number,
          verification_pin,
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
      <TextField
        label="Created at"
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        value={created_at && convertToLocal(new Date(created_at))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              created_at: value,
              payment_type,
              first_name,
              last_name,
              account_number,
              verification_pin,
            };
            const result = onChange(modelFields);
            value = result?.created_at ?? value;
          }
          if (errors.created_at?.hasError) {
            runValidationTasks("created_at", value);
          }
          setCreated_at(value);
        }}
        onBlur={() => runValidationTasks("created_at", created_at)}
        errorMessage={errors.created_at?.errorMessage}
        hasError={errors.created_at?.hasError}
        {...getOverrideProps(overrides, "created_at")}
      ></TextField>
      <SelectField
        label="Payment type"
        placeholder="Please select an option"
        isDisabled={false}
        value={payment_type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              created_at,
              payment_type: value,
              first_name,
              last_name,
              account_number,
              verification_pin,
            };
            const result = onChange(modelFields);
            value = result?.payment_type ?? value;
          }
          if (errors.payment_type?.hasError) {
            runValidationTasks("payment_type", value);
          }
          setPayment_type(value);
        }}
        onBlur={() => runValidationTasks("payment_type", payment_type)}
        errorMessage={errors.payment_type?.errorMessage}
        hasError={errors.payment_type?.hasError}
        {...getOverrideProps(overrides, "payment_type")}
      >
        <option
          children="Creditcard"
          value="CREDITCARD"
          {...getOverrideProps(overrides, "payment_typeoption0")}
        ></option>
        <option
          children="Debitcard"
          value="DEBITCARD"
          {...getOverrideProps(overrides, "payment_typeoption1")}
        ></option>
        <option
          children="Paypal"
          value="PAYPAL"
          {...getOverrideProps(overrides, "payment_typeoption2")}
        ></option>
        <option
          children="Stripe"
          value="STRIPE"
          {...getOverrideProps(overrides, "payment_typeoption3")}
        ></option>
      </SelectField>
      <TextField
        label="First name"
        isRequired={true}
        isReadOnly={false}
        value={first_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              created_at,
              payment_type,
              first_name: value,
              last_name,
              account_number,
              verification_pin,
            };
            const result = onChange(modelFields);
            value = result?.first_name ?? value;
          }
          if (errors.first_name?.hasError) {
            runValidationTasks("first_name", value);
          }
          setFirst_name(value);
        }}
        onBlur={() => runValidationTasks("first_name", first_name)}
        errorMessage={errors.first_name?.errorMessage}
        hasError={errors.first_name?.hasError}
        {...getOverrideProps(overrides, "first_name")}
      ></TextField>
      <TextField
        label="Last name"
        isRequired={true}
        isReadOnly={false}
        value={last_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              created_at,
              payment_type,
              first_name,
              last_name: value,
              account_number,
              verification_pin,
            };
            const result = onChange(modelFields);
            value = result?.last_name ?? value;
          }
          if (errors.last_name?.hasError) {
            runValidationTasks("last_name", value);
          }
          setLast_name(value);
        }}
        onBlur={() => runValidationTasks("last_name", last_name)}
        errorMessage={errors.last_name?.errorMessage}
        hasError={errors.last_name?.hasError}
        {...getOverrideProps(overrides, "last_name")}
      ></TextField>
      <TextField
        label="Account number"
        isRequired={true}
        isReadOnly={false}
        value={account_number}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              created_at,
              payment_type,
              first_name,
              last_name,
              account_number: value,
              verification_pin,
            };
            const result = onChange(modelFields);
            value = result?.account_number ?? value;
          }
          if (errors.account_number?.hasError) {
            runValidationTasks("account_number", value);
          }
          setAccount_number(value);
        }}
        onBlur={() => runValidationTasks("account_number", account_number)}
        errorMessage={errors.account_number?.errorMessage}
        hasError={errors.account_number?.hasError}
        {...getOverrideProps(overrides, "account_number")}
      ></TextField>
      <TextField
        label="Verification pin"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={verification_pin}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              created_at,
              payment_type,
              first_name,
              last_name,
              account_number,
              verification_pin: value,
            };
            const result = onChange(modelFields);
            value = result?.verification_pin ?? value;
          }
          if (errors.verification_pin?.hasError) {
            runValidationTasks("verification_pin", value);
          }
          setVerification_pin(value);
        }}
        onBlur={() => runValidationTasks("verification_pin", verification_pin)}
        errorMessage={errors.verification_pin?.errorMessage}
        hasError={errors.verification_pin?.hasError}
        {...getOverrideProps(overrides, "verification_pin")}
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
