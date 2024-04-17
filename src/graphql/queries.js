/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPayment = /* GraphQL */ `
  query GetPayment($id: ID!) {
    getPayment(id: $id) {
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
      tripCharge {
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
      driver {
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
      createdAt
      updatedAt
      paymentPassengerId
      paymentTripChargeId
      paymentDriverId
      __typename
    }
  }
`;
export const listPayments = /* GraphQL */ `
  query ListPayments(
    $filter: ModelPaymentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPayments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getDirectDeposit = /* GraphQL */ `
  query GetDirectDeposit($id: ID!) {
    getDirectDeposit(id: $id) {
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
      createdAt
      updatedAt
      directDepositDriverId
      __typename
    }
  }
`;
export const listDirectDeposits = /* GraphQL */ `
  query ListDirectDeposits(
    $filter: ModelDirectDepositFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDirectDeposits(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getVehicleFleet = /* GraphQL */ `
  query GetVehicleFleet($id: ID!) {
    getVehicleFleet(id: $id) {
      id
      fleetTitle
      vehicles {
        items {
          id
          vin
          make
          model
          registrationNum
          registrationState
          vehiclefleetID
          createdAt
          updatedAt
          vehicleDriverId
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
export const listVehicleFleets = /* GraphQL */ `
  query ListVehicleFleets(
    $filter: ModelVehicleFleetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVehicleFleets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getDriverPool = /* GraphQL */ `
  query GetDriverPool($id: ID!) {
    getDriverPool(id: $id) {
      id
      poolName
      drivers {
        items {
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
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listDriverPools = /* GraphQL */ `
  query ListDriverPools(
    $filter: ModelDriverPoolFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDriverPools(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getNotification = /* GraphQL */ `
  query GetNotification($id: ID!) {
    getNotification(id: $id) {
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
export const listNotifications = /* GraphQL */ `
  query ListNotifications(
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotifications(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        event
        message
        time
        target
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getDriverRating = /* GraphQL */ `
  query GetDriverRating($id: ID!) {
    getDriverRating(id: $id) {
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
      passenger {
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
      tripSummary {
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
      createdAt
      updatedAt
      driverRatingDriverId
      driverRatingPassengerId
      driverRatingTripSummaryId
      __typename
    }
  }
`;
export const listDriverRatings = /* GraphQL */ `
  query ListDriverRatings(
    $filter: ModelDriverRatingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDriverRatings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getAdministrator = /* GraphQL */ `
  query GetAdministrator($id: ID!) {
    getAdministrator(id: $id) {
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
export const listAdministrators = /* GraphQL */ `
  query ListAdministrators(
    $filter: ModelAdministratorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAdministrators(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getGeoFence = /* GraphQL */ `
  query GetGeoFence($id: ID!) {
    getGeoFence(id: $id) {
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
export const listGeoFences = /* GraphQL */ `
  query ListGeoFences(
    $filter: ModelGeoFenceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGeoFences(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getDriver = /* GraphQL */ `
  query GetDriver($id: ID!) {
    getDriver(id: $id) {
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
export const listDrivers = /* GraphQL */ `
  query ListDrivers(
    $filter: ModelDriverFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDrivers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const driversByDriverpoolID = /* GraphQL */ `
  query DriversByDriverpoolID(
    $driverpoolID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelDriverFilterInput
    $limit: Int
    $nextToken: String
  ) {
    driversByDriverpoolID(
      driverpoolID: $driverpoolID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getVehicle = /* GraphQL */ `
  query GetVehicle($id: ID!) {
    getVehicle(id: $id) {
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
      createdAt
      updatedAt
      vehicleDriverId
      __typename
    }
  }
`;
export const listVehicles = /* GraphQL */ `
  query ListVehicles(
    $filter: ModelVehicleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVehicles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const vehiclesByVehiclefleetID = /* GraphQL */ `
  query VehiclesByVehiclefleetID(
    $vehiclefleetID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelVehicleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    vehiclesByVehiclefleetID(
      vehiclefleetID: $vehiclefleetID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getPhysicalAddress = /* GraphQL */ `
  query GetPhysicalAddress($id: ID!) {
    getPhysicalAddress(id: $id) {
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
export const listPhysicalAddresses = /* GraphQL */ `
  query ListPhysicalAddresses(
    $filter: ModelPhysicalAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPhysicalAddresses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getTripSummary = /* GraphQL */ `
  query GetTripSummary($id: ID!) {
    getTripSummary(id: $id) {
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
      totalCharge
      createdAt
      updatedAt
      tripSummaryTripPlanId
      __typename
    }
  }
`;
export const listTripSummaries = /* GraphQL */ `
  query ListTripSummaries(
    $filter: ModelTripSummaryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTripSummaries(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getTripCharge = /* GraphQL */ `
  query GetTripCharge($id: ID!) {
    getTripCharge(id: $id) {
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
      tripSummary {
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
      createdAt
      updatedAt
      tripChargePassengerId
      tripChargeTripSummaryId
      __typename
    }
  }
`;
export const listTripCharges = /* GraphQL */ `
  query ListTripCharges(
    $filter: ModelTripChargeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTripCharges(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getTripPlan = /* GraphQL */ `
  query GetTripPlan($id: ID!) {
    getTripPlan(id: $id) {
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
      createdAt
      updatedAt
      tripPlanPassengerId
      __typename
    }
  }
`;
export const listTripPlans = /* GraphQL */ `
  query ListTripPlans(
    $filter: ModelTripPlanFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTripPlans(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getPaymentMethod = /* GraphQL */ `
  query GetPaymentMethod($id: ID!) {
    getPaymentMethod(id: $id) {
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
export const listPaymentMethods = /* GraphQL */ `
  query ListPaymentMethods(
    $filter: ModelPaymentMethodFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPaymentMethods(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getPassenger = /* GraphQL */ `
  query GetPassenger($id: ID!) {
    getPassenger(id: $id) {
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
export const listPassengers = /* GraphQL */ `
  query ListPassengers(
    $filter: ModelPassengerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPassengers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
