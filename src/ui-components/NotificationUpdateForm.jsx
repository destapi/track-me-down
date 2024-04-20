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
import { getNotification } from "../graphql/queries";
import { updateNotification } from "../graphql/mutations";
const client = generateClient();
export default function NotificationUpdateForm(props) {
  const {
    id: idProp,
    notification: notificationModelProp,
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
    event: "",
    message: "",
    event_time: "",
    event_target: "",
  };
  const [created_at, setCreated_at] = React.useState(initialValues.created_at);
  const [event, setEvent] = React.useState(initialValues.event);
  const [message, setMessage] = React.useState(initialValues.message);
  const [event_time, setEvent_time] = React.useState(initialValues.event_time);
  const [event_target, setEvent_target] = React.useState(
    initialValues.event_target
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = notificationRecord
      ? { ...initialValues, ...notificationRecord }
      : initialValues;
    setCreated_at(cleanValues.created_at);
    setEvent(cleanValues.event);
    setMessage(cleanValues.message);
    setEvent_time(cleanValues.event_time);
    setEvent_target(cleanValues.event_target);
    setErrors({});
  };
  const [notificationRecord, setNotificationRecord] = React.useState(
    notificationModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getNotification.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getNotification
        : notificationModelProp;
      setNotificationRecord(record);
    };
    queryData();
  }, [idProp, notificationModelProp]);
  React.useEffect(resetStateValues, [notificationRecord]);
  const validations = {
    created_at: [{ type: "Required" }],
    event: [{ type: "Required" }],
    message: [{ type: "Required" }],
    event_time: [{ type: "Required" }],
    event_target: [],
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
  const convertTimeStampToDate = (ts) => {
    if (Math.abs(Date.now() - ts) < Math.abs(Date.now() - ts * 1000)) {
      return new Date(ts);
    }
    return new Date(ts * 1000);
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
          event,
          message,
          event_time,
          event_target: event_target ?? null,
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
            query: updateNotification.replaceAll("__typename", ""),
            variables: {
              input: {
                id: notificationRecord.id,
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
      {...getOverrideProps(overrides, "NotificationUpdateForm")}
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
              event,
              message,
              event_time,
              event_target,
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
        label="Event"
        isRequired={true}
        isReadOnly={false}
        value={event}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              created_at,
              event: value,
              message,
              event_time,
              event_target,
            };
            const result = onChange(modelFields);
            value = result?.event ?? value;
          }
          if (errors.event?.hasError) {
            runValidationTasks("event", value);
          }
          setEvent(value);
        }}
        onBlur={() => runValidationTasks("event", event)}
        errorMessage={errors.event?.errorMessage}
        hasError={errors.event?.hasError}
        {...getOverrideProps(overrides, "event")}
      ></TextField>
      <TextField
        label="Message"
        isRequired={true}
        isReadOnly={false}
        value={message}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              created_at,
              event,
              message: value,
              event_time,
              event_target,
            };
            const result = onChange(modelFields);
            value = result?.message ?? value;
          }
          if (errors.message?.hasError) {
            runValidationTasks("message", value);
          }
          setMessage(value);
        }}
        onBlur={() => runValidationTasks("message", message)}
        errorMessage={errors.message?.errorMessage}
        hasError={errors.message?.hasError}
        {...getOverrideProps(overrides, "message")}
      ></TextField>
      <TextField
        label="Event time"
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        value={event_time && convertToLocal(convertTimeStampToDate(event_time))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : Number(new Date(e.target.value));
          if (onChange) {
            const modelFields = {
              created_at,
              event,
              message,
              event_time: value,
              event_target,
            };
            const result = onChange(modelFields);
            value = result?.event_time ?? value;
          }
          if (errors.event_time?.hasError) {
            runValidationTasks("event_time", value);
          }
          setEvent_time(value);
        }}
        onBlur={() => runValidationTasks("event_time", event_time)}
        errorMessage={errors.event_time?.errorMessage}
        hasError={errors.event_time?.hasError}
        {...getOverrideProps(overrides, "event_time")}
      ></TextField>
      <TextField
        label="Event target"
        isRequired={false}
        isReadOnly={false}
        value={event_target}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              created_at,
              event,
              message,
              event_time,
              event_target: value,
            };
            const result = onChange(modelFields);
            value = result?.event_target ?? value;
          }
          if (errors.event_target?.hasError) {
            runValidationTasks("event_target", value);
          }
          setEvent_target(value);
        }}
        onBlur={() => runValidationTasks("event_target", event_target)}
        errorMessage={errors.event_target?.errorMessage}
        hasError={errors.event_target?.hasError}
        {...getOverrideProps(overrides, "event_target")}
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
          isDisabled={!(idProp || notificationModelProp)}
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
              !(idProp || notificationModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
