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
import { getDriver } from "../graphql/queries";
import { updateDriver } from "../graphql/mutations";
const client = generateClient();
export default function DriverUpdateForm(props) {
  const {
    id: idProp,
    driver: driverModelProp,
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
    ssn: "",
    dob: "",
    dLCopy: "",
    phoneNumber: "",
    emailAddress: "",
    earningTier: "",
    registrationDate: "",
    activeStatus: "",
  };
  const [firstName, setFirstName] = React.useState(initialValues.firstName);
  const [lastName, setLastName] = React.useState(initialValues.lastName);
  const [ssn, setSsn] = React.useState(initialValues.ssn);
  const [dob, setDob] = React.useState(initialValues.dob);
  const [dLCopy, setDLCopy] = React.useState(initialValues.dLCopy);
  const [phoneNumber, setPhoneNumber] = React.useState(
    initialValues.phoneNumber
  );
  const [emailAddress, setEmailAddress] = React.useState(
    initialValues.emailAddress
  );
  const [earningTier, setEarningTier] = React.useState(
    initialValues.earningTier
  );
  const [registrationDate, setRegistrationDate] = React.useState(
    initialValues.registrationDate
  );
  const [activeStatus, setActiveStatus] = React.useState(
    initialValues.activeStatus
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = driverRecord
      ? { ...initialValues, ...driverRecord }
      : initialValues;
    setFirstName(cleanValues.firstName);
    setLastName(cleanValues.lastName);
    setSsn(cleanValues.ssn);
    setDob(cleanValues.dob);
    setDLCopy(cleanValues.dLCopy);
    setPhoneNumber(cleanValues.phoneNumber);
    setEmailAddress(cleanValues.emailAddress);
    setEarningTier(cleanValues.earningTier);
    setRegistrationDate(cleanValues.registrationDate);
    setActiveStatus(cleanValues.activeStatus);
    setErrors({});
  };
  const [driverRecord, setDriverRecord] = React.useState(driverModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getDriver.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getDriver
        : driverModelProp;
      setDriverRecord(record);
    };
    queryData();
  }, [idProp, driverModelProp]);
  React.useEffect(resetStateValues, [driverRecord]);
  const validations = {
    firstName: [{ type: "Required" }],
    lastName: [{ type: "Required" }],
    ssn: [{ type: "Required" }],
    dob: [{ type: "Required" }],
    dLCopy: [{ type: "Required" }, { type: "URL" }],
    phoneNumber: [{ type: "Phone" }],
    emailAddress: [{ type: "Email" }],
    earningTier: [],
    registrationDate: [],
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
          ssn,
          dob,
          dLCopy,
          phoneNumber: phoneNumber ?? null,
          emailAddress: emailAddress ?? null,
          earningTier: earningTier ?? null,
          registrationDate: registrationDate ?? null,
          activeStatus: activeStatus ?? null,
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
            query: updateDriver.replaceAll("__typename", ""),
            variables: {
              input: {
                id: driverRecord.id,
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
      {...getOverrideProps(overrides, "DriverUpdateForm")}
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
              ssn,
              dob,
              dLCopy,
              phoneNumber,
              emailAddress,
              earningTier,
              registrationDate,
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
              ssn,
              dob,
              dLCopy,
              phoneNumber,
              emailAddress,
              earningTier,
              registrationDate,
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
        label="Ssn"
        isRequired={true}
        isReadOnly={false}
        value={ssn}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              ssn: value,
              dob,
              dLCopy,
              phoneNumber,
              emailAddress,
              earningTier,
              registrationDate,
              activeStatus,
            };
            const result = onChange(modelFields);
            value = result?.ssn ?? value;
          }
          if (errors.ssn?.hasError) {
            runValidationTasks("ssn", value);
          }
          setSsn(value);
        }}
        onBlur={() => runValidationTasks("ssn", ssn)}
        errorMessage={errors.ssn?.errorMessage}
        hasError={errors.ssn?.hasError}
        {...getOverrideProps(overrides, "ssn")}
      ></TextField>
      <TextField
        label="Dob"
        isRequired={true}
        isReadOnly={false}
        type="date"
        value={dob}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              ssn,
              dob: value,
              dLCopy,
              phoneNumber,
              emailAddress,
              earningTier,
              registrationDate,
              activeStatus,
            };
            const result = onChange(modelFields);
            value = result?.dob ?? value;
          }
          if (errors.dob?.hasError) {
            runValidationTasks("dob", value);
          }
          setDob(value);
        }}
        onBlur={() => runValidationTasks("dob", dob)}
        errorMessage={errors.dob?.errorMessage}
        hasError={errors.dob?.hasError}
        {...getOverrideProps(overrides, "dob")}
      ></TextField>
      <TextField
        label="D l copy"
        isRequired={true}
        isReadOnly={false}
        value={dLCopy}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              ssn,
              dob,
              dLCopy: value,
              phoneNumber,
              emailAddress,
              earningTier,
              registrationDate,
              activeStatus,
            };
            const result = onChange(modelFields);
            value = result?.dLCopy ?? value;
          }
          if (errors.dLCopy?.hasError) {
            runValidationTasks("dLCopy", value);
          }
          setDLCopy(value);
        }}
        onBlur={() => runValidationTasks("dLCopy", dLCopy)}
        errorMessage={errors.dLCopy?.errorMessage}
        hasError={errors.dLCopy?.hasError}
        {...getOverrideProps(overrides, "dLCopy")}
      ></TextField>
      <TextField
        label="Phone number"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        value={phoneNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              ssn,
              dob,
              dLCopy,
              phoneNumber: value,
              emailAddress,
              earningTier,
              registrationDate,
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
        isRequired={false}
        isReadOnly={false}
        value={emailAddress}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              ssn,
              dob,
              dLCopy,
              phoneNumber,
              emailAddress: value,
              earningTier,
              registrationDate,
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
      <SelectField
        label="Earning tier"
        placeholder="Please select an option"
        isDisabled={false}
        value={earningTier}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              ssn,
              dob,
              dLCopy,
              phoneNumber,
              emailAddress,
              earningTier: value,
              registrationDate,
              activeStatus,
            };
            const result = onChange(modelFields);
            value = result?.earningTier ?? value;
          }
          if (errors.earningTier?.hasError) {
            runValidationTasks("earningTier", value);
          }
          setEarningTier(value);
        }}
        onBlur={() => runValidationTasks("earningTier", earningTier)}
        errorMessage={errors.earningTier?.errorMessage}
        hasError={errors.earningTier?.hasError}
        {...getOverrideProps(overrides, "earningTier")}
      >
        <option
          children="Entry"
          value="ENTRY"
          {...getOverrideProps(overrides, "earningTieroption0")}
        ></option>
        <option
          children="Experienced"
          value="EXPERIENCED"
          {...getOverrideProps(overrides, "earningTieroption1")}
        ></option>
        <option
          children="Silver"
          value="SILVER"
          {...getOverrideProps(overrides, "earningTieroption2")}
        ></option>
        <option
          children="Gold"
          value="GOLD"
          {...getOverrideProps(overrides, "earningTieroption3")}
        ></option>
        <option
          children="Platinum"
          value="PLATINUM"
          {...getOverrideProps(overrides, "earningTieroption4")}
        ></option>
      </SelectField>
      <TextField
        label="Registration date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={registrationDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              ssn,
              dob,
              dLCopy,
              phoneNumber,
              emailAddress,
              earningTier,
              registrationDate: value,
              activeStatus,
            };
            const result = onChange(modelFields);
            value = result?.registrationDate ?? value;
          }
          if (errors.registrationDate?.hasError) {
            runValidationTasks("registrationDate", value);
          }
          setRegistrationDate(value);
        }}
        onBlur={() => runValidationTasks("registrationDate", registrationDate)}
        errorMessage={errors.registrationDate?.errorMessage}
        hasError={errors.registrationDate?.hasError}
        {...getOverrideProps(overrides, "registrationDate")}
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
              ssn,
              dob,
              dLCopy,
              phoneNumber,
              emailAddress,
              earningTier,
              registrationDate,
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
          children="Pending"
          value="PENDING"
          {...getOverrideProps(overrides, "activeStatusoption0")}
        ></option>
        <option
          children="Active"
          value="ACTIVE"
          {...getOverrideProps(overrides, "activeStatusoption1")}
        ></option>
        <option
          children="Suspended"
          value="SUSPENDED"
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
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || driverModelProp)}
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
              !(idProp || driverModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
