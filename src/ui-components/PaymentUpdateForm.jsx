/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getPayment } from "../graphql/queries";
import { updatePayment } from "../graphql/mutations";
const client = generateClient();
export default function PaymentUpdateForm(props) {
  const {
    id: idProp,
    payment: paymentModelProp,
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
    trip_charge: "",
    total_amount: "",
    time_of_payment: "",
  };
  const [created_at, setCreated_at] = React.useState(initialValues.created_at);
  const [trip_charge, setTrip_charge] = React.useState(
    initialValues.trip_charge
  );
  const [total_amount, setTotal_amount] = React.useState(
    initialValues.total_amount
  );
  const [time_of_payment, setTime_of_payment] = React.useState(
    initialValues.time_of_payment
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = paymentRecord
      ? { ...initialValues, ...paymentRecord }
      : initialValues;
    setCreated_at(cleanValues.created_at);
    setTrip_charge(cleanValues.trip_charge);
    setTotal_amount(cleanValues.total_amount);
    setTime_of_payment(cleanValues.time_of_payment);
    setErrors({});
  };
  const [paymentRecord, setPaymentRecord] = React.useState(paymentModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getPayment.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getPayment
        : paymentModelProp;
      setPaymentRecord(record);
    };
    queryData();
  }, [idProp, paymentModelProp]);
  React.useEffect(resetStateValues, [paymentRecord]);
  const validations = {
    created_at: [{ type: "Required" }],
    trip_charge: [{ type: "Required" }],
    total_amount: [{ type: "Required" }],
    time_of_payment: [{ type: "Required" }],
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
          trip_charge,
          total_amount,
          time_of_payment,
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
            query: updatePayment.replaceAll("__typename", ""),
            variables: {
              input: {
                id: paymentRecord.id,
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
      {...getOverrideProps(overrides, "PaymentUpdateForm")}
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
              trip_charge,
              total_amount,
              time_of_payment,
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
      <TextField
        label="Trip charge"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={trip_charge}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              created_at,
              trip_charge: value,
              total_amount,
              time_of_payment,
            };
            const result = onChange(modelFields);
            value = result?.trip_charge ?? value;
          }
          if (errors.trip_charge?.hasError) {
            runValidationTasks("trip_charge", value);
          }
          setTrip_charge(value);
        }}
        onBlur={() => runValidationTasks("trip_charge", trip_charge)}
        errorMessage={errors.trip_charge?.errorMessage}
        hasError={errors.trip_charge?.hasError}
        {...getOverrideProps(overrides, "trip_charge")}
      ></TextField>
      <TextField
        label="Total amount"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={total_amount}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              created_at,
              trip_charge,
              total_amount: value,
              time_of_payment,
            };
            const result = onChange(modelFields);
            value = result?.total_amount ?? value;
          }
          if (errors.total_amount?.hasError) {
            runValidationTasks("total_amount", value);
          }
          setTotal_amount(value);
        }}
        onBlur={() => runValidationTasks("total_amount", total_amount)}
        errorMessage={errors.total_amount?.errorMessage}
        hasError={errors.total_amount?.hasError}
        {...getOverrideProps(overrides, "total_amount")}
      ></TextField>
      <TextField
        label="Time of payment"
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        value={time_of_payment && convertToLocal(new Date(time_of_payment))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              created_at,
              trip_charge,
              total_amount,
              time_of_payment: value,
            };
            const result = onChange(modelFields);
            value = result?.time_of_payment ?? value;
          }
          if (errors.time_of_payment?.hasError) {
            runValidationTasks("time_of_payment", value);
          }
          setTime_of_payment(value);
        }}
        onBlur={() => runValidationTasks("time_of_payment", time_of_payment)}
        errorMessage={errors.time_of_payment?.errorMessage}
        hasError={errors.time_of_payment?.hasError}
        {...getOverrideProps(overrides, "time_of_payment")}
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
          isDisabled={!(idProp || paymentModelProp)}
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
              !(idProp || paymentModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
