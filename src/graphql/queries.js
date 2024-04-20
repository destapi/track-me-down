/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPayment = /* GraphQL */ `
  query GetPayment($id: ID!) {
    getPayment(id: $id) {
      id
      created_at
      passenger {
        id
        created_at
        first_name
        last_name
        email_address
        phone_number
        payment_method {
          id
          created_at
          payment_type
          first_name
          last_name
          account_number
          verification_pin
          createdAt
          updatedAt
          __typename
        }
        active_status
        createdAt
        updatedAt
        passengerPayment_methodId
        __typename
      }
      trip_charge
      total_amount
      payment_time
      createdAt
      updatedAt
      paymentPassengerId
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
        created_at
        passenger {
          id
          created_at
          first_name
          last_name
          email_address
          phone_number
          payment_method {
            id
            created_at
            payment_type
            first_name
            last_name
            account_number
            verification_pin
            createdAt
            updatedAt
            __typename
          }
          active_status
          createdAt
          updatedAt
          passengerPayment_methodId
          __typename
        }
        trip_charge
        total_amount
        payment_time
        createdAt
        updatedAt
        paymentPassengerId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTripRating = /* GraphQL */ `
  query GetTripRating($id: ID!) {
    getTripRating(id: $id) {
      id
      created_at
      trip_charge
      comments
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
      safe_driving {
        min
        max
        __typename
      }
      courtesy {
        min
        max
        __typename
      }
      overall_service {
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
export const listTripRatings = /* GraphQL */ `
  query ListTripRatings(
    $filter: ModelTripRatingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTripRatings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        created_at
        trip_charge
        comments
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
        safe_driving {
          min
          max
          __typename
        }
        courtesy {
          min
          max
          __typename
        }
        overall_service {
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
export const getTripCharge = /* GraphQL */ `
  query GetTripCharge($id: ID!) {
    getTripCharge(id: $id) {
      id
      created_at
      amount_charged
      tip_applied
      passenger {
        id
        created_at
        first_name
        last_name
        email_address
        phone_number
        payment_method {
          id
          created_at
          payment_type
          first_name
          last_name
          account_number
          verification_pin
          createdAt
          updatedAt
          __typename
        }
        active_status
        createdAt
        updatedAt
        passengerPayment_methodId
        __typename
      }
      trip_summary {
        id
        created_at
        path_travelled {
          longitude
          latitude
          __typename
        }
        cancellation_charge
        trip_status
        trip_cost
        pickup_time
        driver {
          id
          created_at
          first_name
          last_name
          email_address
          phone_number
          home_address {
            id
            created_at
            street_name
            unit_num
            city
            state
            zip_code
            createdAt
            updatedAt
            __typename
          }
          earning_tier
          license_copy {
            name
            url
            baseDir
            __typename
          }
          vehicle {
            id
            created_at
            vin
            make
            year
            registration_plate
            createdAt
            updatedAt
            vehicleFleet_idId
            __typename
          }
          active_status
          pool_id {
            id
            created_at
            title
            descriptiopn
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          driverHome_addressId
          driverVehicleId
          driverPool_idId
          __typename
        }
        trip_plan {
          id
          created_at
          pickup_time
          pickup_urgency
          pickup_location {
            longitude
            latitude
            __typename
          }
          dropoff_location {
            longitude
            latitude
            __typename
          }
          passenger {
            id
            created_at
            first_name
            last_name
            email_address
            phone_number
            active_status
            createdAt
            updatedAt
            passengerPayment_methodId
            __typename
          }
          num_of_riders
          createdAt
          updatedAt
          tripPlanPassengerId
          __typename
        }
        dropoff_time
        total_distance
        createdAt
        updatedAt
        tripSummaryDriverId
        tripSummaryTrip_planId
        __typename
      }
      createdAt
      updatedAt
      tripChargePassengerId
      tripChargeTrip_summaryId
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
        created_at
        amount_charged
        tip_applied
        passenger {
          id
          created_at
          first_name
          last_name
          email_address
          phone_number
          payment_method {
            id
            created_at
            payment_type
            first_name
            last_name
            account_number
            verification_pin
            createdAt
            updatedAt
            __typename
          }
          active_status
          createdAt
          updatedAt
          passengerPayment_methodId
          __typename
        }
        trip_summary {
          id
          created_at
          path_travelled {
            longitude
            latitude
            __typename
          }
          cancellation_charge
          trip_status
          trip_cost
          pickup_time
          driver {
            id
            created_at
            first_name
            last_name
            email_address
            phone_number
            earning_tier
            active_status
            createdAt
            updatedAt
            driverHome_addressId
            driverVehicleId
            driverPool_idId
            __typename
          }
          trip_plan {
            id
            created_at
            pickup_time
            pickup_urgency
            num_of_riders
            createdAt
            updatedAt
            tripPlanPassengerId
            __typename
          }
          dropoff_time
          total_distance
          createdAt
          updatedAt
          tripSummaryDriverId
          tripSummaryTrip_planId
          __typename
        }
        createdAt
        updatedAt
        tripChargePassengerId
        tripChargeTrip_summaryId
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
      created_at
      driver {
        id
        created_at
        first_name
        last_name
        email_address
        phone_number
        home_address {
          id
          created_at
          street_name
          unit_num
          city
          state
          zip_code
          createdAt
          updatedAt
          __typename
        }
        earning_tier
        license_copy {
          name
          url
          baseDir
          __typename
        }
        vehicle {
          id
          created_at
          vin
          make
          year
          registration_plate
          registration_proof {
            name
            url
            baseDir
            __typename
          }
          fleet_id {
            id
            created_at
            title
            description
            createdAt
            updatedAt
            __typename
          }
          insurance_proof {
            name
            url
            baseDir
            __typename
          }
          createdAt
          updatedAt
          vehicleFleet_idId
          __typename
        }
        active_status
        pool_id {
          id
          created_at
          title
          descriptiopn
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        driverHome_addressId
        driverVehicleId
        driverPool_idId
        __typename
      }
      routing_number
      account_number
      amount_designated
      percent_designated
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
        created_at
        driver {
          id
          created_at
          first_name
          last_name
          email_address
          phone_number
          home_address {
            id
            created_at
            street_name
            unit_num
            city
            state
            zip_code
            createdAt
            updatedAt
            __typename
          }
          earning_tier
          license_copy {
            name
            url
            baseDir
            __typename
          }
          vehicle {
            id
            created_at
            vin
            make
            year
            registration_plate
            createdAt
            updatedAt
            vehicleFleet_idId
            __typename
          }
          active_status
          pool_id {
            id
            created_at
            title
            descriptiopn
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          driverHome_addressId
          driverVehicleId
          driverPool_idId
          __typename
        }
        routing_number
        account_number
        amount_designated
        percent_designated
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
export const getTripSummary = /* GraphQL */ `
  query GetTripSummary($id: ID!) {
    getTripSummary(id: $id) {
      id
      created_at
      path_travelled {
        longitude
        latitude
        __typename
      }
      cancellation_charge
      trip_status
      trip_cost
      pickup_time
      driver {
        id
        created_at
        first_name
        last_name
        email_address
        phone_number
        home_address {
          id
          created_at
          street_name
          unit_num
          city
          state
          zip_code
          createdAt
          updatedAt
          __typename
        }
        earning_tier
        license_copy {
          name
          url
          baseDir
          __typename
        }
        vehicle {
          id
          created_at
          vin
          make
          year
          registration_plate
          registration_proof {
            name
            url
            baseDir
            __typename
          }
          fleet_id {
            id
            created_at
            title
            description
            createdAt
            updatedAt
            __typename
          }
          insurance_proof {
            name
            url
            baseDir
            __typename
          }
          createdAt
          updatedAt
          vehicleFleet_idId
          __typename
        }
        active_status
        pool_id {
          id
          created_at
          title
          descriptiopn
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        driverHome_addressId
        driverVehicleId
        driverPool_idId
        __typename
      }
      trip_plan {
        id
        created_at
        pickup_time
        pickup_urgency
        pickup_location {
          longitude
          latitude
          __typename
        }
        dropoff_location {
          longitude
          latitude
          __typename
        }
        passenger {
          id
          created_at
          first_name
          last_name
          email_address
          phone_number
          payment_method {
            id
            created_at
            payment_type
            first_name
            last_name
            account_number
            verification_pin
            createdAt
            updatedAt
            __typename
          }
          active_status
          createdAt
          updatedAt
          passengerPayment_methodId
          __typename
        }
        num_of_riders
        createdAt
        updatedAt
        tripPlanPassengerId
        __typename
      }
      dropoff_time
      total_distance
      createdAt
      updatedAt
      tripSummaryDriverId
      tripSummaryTrip_planId
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
        created_at
        path_travelled {
          longitude
          latitude
          __typename
        }
        cancellation_charge
        trip_status
        trip_cost
        pickup_time
        driver {
          id
          created_at
          first_name
          last_name
          email_address
          phone_number
          home_address {
            id
            created_at
            street_name
            unit_num
            city
            state
            zip_code
            createdAt
            updatedAt
            __typename
          }
          earning_tier
          license_copy {
            name
            url
            baseDir
            __typename
          }
          vehicle {
            id
            created_at
            vin
            make
            year
            registration_plate
            createdAt
            updatedAt
            vehicleFleet_idId
            __typename
          }
          active_status
          pool_id {
            id
            created_at
            title
            descriptiopn
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          driverHome_addressId
          driverVehicleId
          driverPool_idId
          __typename
        }
        trip_plan {
          id
          created_at
          pickup_time
          pickup_urgency
          pickup_location {
            longitude
            latitude
            __typename
          }
          dropoff_location {
            longitude
            latitude
            __typename
          }
          passenger {
            id
            created_at
            first_name
            last_name
            email_address
            phone_number
            active_status
            createdAt
            updatedAt
            passengerPayment_methodId
            __typename
          }
          num_of_riders
          createdAt
          updatedAt
          tripPlanPassengerId
          __typename
        }
        dropoff_time
        total_distance
        createdAt
        updatedAt
        tripSummaryDriverId
        tripSummaryTrip_planId
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
      created_at
      first_name
      last_name
      email_address
      phone_number
      home_address {
        id
        created_at
        street_name
        unit_num
        city
        state
        zip_code
        createdAt
        updatedAt
        __typename
      }
      earning_tier
      license_copy {
        name
        url
        baseDir
        __typename
      }
      vehicle {
        id
        created_at
        vin
        make
        year
        registration_plate
        registration_proof {
          name
          url
          baseDir
          __typename
        }
        fleet_id {
          id
          created_at
          title
          description
          createdAt
          updatedAt
          __typename
        }
        insurance_proof {
          name
          url
          baseDir
          __typename
        }
        createdAt
        updatedAt
        vehicleFleet_idId
        __typename
      }
      active_status
      pool_id {
        id
        created_at
        title
        descriptiopn
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      driverHome_addressId
      driverVehicleId
      driverPool_idId
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
        created_at
        first_name
        last_name
        email_address
        phone_number
        home_address {
          id
          created_at
          street_name
          unit_num
          city
          state
          zip_code
          createdAt
          updatedAt
          __typename
        }
        earning_tier
        license_copy {
          name
          url
          baseDir
          __typename
        }
        vehicle {
          id
          created_at
          vin
          make
          year
          registration_plate
          registration_proof {
            name
            url
            baseDir
            __typename
          }
          fleet_id {
            id
            created_at
            title
            description
            createdAt
            updatedAt
            __typename
          }
          insurance_proof {
            name
            url
            baseDir
            __typename
          }
          createdAt
          updatedAt
          vehicleFleet_idId
          __typename
        }
        active_status
        pool_id {
          id
          created_at
          title
          descriptiopn
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        driverHome_addressId
        driverVehicleId
        driverPool_idId
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
      created_at
      vin
      make
      year
      registration_plate
      registration_proof {
        name
        url
        baseDir
        __typename
      }
      fleet_id {
        id
        created_at
        title
        description
        createdAt
        updatedAt
        __typename
      }
      insurance_proof {
        name
        url
        baseDir
        __typename
      }
      createdAt
      updatedAt
      vehicleFleet_idId
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
        created_at
        vin
        make
        year
        registration_plate
        registration_proof {
          name
          url
          baseDir
          __typename
        }
        fleet_id {
          id
          created_at
          title
          description
          createdAt
          updatedAt
          __typename
        }
        insurance_proof {
          name
          url
          baseDir
          __typename
        }
        createdAt
        updatedAt
        vehicleFleet_idId
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
      created_at
      pickup_time
      pickup_urgency
      pickup_location {
        longitude
        latitude
        __typename
      }
      dropoff_location {
        longitude
        latitude
        __typename
      }
      passenger {
        id
        created_at
        first_name
        last_name
        email_address
        phone_number
        payment_method {
          id
          created_at
          payment_type
          first_name
          last_name
          account_number
          verification_pin
          createdAt
          updatedAt
          __typename
        }
        active_status
        createdAt
        updatedAt
        passengerPayment_methodId
        __typename
      }
      num_of_riders
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
        created_at
        pickup_time
        pickup_urgency
        pickup_location {
          longitude
          latitude
          __typename
        }
        dropoff_location {
          longitude
          latitude
          __typename
        }
        passenger {
          id
          created_at
          first_name
          last_name
          email_address
          phone_number
          payment_method {
            id
            created_at
            payment_type
            first_name
            last_name
            account_number
            verification_pin
            createdAt
            updatedAt
            __typename
          }
          active_status
          createdAt
          updatedAt
          passengerPayment_methodId
          __typename
        }
        num_of_riders
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
export const getPassenger = /* GraphQL */ `
  query GetPassenger($id: ID!) {
    getPassenger(id: $id) {
      id
      created_at
      first_name
      last_name
      email_address
      phone_number
      payment_method {
        id
        created_at
        payment_type
        first_name
        last_name
        account_number
        verification_pin
        createdAt
        updatedAt
        __typename
      }
      active_status
      createdAt
      updatedAt
      passengerPayment_methodId
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
        created_at
        first_name
        last_name
        email_address
        phone_number
        payment_method {
          id
          created_at
          payment_type
          first_name
          last_name
          account_number
          verification_pin
          createdAt
          updatedAt
          __typename
        }
        active_status
        createdAt
        updatedAt
        passengerPayment_methodId
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
      created_at
      title
      description
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
        created_at
        title
        description
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
      created_at
      payment_type
      first_name
      last_name
      account_number
      verification_pin
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
        created_at
        payment_type
        first_name
        last_name
        account_number
        verification_pin
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
      created_at
      event
      message
      event_time
      event_target
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
        created_at
        event
        message
        event_time
        event_target
        createdAt
        updatedAt
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
      created_at
      title
      coordinates {
        longitude
        latitude
        __typename
      }
      valid_from
      valid_duration
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
        created_at
        title
        coordinates {
          longitude
          latitude
          __typename
        }
        valid_from
        valid_duration
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
      created_at
      title
      descriptiopn
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
        created_at
        title
        descriptiopn
        createdAt
        updatedAt
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
      created_at
      street_name
      unit_num
      city
      state
      zip_code
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
        created_at
        street_name
        unit_num
        city
        state
        zip_code
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
      created_at
      first_name
      last_name
      email_address
      phone_number
      copy_of_license
      home_address {
        id
        created_at
        street_name
        unit_num
        city
        state
        zip_code
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      administratorHome_addressId
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
        created_at
        first_name
        last_name
        email_address
        phone_number
        copy_of_license
        home_address {
          id
          created_at
          street_name
          unit_num
          city
          state
          zip_code
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        administratorHome_addressId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
