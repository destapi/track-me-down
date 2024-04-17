/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPayment = /* GraphQL */ `
  mutation CreatePayment(
    $input: CreatePaymentInput!
    $condition: ModelPaymentConditionInput
  ) {
    createPayment(input: $input, condition: $condition) {
      id
      totalAmount
      datePaid
      passenger {
        id
        firstName
        lastName
        phoneNumber
        emailAddress
        dateRegistered
        activeStatus
        createdAt
        updatedAt
        passengerPaymentMethodId
        __typename
      }
      tripCharge {
        id
        cost
        tip
        createdAt
        updatedAt
        tripChargePassengerId
        tripChargeTripSummaryId
        __typename
      }
      driver {
        id
        firstName
        lastName
        ssn
        dob
        phoneNumber
        emailAddress
        earningTier
        registrationDate
        activeStatus
        driverpoolID
        createdAt
        updatedAt
        driverHomeAddressId
        __typename
      }
      createdAt
      updatedAt
      paymentPassengerId
      paymentTripChargeId
      paymentDriverId
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
      totalAmount
      datePaid
      passenger {
        id
        firstName
        lastName
        phoneNumber
        emailAddress
        dateRegistered
        activeStatus
        createdAt
        updatedAt
        passengerPaymentMethodId
        __typename
      }
      tripCharge {
        id
        cost
        tip
        createdAt
        updatedAt
        tripChargePassengerId
        tripChargeTripSummaryId
        __typename
      }
      driver {
        id
        firstName
        lastName
        ssn
        dob
        phoneNumber
        emailAddress
        earningTier
        registrationDate
        activeStatus
        driverpoolID
        createdAt
        updatedAt
        driverHomeAddressId
        __typename
      }
      createdAt
      updatedAt
      paymentPassengerId
      paymentTripChargeId
      paymentDriverId
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
      totalAmount
      datePaid
      passenger {
        id
        firstName
        lastName
        phoneNumber
        emailAddress
        dateRegistered
        activeStatus
        createdAt
        updatedAt
        passengerPaymentMethodId
        __typename
      }
      tripCharge {
        id
        cost
        tip
        createdAt
        updatedAt
        tripChargePassengerId
        tripChargeTripSummaryId
        __typename
      }
      driver {
        id
        firstName
        lastName
        ssn
        dob
        phoneNumber
        emailAddress
        earningTier
        registrationDate
        activeStatus
        driverpoolID
        createdAt
        updatedAt
        driverHomeAddressId
        __typename
      }
      createdAt
      updatedAt
      paymentPassengerId
      paymentTripChargeId
      paymentDriverId
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
      routingNumber
      accountNumber
      amountDesignated
      percentageDesignated
      driver {
        id
        firstName
        lastName
        ssn
        dob
        phoneNumber
        emailAddress
        earningTier
        registrationDate
        activeStatus
        driverpoolID
        createdAt
        updatedAt
        driverHomeAddressId
        __typename
      }
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
      routingNumber
      accountNumber
      amountDesignated
      percentageDesignated
      driver {
        id
        firstName
        lastName
        ssn
        dob
        phoneNumber
        emailAddress
        earningTier
        registrationDate
        activeStatus
        driverpoolID
        createdAt
        updatedAt
        driverHomeAddressId
        __typename
      }
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
      routingNumber
      accountNumber
      amountDesignated
      percentageDesignated
      driver {
        id
        firstName
        lastName
        ssn
        dob
        phoneNumber
        emailAddress
        earningTier
        registrationDate
        activeStatus
        driverpoolID
        createdAt
        updatedAt
        driverHomeAddressId
        __typename
      }
      createdAt
      updatedAt
      directDepositDriverId
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
        nextToken
        __typename
      }
      createdAt
      updatedAt
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
      poolName
      drivers {
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
      poolName
      drivers {
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
      poolName
      drivers {
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
      time
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
      time
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
      time
      target
      createdAt
      updatedAt
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
      safety {
        min
        max
        __typename
      }
      courtesy {
        min
        max
        __typename
      }
      satisfaction
      comments
      driver {
        id
        firstName
        lastName
        ssn
        dob
        phoneNumber
        emailAddress
        earningTier
        registrationDate
        activeStatus
        driverpoolID
        createdAt
        updatedAt
        driverHomeAddressId
        __typename
      }
      passenger {
        id
        firstName
        lastName
        phoneNumber
        emailAddress
        dateRegistered
        activeStatus
        createdAt
        updatedAt
        passengerPaymentMethodId
        __typename
      }
      tripSummary {
        id
        totalDistance
        cancellationCharge
        tripStatus
        timeCompleted
        totalCharge
        createdAt
        updatedAt
        tripSummaryTripPlanId
        __typename
      }
      createdAt
      updatedAt
      driverRatingDriverId
      driverRatingPassengerId
      driverRatingTripSummaryId
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
      safety {
        min
        max
        __typename
      }
      courtesy {
        min
        max
        __typename
      }
      satisfaction
      comments
      driver {
        id
        firstName
        lastName
        ssn
        dob
        phoneNumber
        emailAddress
        earningTier
        registrationDate
        activeStatus
        driverpoolID
        createdAt
        updatedAt
        driverHomeAddressId
        __typename
      }
      passenger {
        id
        firstName
        lastName
        phoneNumber
        emailAddress
        dateRegistered
        activeStatus
        createdAt
        updatedAt
        passengerPaymentMethodId
        __typename
      }
      tripSummary {
        id
        totalDistance
        cancellationCharge
        tripStatus
        timeCompleted
        totalCharge
        createdAt
        updatedAt
        tripSummaryTripPlanId
        __typename
      }
      createdAt
      updatedAt
      driverRatingDriverId
      driverRatingPassengerId
      driverRatingTripSummaryId
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
      safety {
        min
        max
        __typename
      }
      courtesy {
        min
        max
        __typename
      }
      satisfaction
      comments
      driver {
        id
        firstName
        lastName
        ssn
        dob
        phoneNumber
        emailAddress
        earningTier
        registrationDate
        activeStatus
        driverpoolID
        createdAt
        updatedAt
        driverHomeAddressId
        __typename
      }
      passenger {
        id
        firstName
        lastName
        phoneNumber
        emailAddress
        dateRegistered
        activeStatus
        createdAt
        updatedAt
        passengerPaymentMethodId
        __typename
      }
      tripSummary {
        id
        totalDistance
        cancellationCharge
        tripStatus
        timeCompleted
        totalCharge
        createdAt
        updatedAt
        tripSummaryTripPlanId
        __typename
      }
      createdAt
      updatedAt
      driverRatingDriverId
      driverRatingPassengerId
      driverRatingTripSummaryId
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
      copyOfId {
        name
        path
        type
        __typename
      }
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
      copyOfId {
        name
        path
        type
        __typename
      }
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
      copyOfId {
        name
        path
        type
        __typename
      }
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
      validDuration {
        min
        max
        __typename
      }
      createdAt
      updatedAt
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
      validDuration {
        min
        max
        __typename
      }
      createdAt
      updatedAt
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
      validDuration {
        min
        max
        __typename
      }
      createdAt
      updatedAt
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
      dLCopy {
        name
        path
        type
        __typename
      }
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
      registrationDate
      activeStatus
      driverpoolID
      createdAt
      updatedAt
      driverHomeAddressId
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
      dLCopy {
        name
        path
        type
        __typename
      }
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
      registrationDate
      activeStatus
      driverpoolID
      createdAt
      updatedAt
      driverHomeAddressId
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
      dLCopy {
        name
        path
        type
        __typename
      }
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
      registrationDate
      activeStatus
      driverpoolID
      createdAt
      updatedAt
      driverHomeAddressId
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
      year {
        min
        max
        __typename
      }
      registrationNum
      registrationState
      registrationDocs {
        name
        path
        type
        __typename
      }
      insuranceProof {
        name
        path
        type
        __typename
      }
      vehiclefleetID
      driver {
        id
        firstName
        lastName
        ssn
        dob
        phoneNumber
        emailAddress
        earningTier
        registrationDate
        activeStatus
        driverpoolID
        createdAt
        updatedAt
        driverHomeAddressId
        __typename
      }
      createdAt
      updatedAt
      vehicleDriverId
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
      year {
        min
        max
        __typename
      }
      registrationNum
      registrationState
      registrationDocs {
        name
        path
        type
        __typename
      }
      insuranceProof {
        name
        path
        type
        __typename
      }
      vehiclefleetID
      driver {
        id
        firstName
        lastName
        ssn
        dob
        phoneNumber
        emailAddress
        earningTier
        registrationDate
        activeStatus
        driverpoolID
        createdAt
        updatedAt
        driverHomeAddressId
        __typename
      }
      createdAt
      updatedAt
      vehicleDriverId
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
      year {
        min
        max
        __typename
      }
      registrationNum
      registrationState
      registrationDocs {
        name
        path
        type
        __typename
      }
      insuranceProof {
        name
        path
        type
        __typename
      }
      vehiclefleetID
      driver {
        id
        firstName
        lastName
        ssn
        dob
        phoneNumber
        emailAddress
        earningTier
        registrationDate
        activeStatus
        driverpoolID
        createdAt
        updatedAt
        driverHomeAddressId
        __typename
      }
      createdAt
      updatedAt
      vehicleDriverId
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
export const createTripSummary = /* GraphQL */ `
  mutation CreateTripSummary(
    $input: CreateTripSummaryInput!
    $condition: ModelTripSummaryConditionInput
  ) {
    createTripSummary(input: $input, condition: $condition) {
      id
      pathTravelled {
        longitude
        latitude
        __typename
      }
      totalDistance
      cancellationCharge
      tripStatus
      timeCompleted
      tripPlan {
        id
        pickUpTime
        urgency
        createdAt
        updatedAt
        tripPlanPassengerId
        __typename
      }
      totalCharge
      createdAt
      updatedAt
      tripSummaryTripPlanId
      __typename
    }
  }
`;
export const updateTripSummary = /* GraphQL */ `
  mutation UpdateTripSummary(
    $input: UpdateTripSummaryInput!
    $condition: ModelTripSummaryConditionInput
  ) {
    updateTripSummary(input: $input, condition: $condition) {
      id
      pathTravelled {
        longitude
        latitude
        __typename
      }
      totalDistance
      cancellationCharge
      tripStatus
      timeCompleted
      tripPlan {
        id
        pickUpTime
        urgency
        createdAt
        updatedAt
        tripPlanPassengerId
        __typename
      }
      totalCharge
      createdAt
      updatedAt
      tripSummaryTripPlanId
      __typename
    }
  }
`;
export const deleteTripSummary = /* GraphQL */ `
  mutation DeleteTripSummary(
    $input: DeleteTripSummaryInput!
    $condition: ModelTripSummaryConditionInput
  ) {
    deleteTripSummary(input: $input, condition: $condition) {
      id
      pathTravelled {
        longitude
        latitude
        __typename
      }
      totalDistance
      cancellationCharge
      tripStatus
      timeCompleted
      tripPlan {
        id
        pickUpTime
        urgency
        createdAt
        updatedAt
        tripPlanPassengerId
        __typename
      }
      totalCharge
      createdAt
      updatedAt
      tripSummaryTripPlanId
      __typename
    }
  }
`;
export const createTripCharge = /* GraphQL */ `
  mutation CreateTripCharge(
    $input: CreateTripChargeInput!
    $condition: ModelTripChargeConditionInput
  ) {
    createTripCharge(input: $input, condition: $condition) {
      id
      cost
      tip
      passenger {
        id
        firstName
        lastName
        phoneNumber
        emailAddress
        dateRegistered
        activeStatus
        createdAt
        updatedAt
        passengerPaymentMethodId
        __typename
      }
      tripSummary {
        id
        totalDistance
        cancellationCharge
        tripStatus
        timeCompleted
        totalCharge
        createdAt
        updatedAt
        tripSummaryTripPlanId
        __typename
      }
      createdAt
      updatedAt
      tripChargePassengerId
      tripChargeTripSummaryId
      __typename
    }
  }
`;
export const updateTripCharge = /* GraphQL */ `
  mutation UpdateTripCharge(
    $input: UpdateTripChargeInput!
    $condition: ModelTripChargeConditionInput
  ) {
    updateTripCharge(input: $input, condition: $condition) {
      id
      cost
      tip
      passenger {
        id
        firstName
        lastName
        phoneNumber
        emailAddress
        dateRegistered
        activeStatus
        createdAt
        updatedAt
        passengerPaymentMethodId
        __typename
      }
      tripSummary {
        id
        totalDistance
        cancellationCharge
        tripStatus
        timeCompleted
        totalCharge
        createdAt
        updatedAt
        tripSummaryTripPlanId
        __typename
      }
      createdAt
      updatedAt
      tripChargePassengerId
      tripChargeTripSummaryId
      __typename
    }
  }
`;
export const deleteTripCharge = /* GraphQL */ `
  mutation DeleteTripCharge(
    $input: DeleteTripChargeInput!
    $condition: ModelTripChargeConditionInput
  ) {
    deleteTripCharge(input: $input, condition: $condition) {
      id
      cost
      tip
      passenger {
        id
        firstName
        lastName
        phoneNumber
        emailAddress
        dateRegistered
        activeStatus
        createdAt
        updatedAt
        passengerPaymentMethodId
        __typename
      }
      tripSummary {
        id
        totalDistance
        cancellationCharge
        tripStatus
        timeCompleted
        totalCharge
        createdAt
        updatedAt
        tripSummaryTripPlanId
        __typename
      }
      createdAt
      updatedAt
      tripChargePassengerId
      tripChargeTripSummaryId
      __typename
    }
  }
`;
export const createTripPlan = /* GraphQL */ `
  mutation CreateTripPlan(
    $input: CreateTripPlanInput!
    $condition: ModelTripPlanConditionInput
  ) {
    createTripPlan(input: $input, condition: $condition) {
      id
      pickUpTime
      pickUpLocation {
        longitude
        latitude
        __typename
      }
      dropOffLocation {
        longitude
        latitude
        __typename
      }
      urgency
      passenger {
        id
        firstName
        lastName
        phoneNumber
        emailAddress
        dateRegistered
        activeStatus
        createdAt
        updatedAt
        passengerPaymentMethodId
        __typename
      }
      createdAt
      updatedAt
      tripPlanPassengerId
      __typename
    }
  }
`;
export const updateTripPlan = /* GraphQL */ `
  mutation UpdateTripPlan(
    $input: UpdateTripPlanInput!
    $condition: ModelTripPlanConditionInput
  ) {
    updateTripPlan(input: $input, condition: $condition) {
      id
      pickUpTime
      pickUpLocation {
        longitude
        latitude
        __typename
      }
      dropOffLocation {
        longitude
        latitude
        __typename
      }
      urgency
      passenger {
        id
        firstName
        lastName
        phoneNumber
        emailAddress
        dateRegistered
        activeStatus
        createdAt
        updatedAt
        passengerPaymentMethodId
        __typename
      }
      createdAt
      updatedAt
      tripPlanPassengerId
      __typename
    }
  }
`;
export const deleteTripPlan = /* GraphQL */ `
  mutation DeleteTripPlan(
    $input: DeleteTripPlanInput!
    $condition: ModelTripPlanConditionInput
  ) {
    deleteTripPlan(input: $input, condition: $condition) {
      id
      pickUpTime
      pickUpLocation {
        longitude
        latitude
        __typename
      }
      dropOffLocation {
        longitude
        latitude
        __typename
      }
      urgency
      passenger {
        id
        firstName
        lastName
        phoneNumber
        emailAddress
        dateRegistered
        activeStatus
        createdAt
        updatedAt
        passengerPaymentMethodId
        __typename
      }
      createdAt
      updatedAt
      tripPlanPassengerId
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
      dateRegistered
      activeStatus
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
      dateRegistered
      activeStatus
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
      dateRegistered
      activeStatus
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
      passengerPaymentMethodId
      __typename
    }
  }
`;
