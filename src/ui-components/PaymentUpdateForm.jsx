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
    amountRemitted: "",
    tipRemitted: "",
    dateRemitted: "",
  };
  const [amountRemitted, setAmountRemitted] = React.useState(
    initialValues.amountRemitted
  );
  const [tipRemitted, setTipRemitted] = React.useState(
    initialValues.tipRemitted
  );
  const [dateRemitted, setDateRemitted] = React.useState(
    initialValues.dateRemitted
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = paymentRecord
      ? { ...initialValues, ...paymentRecord }
      : initialValues;
    setAmountRemitted(cleanValues.amountRemitted);
    setTipRemitted(cleanValues.tipRemitted);
    setDateRemitted(cleanValues.dateRemitted);
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
    amountRemitted: [{ type: "Required" }],
    tipRemitted: [],
    dateRemitted: [{ type: "Required" }],
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
          amountRemitted,
          tipRemitted: tipRemitted ?? null,
          dateRemitted,
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
        label="Amount remitted"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={amountRemitted}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              amountRemitted: value,
              tipRemitted,
              dateRemitted,
            };
            const result = onChange(modelFields);
            value = result?.amountRemitted ?? value;
          }
          if (errors.amountRemitted?.hasError) {
            runValidationTasks("amountRemitted", value);
          }
          setAmountRemitted(value);
        }}
        onBlur={() => runValidationTasks("amountRemitted", amountRemitted)}
        errorMessage={errors.amountRemitted?.errorMessage}
        hasError={errors.amountRemitted?.hasError}
        {...getOverrideProps(overrides, "amountRemitted")}
      ></TextField>
      <TextField
        label="Tip remitted"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={tipRemitted}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              amountRemitted,
              tipRemitted: value,
              dateRemitted,
            };
            const result = onChange(modelFields);
            value = result?.tipRemitted ?? value;
          }
          if (errors.tipRemitted?.hasError) {
            runValidationTasks("tipRemitted", value);
          }
          setTipRemitted(value);
        }}
        onBlur={() => runValidationTasks("tipRemitted", tipRemitted)}
        errorMessage={errors.tipRemitted?.errorMessage}
        hasError={errors.tipRemitted?.hasError}
        {...getOverrideProps(overrides, "tipRemitted")}
      ></TextField>
      <TextField
        label="Date remitted"
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        value={dateRemitted && convertToLocal(new Date(dateRemitted))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              amountRemitted,
              tipRemitted,
              dateRemitted: value,
            };
            const result = onChange(modelFields);
            value = result?.dateRemitted ?? value;
          }
          if (errors.dateRemitted?.hasError) {
            runValidationTasks("dateRemitted", value);
          }
          setDateRemitted(value);
        }}
        onBlur={() => runValidationTasks("dateRemitted", dateRemitted)}
        errorMessage={errors.dateRemitted?.errorMessage}
        hasError={errors.dateRemitted?.hasError}
        {...getOverrideProps(overrides, "dateRemitted")}
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
