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
import { createTripCharge } from "../graphql/mutations";
const client = generateClient();
export default function TripChargeCreateForm(props) {
  const {
    clearOnSuccess = true,
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
    amount_charged: "",
    tip_applied: "",
    passenger: "",
    trip_summary: "",
  };
  const [created_at, setCreated_at] = React.useState(initialValues.created_at);
  const [amount_charged, setAmount_charged] = React.useState(
    initialValues.amount_charged
  );
  const [tip_applied, setTip_applied] = React.useState(
    initialValues.tip_applied
  );
  const [passenger, setPassenger] = React.useState(initialValues.passenger);
  const [trip_summary, setTrip_summary] = React.useState(
    initialValues.trip_summary
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setCreated_at(initialValues.created_at);
    setAmount_charged(initialValues.amount_charged);
    setTip_applied(initialValues.tip_applied);
    setPassenger(initialValues.passenger);
    setTrip_summary(initialValues.trip_summary);
    setErrors({});
  };
  const validations = {
    created_at: [{ type: "Required" }],
    amount_charged: [{ type: "Required" }],
    tip_applied: [{ type: "Required" }],
    passenger: [{ type: "Required" }],
    trip_summary: [{ type: "Required" }],
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
          amount_charged,
          tip_applied,
          passenger,
          trip_summary,
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
            query: createTripCharge.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "TripChargeCreateForm")}
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
              amount_charged,
              tip_applied,
              passenger,
              trip_summary,
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
        label="Amount charged"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={amount_charged}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              created_at,
              amount_charged: value,
              tip_applied,
              passenger,
              trip_summary,
            };
            const result = onChange(modelFields);
            value = result?.amount_charged ?? value;
          }
          if (errors.amount_charged?.hasError) {
            runValidationTasks("amount_charged", value);
          }
          setAmount_charged(value);
        }}
        onBlur={() => runValidationTasks("amount_charged", amount_charged)}
        errorMessage={errors.amount_charged?.errorMessage}
        hasError={errors.amount_charged?.hasError}
        {...getOverrideProps(overrides, "amount_charged")}
      ></TextField>
      <TextField
        label="Tip applied"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={tip_applied}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              created_at,
              amount_charged,
              tip_applied: value,
              passenger,
              trip_summary,
            };
            const result = onChange(modelFields);
            value = result?.tip_applied ?? value;
          }
          if (errors.tip_applied?.hasError) {
            runValidationTasks("tip_applied", value);
          }
          setTip_applied(value);
        }}
        onBlur={() => runValidationTasks("tip_applied", tip_applied)}
        errorMessage={errors.tip_applied?.errorMessage}
        hasError={errors.tip_applied?.hasError}
        {...getOverrideProps(overrides, "tip_applied")}
      ></TextField>
      <TextField
        label="Passenger"
        isRequired={true}
        isReadOnly={false}
        value={passenger}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              created_at,
              amount_charged,
              tip_applied,
              passenger: value,
              trip_summary,
            };
            const result = onChange(modelFields);
            value = result?.passenger ?? value;
          }
          if (errors.passenger?.hasError) {
            runValidationTasks("passenger", value);
          }
          setPassenger(value);
        }}
        onBlur={() => runValidationTasks("passenger", passenger)}
        errorMessage={errors.passenger?.errorMessage}
        hasError={errors.passenger?.hasError}
        {...getOverrideProps(overrides, "passenger")}
      ></TextField>
      <TextField
        label="Trip summary"
        isRequired={true}
        isReadOnly={false}
        value={trip_summary}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              created_at,
              amount_charged,
              tip_applied,
              passenger,
              trip_summary: value,
            };
            const result = onChange(modelFields);
            value = result?.trip_summary ?? value;
          }
          if (errors.trip_summary?.hasError) {
            runValidationTasks("trip_summary", value);
          }
          setTrip_summary(value);
        }}
        onBlur={() => runValidationTasks("trip_summary", trip_summary)}
        errorMessage={errors.trip_summary?.errorMessage}
        hasError={errors.trip_summary?.hasError}
        {...getOverrideProps(overrides, "trip_summary")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
