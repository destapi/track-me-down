/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGeoFence = /* GraphQL */ `
  mutation CreateGeoFence(
    $input: CreateGeoFenceInput!
    $condition: ModelGeoFenceConditionInput
  ) {
    createGeoFence(input: $input, condition: $condition) {
      id
      title
      coordinates
      dateCreated
      validDuration
      createdBy {
        id
        firstName
        lastName
        phoneNumber
        emailAddress
        copyOfId
        homeAddress {
          id
          streetName
          unitNumber
          city
          state
          zipCode
          createdAt
          updatedAt
          __typename
        }
        dateRegistered
        createdAt
        updatedAt
        administratorHomeAddressId
        __typename
      }
      createdAt
      updatedAt
      geoFenceCreatedById
      __typename
    }
  }
`;
export const updateGeoFence = /* GraphQL */ `
  mutation UpdateGeoFence(
    $input: UpdateGeoFenceInput!
    $condition: ModelGeoFenceConditionInput
  ) {
    updateGeoFence(input: $input, condition: $condition) {
      id
      title
      coordinates
      dateCreated
      validDuration
      createdBy {
        id
        firstName
        lastName
        phoneNumber
        emailAddress
        copyOfId
        homeAddress {
          id
          streetName
          unitNumber
          city
          state
          zipCode
          createdAt
          updatedAt
          __typename
        }
        dateRegistered
        createdAt
        updatedAt
        administratorHomeAddressId
        __typename
      }
      createdAt
      updatedAt
      geoFenceCreatedById
      __typename
    }
  }
`;
export const deleteGeoFence = /* GraphQL */ `
  mutation DeleteGeoFence(
    $input: DeleteGeoFenceInput!
    $condition: ModelGeoFenceConditionInput
  ) {
    deleteGeoFence(input: $input, condition: $condition) {
      id
      title
      coordinates
      dateCreated
      validDuration
      createdBy {
        id
        firstName
        lastName
        phoneNumber
        emailAddress
        copyOfId
        homeAddress {
          id
          streetName
          unitNumber
          city
          state
          zipCode
          createdAt
          updatedAt
          __typename
        }
        dateRegistered
        createdAt
        updatedAt
        administratorHomeAddressId
        __typename
      }
      createdAt
      updatedAt
      geoFenceCreatedById
      __typename
    }
  }
`;
export const createDriverPool = /* GraphQL */ `
  mutation CreateDriverPool(
    $input: CreateDriverPoolInput!
    $condition: ModelDriverPoolConditionInput
  ) {
    createDriverPool(input: $input, condition: $condition) {
      id
      poolTitle
      drivers {
        items {
          id
          firstName
          lastName
          ssn
          dob
          dLCopy
          phoneNumber
          emailAddress
          earningTier
          registrationDate
          activeStatus
          driverpoolID
          createdAt
          updatedAt
          driverHomeAddressId
          driverVehicleId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateDriverPool = /* GraphQL */ `
  mutation UpdateDriverPool(
    $input: UpdateDriverPoolInput!
    $condition: ModelDriverPoolConditionInput
  ) {
    updateDriverPool(input: $input, condition: $condition) {
      id
      poolTitle
      drivers {
        items {
          id
          firstName
          lastName
          ssn
          dob
          dLCopy
          phoneNumber
          emailAddress
          earningTier
          registrationDate
          activeStatus
          driverpoolID
          createdAt
          updatedAt
          driverHomeAddressId
          driverVehicleId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteDriverPool = /* GraphQL */ `
  mutation DeleteDriverPool(
    $input: DeleteDriverPoolInput!
    $condition: ModelDriverPoolConditionInput
  ) {
    deleteDriverPool(input: $input, condition: $condition) {
      id
      poolTitle
      drivers {
        items {
          id
          firstName
          lastName
          ssn
          dob
          dLCopy
          phoneNumber
          emailAddress
          earningTier
          registrationDate
          activeStatus
          driverpoolID
          createdAt
          updatedAt
          driverHomeAddressId
          driverVehicleId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createVehicleFleet = /* GraphQL */ `
  mutation CreateVehicleFleet(
    $input: CreateVehicleFleetInput!
    $condition: ModelVehicleFleetConditionInput
  ) {
    createVehicleFleet(input: $input, condition: $condition) {
      id
      fleetTitle
      vehicles {
        items {
          id
          vin
          make
          model
          year
          registrationNum
          registrationState
          registrationCopy
          insuranceProof
          vehiclefleetID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateVehicleFleet = /* GraphQL */ `
  mutation UpdateVehicleFleet(
    $input: UpdateVehicleFleetInput!
    $condition: ModelVehicleFleetConditionInput
  ) {
    updateVehicleFleet(input: $input, condition: $condition) {
      id
      fleetTitle
      vehicles {
        items {
          id
          vin
          make
          model
          year
          registrationNum
          registrationState
          registrationCopy
          insuranceProof
          vehiclefleetID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteVehicleFleet = /* GraphQL */ `
  mutation DeleteVehicleFleet(
    $input: DeleteVehicleFleetInput!
    $condition: ModelVehicleFleetConditionInput
  ) {
    deleteVehicleFleet(input: $input, condition: $condition) {
      id
      fleetTitle
      vehicles {
        items {
          id
          vin
          make
          model
          year
          registrationNum
          registrationState
          registrationCopy
          insuranceProof
          vehiclefleetID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createNotification = /* GraphQL */ `
  mutation CreateNotification(
    $input: CreateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    createNotification(input: $input, condition: $condition) {
      id
      event
      message
      eventTime
      target
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateNotification = /* GraphQL */ `
  mutation UpdateNotification(
    $input: UpdateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    updateNotification(input: $input, condition: $condition) {
      id
      event
      message
      eventTime
      target
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteNotification = /* GraphQL */ `
  mutation DeleteNotification(
    $input: DeleteNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    deleteNotification(input: $input, condition: $condition) {
      id
      event
      message
      eventTime
      target
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createTripFeedback = /* GraphQL */ `
  mutation CreateTripFeedback(
    $input: CreateTripFeedbackInput!
    $condition: ModelTripFeedbackConditionInput
  ) {
    createTripFeedback(input: $input, condition: $condition) {
      id
      trip {
        id
        pickUp {
          latitude
          longitude
          __typename
        }
        dropOff {
          latitude
          longitude
          __typename
        }
        intervals {
          latitude
          longitude
          __typename
        }
        distance
        tripCharge
        passengers {
          nextToken
          __typename
        }
        cancellationCharge
        status
        driver {
          id
          firstName
          lastName
          ssn
          dob
          dLCopy
          phoneNumber
          emailAddress
          earningTier
          registrationDate
          activeStatus
          driverpoolID
          createdAt
          updatedAt
          driverHomeAddressId
          driverVehicleId
          __typename
        }
        createdAt
        updatedAt
        tripDriverId
        __typename
      }
      passenger {
        id
        firstName
        lastName
        phoneNumber
        emailAddress
        paymentMethod {
          id
          paymentType
          accountNumber
          firstName
          lastName
          expiryDate
          verificationCode
          createdAt
          updatedAt
          __typename
        }
        dateRegistered
        activeStatus
        tripID
        createdAt
        updatedAt
        passengerPaymentMethodId
        __typename
      }
      comments
      satisfaction {
        min
        max
        __typename
      }
      createdAt
      updatedAt
      tripFeedbackTripId
      tripFeedbackPassengerId
      __typename
    }
  }
`;
export const updateTripFeedback = /* GraphQL */ `
  mutation UpdateTripFeedback(
    $input: UpdateTripFeedbackInput!
    $condition: ModelTripFeedbackConditionInput
  ) {
    updateTripFeedback(input: $input, condition: $condition) {
      id
      trip {
        id
        pickUp {
          latitude
          longitude
          __typename
        }
        dropOff {
          latitude
          longitude
          __typename
        }
        intervals {
          latitude
          longitude
          __typename
        }
        distance
        tripCharge
        passengers {
          nextToken
          __typename
        }
        cancellationCharge
        status
        driver {
          id
          firstName
          lastName
          ssn
          dob
          dLCopy
          phoneNumber
          emailAddress
          earningTier
          registrationDate
          activeStatus
          driverpoolID
          createdAt
          updatedAt
          driverHomeAddressId
          driverVehicleId
          __typename
        }
        createdAt
        updatedAt
        tripDriverId
        __typename
      }
      passenger {
        id
        firstName
        lastName
        phoneNumber
        emailAddress
        paymentMethod {
          id
          paymentType
          accountNumber
          firstName
          lastName
          expiryDate
          verificationCode
          createdAt
          updatedAt
          __typename
        }
        dateRegistered
        activeStatus
        tripID
        createdAt
        updatedAt
        passengerPaymentMethodId
        __typename
      }
      comments
      satisfaction {
        min
        max
        __typename
      }
      createdAt
      updatedAt
      tripFeedbackTripId
      tripFeedbackPassengerId
      __typename
    }
  }
`;
export const deleteTripFeedback = /* GraphQL */ `
  mutation DeleteTripFeedback(
    $input: DeleteTripFeedbackInput!
    $condition: ModelTripFeedbackConditionInput
  ) {
    deleteTripFeedback(input: $input, condition: $condition) {
      id
      trip {
        id
        pickUp {
          latitude
          longitude
          __typename
        }
        dropOff {
          latitude
          longitude
          __typename
        }
        intervals {
          latitude
          longitude
          __typename
        }
        distance
        tripCharge
        passengers {
          nextToken
          __typename
        }
        cancellationCharge
        status
        driver {
          id
          firstName
          lastName
          ssn
          dob
          dLCopy
          phoneNumber
          emailAddress
          earningTier
          registrationDate
          activeStatus
          driverpoolID
          createdAt
          updatedAt
          driverHomeAddressId
          driverVehicleId
          __typename
        }
        createdAt
        updatedAt
        tripDriverId
        __typename
      }
      passenger {
        id
        firstName
        lastName
        phoneNumber
        emailAddress
        paymentMethod {
          id
          paymentType
          accountNumber
          firstName
          lastName
          expiryDate
          verificationCode
          createdAt
          updatedAt
          __typename
        }
        dateRegistered
        activeStatus
        tripID
        createdAt
        updatedAt
        passengerPaymentMethodId
        __typename
      }
      comments
      satisfaction {
        min
        max
        __typename
      }
      createdAt
      updatedAt
      tripFeedbackTripId
      tripFeedbackPassengerId
      __typename
    }
  }
`;
export const createDriverRating = /* GraphQL */ `
  mutation CreateDriverRating(
    $input: CreateDriverRatingInput!
    $condition: ModelDriverRatingConditionInput
  ) {
    createDriverRating(input: $input, condition: $condition) {
      id
      passenger {
        id
        firstName
        lastName
        phoneNumber
        emailAddress
        paymentMethod {
          id
          paymentType
          accountNumber
          firstName
          lastName
          expiryDate
          verificationCode
          createdAt
          updatedAt
          __typename
        }
        dateRegistered
        activeStatus
        tripID
        createdAt
        updatedAt
        passengerPaymentMethodId
        __typename
      }
      driver {
        id
        firstName
        lastName
        ssn
        dob
        dLCopy
        phoneNumber
        emailAddress
        homeAddress {
          id
          streetName
          unitNumber
          city
          state
          zipCode
          createdAt
          updatedAt
          __typename
        }
        earningTier
        vehicle {
          id
          vin
          make
          model
          year
          registrationNum
          registrationState
          registrationCopy
          insuranceProof
          vehiclefleetID
          createdAt
          updatedAt
          __typename
        }
        registrationDate
        activeStatus
        driverpoolID
        createdAt
        updatedAt
        driverHomeAddressId
        driverVehicleId
        __typename
      }
      trip {
        id
        pickUp {
          latitude
          longitude
          __typename
        }
        dropOff {
          latitude
          longitude
          __typename
        }
        intervals {
          latitude
          longitude
          __typename
        }
        distance
        tripCharge
        passengers {
          nextToken
          __typename
        }
        cancellationCharge
        status
        driver {
          id
          firstName
          lastName
          ssn
          dob
          dLCopy
          phoneNumber
          emailAddress
          earningTier
          registrationDate
          activeStatus
          driverpoolID
          createdAt
          updatedAt
          driverHomeAddressId
          driverVehicleId
          __typename
        }
        createdAt
        updatedAt
        tripDriverId
        __typename
      }
      cleanliness {
        min
        max
        __typename
      }
      punctuality {
        min
        max
        __typename
      }
      safeDriving {
        min
        max
        __typename
      }
      courtesy {
        min
        max
        __typename
      }
      createdAt
      updatedAt
      driverRatingPassengerId
      driverRatingDriverId
      driverRatingTripId
      __typename
    }
  }
`;
export const updateDriverRating = /* GraphQL */ `
  mutation UpdateDriverRating(
    $input: UpdateDriverRatingInput!
    $condition: ModelDriverRatingConditionInput
  ) {
    updateDriverRating(input: $input, condition: $condition) {
      id
      passenger {
        id
        firstName
        lastName
        phoneNumber
        emailAddress
        paymentMethod {
          id
          paymentType
          accountNumber
          firstName
          lastName
          expiryDate
          verificationCode
          createdAt
          updatedAt
          __typename
        }
        dateRegistered
        activeStatus
        tripID
        createdAt
        updatedAt
        passengerPaymentMethodId
        __typename
      }
      driver {
        id
        firstName
        lastName
        ssn
        dob
        dLCopy
        phoneNumber
        emailAddress
        homeAddress {
          id
          streetName
          unitNumber
          city
          state
          zipCode
          createdAt
          updatedAt
          __typename
        }
        earningTier
        vehicle {
          id
          vin
          make
          model
          year
          registrationNum
          registrationState
          registrationCopy
          insuranceProof
          vehiclefleetID
          createdAt
          updatedAt
          __typename
        }
        registrationDate
        activeStatus
        driverpoolID
        createdAt
        updatedAt
        driverHomeAddressId
        driverVehicleId
        __typename
      }
      trip {
        id
        pickUp {
          latitude
          longitude
          __typename
        }
        dropOff {
          latitude
          longitude
          __typename
        }
        intervals {
          latitude
          longitude
          __typename
        }
        distance
        tripCharge
        passengers {
          nextToken
          __typename
        }
        cancellationCharge
        status
        driver {
          id
          firstName
          lastName
          ssn
          dob
          dLCopy
          phoneNumber
          emailAddress
          earningTier
          registrationDate
          activeStatus
          driverpoolID
          createdAt
          updatedAt
          driverHomeAddressId
          driverVehicleId
          __typename
        }
        createdAt
        updatedAt
        tripDriverId
        __typename
      }
      cleanliness {
        min
        max
        __typename
      }
      punctuality {
        min
        max
        __typename
      }
      safeDriving {
        min
        max
        __typename
      }
      courtesy {
        min
        max
        __typename
      }
      createdAt
      updatedAt
      driverRatingPassengerId
      driverRatingDriverId
      driverRatingTripId
      __typename
    }
  }
`;
export const deleteDriverRating = /* GraphQL */ `
  mutation DeleteDriverRating(
    $input: DeleteDriverRatingInput!
    $condition: ModelDriverRatingConditionInput
  ) {
    deleteDriverRating(input: $input, condition: $condition) {
      id
      passenger {
        id
        firstName
        lastName
        phoneNumber
        emailAddress
        paymentMethod {
          id
          paymentType
          accountNumber
          firstName
          lastName
          expiryDate
          verificationCode
          createdAt
          updatedAt
          __typename
        }
        dateRegistered
        activeStatus
        tripID
        createdAt
        updatedAt
        passengerPaymentMethodId
        __typename
      }
      driver {
        id
        firstName
        lastName
        ssn
        dob
        dLCopy
        phoneNumber
        emailAddress
        homeAddress {
          id
          streetName
          unitNumber
          city
          state
          zipCode
          createdAt
          updatedAt
          __typename
        }
        earningTier
        vehicle {
          id
          vin
          make
          model
          year
          registrationNum
          registrationState
          registrationCopy
          insuranceProof
          vehiclefleetID
          createdAt
          updatedAt
          __typename
        }
        registrationDate
        activeStatus
        driverpoolID
        createdAt
        updatedAt
        driverHomeAddressId
        driverVehicleId
        __typename
      }
      trip {
        id
        pickUp {
          latitude
          longitude
          __typename
        }
        dropOff {
          latitude
          longitude
          __typename
        }
        intervals {
          latitude
          longitude
          __typename
        }
        distance
        tripCharge
        passengers {
          nextToken
          __typename
        }
        cancellationCharge
        status
        driver {
          id
          firstName
          lastName
          ssn
          dob
          dLCopy
          phoneNumber
          emailAddress
          earningTier
          registrationDate
          activeStatus
          driverpoolID
          createdAt
          updatedAt
          driverHomeAddressId
          driverVehicleId
          __typename
        }
        createdAt
        updatedAt
        tripDriverId
        __typename
      }
      cleanliness {
        min
        max
        __typename
      }
      punctuality {
        min
        max
        __typename
      }
      safeDriving {
        min
        max
        __typename
      }
      courtesy {
        min
        max
        __typename
      }
      createdAt
      updatedAt
      driverRatingPassengerId
      driverRatingDriverId
      driverRatingTripId
      __typename
    }
  }
`;
export const createPayment = /* GraphQL */ `
  mutation CreatePayment(
    $input: CreatePaymentInput!
    $condition: ModelPaymentConditionInput
  ) {
    createPayment(input: $input, condition: $condition) {
      id
      passenger {
        id
        firstName
        lastName
        phoneNumber
        emailAddress
        paymentMethod {
          id
          paymentType
          accountNumber
          firstName
          lastName
          expiryDate
          verificationCode
          createdAt
          updatedAt
          __typename
        }
        dateRegistered
        activeStatus
        tripID
        createdAt
        updatedAt
        passengerPaymentMethodId
        __typename
      }
      trip {
        id
        pickUp {
          latitude
          longitude
          __typename
        }
        dropOff {
          latitude
          longitude
          __typename
        }
        intervals {
          latitude
          longitude
          __typename
        }
        distance
        tripCharge
        passengers {
          nextToken
          __typename
        }
        cancellationCharge
        status
        driver {
          id
          firstName
          lastName
          ssn
          dob
          dLCopy
          phoneNumber
          emailAddress
          earningTier
          registrationDate
          activeStatus
          driverpoolID
          createdAt
          updatedAt
          driverHomeAddressId
          driverVehicleId
          __typename
        }
        createdAt
        updatedAt
        tripDriverId
        __typename
      }
      amountRemitted
      tipRemitted
      dateRemitted
      paymentMethod {
        id
        paymentType
        accountNumber
        firstName
        lastName
        expiryDate
        verificationCode
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      paymentPassengerId
      paymentTripId
      paymentPaymentMethodId
      __typename
    }
  }
`;
export const updatePayment = /* GraphQL */ `
  mutation UpdatePayment(
    $input: UpdatePaymentInput!
    $condition: ModelPaymentConditionInput
  ) {
    updatePayment(input: $input, condition: $condition) {
      id
      passenger {
        id
        firstName
        lastName
        phoneNumber
        emailAddress
        paymentMethod {
          id
          paymentType
          accountNumber
          firstName
          lastName
          expiryDate
          verificationCode
          createdAt
          updatedAt
          __typename
        }
        dateRegistered
        activeStatus
        tripID
        createdAt
        updatedAt
        passengerPaymentMethodId
        __typename
      }
      trip {
        id
        pickUp {
          latitude
          longitude
          __typename
        }
        dropOff {
          latitude
          longitude
          __typename
        }
        intervals {
          latitude
          longitude
          __typename
        }
        distance
        tripCharge
        passengers {
          nextToken
          __typename
        }
        cancellationCharge
        status
        driver {
          id
          firstName
          lastName
          ssn
          dob
          dLCopy
          phoneNumber
          emailAddress
          earningTier
          registrationDate
          activeStatus
          driverpoolID
          createdAt
          updatedAt
          driverHomeAddressId
          driverVehicleId
          __typename
        }
        createdAt
        updatedAt
        tripDriverId
        __typename
      }
      amountRemitted
      tipRemitted
      dateRemitted
      paymentMethod {
        id
        paymentType
        accountNumber
        firstName
        lastName
        expiryDate
        verificationCode
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      paymentPassengerId
      paymentTripId
      paymentPaymentMethodId
      __typename
    }
  }
`;
export const deletePayment = /* GraphQL */ `
  mutation DeletePayment(
    $input: DeletePaymentInput!
    $condition: ModelPaymentConditionInput
  ) {
    deletePayment(input: $input, condition: $condition) {
      id
      passenger {
        id
        firstName
        lastName
        phoneNumber
        emailAddress
        paymentMethod {
          id
          paymentType
          accountNumber
          firstName
          lastName
          expiryDate
          verificationCode
          createdAt
          updatedAt
          __typename
        }
        dateRegistered
        activeStatus
        tripID
        createdAt
        updatedAt
        passengerPaymentMethodId
        __typename
      }
      trip {
        id
        pickUp {
          latitude
          longitude
          __typename
        }
        dropOff {
          latitude
          longitude
          __typename
        }
        intervals {
          latitude
          longitude
          __typename
        }
        distance
        tripCharge
        passengers {
          nextToken
          __typename
        }
        cancellationCharge
        status
        driver {
          id
          firstName
          lastName
          ssn
          dob
          dLCopy
          phoneNumber
          emailAddress
          earningTier
          registrationDate
          activeStatus
          driverpoolID
          createdAt
          updatedAt
          driverHomeAddressId
          driverVehicleId
          __typename
        }
        createdAt
        updatedAt
        tripDriverId
        __typename
      }
      amountRemitted
      tipRemitted
      dateRemitted
      paymentMethod {
        id
        paymentType
        accountNumber
        firstName
        lastName
        expiryDate
        verificationCode
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      paymentPassengerId
      paymentTripId
      paymentPaymentMethodId
      __typename
    }
  }
`;
export const createTrip = /* GraphQL */ `
  mutation CreateTrip(
    $input: CreateTripInput!
    $condition: ModelTripConditionInput
  ) {
    createTrip(input: $input, condition: $condition) {
      id
      pickUp {
        latitude
        longitude
        __typename
      }
      dropOff {
        latitude
        longitude
        __typename
      }
      intervals {
        latitude
        longitude
        __typename
      }
      distance
      tripCharge
      passengers {
        items {
          id
          firstName
          lastName
          phoneNumber
          emailAddress
          dateRegistered
          activeStatus
          tripID
          createdAt
          updatedAt
          passengerPaymentMethodId
          __typename
        }
        nextToken
        __typename
      }
      cancellationCharge
      status
      driver {
        id
        firstName
        lastName
        ssn
        dob
        dLCopy
        phoneNumber
        emailAddress
        homeAddress {
          id
          streetName
          unitNumber
          city
          state
          zipCode
          createdAt
          updatedAt
          __typename
        }
        earningTier
        vehicle {
          id
          vin
          make
          model
          year
          registrationNum
          registrationState
          registrationCopy
          insuranceProof
          vehiclefleetID
          createdAt
          updatedAt
          __typename
        }
        registrationDate
        activeStatus
        driverpoolID
        createdAt
        updatedAt
        driverHomeAddressId
        driverVehicleId
        __typename
      }
      createdAt
      updatedAt
      tripDriverId
      __typename
    }
  }
`;
export const updateTrip = /* GraphQL */ `
  mutation UpdateTrip(
    $input: UpdateTripInput!
    $condition: ModelTripConditionInput
  ) {
    updateTrip(input: $input, condition: $condition) {
      id
      pickUp {
        latitude
        longitude
        __typename
      }
      dropOff {
        latitude
        longitude
        __typename
      }
      intervals {
        latitude
        longitude
        __typename
      }
      distance
      tripCharge
      passengers {
        items {
          id
          firstName
          lastName
          phoneNumber
          emailAddress
          dateRegistered
          activeStatus
          tripID
          createdAt
          updatedAt
          passengerPaymentMethodId
          __typename
        }
        nextToken
        __typename
      }
      cancellationCharge
      status
      driver {
        id
        firstName
        lastName
        ssn
        dob
        dLCopy
        phoneNumber
        emailAddress
        homeAddress {
          id
          streetName
          unitNumber
          city
          state
          zipCode
          createdAt
          updatedAt
          __typename
        }
        earningTier
        vehicle {
          id
          vin
          make
          model
          year
          registrationNum
          registrationState
          registrationCopy
          insuranceProof
          vehiclefleetID
          createdAt
          updatedAt
          __typename
        }
        registrationDate
        activeStatus
        driverpoolID
        createdAt
        updatedAt
        driverHomeAddressId
        driverVehicleId
        __typename
      }
      createdAt
      updatedAt
      tripDriverId
      __typename
    }
  }
`;
export const deleteTrip = /* GraphQL */ `
  mutation DeleteTrip(
    $input: DeleteTripInput!
    $condition: ModelTripConditionInput
  ) {
    deleteTrip(input: $input, condition: $condition) {
      id
      pickUp {
        latitude
        longitude
        __typename
      }
      dropOff {
        latitude
        longitude
        __typename
      }
      intervals {
        latitude
        longitude
        __typename
      }
      distance
      tripCharge
      passengers {
        items {
          id
          firstName
          lastName
          phoneNumber
          emailAddress
          dateRegistered
          activeStatus
          tripID
          createdAt
          updatedAt
          passengerPaymentMethodId
          __typename
        }
        nextToken
        __typename
      }
      cancellationCharge
      status
      driver {
        id
        firstName
        lastName
        ssn
        dob
        dLCopy
        phoneNumber
        emailAddress
        homeAddress {
          id
          streetName
          unitNumber
          city
          state
          zipCode
          createdAt
          updatedAt
          __typename
        }
        earningTier
        vehicle {
          id
          vin
          make
          model
          year
          registrationNum
          registrationState
          registrationCopy
          insuranceProof
          vehiclefleetID
          createdAt
          updatedAt
          __typename
        }
        registrationDate
        activeStatus
        driverpoolID
        createdAt
        updatedAt
        driverHomeAddressId
        driverVehicleId
        __typename
      }
      createdAt
      updatedAt
      tripDriverId
      __typename
    }
  }
`;
export const createDirectDeposit = /* GraphQL */ `
  mutation CreateDirectDeposit(
    $input: CreateDirectDepositInput!
    $condition: ModelDirectDepositConditionInput
  ) {
    createDirectDeposit(input: $input, condition: $condition) {
      id
      driver {
        id
        firstName
        lastName
        ssn
        dob
        dLCopy
        phoneNumber
        emailAddress
        homeAddress {
          id
          streetName
          unitNumber
          city
          state
          zipCode
          createdAt
          updatedAt
          __typename
        }
        earningTier
        vehicle {
          id
          vin
          make
          model
          year
          registrationNum
          registrationState
          registrationCopy
          insuranceProof
          vehiclefleetID
          createdAt
          updatedAt
          __typename
        }
        registrationDate
        activeStatus
        driverpoolID
        createdAt
        updatedAt
        driverHomeAddressId
        driverVehicleId
        __typename
      }
      routingNumber
      accountNumber
      amountDesignated
      percentageDesignated
      createdAt
      updatedAt
      directDepositDriverId
      __typename
    }
  }
`;
export const updateDirectDeposit = /* GraphQL */ `
  mutation UpdateDirectDeposit(
    $input: UpdateDirectDepositInput!
    $condition: ModelDirectDepositConditionInput
  ) {
    updateDirectDeposit(input: $input, condition: $condition) {
      id
      driver {
        id
        firstName
        lastName
        ssn
        dob
        dLCopy
        phoneNumber
        emailAddress
        homeAddress {
          id
          streetName
          unitNumber
          city
          state
          zipCode
          createdAt
          updatedAt
          __typename
        }
        earningTier
        vehicle {
          id
          vin
          make
          model
          year
          registrationNum
          registrationState
          registrationCopy
          insuranceProof
          vehiclefleetID
          createdAt
          updatedAt
          __typename
        }
        registrationDate
        activeStatus
        driverpoolID
        createdAt
        updatedAt
        driverHomeAddressId
        driverVehicleId
        __typename
      }
      routingNumber
      accountNumber
      amountDesignated
      percentageDesignated
      createdAt
      updatedAt
      directDepositDriverId
      __typename
    }
  }
`;
export const deleteDirectDeposit = /* GraphQL */ `
  mutation DeleteDirectDeposit(
    $input: DeleteDirectDepositInput!
    $condition: ModelDirectDepositConditionInput
  ) {
    deleteDirectDeposit(input: $input, condition: $condition) {
      id
      driver {
        id
        firstName
        lastName
        ssn
        dob
        dLCopy
        phoneNumber
        emailAddress
        homeAddress {
          id
          streetName
          unitNumber
          city
          state
          zipCode
          createdAt
          updatedAt
          __typename
        }
        earningTier
        vehicle {
          id
          vin
          make
          model
          year
          registrationNum
          registrationState
          registrationCopy
          insuranceProof
          vehiclefleetID
          createdAt
          updatedAt
          __typename
        }
        registrationDate
        activeStatus
        driverpoolID
        createdAt
        updatedAt
        driverHomeAddressId
        driverVehicleId
        __typename
      }
      routingNumber
      accountNumber
      amountDesignated
      percentageDesignated
      createdAt
      updatedAt
      directDepositDriverId
      __typename
    }
  }
`;
export const createDriver = /* GraphQL */ `
  mutation CreateDriver(
    $input: CreateDriverInput!
    $condition: ModelDriverConditionInput
  ) {
    createDriver(input: $input, condition: $condition) {
      id
      firstName
      lastName
      ssn
      dob
      dLCopy
      phoneNumber
      emailAddress
      homeAddress {
        id
        streetName
        unitNumber
        city
        state
        zipCode
        createdAt
        updatedAt
        __typename
      }
      earningTier
      vehicle {
        id
        vin
        make
        model
        year
        registrationNum
        registrationState
        registrationCopy
        insuranceProof
        vehiclefleetID
        createdAt
        updatedAt
        __typename
      }
      registrationDate
      activeStatus
      driverpoolID
      createdAt
      updatedAt
      driverHomeAddressId
      driverVehicleId
      __typename
    }
  }
`;
export const updateDriver = /* GraphQL */ `
  mutation UpdateDriver(
    $input: UpdateDriverInput!
    $condition: ModelDriverConditionInput
  ) {
    updateDriver(input: $input, condition: $condition) {
      id
      firstName
      lastName
      ssn
      dob
      dLCopy
      phoneNumber
      emailAddress
      homeAddress {
        id
        streetName
        unitNumber
        city
        state
        zipCode
        createdAt
        updatedAt
        __typename
      }
      earningTier
      vehicle {
        id
        vin
        make
        model
        year
        registrationNum
        registrationState
        registrationCopy
        insuranceProof
        vehiclefleetID
        createdAt
        updatedAt
        __typename
      }
      registrationDate
      activeStatus
      driverpoolID
      createdAt
      updatedAt
      driverHomeAddressId
      driverVehicleId
      __typename
    }
  }
`;
export const deleteDriver = /* GraphQL */ `
  mutation DeleteDriver(
    $input: DeleteDriverInput!
    $condition: ModelDriverConditionInput
  ) {
    deleteDriver(input: $input, condition: $condition) {
      id
      firstName
      lastName
      ssn
      dob
      dLCopy
      phoneNumber
      emailAddress
      homeAddress {
        id
        streetName
        unitNumber
        city
        state
        zipCode
        createdAt
        updatedAt
        __typename
      }
      earningTier
      vehicle {
        id
        vin
        make
        model
        year
        registrationNum
        registrationState
        registrationCopy
        insuranceProof
        vehiclefleetID
        createdAt
        updatedAt
        __typename
      }
      registrationDate
      activeStatus
      driverpoolID
      createdAt
      updatedAt
      driverHomeAddressId
      driverVehicleId
      __typename
    }
  }
`;
export const createVehicle = /* GraphQL */ `
  mutation CreateVehicle(
    $input: CreateVehicleInput!
    $condition: ModelVehicleConditionInput
  ) {
    createVehicle(input: $input, condition: $condition) {
      id
      vin
      make
      model
      year
      registrationNum
      registrationState
      registrationCopy
      insuranceProof
      vehiclefleetID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateVehicle = /* GraphQL */ `
  mutation UpdateVehicle(
    $input: UpdateVehicleInput!
    $condition: ModelVehicleConditionInput
  ) {
    updateVehicle(input: $input, condition: $condition) {
      id
      vin
      make
      model
      year
      registrationNum
      registrationState
      registrationCopy
      insuranceProof
      vehiclefleetID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteVehicle = /* GraphQL */ `
  mutation DeleteVehicle(
    $input: DeleteVehicleInput!
    $condition: ModelVehicleConditionInput
  ) {
    deleteVehicle(input: $input, condition: $condition) {
      id
      vin
      make
      model
      year
      registrationNum
      registrationState
      registrationCopy
      insuranceProof
      vehiclefleetID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createPaymentMethod = /* GraphQL */ `
  mutation CreatePaymentMethod(
    $input: CreatePaymentMethodInput!
    $condition: ModelPaymentMethodConditionInput
  ) {
    createPaymentMethod(input: $input, condition: $condition) {
      id
      paymentType
      accountNumber
      firstName
      lastName
      expiryDate
      verificationCode
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updatePaymentMethod = /* GraphQL */ `
  mutation UpdatePaymentMethod(
    $input: UpdatePaymentMethodInput!
    $condition: ModelPaymentMethodConditionInput
  ) {
    updatePaymentMethod(input: $input, condition: $condition) {
      id
      paymentType
      accountNumber
      firstName
      lastName
      expiryDate
      verificationCode
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deletePaymentMethod = /* GraphQL */ `
  mutation DeletePaymentMethod(
    $input: DeletePaymentMethodInput!
    $condition: ModelPaymentMethodConditionInput
  ) {
    deletePaymentMethod(input: $input, condition: $condition) {
      id
      paymentType
      accountNumber
      firstName
      lastName
      expiryDate
      verificationCode
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createPassenger = /* GraphQL */ `
  mutation CreatePassenger(
    $input: CreatePassengerInput!
    $condition: ModelPassengerConditionInput
  ) {
    createPassenger(input: $input, condition: $condition) {
      id
      firstName
      lastName
      phoneNumber
      emailAddress
      paymentMethod {
        id
        paymentType
        accountNumber
        firstName
        lastName
        expiryDate
        verificationCode
        createdAt
        updatedAt
        __typename
      }
      dateRegistered
      activeStatus
      tripID
      createdAt
      updatedAt
      passengerPaymentMethodId
      __typename
    }
  }
`;
export const updatePassenger = /* GraphQL */ `
  mutation UpdatePassenger(
    $input: UpdatePassengerInput!
    $condition: ModelPassengerConditionInput
  ) {
    updatePassenger(input: $input, condition: $condition) {
      id
      firstName
      lastName
      phoneNumber
      emailAddress
      paymentMethod {
        id
        paymentType
        accountNumber
        firstName
        lastName
        expiryDate
        verificationCode
        createdAt
        updatedAt
        __typename
      }
      dateRegistered
      activeStatus
      tripID
      createdAt
      updatedAt
      passengerPaymentMethodId
      __typename
    }
  }
`;
export const deletePassenger = /* GraphQL */ `
  mutation DeletePassenger(
    $input: DeletePassengerInput!
    $condition: ModelPassengerConditionInput
  ) {
    deletePassenger(input: $input, condition: $condition) {
      id
      firstName
      lastName
      phoneNumber
      emailAddress
      paymentMethod {
        id
        paymentType
        accountNumber
        firstName
        lastName
        expiryDate
        verificationCode
        createdAt
        updatedAt
        __typename
      }
      dateRegistered
      activeStatus
      tripID
      createdAt
      updatedAt
      passengerPaymentMethodId
      __typename
    }
  }
`;
export const createPhysicalAddress = /* GraphQL */ `
  mutation CreatePhysicalAddress(
    $input: CreatePhysicalAddressInput!
    $condition: ModelPhysicalAddressConditionInput
  ) {
    createPhysicalAddress(input: $input, condition: $condition) {
      id
      streetName
      unitNumber
      city
      state
      zipCode
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updatePhysicalAddress = /* GraphQL */ `
  mutation UpdatePhysicalAddress(
    $input: UpdatePhysicalAddressInput!
    $condition: ModelPhysicalAddressConditionInput
  ) {
    updatePhysicalAddress(input: $input, condition: $condition) {
      id
      streetName
      unitNumber
      city
      state
      zipCode
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deletePhysicalAddress = /* GraphQL */ `
  mutation DeletePhysicalAddress(
    $input: DeletePhysicalAddressInput!
    $condition: ModelPhysicalAddressConditionInput
  ) {
    deletePhysicalAddress(input: $input, condition: $condition) {
      id
      streetName
      unitNumber
      city
      state
      zipCode
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createAdministrator = /* GraphQL */ `
  mutation CreateAdministrator(
    $input: CreateAdministratorInput!
    $condition: ModelAdministratorConditionInput
  ) {
    createAdministrator(input: $input, condition: $condition) {
      id
      firstName
      lastName
      phoneNumber
      emailAddress
      copyOfId
      homeAddress {
        id
        streetName
        unitNumber
        city
        state
        zipCode
        createdAt
        updatedAt
        __typename
      }
      dateRegistered
      createdAt
      updatedAt
      administratorHomeAddressId
      __typename
    }
  }
`;
export const updateAdministrator = /* GraphQL */ `
  mutation UpdateAdministrator(
    $input: UpdateAdministratorInput!
    $condition: ModelAdministratorConditionInput
  ) {
    updateAdministrator(input: $input, condition: $condition) {
      id
      firstName
      lastName
      phoneNumber
      emailAddress
      copyOfId
      homeAddress {
        id
        streetName
        unitNumber
        city
        state
        zipCode
        createdAt
        updatedAt
        __typename
      }
      dateRegistered
      createdAt
      updatedAt
      administratorHomeAddressId
      __typename
    }
  }
`;
export const deleteAdministrator = /* GraphQL */ `
  mutation DeleteAdministrator(
    $input: DeleteAdministratorInput!
    $condition: ModelAdministratorConditionInput
  ) {
    deleteAdministrator(input: $input, condition: $condition) {
      id
      firstName
      lastName
      phoneNumber
      emailAddress
      copyOfId
      homeAddress {
        id
        streetName
        unitNumber
        city
        state
        zipCode
        createdAt
        updatedAt
        __typename
      }
      dateRegistered
      createdAt
      updatedAt
      administratorHomeAddressId
      __typename
    }
  }
`;
