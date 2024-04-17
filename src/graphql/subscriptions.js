/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePayment = /* GraphQL */ `
  subscription OnCreatePayment($filter: ModelSubscriptionPaymentFilterInput) {
    onCreatePayment(filter: $filter) {
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
export const onUpdatePayment = /* GraphQL */ `
  subscription OnUpdatePayment($filter: ModelSubscriptionPaymentFilterInput) {
    onUpdatePayment(filter: $filter) {
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
export const onDeletePayment = /* GraphQL */ `
  subscription OnDeletePayment($filter: ModelSubscriptionPaymentFilterInput) {
    onDeletePayment(filter: $filter) {
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
export const onCreateDirectDeposit = /* GraphQL */ `
  subscription OnCreateDirectDeposit(
    $filter: ModelSubscriptionDirectDepositFilterInput
  ) {
    onCreateDirectDeposit(filter: $filter) {
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
export const onUpdateDirectDeposit = /* GraphQL */ `
  subscription OnUpdateDirectDeposit(
    $filter: ModelSubscriptionDirectDepositFilterInput
  ) {
    onUpdateDirectDeposit(filter: $filter) {
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
export const onDeleteDirectDeposit = /* GraphQL */ `
  subscription OnDeleteDirectDeposit(
    $filter: ModelSubscriptionDirectDepositFilterInput
  ) {
    onDeleteDirectDeposit(filter: $filter) {
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
export const onCreateVehicleFleet = /* GraphQL */ `
  subscription OnCreateVehicleFleet(
    $filter: ModelSubscriptionVehicleFleetFilterInput
  ) {
    onCreateVehicleFleet(filter: $filter) {
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
export const onUpdateVehicleFleet = /* GraphQL */ `
  subscription OnUpdateVehicleFleet(
    $filter: ModelSubscriptionVehicleFleetFilterInput
  ) {
    onUpdateVehicleFleet(filter: $filter) {
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
export const onDeleteVehicleFleet = /* GraphQL */ `
  subscription OnDeleteVehicleFleet(
    $filter: ModelSubscriptionVehicleFleetFilterInput
  ) {
    onDeleteVehicleFleet(filter: $filter) {
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
export const onCreateDriverPool = /* GraphQL */ `
  subscription OnCreateDriverPool(
    $filter: ModelSubscriptionDriverPoolFilterInput
  ) {
    onCreateDriverPool(filter: $filter) {
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
export const onUpdateDriverPool = /* GraphQL */ `
  subscription OnUpdateDriverPool(
    $filter: ModelSubscriptionDriverPoolFilterInput
  ) {
    onUpdateDriverPool(filter: $filter) {
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
export const onDeleteDriverPool = /* GraphQL */ `
  subscription OnDeleteDriverPool(
    $filter: ModelSubscriptionDriverPoolFilterInput
  ) {
    onDeleteDriverPool(filter: $filter) {
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
export const onCreateNotification = /* GraphQL */ `
  subscription OnCreateNotification(
    $filter: ModelSubscriptionNotificationFilterInput
  ) {
    onCreateNotification(filter: $filter) {
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
export const onUpdateNotification = /* GraphQL */ `
  subscription OnUpdateNotification(
    $filter: ModelSubscriptionNotificationFilterInput
  ) {
    onUpdateNotification(filter: $filter) {
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
export const onDeleteNotification = /* GraphQL */ `
  subscription OnDeleteNotification(
    $filter: ModelSubscriptionNotificationFilterInput
  ) {
    onDeleteNotification(filter: $filter) {
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
export const onCreateDriverRating = /* GraphQL */ `
  subscription OnCreateDriverRating(
    $filter: ModelSubscriptionDriverRatingFilterInput
  ) {
    onCreateDriverRating(filter: $filter) {
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
export const onUpdateDriverRating = /* GraphQL */ `
  subscription OnUpdateDriverRating(
    $filter: ModelSubscriptionDriverRatingFilterInput
  ) {
    onUpdateDriverRating(filter: $filter) {
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
export const onDeleteDriverRating = /* GraphQL */ `
  subscription OnDeleteDriverRating(
    $filter: ModelSubscriptionDriverRatingFilterInput
  ) {
    onDeleteDriverRating(filter: $filter) {
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
export const onCreateGeoFence = /* GraphQL */ `
  subscription OnCreateGeoFence($filter: ModelSubscriptionGeoFenceFilterInput) {
    onCreateGeoFence(filter: $filter) {
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
export const onUpdateGeoFence = /* GraphQL */ `
  subscription OnUpdateGeoFence($filter: ModelSubscriptionGeoFenceFilterInput) {
    onUpdateGeoFence(filter: $filter) {
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
export const onDeleteGeoFence = /* GraphQL */ `
  subscription OnDeleteGeoFence($filter: ModelSubscriptionGeoFenceFilterInput) {
    onDeleteGeoFence(filter: $filter) {
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
export const onCreateDriver = /* GraphQL */ `
  subscription OnCreateDriver($filter: ModelSubscriptionDriverFilterInput) {
    onCreateDriver(filter: $filter) {
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
export const onUpdateDriver = /* GraphQL */ `
  subscription OnUpdateDriver($filter: ModelSubscriptionDriverFilterInput) {
    onUpdateDriver(filter: $filter) {
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
export const onDeleteDriver = /* GraphQL */ `
  subscription OnDeleteDriver($filter: ModelSubscriptionDriverFilterInput) {
    onDeleteDriver(filter: $filter) {
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
export const onCreateVehicle = /* GraphQL */ `
  subscription OnCreateVehicle($filter: ModelSubscriptionVehicleFilterInput) {
    onCreateVehicle(filter: $filter) {
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
export const onUpdateVehicle = /* GraphQL */ `
  subscription OnUpdateVehicle($filter: ModelSubscriptionVehicleFilterInput) {
    onUpdateVehicle(filter: $filter) {
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
export const onDeleteVehicle = /* GraphQL */ `
  subscription OnDeleteVehicle($filter: ModelSubscriptionVehicleFilterInput) {
    onDeleteVehicle(filter: $filter) {
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
export const onCreateTripSummary = /* GraphQL */ `
  subscription OnCreateTripSummary(
    $filter: ModelSubscriptionTripSummaryFilterInput
  ) {
    onCreateTripSummary(filter: $filter) {
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
export const onUpdateTripSummary = /* GraphQL */ `
  subscription OnUpdateTripSummary(
    $filter: ModelSubscriptionTripSummaryFilterInput
  ) {
    onUpdateTripSummary(filter: $filter) {
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
export const onDeleteTripSummary = /* GraphQL */ `
  subscription OnDeleteTripSummary(
    $filter: ModelSubscriptionTripSummaryFilterInput
  ) {
    onDeleteTripSummary(filter: $filter) {
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
export const onCreateTripCharge = /* GraphQL */ `
  subscription OnCreateTripCharge(
    $filter: ModelSubscriptionTripChargeFilterInput
  ) {
    onCreateTripCharge(filter: $filter) {
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
export const onUpdateTripCharge = /* GraphQL */ `
  subscription OnUpdateTripCharge(
    $filter: ModelSubscriptionTripChargeFilterInput
  ) {
    onUpdateTripCharge(filter: $filter) {
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
export const onDeleteTripCharge = /* GraphQL */ `
  subscription OnDeleteTripCharge(
    $filter: ModelSubscriptionTripChargeFilterInput
  ) {
    onDeleteTripCharge(filter: $filter) {
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
export const onCreateTripPlan = /* GraphQL */ `
  subscription OnCreateTripPlan($filter: ModelSubscriptionTripPlanFilterInput) {
    onCreateTripPlan(filter: $filter) {
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
export const onUpdateTripPlan = /* GraphQL */ `
  subscription OnUpdateTripPlan($filter: ModelSubscriptionTripPlanFilterInput) {
    onUpdateTripPlan(filter: $filter) {
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
export const onDeleteTripPlan = /* GraphQL */ `
  subscription OnDeleteTripPlan($filter: ModelSubscriptionTripPlanFilterInput) {
    onDeleteTripPlan(filter: $filter) {
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
