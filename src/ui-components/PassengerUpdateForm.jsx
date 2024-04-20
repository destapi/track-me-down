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
import { getPassenger } from "../graphql/queries";
import { updatePassenger } from "../graphql/mutations";
const client = generateClient();
export default function PassengerUpdateForm(props) {
  const {
    id: idProp,
    passenger: passengerModelProp,
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
  const [active_status, setActive_status] = React.useState(
    initialValues.active_status
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = passengerRecord
      ? { ...initialValues, ...passengerRecord }
      : initialValues;
    setCreated_at(cleanValues.created_at);
    setFirst_name(cleanValues.first_name);
    setLast_name(cleanValues.last_name);
    setEmail_address(cleanValues.email_address);
    setPhone_number(cleanValues.phone_number);
    setActive_status(cleanValues.active_status);
    setErrors({});
  };
  const [passengerRecord, setPassengerRecord] =
    React.useState(passengerModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getPassenger.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getPassenger
        : passengerModelProp;
      setPassengerRecord(record);
    };
    queryData();
  }, [idProp, passengerModelProp]);
  React.useEffect(resetStateValues, [passengerRecord]);
  const validations = {
    created_at: [{ type: "Required" }],
    first_name: [{ type: "Required" }],
    last_name: [{ type: "Required" }],
    email_address: [{ type: "Required" }, { type: "Email" }],
    phone_number: [{ type: "Required" }, { type: "Phone" }],
    active_status: [{ type: "Required" }],
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
            query: updatePassenger.replaceAll("__typename", ""),
            variables: {
              input: {
                id: passengerRecord.id,
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
      {...getOverrideProps(overrides, "PassengerUpdateForm")}
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
          children="Unverified"
          value="UNVERIFIED"
          {...getOverrideProps(overrides, "active_statusoption0")}
        ></option>
        <option
          children="Activated"
          value="ACTIVATED"
          {...getOverrideProps(overrides, "active_statusoption1")}
        ></option>
        <option
          children="Passivated"
          value="PASSIVATED"
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
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || passengerModelProp)}
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
              !(idProp || passengerModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
