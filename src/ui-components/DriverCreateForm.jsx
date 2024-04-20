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
import { createDriver } from "../graphql/mutations";
const client = generateClient();
export default function DriverCreateForm(props) {
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
    first_name: "",
    last_name: "",
    email_address: "",
    phone_number: "",
    earning_tier: "",
    active_status: "",
  };
  const [created_at, setCreated_at] = React.useState(initialValues.created_at);
  const [first_name, setFirst_name] = React.useState(initialValues.first_name);
  const [last_name, setLast_name] = React.useState(initialValues.last_name);
  const [email_address, setEmail_address] = React.useState(
    initialValues.email_address
  );
  const [phone_number, setPhone_number] = React.useState(
    initialValues.phone_number
  );
  const [earning_tier, setEarning_tier] = React.useState(
    initialValues.earning_tier
  );
  const [active_status, setActive_status] = React.useState(
    initialValues.active_status
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setCreated_at(initialValues.created_at);
    setFirst_name(initialValues.first_name);
    setLast_name(initialValues.last_name);
    setEmail_address(initialValues.email_address);
    setPhone_number(initialValues.phone_number);
    setEarning_tier(initialValues.earning_tier);
    setActive_status(initialValues.active_status);
    setErrors({});
  };
  const validations = {
    created_at: [{ type: "Required" }],
    first_name: [{ type: "Required" }],
    last_name: [{ type: "Required" }],
    email_address: [{ type: "Required" }, { type: "Email" }],
    phone_number: [{ type: "Required" }, { type: "Phone" }],
    earning_tier: [],
    active_status: [],
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
          first_name,
          last_name,
          email_address,
          phone_number,
          earning_tier,
          active_status,
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
            query: createDriver.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "DriverCreateForm")}
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
              first_name,
              last_name,
              email_address,
              phone_number,
              earning_tier,
              active_status,
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
        label="First name"
        isRequired={true}
        isReadOnly={false}
        value={first_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              created_at,
              first_name: value,
              last_name,
              email_address,
              phone_number,
              earning_tier,
              active_status,
            };
            const result = onChange(modelFields);
            value = result?.first_name ?? value;
          }
          if (errors.first_name?.hasError) {
            runValidationTasks("first_name", value);
          }
          setFirst_name(value);
        }}
        onBlur={() => runValidationTasks("first_name", first_name)}
        errorMessage={errors.first_name?.errorMessage}
        hasError={errors.first_name?.hasError}
        {...getOverrideProps(overrides, "first_name")}
      ></TextField>
      <TextField
        label="Last name"
        isRequired={true}
        isReadOnly={false}
        value={last_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              created_at,
              first_name,
              last_name: value,
              email_address,
              phone_number,
              earning_tier,
              active_status,
            };
            const result = onChange(modelFields);
            value = result?.last_name ?? value;
          }
          if (errors.last_name?.hasError) {
            runValidationTasks("last_name", value);
          }
          setLast_name(value);
        }}
        onBlur={() => runValidationTasks("last_name", last_name)}
        errorMessage={errors.last_name?.errorMessage}
        hasError={errors.last_name?.hasError}
        {...getOverrideProps(overrides, "last_name")}
      ></TextField>
      <TextField
        label="Email address"
        isRequired={true}
        isReadOnly={false}
        value={email_address}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              created_at,
              first_name,
              last_name,
              email_address: value,
              phone_number,
              earning_tier,
              active_status,
            };
            const result = onChange(modelFields);
            value = result?.email_address ?? value;
          }
          if (errors.email_address?.hasError) {
            runValidationTasks("email_address", value);
          }
          setEmail_address(value);
        }}
        onBlur={() => runValidationTasks("email_address", email_address)}
        errorMessage={errors.email_address?.errorMessage}
        hasError={errors.email_address?.hasError}
        {...getOverrideProps(overrides, "email_address")}
      ></TextField>
      <TextField
        label="Phone number"
        isRequired={true}
        isReadOnly={false}
        type="tel"
        value={phone_number}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              created_at,
              first_name,
              last_name,
              email_address,
              phone_number: value,
              earning_tier,
              active_status,
            };
            const result = onChange(modelFields);
            value = result?.phone_number ?? value;
          }
          if (errors.phone_number?.hasError) {
            runValidationTasks("phone_number", value);
          }
          setPhone_number(value);
        }}
        onBlur={() => runValidationTasks("phone_number", phone_number)}
        errorMessage={errors.phone_number?.errorMessage}
        hasError={errors.phone_number?.hasError}
        {...getOverrideProps(overrides, "phone_number")}
      ></TextField>
      <SelectField
        label="Earning tier"
        placeholder="Please select an option"
        isDisabled={false}
        value={earning_tier}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              created_at,
              first_name,
              last_name,
              email_address,
              phone_number,
              earning_tier: value,
              active_status,
            };
            const result = onChange(modelFields);
            value = result?.earning_tier ?? value;
          }
          if (errors.earning_tier?.hasError) {
            runValidationTasks("earning_tier", value);
          }
          setEarning_tier(value);
        }}
        onBlur={() => runValidationTasks("earning_tier", earning_tier)}
        errorMessage={errors.earning_tier?.errorMessage}
        hasError={errors.earning_tier?.hasError}
        {...getOverrideProps(overrides, "earning_tier")}
      >
        <option
          children="Entry"
          value="ENTRY"
          {...getOverrideProps(overrides, "earning_tieroption0")}
        ></option>
        <option
          children="Experienced"
          value="EXPERIENCED"
          {...getOverrideProps(overrides, "earning_tieroption1")}
        ></option>
        <option
          children="Silver"
          value="SILVER"
          {...getOverrideProps(overrides, "earning_tieroption2")}
        ></option>
        <option
          children="Gold"
          value="GOLD"
          {...getOverrideProps(overrides, "earning_tieroption3")}
        ></option>
        <option
          children="Platinum"
          value="PLATINUM"
          {...getOverrideProps(overrides, "earning_tieroption4")}
        ></option>
      </SelectField>
      <SelectField
        label="Active status"
        placeholder="Please select an option"
        isDisabled={false}
        value={active_status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              created_at,
              first_name,
              last_name,
              email_address,
              phone_number,
              earning_tier,
              active_status: value,
            };
            const result = onChange(modelFields);
            value = result?.active_status ?? value;
          }
          if (errors.active_status?.hasError) {
            runValidationTasks("active_status", value);
          }
          setActive_status(value);
        }}
        onBlur={() => runValidationTasks("active_status", active_status)}
        errorMessage={errors.active_status?.errorMessage}
        hasError={errors.active_status?.hasError}
        {...getOverrideProps(overrides, "active_status")}
      >
        <option
          children="Pending"
          value="PENDING"
          {...getOverrideProps(overrides, "active_statusoption0")}
        ></option>
        <option
          children="Active"
          value="ACTIVE"
          {...getOverrideProps(overrides, "active_statusoption1")}
        ></option>
        <option
          children="Suspended"
          value="SUSPENDED"
          {...getOverrideProps(overrides, "active_statusoption2")}
        ></option>
        <option
          children="Banned"
          value="BANNED"
          {...getOverrideProps(overrides, "active_statusoption3")}
        ></option>
      </SelectField>
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
