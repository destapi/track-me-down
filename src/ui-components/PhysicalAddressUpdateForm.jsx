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
import { getPhysicalAddress } from "../graphql/queries";
import { updatePhysicalAddress } from "../graphql/mutations";
const client = generateClient();
export default function PhysicalAddressUpdateForm(props) {
  const {
    id: idProp,
    physicalAddress: physicalAddressModelProp,
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
    street_name: "",
    unit_num: "",
    city: "",
    state: "",
    zip_code: "",
  };
  const [created_at, setCreated_at] = React.useState(initialValues.created_at);
  const [street_name, setStreet_name] = React.useState(
    initialValues.street_name
  );
  const [unit_num, setUnit_num] = React.useState(initialValues.unit_num);
  const [city, setCity] = React.useState(initialValues.city);
  const [state, setState] = React.useState(initialValues.state);
  const [zip_code, setZip_code] = React.useState(initialValues.zip_code);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = physicalAddressRecord
      ? { ...initialValues, ...physicalAddressRecord }
      : initialValues;
    setCreated_at(cleanValues.created_at);
    setStreet_name(cleanValues.street_name);
    setUnit_num(cleanValues.unit_num);
    setCity(cleanValues.city);
    setState(cleanValues.state);
    setZip_code(cleanValues.zip_code);
    setErrors({});
  };
  const [physicalAddressRecord, setPhysicalAddressRecord] = React.useState(
    physicalAddressModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getPhysicalAddress.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getPhysicalAddress
        : physicalAddressModelProp;
      setPhysicalAddressRecord(record);
    };
    queryData();
  }, [idProp, physicalAddressModelProp]);
  React.useEffect(resetStateValues, [physicalAddressRecord]);
  const validations = {
    created_at: [{ type: "Required" }],
    street_name: [{ type: "Required" }],
    unit_num: [],
    city: [{ type: "Required" }],
    state: [{ type: "Required" }],
    zip_code: [{ type: "Required" }],
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
          street_name,
          unit_num: unit_num ?? null,
          city,
          state,
          zip_code,
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
            query: updatePhysicalAddress.replaceAll("__typename", ""),
            variables: {
              input: {
                id: physicalAddressRecord.id,
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
      {...getOverrideProps(overrides, "PhysicalAddressUpdateForm")}
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
              street_name,
              unit_num,
              city,
              state,
              zip_code,
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
        label="Street name"
        isRequired={true}
        isReadOnly={false}
        value={street_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              created_at,
              street_name: value,
              unit_num,
              city,
              state,
              zip_code,
            };
            const result = onChange(modelFields);
            value = result?.street_name ?? value;
          }
          if (errors.street_name?.hasError) {
            runValidationTasks("street_name", value);
          }
          setStreet_name(value);
        }}
        onBlur={() => runValidationTasks("street_name", street_name)}
        errorMessage={errors.street_name?.errorMessage}
        hasError={errors.street_name?.hasError}
        {...getOverrideProps(overrides, "street_name")}
      ></TextField>
      <TextField
        label="Unit num"
        isRequired={false}
        isReadOnly={false}
        value={unit_num}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              created_at,
              street_name,
              unit_num: value,
              city,
              state,
              zip_code,
            };
            const result = onChange(modelFields);
            value = result?.unit_num ?? value;
          }
          if (errors.unit_num?.hasError) {
            runValidationTasks("unit_num", value);
          }
          setUnit_num(value);
        }}
        onBlur={() => runValidationTasks("unit_num", unit_num)}
        errorMessage={errors.unit_num?.errorMessage}
        hasError={errors.unit_num?.hasError}
        {...getOverrideProps(overrides, "unit_num")}
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
              created_at,
              street_name,
              unit_num,
              city: value,
              state,
              zip_code,
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
              created_at,
              street_name,
              unit_num,
              city,
              state: value,
              zip_code,
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
        value={zip_code}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              created_at,
              street_name,
              unit_num,
              city,
              state,
              zip_code: value,
            };
            const result = onChange(modelFields);
            value = result?.zip_code ?? value;
          }
          if (errors.zip_code?.hasError) {
            runValidationTasks("zip_code", value);
          }
          setZip_code(value);
        }}
        onBlur={() => runValidationTasks("zip_code", zip_code)}
        errorMessage={errors.zip_code?.errorMessage}
        hasError={errors.zip_code?.hasError}
        {...getOverrideProps(overrides, "zip_code")}
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
          isDisabled={!(idProp || physicalAddressModelProp)}
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
              !(idProp || physicalAddressModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
