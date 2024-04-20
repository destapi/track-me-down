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
import { createDirectDeposit } from "../graphql/mutations";
const client = generateClient();
export default function DirectDepositCreateForm(props) {
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
    routing_number: "",
    account_number: "",
    amount_designated: "",
    percent_designated: "",
  };
  const [created_at, setCreated_at] = React.useState(initialValues.created_at);
  const [routing_number, setRouting_number] = React.useState(
    initialValues.routing_number
  );
  const [account_number, setAccount_number] = React.useState(
    initialValues.account_number
  );
  const [amount_designated, setAmount_designated] = React.useState(
    initialValues.amount_designated
  );
  const [percent_designated, setPercent_designated] = React.useState(
    initialValues.percent_designated
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setCreated_at(initialValues.created_at);
    setRouting_number(initialValues.routing_number);
    setAccount_number(initialValues.account_number);
    setAmount_designated(initialValues.amount_designated);
    setPercent_designated(initialValues.percent_designated);
    setErrors({});
  };
  const validations = {
    created_at: [],
    routing_number: [{ type: "Required" }],
    account_number: [{ type: "Required" }],
    amount_designated: [],
    percent_designated: [],
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
          routing_number,
          account_number,
          amount_designated,
          percent_designated,
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
            query: createDirectDeposit.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "DirectDepositCreateForm")}
      {...rest}
    >
      <TextField
        label="Created at"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={created_at && convertToLocal(new Date(created_at))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              created_at: value,
              routing_number,
              account_number,
              amount_designated,
              percent_designated,
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
        label="Routing number"
        isRequired={true}
        isReadOnly={false}
        value={routing_number}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              created_at,
              routing_number: value,
              account_number,
              amount_designated,
              percent_designated,
            };
            const result = onChange(modelFields);
            value = result?.routing_number ?? value;
          }
          if (errors.routing_number?.hasError) {
            runValidationTasks("routing_number", value);
          }
          setRouting_number(value);
        }}
        onBlur={() => runValidationTasks("routing_number", routing_number)}
        errorMessage={errors.routing_number?.errorMessage}
        hasError={errors.routing_number?.hasError}
        {...getOverrideProps(overrides, "routing_number")}
      ></TextField>
      <TextField
        label="Account number"
        isRequired={true}
        isReadOnly={false}
        value={account_number}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              created_at,
              routing_number,
              account_number: value,
              amount_designated,
              percent_designated,
            };
            const result = onChange(modelFields);
            value = result?.account_number ?? value;
          }
          if (errors.account_number?.hasError) {
            runValidationTasks("account_number", value);
          }
          setAccount_number(value);
        }}
        onBlur={() => runValidationTasks("account_number", account_number)}
        errorMessage={errors.account_number?.errorMessage}
        hasError={errors.account_number?.hasError}
        {...getOverrideProps(overrides, "account_number")}
      ></TextField>
      <TextField
        label="Amount designated"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={amount_designated}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              created_at,
              routing_number,
              account_number,
              amount_designated: value,
              percent_designated,
            };
            const result = onChange(modelFields);
            value = result?.amount_designated ?? value;
          }
          if (errors.amount_designated?.hasError) {
            runValidationTasks("amount_designated", value);
          }
          setAmount_designated(value);
        }}
        onBlur={() =>
          runValidationTasks("amount_designated", amount_designated)
        }
        errorMessage={errors.amount_designated?.errorMessage}
        hasError={errors.amount_designated?.hasError}
        {...getOverrideProps(overrides, "amount_designated")}
      ></TextField>
      <TextField
        label="Percent designated"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={percent_designated}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              created_at,
              routing_number,
              account_number,
              amount_designated,
              percent_designated: value,
            };
            const result = onChange(modelFields);
            value = result?.percent_designated ?? value;
          }
          if (errors.percent_designated?.hasError) {
            runValidationTasks("percent_designated", value);
          }
          setPercent_designated(value);
        }}
        onBlur={() =>
          runValidationTasks("percent_designated", percent_designated)
        }
        errorMessage={errors.percent_designated?.errorMessage}
        hasError={errors.percent_designated?.hasError}
        {...getOverrideProps(overrides, "percent_designated")}
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
