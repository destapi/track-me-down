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
import { createPassenger } from "../graphql/mutations";
const client = generateClient();
export default function PassengerCreateForm(props) {
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
    firstName: "",
    lastName: "",
    phoneNumber: "",
    emailAddress: "",
    dateRegistered: "",
    activeStatus: "",
  };
  const [firstName, setFirstName] = React.useState(initialValues.firstName);
  const [lastName, setLastName] = React.useState(initialValues.lastName);
  const [phoneNumber, setPhoneNumber] = React.useState(
    initialValues.phoneNumber
  );
  const [emailAddress, setEmailAddress] = React.useState(
    initialValues.emailAddress
  );
  const [dateRegistered, setDateRegistered] = React.useState(
    initialValues.dateRegistered
  );
  const [activeStatus, setActiveStatus] = React.useState(
    initialValues.activeStatus
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setFirstName(initialValues.firstName);
    setLastName(initialValues.lastName);
    setPhoneNumber(initialValues.phoneNumber);
    setEmailAddress(initialValues.emailAddress);
    setDateRegistered(initialValues.dateRegistered);
    setActiveStatus(initialValues.activeStatus);
    setErrors({});
  };
  const validations = {
    firstName: [{ type: "Required" }],
    lastName: [{ type: "Required" }],
    phoneNumber: [{ type: "Required" }, { type: "Phone" }],
    emailAddress: [{ type: "Required" }, { type: "Email" }],
    dateRegistered: [],
    activeStatus: [],
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
          firstName,
          lastName,
          phoneNumber,
          emailAddress,
          dateRegistered,
          activeStatus,
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
            query: createPassenger.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "PassengerCreateForm")}
      {...rest}
    >
      <TextField
        label="First name"
        isRequired={true}
        isReadOnly={false}
        value={firstName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName: value,
              lastName,
              phoneNumber,
              emailAddress,
              dateRegistered,
              activeStatus,
            };
            const result = onChange(modelFields);
            value = result?.firstName ?? value;
          }
          if (errors.firstName?.hasError) {
            runValidationTasks("firstName", value);
          }
          setFirstName(value);
        }}
        onBlur={() => runValidationTasks("firstName", firstName)}
        errorMessage={errors.firstName?.errorMessage}
        hasError={errors.firstName?.hasError}
        {...getOverrideProps(overrides, "firstName")}
      ></TextField>
      <TextField
        label="Last name"
        isRequired={true}
        isReadOnly={false}
        value={lastName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName: value,
              phoneNumber,
              emailAddress,
              dateRegistered,
              activeStatus,
            };
            const result = onChange(modelFields);
            value = result?.lastName ?? value;
          }
          if (errors.lastName?.hasError) {
            runValidationTasks("lastName", value);
          }
          setLastName(value);
        }}
        onBlur={() => runValidationTasks("lastName", lastName)}
        errorMessage={errors.lastName?.errorMessage}
        hasError={errors.lastName?.hasError}
        {...getOverrideProps(overrides, "lastName")}
      ></TextField>
      <TextField
        label="Phone number"
        isRequired={true}
        isReadOnly={false}
        type="tel"
        value={phoneNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              phoneNumber: value,
              emailAddress,
              dateRegistered,
              activeStatus,
            };
            const result = onChange(modelFields);
            value = result?.phoneNumber ?? value;
          }
          if (errors.phoneNumber?.hasError) {
            runValidationTasks("phoneNumber", value);
          }
          setPhoneNumber(value);
        }}
        onBlur={() => runValidationTasks("phoneNumber", phoneNumber)}
        errorMessage={errors.phoneNumber?.errorMessage}
        hasError={errors.phoneNumber?.hasError}
        {...getOverrideProps(overrides, "phoneNumber")}
      ></TextField>
      <TextField
        label="Email address"
        isRequired={true}
        isReadOnly={false}
        value={emailAddress}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              phoneNumber,
              emailAddress: value,
              dateRegistered,
              activeStatus,
            };
            const result = onChange(modelFields);
            value = result?.emailAddress ?? value;
          }
          if (errors.emailAddress?.hasError) {
            runValidationTasks("emailAddress", value);
          }
          setEmailAddress(value);
        }}
        onBlur={() => runValidationTasks("emailAddress", emailAddress)}
        errorMessage={errors.emailAddress?.errorMessage}
        hasError={errors.emailAddress?.hasError}
        {...getOverrideProps(overrides, "emailAddress")}
      ></TextField>
      <TextField
        label="Date registered"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={dateRegistered}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              phoneNumber,
              emailAddress,
              dateRegistered: value,
              activeStatus,
            };
            const result = onChange(modelFields);
            value = result?.dateRegistered ?? value;
          }
          if (errors.dateRegistered?.hasError) {
            runValidationTasks("dateRegistered", value);
          }
          setDateRegistered(value);
        }}
        onBlur={() => runValidationTasks("dateRegistered", dateRegistered)}
        errorMessage={errors.dateRegistered?.errorMessage}
        hasError={errors.dateRegistered?.hasError}
        {...getOverrideProps(overrides, "dateRegistered")}
      ></TextField>
      <SelectField
        label="Active status"
        placeholder="Please select an option"
        isDisabled={false}
        value={activeStatus}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              phoneNumber,
              emailAddress,
              dateRegistered,
              activeStatus: value,
            };
            const result = onChange(modelFields);
            value = result?.activeStatus ?? value;
          }
          if (errors.activeStatus?.hasError) {
            runValidationTasks("activeStatus", value);
          }
          setActiveStatus(value);
        }}
        onBlur={() => runValidationTasks("activeStatus", activeStatus)}
        errorMessage={errors.activeStatus?.errorMessage}
        hasError={errors.activeStatus?.hasError}
        {...getOverrideProps(overrides, "activeStatus")}
      >
        <option
          children="Unverified"
          value="UNVERIFIED"
          {...getOverrideProps(overrides, "activeStatusoption0")}
        ></option>
        <option
          children="Activated"
          value="ACTIVATED"
          {...getOverrideProps(overrides, "activeStatusoption1")}
        ></option>
        <option
          children="Passivated"
          value="PASSIVATED"
          {...getOverrideProps(overrides, "activeStatusoption2")}
        ></option>
        <option
          children="Banned"
          value="BANNED"
          {...getOverrideProps(overrides, "activeStatusoption3")}
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
