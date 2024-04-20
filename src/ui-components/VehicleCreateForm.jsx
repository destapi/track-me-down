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
import { createVehicle } from "../graphql/mutations";
const client = generateClient();
export default function VehicleCreateForm(props) {
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
    vin: "",
    make: "",
    year: "",
    registration_plate: "",
  };
  const [created_at, setCreated_at] = React.useState(initialValues.created_at);
  const [vin, setVin] = React.useState(initialValues.vin);
  const [make, setMake] = React.useState(initialValues.make);
  const [year, setYear] = React.useState(initialValues.year);
  const [registration_plate, setRegistration_plate] = React.useState(
    initialValues.registration_plate
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setCreated_at(initialValues.created_at);
    setVin(initialValues.vin);
    setMake(initialValues.make);
    setYear(initialValues.year);
    setRegistration_plate(initialValues.registration_plate);
    setErrors({});
  };
  const validations = {
    created_at: [{ type: "Required" }],
    vin: [{ type: "Required" }],
    make: [{ type: "Required" }],
    year: [{ type: "Required" }],
    registration_plate: [{ type: "Required" }],
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
          vin,
          make,
          year,
          registration_plate,
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
            query: createVehicle.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "VehicleCreateForm")}
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
              vin,
              make,
              year,
              registration_plate,
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
        label="Vin"
        isRequired={true}
        isReadOnly={false}
        value={vin}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              created_at,
              vin: value,
              make,
              year,
              registration_plate,
            };
            const result = onChange(modelFields);
            value = result?.vin ?? value;
          }
          if (errors.vin?.hasError) {
            runValidationTasks("vin", value);
          }
          setVin(value);
        }}
        onBlur={() => runValidationTasks("vin", vin)}
        errorMessage={errors.vin?.errorMessage}
        hasError={errors.vin?.hasError}
        {...getOverrideProps(overrides, "vin")}
      ></TextField>
      <TextField
        label="Make"
        isRequired={true}
        isReadOnly={false}
        value={make}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              created_at,
              vin,
              make: value,
              year,
              registration_plate,
            };
            const result = onChange(modelFields);
            value = result?.make ?? value;
          }
          if (errors.make?.hasError) {
            runValidationTasks("make", value);
          }
          setMake(value);
        }}
        onBlur={() => runValidationTasks("make", make)}
        errorMessage={errors.make?.errorMessage}
        hasError={errors.make?.hasError}
        {...getOverrideProps(overrides, "make")}
      ></TextField>
      <TextField
        label="Year"
        isRequired={true}
        isReadOnly={false}
        value={year}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              created_at,
              vin,
              make,
              year: value,
              registration_plate,
            };
            const result = onChange(modelFields);
            value = result?.year ?? value;
          }
          if (errors.year?.hasError) {
            runValidationTasks("year", value);
          }
          setYear(value);
        }}
        onBlur={() => runValidationTasks("year", year)}
        errorMessage={errors.year?.errorMessage}
        hasError={errors.year?.hasError}
        {...getOverrideProps(overrides, "year")}
      ></TextField>
      <TextField
        label="Registration plate"
        isRequired={true}
        isReadOnly={false}
        value={registration_plate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              created_at,
              vin,
              make,
              year,
              registration_plate: value,
            };
            const result = onChange(modelFields);
            value = result?.registration_plate ?? value;
          }
          if (errors.registration_plate?.hasError) {
            runValidationTasks("registration_plate", value);
          }
          setRegistration_plate(value);
        }}
        onBlur={() =>
          runValidationTasks("registration_plate", registration_plate)
        }
        errorMessage={errors.registration_plate?.errorMessage}
        hasError={errors.registration_plate?.hasError}
        {...getOverrideProps(overrides, "registration_plate")}
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
