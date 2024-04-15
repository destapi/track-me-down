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
    vin: "",
    make: "",
    model: "",
    year: "",
    registrationNum: "",
    registrationState: "",
    registrationCopy: "",
    insuranceProof: "",
  };
  const [vin, setVin] = React.useState(initialValues.vin);
  const [make, setMake] = React.useState(initialValues.make);
  const [model, setModel] = React.useState(initialValues.model);
  const [year, setYear] = React.useState(initialValues.year);
  const [registrationNum, setRegistrationNum] = React.useState(
    initialValues.registrationNum
  );
  const [registrationState, setRegistrationState] = React.useState(
    initialValues.registrationState
  );
  const [registrationCopy, setRegistrationCopy] = React.useState(
    initialValues.registrationCopy
  );
  const [insuranceProof, setInsuranceProof] = React.useState(
    initialValues.insuranceProof
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setVin(initialValues.vin);
    setMake(initialValues.make);
    setModel(initialValues.model);
    setYear(initialValues.year);
    setRegistrationNum(initialValues.registrationNum);
    setRegistrationState(initialValues.registrationState);
    setRegistrationCopy(initialValues.registrationCopy);
    setInsuranceProof(initialValues.insuranceProof);
    setErrors({});
  };
  const validations = {
    vin: [{ type: "Required" }],
    make: [{ type: "Required" }],
    model: [{ type: "Required" }],
    year: [{ type: "Required" }],
    registrationNum: [{ type: "Required" }],
    registrationState: [{ type: "Required" }],
    registrationCopy: [{ type: "Required" }, { type: "URL" }],
    insuranceProof: [{ type: "Required" }],
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
          vin,
          make,
          model,
          year,
          registrationNum,
          registrationState,
          registrationCopy,
          insuranceProof,
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
        label="Vin"
        isRequired={true}
        isReadOnly={false}
        value={vin}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              vin: value,
              make,
              model,
              year,
              registrationNum,
              registrationState,
              registrationCopy,
              insuranceProof,
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
              vin,
              make: value,
              model,
              year,
              registrationNum,
              registrationState,
              registrationCopy,
              insuranceProof,
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
        label="Model"
        isRequired={true}
        isReadOnly={false}
        value={model}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              vin,
              make,
              model: value,
              year,
              registrationNum,
              registrationState,
              registrationCopy,
              insuranceProof,
            };
            const result = onChange(modelFields);
            value = result?.model ?? value;
          }
          if (errors.model?.hasError) {
            runValidationTasks("model", value);
          }
          setModel(value);
        }}
        onBlur={() => runValidationTasks("model", model)}
        errorMessage={errors.model?.errorMessage}
        hasError={errors.model?.hasError}
        {...getOverrideProps(overrides, "model")}
      ></TextField>
      <TextField
        label="Year"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={year}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              vin,
              make,
              model,
              year: value,
              registrationNum,
              registrationState,
              registrationCopy,
              insuranceProof,
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
        label="Registration num"
        isRequired={true}
        isReadOnly={false}
        value={registrationNum}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              vin,
              make,
              model,
              year,
              registrationNum: value,
              registrationState,
              registrationCopy,
              insuranceProof,
            };
            const result = onChange(modelFields);
            value = result?.registrationNum ?? value;
          }
          if (errors.registrationNum?.hasError) {
            runValidationTasks("registrationNum", value);
          }
          setRegistrationNum(value);
        }}
        onBlur={() => runValidationTasks("registrationNum", registrationNum)}
        errorMessage={errors.registrationNum?.errorMessage}
        hasError={errors.registrationNum?.hasError}
        {...getOverrideProps(overrides, "registrationNum")}
      ></TextField>
      <TextField
        label="Registration state"
        isRequired={true}
        isReadOnly={false}
        value={registrationState}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              vin,
              make,
              model,
              year,
              registrationNum,
              registrationState: value,
              registrationCopy,
              insuranceProof,
            };
            const result = onChange(modelFields);
            value = result?.registrationState ?? value;
          }
          if (errors.registrationState?.hasError) {
            runValidationTasks("registrationState", value);
          }
          setRegistrationState(value);
        }}
        onBlur={() =>
          runValidationTasks("registrationState", registrationState)
        }
        errorMessage={errors.registrationState?.errorMessage}
        hasError={errors.registrationState?.hasError}
        {...getOverrideProps(overrides, "registrationState")}
      ></TextField>
      <TextField
        label="Registration copy"
        isRequired={true}
        isReadOnly={false}
        value={registrationCopy}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              vin,
              make,
              model,
              year,
              registrationNum,
              registrationState,
              registrationCopy: value,
              insuranceProof,
            };
            const result = onChange(modelFields);
            value = result?.registrationCopy ?? value;
          }
          if (errors.registrationCopy?.hasError) {
            runValidationTasks("registrationCopy", value);
          }
          setRegistrationCopy(value);
        }}
        onBlur={() => runValidationTasks("registrationCopy", registrationCopy)}
        errorMessage={errors.registrationCopy?.errorMessage}
        hasError={errors.registrationCopy?.hasError}
        {...getOverrideProps(overrides, "registrationCopy")}
      ></TextField>
      <TextField
        label="Insurance proof"
        isRequired={true}
        isReadOnly={false}
        value={insuranceProof}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              vin,
              make,
              model,
              year,
              registrationNum,
              registrationState,
              registrationCopy,
              insuranceProof: value,
            };
            const result = onChange(modelFields);
            value = result?.insuranceProof ?? value;
          }
          if (errors.insuranceProof?.hasError) {
            runValidationTasks("insuranceProof", value);
          }
          setInsuranceProof(value);
        }}
        onBlur={() => runValidationTasks("insuranceProof", insuranceProof)}
        errorMessage={errors.insuranceProof?.errorMessage}
        hasError={errors.insuranceProof?.hasError}
        {...getOverrideProps(overrides, "insuranceProof")}
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
