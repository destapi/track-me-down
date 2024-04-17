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
import { createTripSummary } from "../graphql/mutations";
const client = generateClient();
export default function TripSummaryCreateForm(props) {
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
    totalDistance: "",
    cancellationCharge: "",
    tripStatus: "",
    timeCompleted: "",
    totalCharge: "",
  };
  const [totalDistance, setTotalDistance] = React.useState(
    initialValues.totalDistance
  );
  const [cancellationCharge, setCancellationCharge] = React.useState(
    initialValues.cancellationCharge
  );
  const [tripStatus, setTripStatus] = React.useState(initialValues.tripStatus);
  const [timeCompleted, setTimeCompleted] = React.useState(
    initialValues.timeCompleted
  );
  const [totalCharge, setTotalCharge] = React.useState(
    initialValues.totalCharge
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setTotalDistance(initialValues.totalDistance);
    setCancellationCharge(initialValues.cancellationCharge);
    setTripStatus(initialValues.tripStatus);
    setTimeCompleted(initialValues.timeCompleted);
    setTotalCharge(initialValues.totalCharge);
    setErrors({});
  };
  const validations = {
    totalDistance: [{ type: "Required" }],
    cancellationCharge: [],
    tripStatus: [{ type: "Required" }],
    timeCompleted: [{ type: "Required" }],
    totalCharge: [],
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
          totalDistance,
          cancellationCharge,
          tripStatus,
          timeCompleted,
          totalCharge,
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
            query: createTripSummary.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "TripSummaryCreateForm")}
      {...rest}
    >
      <TextField
        label="Total distance"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={totalDistance}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              totalDistance: value,
              cancellationCharge,
              tripStatus,
              timeCompleted,
              totalCharge,
            };
            const result = onChange(modelFields);
            value = result?.totalDistance ?? value;
          }
          if (errors.totalDistance?.hasError) {
            runValidationTasks("totalDistance", value);
          }
          setTotalDistance(value);
        }}
        onBlur={() => runValidationTasks("totalDistance", totalDistance)}
        errorMessage={errors.totalDistance?.errorMessage}
        hasError={errors.totalDistance?.hasError}
        {...getOverrideProps(overrides, "totalDistance")}
      ></TextField>
      <TextField
        label="Cancellation charge"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={cancellationCharge}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              totalDistance,
              cancellationCharge: value,
              tripStatus,
              timeCompleted,
              totalCharge,
            };
            const result = onChange(modelFields);
            value = result?.cancellationCharge ?? value;
          }
          if (errors.cancellationCharge?.hasError) {
            runValidationTasks("cancellationCharge", value);
          }
          setCancellationCharge(value);
        }}
        onBlur={() =>
          runValidationTasks("cancellationCharge", cancellationCharge)
        }
        errorMessage={errors.cancellationCharge?.errorMessage}
        hasError={errors.cancellationCharge?.hasError}
        {...getOverrideProps(overrides, "cancellationCharge")}
      ></TextField>
      <SelectField
        label="Trip status"
        placeholder="Please select an option"
        isDisabled={false}
        value={tripStatus}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              totalDistance,
              cancellationCharge,
              tripStatus: value,
              timeCompleted,
              totalCharge,
            };
            const result = onChange(modelFields);
            value = result?.tripStatus ?? value;
          }
          if (errors.tripStatus?.hasError) {
            runValidationTasks("tripStatus", value);
          }
          setTripStatus(value);
        }}
        onBlur={() => runValidationTasks("tripStatus", tripStatus)}
        errorMessage={errors.tripStatus?.errorMessage}
        hasError={errors.tripStatus?.hasError}
        {...getOverrideProps(overrides, "tripStatus")}
      >
        <option
          children="Requested"
          value="REQUESTED"
          {...getOverrideProps(overrides, "tripStatusoption0")}
        ></option>
        <option
          children="Started"
          value="STARTED"
          {...getOverrideProps(overrides, "tripStatusoption1")}
        ></option>
        <option
          children="Completed"
          value="COMPLETED"
          {...getOverrideProps(overrides, "tripStatusoption2")}
        ></option>
        <option
          children="Cancelled"
          value="CANCELLED"
          {...getOverrideProps(overrides, "tripStatusoption3")}
        ></option>
      </SelectField>
      <TextField
        label="Time completed"
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        value={timeCompleted && convertToLocal(new Date(timeCompleted))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              totalDistance,
              cancellationCharge,
              tripStatus,
              timeCompleted: value,
              totalCharge,
            };
            const result = onChange(modelFields);
            value = result?.timeCompleted ?? value;
          }
          if (errors.timeCompleted?.hasError) {
            runValidationTasks("timeCompleted", value);
          }
          setTimeCompleted(value);
        }}
        onBlur={() => runValidationTasks("timeCompleted", timeCompleted)}
        errorMessage={errors.timeCompleted?.errorMessage}
        hasError={errors.timeCompleted?.hasError}
        {...getOverrideProps(overrides, "timeCompleted")}
      ></TextField>
      <TextField
        label="Total charge"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={totalCharge}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              totalDistance,
              cancellationCharge,
              tripStatus,
              timeCompleted,
              totalCharge: value,
            };
            const result = onChange(modelFields);
            value = result?.totalCharge ?? value;
          }
          if (errors.totalCharge?.hasError) {
            runValidationTasks("totalCharge", value);
          }
          setTotalCharge(value);
        }}
        onBlur={() => runValidationTasks("totalCharge", totalCharge)}
        errorMessage={errors.totalCharge?.errorMessage}
        hasError={errors.totalCharge?.hasError}
        {...getOverrideProps(overrides, "totalCharge")}
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
