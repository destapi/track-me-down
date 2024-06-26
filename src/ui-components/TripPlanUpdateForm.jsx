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
import { getTripPlan } from "../graphql/queries";
import { updateTripPlan } from "../graphql/mutations";
const client = generateClient();
export default function TripPlanUpdateForm(props) {
  const {
    id: idProp,
    tripPlan: tripPlanModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    pickUpTime: "",
  };
  const [pickUpTime, setPickUpTime] = React.useState(initialValues.pickUpTime);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = tripPlanRecord
      ? { ...initialValues, ...tripPlanRecord }
      : initialValues;
    setPickUpTime(cleanValues.pickUpTime);
    setErrors({});
  };
  const [tripPlanRecord, setTripPlanRecord] = React.useState(tripPlanModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getTripPlan.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getTripPlan
        : tripPlanModelProp;
      setTripPlanRecord(record);
    };
    queryData();
  }, [idProp, tripPlanModelProp]);
  React.useEffect(resetStateValues, [tripPlanRecord]);
  const validations = {
    pickUpTime: [],
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
          pickUpTime: pickUpTime ?? null,
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
            query: updateTripPlan.replaceAll("__typename", ""),
            variables: {
              input: {
                id: tripPlanRecord.id,
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
      {...getOverrideProps(overrides, "TripPlanUpdateForm")}
      {...rest}
    >
      <TextField
        label="Pick up time"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={pickUpTime && convertToLocal(new Date(pickUpTime))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              pickUpTime: value,
            };
            const result = onChange(modelFields);
            value = result?.pickUpTime ?? value;
          }
          if (errors.pickUpTime?.hasError) {
            runValidationTasks("pickUpTime", value);
          }
          setPickUpTime(value);
        }}
        onBlur={() => runValidationTasks("pickUpTime", pickUpTime)}
        errorMessage={errors.pickUpTime?.errorMessage}
        hasError={errors.pickUpTime?.hasError}
        {...getOverrideProps(overrides, "pickUpTime")}
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
          isDisabled={!(idProp || tripPlanModelProp)}
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
              !(idProp || tripPlanModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
