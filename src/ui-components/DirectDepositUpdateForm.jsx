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
import { getDirectDeposit } from "../graphql/queries";
import { updateDirectDeposit } from "../graphql/mutations";
const client = generateClient();
export default function DirectDepositUpdateForm(props) {
  const {
    id: idProp,
    directDeposit: directDepositModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    routingNumber: "",
    accountNumber: "",
    amountDesignated: "",
    percentageDesignated: "",
  };
  const [routingNumber, setRoutingNumber] = React.useState(
    initialValues.routingNumber
  );
  const [accountNumber, setAccountNumber] = React.useState(
    initialValues.accountNumber
  );
  const [amountDesignated, setAmountDesignated] = React.useState(
    initialValues.amountDesignated
  );
  const [percentageDesignated, setPercentageDesignated] = React.useState(
    initialValues.percentageDesignated
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = directDepositRecord
      ? { ...initialValues, ...directDepositRecord }
      : initialValues;
    setRoutingNumber(cleanValues.routingNumber);
    setAccountNumber(cleanValues.accountNumber);
    setAmountDesignated(cleanValues.amountDesignated);
    setPercentageDesignated(cleanValues.percentageDesignated);
    setErrors({});
  };
  const [directDepositRecord, setDirectDepositRecord] = React.useState(
    directDepositModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getDirectDeposit.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getDirectDeposit
        : directDepositModelProp;
      setDirectDepositRecord(record);
    };
    queryData();
  }, [idProp, directDepositModelProp]);
  React.useEffect(resetStateValues, [directDepositRecord]);
  const validations = {
    routingNumber: [{ type: "Required" }],
    accountNumber: [{ type: "Required" }],
    amountDesignated: [],
    percentageDesignated: [],
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
          routingNumber,
          accountNumber,
          amountDesignated: amountDesignated ?? null,
          percentageDesignated: percentageDesignated ?? null,
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
            query: updateDirectDeposit.replaceAll("__typename", ""),
            variables: {
              input: {
                id: directDepositRecord.id,
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
      {...getOverrideProps(overrides, "DirectDepositUpdateForm")}
      {...rest}
    >
      <TextField
        label="Routing number"
        isRequired={true}
        isReadOnly={false}
        value={routingNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              routingNumber: value,
              accountNumber,
              amountDesignated,
              percentageDesignated,
            };
            const result = onChange(modelFields);
            value = result?.routingNumber ?? value;
          }
          if (errors.routingNumber?.hasError) {
            runValidationTasks("routingNumber", value);
          }
          setRoutingNumber(value);
        }}
        onBlur={() => runValidationTasks("routingNumber", routingNumber)}
        errorMessage={errors.routingNumber?.errorMessage}
        hasError={errors.routingNumber?.hasError}
        {...getOverrideProps(overrides, "routingNumber")}
      ></TextField>
      <TextField
        label="Account number"
        isRequired={true}
        isReadOnly={false}
        value={accountNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              routingNumber,
              accountNumber: value,
              amountDesignated,
              percentageDesignated,
            };
            const result = onChange(modelFields);
            value = result?.accountNumber ?? value;
          }
          if (errors.accountNumber?.hasError) {
            runValidationTasks("accountNumber", value);
          }
          setAccountNumber(value);
        }}
        onBlur={() => runValidationTasks("accountNumber", accountNumber)}
        errorMessage={errors.accountNumber?.errorMessage}
        hasError={errors.accountNumber?.hasError}
        {...getOverrideProps(overrides, "accountNumber")}
      ></TextField>
      <TextField
        label="Amount designated"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={amountDesignated}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              routingNumber,
              accountNumber,
              amountDesignated: value,
              percentageDesignated,
            };
            const result = onChange(modelFields);
            value = result?.amountDesignated ?? value;
          }
          if (errors.amountDesignated?.hasError) {
            runValidationTasks("amountDesignated", value);
          }
          setAmountDesignated(value);
        }}
        onBlur={() => runValidationTasks("amountDesignated", amountDesignated)}
        errorMessage={errors.amountDesignated?.errorMessage}
        hasError={errors.amountDesignated?.hasError}
        {...getOverrideProps(overrides, "amountDesignated")}
      ></TextField>
      <TextField
        label="Percentage designated"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={percentageDesignated}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              routingNumber,
              accountNumber,
              amountDesignated,
              percentageDesignated: value,
            };
            const result = onChange(modelFields);
            value = result?.percentageDesignated ?? value;
          }
          if (errors.percentageDesignated?.hasError) {
            runValidationTasks("percentageDesignated", value);
          }
          setPercentageDesignated(value);
        }}
        onBlur={() =>
          runValidationTasks("percentageDesignated", percentageDesignated)
        }
        errorMessage={errors.percentageDesignated?.errorMessage}
        hasError={errors.percentageDesignated?.hasError}
        {...getOverrideProps(overrides, "percentageDesignated")}
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
          isDisabled={!(idProp || directDepositModelProp)}
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
              !(idProp || directDepositModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
