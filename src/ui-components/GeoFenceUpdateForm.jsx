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
import { getGeoFence } from "../graphql/queries";
import { updateGeoFence } from "../graphql/mutations";
const client = generateClient();
export default function GeoFenceUpdateForm(props) {
  const {
    id: idProp,
    geoFence: geoFenceModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    title: "",
    coordinates: "",
    dateCreated: "",
    validDuration: "",
  };
  const [title, setTitle] = React.useState(initialValues.title);
  const [coordinates, setCoordinates] = React.useState(
    initialValues.coordinates
  );
  const [dateCreated, setDateCreated] = React.useState(
    initialValues.dateCreated
  );
  const [validDuration, setValidDuration] = React.useState(
    initialValues.validDuration
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = geoFenceRecord
      ? { ...initialValues, ...geoFenceRecord }
      : initialValues;
    setTitle(cleanValues.title);
    setCoordinates(cleanValues.coordinates);
    setDateCreated(cleanValues.dateCreated);
    setValidDuration(cleanValues.validDuration);
    setErrors({});
  };
  const [geoFenceRecord, setGeoFenceRecord] = React.useState(geoFenceModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getGeoFence.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getGeoFence
        : geoFenceModelProp;
      setGeoFenceRecord(record);
    };
    queryData();
  }, [idProp, geoFenceModelProp]);
  React.useEffect(resetStateValues, [geoFenceRecord]);
  const validations = {
    title: [{ type: "Required" }],
    coordinates: [{ type: "Required" }, { type: "URL" }],
    dateCreated: [{ type: "Required" }],
    validDuration: [],
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
          title,
          coordinates,
          dateCreated,
          validDuration: validDuration ?? null,
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
            query: updateGeoFence.replaceAll("__typename", ""),
            variables: {
              input: {
                id: geoFenceRecord.id,
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
      {...getOverrideProps(overrides, "GeoFenceUpdateForm")}
      {...rest}
    >
      <TextField
        label="Title"
        isRequired={true}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title: value,
              coordinates,
              dateCreated,
              validDuration,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <TextField
        label="Coordinates"
        isRequired={true}
        isReadOnly={false}
        value={coordinates}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              coordinates: value,
              dateCreated,
              validDuration,
            };
            const result = onChange(modelFields);
            value = result?.coordinates ?? value;
          }
          if (errors.coordinates?.hasError) {
            runValidationTasks("coordinates", value);
          }
          setCoordinates(value);
        }}
        onBlur={() => runValidationTasks("coordinates", coordinates)}
        errorMessage={errors.coordinates?.errorMessage}
        hasError={errors.coordinates?.hasError}
        {...getOverrideProps(overrides, "coordinates")}
      ></TextField>
      <TextField
        label="Date created"
        isRequired={true}
        isReadOnly={false}
        type="date"
        value={dateCreated}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              coordinates,
              dateCreated: value,
              validDuration,
            };
            const result = onChange(modelFields);
            value = result?.dateCreated ?? value;
          }
          if (errors.dateCreated?.hasError) {
            runValidationTasks("dateCreated", value);
          }
          setDateCreated(value);
        }}
        onBlur={() => runValidationTasks("dateCreated", dateCreated)}
        errorMessage={errors.dateCreated?.errorMessage}
        hasError={errors.dateCreated?.hasError}
        {...getOverrideProps(overrides, "dateCreated")}
      ></TextField>
      <TextField
        label="Valid duration"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={validDuration}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              title,
              coordinates,
              dateCreated,
              validDuration: value,
            };
            const result = onChange(modelFields);
            value = result?.validDuration ?? value;
          }
          if (errors.validDuration?.hasError) {
            runValidationTasks("validDuration", value);
          }
          setValidDuration(value);
        }}
        onBlur={() => runValidationTasks("validDuration", validDuration)}
        errorMessage={errors.validDuration?.errorMessage}
        hasError={errors.validDuration?.hasError}
        {...getOverrideProps(overrides, "validDuration")}
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
          isDisabled={!(idProp || geoFenceModelProp)}
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
              !(idProp || geoFenceModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
