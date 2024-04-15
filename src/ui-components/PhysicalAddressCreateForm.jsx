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
import { createPhysicalAddress } from "../graphql/mutations";
const client = generateClient();
export default function PhysicalAddressCreateForm(props) {
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
    streetName: "",
    unitNumber: "",
    city: "",
    state: "",
    zipCode: "",
  };
  const [streetName, setStreetName] = React.useState(initialValues.streetName);
  const [unitNumber, setUnitNumber] = React.useState(initialValues.unitNumber);
  const [city, setCity] = React.useState(initialValues.city);
  const [state, setState] = React.useState(initialValues.state);
  const [zipCode, setZipCode] = React.useState(initialValues.zipCode);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setStreetName(initialValues.streetName);
    setUnitNumber(initialValues.unitNumber);
    setCity(initialValues.city);
    setState(initialValues.state);
    setZipCode(initialValues.zipCode);
    setErrors({});
  };
  const validations = {
    streetName: [{ type: "Required" }],
    unitNumber: [],
    city: [{ type: "Required" }],
    state: [{ type: "Required" }],
    zipCode: [{ type: "Required" }],
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
          streetName,
          unitNumber,
          city,
          state,
          zipCode,
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
            query: createPhysicalAddress.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "PhysicalAddressCreateForm")}
      {...rest}
    >
      <TextField
        label="Street name"
        isRequired={true}
        isReadOnly={false}
        value={streetName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              streetName: value,
              unitNumber,
              city,
              state,
              zipCode,
            };
            const result = onChange(modelFields);
            value = result?.streetName ?? value;
          }
          if (errors.streetName?.hasError) {
            runValidationTasks("streetName", value);
          }
          setStreetName(value);
        }}
        onBlur={() => runValidationTasks("streetName", streetName)}
        errorMessage={errors.streetName?.errorMessage}
        hasError={errors.streetName?.hasError}
        {...getOverrideProps(overrides, "streetName")}
      ></TextField>
      <TextField
        label="Unit number"
        isRequired={false}
        isReadOnly={false}
        value={unitNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              streetName,
              unitNumber: value,
              city,
              state,
              zipCode,
            };
            const result = onChange(modelFields);
            value = result?.unitNumber ?? value;
          }
          if (errors.unitNumber?.hasError) {
            runValidationTasks("unitNumber", value);
          }
          setUnitNumber(value);
        }}
        onBlur={() => runValidationTasks("unitNumber", unitNumber)}
        errorMessage={errors.unitNumber?.errorMessage}
        hasError={errors.unitNumber?.hasError}
        {...getOverrideProps(overrides, "unitNumber")}
      ></TextField>
      <TextField
        label="City"
        isRequired={true}
        isReadOnly={false}
        value={city}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              streetName,
              unitNumber,
              city: value,
              state,
              zipCode,
            };
            const result = onChange(modelFields);
            value = result?.city ?? value;
          }
          if (errors.city?.hasError) {
            runValidationTasks("city", value);
          }
          setCity(value);
        }}
        onBlur={() => runValidationTasks("city", city)}
        errorMessage={errors.city?.errorMessage}
        hasError={errors.city?.hasError}
        {...getOverrideProps(overrides, "city")}
      ></TextField>
      <TextField
        label="State"
        isRequired={true}
        isReadOnly={false}
        value={state}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              streetName,
              unitNumber,
              city,
              state: value,
              zipCode,
            };
            const result = onChange(modelFields);
            value = result?.state ?? value;
          }
          if (errors.state?.hasError) {
            runValidationTasks("state", value);
          }
          setState(value);
        }}
        onBlur={() => runValidationTasks("state", state)}
        errorMessage={errors.state?.errorMessage}
        hasError={errors.state?.hasError}
        {...getOverrideProps(overrides, "state")}
      ></TextField>
      <TextField
        label="Zip code"
        isRequired={true}
        isReadOnly={false}
        value={zipCode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              streetName,
              unitNumber,
              city,
              state,
              zipCode: value,
            };
            const result = onChange(modelFields);
            value = result?.zipCode ?? value;
          }
          if (errors.zipCode?.hasError) {
            runValidationTasks("zipCode", value);
          }
          setZipCode(value);
        }}
        onBlur={() => runValidationTasks("zipCode", zipCode)}
        errorMessage={errors.zipCode?.errorMessage}
        hasError={errors.zipCode?.hasError}
        {...getOverrideProps(overrides, "zipCode")}
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
