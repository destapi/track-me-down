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
import { getVehicleFleet } from "../graphql/queries";
import { updateVehicleFleet } from "../graphql/mutations";
const client = generateClient();
export default function VehicleFleetUpdateForm(props) {
  const {
    id: idProp,
    vehicleFleet: vehicleFleetModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    fleetTitle: "",
  };
  const [fleetTitle, setFleetTitle] = React.useState(initialValues.fleetTitle);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = vehicleFleetRecord
      ? { ...initialValues, ...vehicleFleetRecord }
      : initialValues;
    setFleetTitle(cleanValues.fleetTitle);
    setErrors({});
  };
  const [vehicleFleetRecord, setVehicleFleetRecord] = React.useState(
    vehicleFleetModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getVehicleFleet.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getVehicleFleet
        : vehicleFleetModelProp;
      setVehicleFleetRecord(record);
    };
    queryData();
  }, [idProp, vehicleFleetModelProp]);
  React.useEffect(resetStateValues, [vehicleFleetRecord]);
  const validations = {
    fleetTitle: [],
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
          fleetTitle: fleetTitle ?? null,
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
            query: updateVehicleFleet.replaceAll("__typename", ""),
            variables: {
              input: {
                id: vehicleFleetRecord.id,
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
      {...getOverrideProps(overrides, "VehicleFleetUpdateForm")}
      {...rest}
    >
      <TextField
        label="Fleet title"
        isRequired={false}
        isReadOnly={false}
        value={fleetTitle}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fleetTitle: value,
            };
            const result = onChange(modelFields);
            value = result?.fleetTitle ?? value;
          }
          if (errors.fleetTitle?.hasError) {
            runValidationTasks("fleetTitle", value);
          }
          setFleetTitle(value);
        }}
        onBlur={() => runValidationTasks("fleetTitle", fleetTitle)}
        errorMessage={errors.fleetTitle?.errorMessage}
        hasError={errors.fleetTitle?.hasError}
        {...getOverrideProps(overrides, "fleetTitle")}
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
          isDisabled={!(idProp || vehicleFleetModelProp)}
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
              !(idProp || vehicleFleetModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
