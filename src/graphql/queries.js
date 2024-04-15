/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGeoFence = /* GraphQL */ `
  query GetGeoFence($id: ID!) {
    getGeoFence(id: $id) {
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
        validDuration
        createdBy {
          id
          firstName
          lastName
          phoneNumber
          emailAddress
          copyOfId
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
      nextToken
      __typename
    }
  }
`;
export const getDriverPool = /* GraphQL */ `
  query GetDriverPool($id: ID!) {
    getDriverPool(id: $id) {
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
export const listDriverPools = /* GraphQL */ `
  query ListDriverPools(
    $filter: ModelDriverPoolFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDriverPools(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        poolTitle
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
export const getNotification = /* GraphQL */ `
  query GetNotification($id: ID!) {
    getNotification(id: $id) {
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
        eventTime
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
export const getTripFeedback = /* GraphQL */ `
  query GetTripFeedback($id: ID!) {
    getTripFeedback(id: $id) {
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
export const listTripFeedbacks = /* GraphQL */ `
  query ListTripFeedbacks(
    $filter: ModelTripFeedbackFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTripFeedbacks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        trip {
          id
          distance
          tripCharge
          cancellationCharge
          status
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
      nextToken
      __typename
    }
  }
`;
export const getDriverRating = /* GraphQL */ `
  query GetDriverRating($id: ID!) {
    getDriverRating(id: $id) {
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
export const listDriverRatings = /* GraphQL */ `
  query ListDriverRatings(
    $filter: ModelDriverRatingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDriverRatings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        passenger {
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
        trip {
          id
          distance
          tripCharge
          cancellationCharge
          status
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
      nextToken
      __typename
    }
  }
`;
export const getPayment = /* GraphQL */ `
  query GetPayment($id: ID!) {
    getPayment(id: $id) {
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
export const listPayments = /* GraphQL */ `
  query ListPayments(
    $filter: ModelPaymentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPayments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        passenger {
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
        trip {
          id
          distance
          tripCharge
          cancellationCharge
          status
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
      nextToken
      __typename
    }
  }
`;
export const getTrip = /* GraphQL */ `
  query GetTrip($id: ID!) {
    getTrip(id: $id) {
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
export const listTrips = /* GraphQL */ `
  query ListTrips(
    $filter: ModelTripFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTrips(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getDirectDeposit = /* GraphQL */ `
  query GetDirectDeposit($id: ID!) {
    getDirectDeposit(id: $id) {
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
export const listDirectDeposits = /* GraphQL */ `
  query ListDirectDeposits(
    $filter: ModelDirectDepositFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDirectDeposits(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        routingNumber
        accountNumber
        amountDesignated
        percentageDesignated
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
export const getDriver = /* GraphQL */ `
  query GetDriver($id: ID!) {
    getDriver(id: $id) {
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
      nextToken
      __typename
    }
  }
`;
export const passengersByTripID = /* GraphQL */ `
  query PassengersByTripID(
    $tripID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPassengerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    passengersByTripID(
      tripID: $tripID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
export const getAdministrator = /* GraphQL */ `
  query GetAdministrator($id: ID!) {
    getAdministrator(id: $id) {
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
      nextToken
      __typename
    }
  }
`;
