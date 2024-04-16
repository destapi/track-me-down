/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateGeoFence = /* GraphQL */ `
  subscription OnCreateGeoFence($filter: ModelSubscriptionGeoFenceFilterInput) {
    onCreateGeoFence(filter: $filter) {
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
export const onUpdateGeoFence = /* GraphQL */ `
  subscription OnUpdateGeoFence($filter: ModelSubscriptionGeoFenceFilterInput) {
    onUpdateGeoFence(filter: $filter) {
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
export const onDeleteGeoFence = /* GraphQL */ `
  subscription OnDeleteGeoFence($filter: ModelSubscriptionGeoFenceFilterInput) {
    onDeleteGeoFence(filter: $filter) {
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
export const onCreateDriverPool = /* GraphQL */ `
  subscription OnCreateDriverPool(
    $filter: ModelSubscriptionDriverPoolFilterInput
  ) {
    onCreateDriverPool(filter: $filter) {
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
export const onUpdateDriverPool = /* GraphQL */ `
  subscription OnUpdateDriverPool(
    $filter: ModelSubscriptionDriverPoolFilterInput
  ) {
    onUpdateDriverPool(filter: $filter) {
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
export const onDeleteDriverPool = /* GraphQL */ `
  subscription OnDeleteDriverPool(
    $filter: ModelSubscriptionDriverPoolFilterInput
  ) {
    onDeleteDriverPool(filter: $filter) {
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
export const onCreateVehicleFleet = /* GraphQL */ `
  subscription OnCreateVehicleFleet(
    $filter: ModelSubscriptionVehicleFleetFilterInput
  ) {
    onCreateVehicleFleet(filter: $filter) {
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
export const onUpdateVehicleFleet = /* GraphQL */ `
  subscription OnUpdateVehicleFleet(
    $filter: ModelSubscriptionVehicleFleetFilterInput
  ) {
    onUpdateVehicleFleet(filter: $filter) {
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
export const onDeleteVehicleFleet = /* GraphQL */ `
  subscription OnDeleteVehicleFleet(
    $filter: ModelSubscriptionVehicleFleetFilterInput
  ) {
    onDeleteVehicleFleet(filter: $filter) {
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
export const onCreateNotification = /* GraphQL */ `
  subscription OnCreateNotification(
    $filter: ModelSubscriptionNotificationFilterInput
  ) {
    onCreateNotification(filter: $filter) {
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
export const onUpdateNotification = /* GraphQL */ `
  subscription OnUpdateNotification(
    $filter: ModelSubscriptionNotificationFilterInput
  ) {
    onUpdateNotification(filter: $filter) {
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
export const onDeleteNotification = /* GraphQL */ `
  subscription OnDeleteNotification(
    $filter: ModelSubscriptionNotificationFilterInput
  ) {
    onDeleteNotification(filter: $filter) {
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
export const onCreateTripFeedback = /* GraphQL */ `
  subscription OnCreateTripFeedback(
    $filter: ModelSubscriptionTripFeedbackFilterInput
  ) {
    onCreateTripFeedback(filter: $filter) {
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
export const onUpdateTripFeedback = /* GraphQL */ `
  subscription OnUpdateTripFeedback(
    $filter: ModelSubscriptionTripFeedbackFilterInput
  ) {
    onUpdateTripFeedback(filter: $filter) {
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
export const onDeleteTripFeedback = /* GraphQL */ `
  subscription OnDeleteTripFeedback(
    $filter: ModelSubscriptionTripFeedbackFilterInput
  ) {
    onDeleteTripFeedback(filter: $filter) {
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
export const onCreateDriverRating = /* GraphQL */ `
  subscription OnCreateDriverRating(
    $filter: ModelSubscriptionDriverRatingFilterInput
  ) {
    onCreateDriverRating(filter: $filter) {
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
export const onUpdateDriverRating = /* GraphQL */ `
  subscription OnUpdateDriverRating(
    $filter: ModelSubscriptionDriverRatingFilterInput
  ) {
    onUpdateDriverRating(filter: $filter) {
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
export const onDeleteDriverRating = /* GraphQL */ `
  subscription OnDeleteDriverRating(
    $filter: ModelSubscriptionDriverRatingFilterInput
  ) {
    onDeleteDriverRating(filter: $filter) {
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
export const onCreatePayment = /* GraphQL */ `
  subscription OnCreatePayment($filter: ModelSubscriptionPaymentFilterInput) {
    onCreatePayment(filter: $filter) {
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
export const onUpdatePayment = /* GraphQL */ `
  subscription OnUpdatePayment($filter: ModelSubscriptionPaymentFilterInput) {
    onUpdatePayment(filter: $filter) {
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
export const onDeletePayment = /* GraphQL */ `
  subscription OnDeletePayment($filter: ModelSubscriptionPaymentFilterInput) {
    onDeletePayment(filter: $filter) {
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
export const onCreateTrip = /* GraphQL */ `
  subscription OnCreateTrip($filter: ModelSubscriptionTripFilterInput) {
    onCreateTrip(filter: $filter) {
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
export const onUpdateTrip = /* GraphQL */ `
  subscription OnUpdateTrip($filter: ModelSubscriptionTripFilterInput) {
    onUpdateTrip(filter: $filter) {
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
export const onDeleteTrip = /* GraphQL */ `
  subscription OnDeleteTrip($filter: ModelSubscriptionTripFilterInput) {
    onDeleteTrip(filter: $filter) {
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
export const onCreateDirectDeposit = /* GraphQL */ `
  subscription OnCreateDirectDeposit(
    $filter: ModelSubscriptionDirectDepositFilterInput
  ) {
    onCreateDirectDeposit(filter: $filter) {
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
export const onUpdateDirectDeposit = /* GraphQL */ `
  subscription OnUpdateDirectDeposit(
    $filter: ModelSubscriptionDirectDepositFilterInput
  ) {
    onUpdateDirectDeposit(filter: $filter) {
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
export const onDeleteDirectDeposit = /* GraphQL */ `
  subscription OnDeleteDirectDeposit(
    $filter: ModelSubscriptionDirectDepositFilterInput
  ) {
    onDeleteDirectDeposit(filter: $filter) {
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
export const onCreateDriver = /* GraphQL */ `
  subscription OnCreateDriver($filter: ModelSubscriptionDriverFilterInput) {
    onCreateDriver(filter: $filter) {
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
export const onUpdateDriver = /* GraphQL */ `
  subscription OnUpdateDriver($filter: ModelSubscriptionDriverFilterInput) {
    onUpdateDriver(filter: $filter) {
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
export const onDeleteDriver = /* GraphQL */ `
  subscription OnDeleteDriver($filter: ModelSubscriptionDriverFilterInput) {
    onDeleteDriver(filter: $filter) {
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
export const onCreateVehicle = /* GraphQL */ `
  subscription OnCreateVehicle($filter: ModelSubscriptionVehicleFilterInput) {
    onCreateVehicle(filter: $filter) {
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
export const onUpdateVehicle = /* GraphQL */ `
  subscription OnUpdateVehicle($filter: ModelSubscriptionVehicleFilterInput) {
    onUpdateVehicle(filter: $filter) {
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
export const onDeleteVehicle = /* GraphQL */ `
  subscription OnDeleteVehicle($filter: ModelSubscriptionVehicleFilterInput) {
    onDeleteVehicle(filter: $filter) {
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
export const onCreatePaymentMethod = /* GraphQL */ `
  subscription OnCreatePaymentMethod(
    $filter: ModelSubscriptionPaymentMethodFilterInput
  ) {
    onCreatePaymentMethod(filter: $filter) {
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
export const onUpdatePaymentMethod = /* GraphQL */ `
  subscription OnUpdatePaymentMethod(
    $filter: ModelSubscriptionPaymentMethodFilterInput
  ) {
    onUpdatePaymentMethod(filter: $filter) {
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
export const onDeletePaymentMethod = /* GraphQL */ `
  subscription OnDeletePaymentMethod(
    $filter: ModelSubscriptionPaymentMethodFilterInput
  ) {
    onDeletePaymentMethod(filter: $filter) {
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
export const onCreatePassenger = /* GraphQL */ `
  subscription OnCreatePassenger(
    $filter: ModelSubscriptionPassengerFilterInput
  ) {
    onCreatePassenger(filter: $filter) {
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
export const onUpdatePassenger = /* GraphQL */ `
  subscription OnUpdatePassenger(
    $filter: ModelSubscriptionPassengerFilterInput
  ) {
    onUpdatePassenger(filter: $filter) {
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
export const onDeletePassenger = /* GraphQL */ `
  subscription OnDeletePassenger(
    $filter: ModelSubscriptionPassengerFilterInput
  ) {
    onDeletePassenger(filter: $filter) {
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
export const onCreatePhysicalAddress = /* GraphQL */ `
  subscription OnCreatePhysicalAddress(
    $filter: ModelSubscriptionPhysicalAddressFilterInput
  ) {
    onCreatePhysicalAddress(filter: $filter) {
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
export const onUpdatePhysicalAddress = /* GraphQL */ `
  subscription OnUpdatePhysicalAddress(
    $filter: ModelSubscriptionPhysicalAddressFilterInput
  ) {
    onUpdatePhysicalAddress(filter: $filter) {
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
export const onDeletePhysicalAddress = /* GraphQL */ `
  subscription OnDeletePhysicalAddress(
    $filter: ModelSubscriptionPhysicalAddressFilterInput
  ) {
    onDeletePhysicalAddress(filter: $filter) {
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
export const onCreateAdministrator = /* GraphQL */ `
  subscription OnCreateAdministrator(
    $filter: ModelSubscriptionAdministratorFilterInput
  ) {
    onCreateAdministrator(filter: $filter) {
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
export const onUpdateAdministrator = /* GraphQL */ `
  subscription OnUpdateAdministrator(
    $filter: ModelSubscriptionAdministratorFilterInput
  ) {
    onUpdateAdministrator(filter: $filter) {
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
export const onDeleteAdministrator = /* GraphQL */ `
  subscription OnDeleteAdministrator(
    $filter: ModelSubscriptionAdministratorFilterInput
  ) {
    onDeleteAdministrator(filter: $filter) {
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
