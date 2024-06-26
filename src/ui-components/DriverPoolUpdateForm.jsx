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
import { getDriverPool } from "../graphql/queries";
import { updateDriverPool } from "../graphql/mutations";
const client = generateClient();
export default function DriverPoolUpdateForm(props) {
  const {
    id: idProp,
    driverPool: driverPoolModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    poolTitle: "",
  };
  const [poolTitle, setPoolTitle] = React.useState(initialValues.poolTitle);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = driverPoolRecord
      ? { ...initialValues, ...driverPoolRecord }
      : initialValues;
    setPoolTitle(cleanValues.poolTitle);
    setErrors({});
  };
  const [driverPoolRecord, setDriverPoolRecord] =
    React.useState(driverPoolModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getDriverPool.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getDriverPool
        : driverPoolModelProp;
      setDriverPoolRecord(record);
    };
    queryData();
  }, [idProp, driverPoolModelProp]);
  React.useEffect(resetStateValues, [driverPoolRecord]);
  const validations = {
    poolTitle: [],
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
          poolTitle: poolTitle ?? null,
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
            query: updateDriverPool.replaceAll("__typename", ""),
            variables: {
              input: {
                id: driverPoolRecord.id,
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
      {...getOverrideProps(overrides, "DriverPoolUpdateForm")}
      {...rest}
    >
      <TextField
        label="Pool title"
        isRequired={false}
        isReadOnly={false}
        value={poolTitle}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              poolTitle: value,
            };
            const result = onChange(modelFields);
            value = result?.poolTitle ?? value;
          }
          if (errors.poolTitle?.hasError) {
            runValidationTasks("poolTitle", value);
          }
          setPoolTitle(value);
        }}
        onBlur={() => runValidationTasks("poolTitle", poolTitle)}
        errorMessage={errors.poolTitle?.errorMessage}
        hasError={errors.poolTitle?.hasError}
        {...getOverrideProps(overrides, "poolTitle")}
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
          isDisabled={!(idProp || driverPoolModelProp)}
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
              !(idProp || driverPoolModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
