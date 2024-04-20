/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPayment = /* GraphQL */ `
  mutation CreatePayment(
    $input: CreatePaymentInput!
    $condition: ModelPaymentConditionInput
  ) {
    createPayment(input: $input, condition: $condition) {
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
export const updatePayment = /* GraphQL */ `
  mutation UpdatePayment(
    $input: UpdatePaymentInput!
    $condition: ModelPaymentConditionInput
  ) {
    updatePayment(input: $input, condition: $condition) {
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
export const deletePayment = /* GraphQL */ `
  mutation DeletePayment(
    $input: DeletePaymentInput!
    $condition: ModelPaymentConditionInput
  ) {
    deletePayment(input: $input, condition: $condition) {
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
export const createTripRating = /* GraphQL */ `
  mutation CreateTripRating(
    $input: CreateTripRatingInput!
    $condition: ModelTripRatingConditionInput
  ) {
    createTripRating(input: $input, condition: $condition) {
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
export const updateTripRating = /* GraphQL */ `
  mutation UpdateTripRating(
    $input: UpdateTripRatingInput!
    $condition: ModelTripRatingConditionInput
  ) {
    updateTripRating(input: $input, condition: $condition) {
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
export const deleteTripRating = /* GraphQL */ `
  mutation DeleteTripRating(
    $input: DeleteTripRatingInput!
    $condition: ModelTripRatingConditionInput
  ) {
    deleteTripRating(input: $input, condition: $condition) {
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
export const createTripCharge = /* GraphQL */ `
  mutation CreateTripCharge(
    $input: CreateTripChargeInput!
    $condition: ModelTripChargeConditionInput
  ) {
    createTripCharge(input: $input, condition: $condition) {
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
export const updateTripCharge = /* GraphQL */ `
  mutation UpdateTripCharge(
    $input: UpdateTripChargeInput!
    $condition: ModelTripChargeConditionInput
  ) {
    updateTripCharge(input: $input, condition: $condition) {
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
export const deleteTripCharge = /* GraphQL */ `
  mutation DeleteTripCharge(
    $input: DeleteTripChargeInput!
    $condition: ModelTripChargeConditionInput
  ) {
    deleteTripCharge(input: $input, condition: $condition) {
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
export const createDirectDeposit = /* GraphQL */ `
  mutation CreateDirectDeposit(
    $input: CreateDirectDepositInput!
    $condition: ModelDirectDepositConditionInput
  ) {
    createDirectDeposit(input: $input, condition: $condition) {
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
export const updateDirectDeposit = /* GraphQL */ `
  mutation UpdateDirectDeposit(
    $input: UpdateDirectDepositInput!
    $condition: ModelDirectDepositConditionInput
  ) {
    updateDirectDeposit(input: $input, condition: $condition) {
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
export const deleteDirectDeposit = /* GraphQL */ `
  mutation DeleteDirectDeposit(
    $input: DeleteDirectDepositInput!
    $condition: ModelDirectDepositConditionInput
  ) {
    deleteDirectDeposit(input: $input, condition: $condition) {
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
export const createTripSummary = /* GraphQL */ `
  mutation CreateTripSummary(
    $input: CreateTripSummaryInput!
    $condition: ModelTripSummaryConditionInput
  ) {
    createTripSummary(input: $input, condition: $condition) {
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
export const updateTripSummary = /* GraphQL */ `
  mutation UpdateTripSummary(
    $input: UpdateTripSummaryInput!
    $condition: ModelTripSummaryConditionInput
  ) {
    updateTripSummary(input: $input, condition: $condition) {
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
export const deleteTripSummary = /* GraphQL */ `
  mutation DeleteTripSummary(
    $input: DeleteTripSummaryInput!
    $condition: ModelTripSummaryConditionInput
  ) {
    deleteTripSummary(input: $input, condition: $condition) {
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
export const createDriver = /* GraphQL */ `
  mutation CreateDriver(
    $input: CreateDriverInput!
    $condition: ModelDriverConditionInput
  ) {
    createDriver(input: $input, condition: $condition) {
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
export const updateDriver = /* GraphQL */ `
  mutation UpdateDriver(
    $input: UpdateDriverInput!
    $condition: ModelDriverConditionInput
  ) {
    updateDriver(input: $input, condition: $condition) {
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
export const deleteDriver = /* GraphQL */ `
  mutation DeleteDriver(
    $input: DeleteDriverInput!
    $condition: ModelDriverConditionInput
  ) {
    deleteDriver(input: $input, condition: $condition) {
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
export const createVehicle = /* GraphQL */ `
  mutation CreateVehicle(
    $input: CreateVehicleInput!
    $condition: ModelVehicleConditionInput
  ) {
    createVehicle(input: $input, condition: $condition) {
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
export const updateVehicle = /* GraphQL */ `
  mutation UpdateVehicle(
    $input: UpdateVehicleInput!
    $condition: ModelVehicleConditionInput
  ) {
    updateVehicle(input: $input, condition: $condition) {
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
export const deleteVehicle = /* GraphQL */ `
  mutation DeleteVehicle(
    $input: DeleteVehicleInput!
    $condition: ModelVehicleConditionInput
  ) {
    deleteVehicle(input: $input, condition: $condition) {
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
export const createTripPlan = /* GraphQL */ `
  mutation CreateTripPlan(
    $input: CreateTripPlanInput!
    $condition: ModelTripPlanConditionInput
  ) {
    createTripPlan(input: $input, condition: $condition) {
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
export const updateTripPlan = /* GraphQL */ `
  mutation UpdateTripPlan(
    $input: UpdateTripPlanInput!
    $condition: ModelTripPlanConditionInput
  ) {
    updateTripPlan(input: $input, condition: $condition) {
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
export const deleteTripPlan = /* GraphQL */ `
  mutation DeleteTripPlan(
    $input: DeleteTripPlanInput!
    $condition: ModelTripPlanConditionInput
  ) {
    deleteTripPlan(input: $input, condition: $condition) {
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
export const createPassenger = /* GraphQL */ `
  mutation CreatePassenger(
    $input: CreatePassengerInput!
    $condition: ModelPassengerConditionInput
  ) {
    createPassenger(input: $input, condition: $condition) {
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
export const updatePassenger = /* GraphQL */ `
  mutation UpdatePassenger(
    $input: UpdatePassengerInput!
    $condition: ModelPassengerConditionInput
  ) {
    updatePassenger(input: $input, condition: $condition) {
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
export const deletePassenger = /* GraphQL */ `
  mutation DeletePassenger(
    $input: DeletePassengerInput!
    $condition: ModelPassengerConditionInput
  ) {
    deletePassenger(input: $input, condition: $condition) {
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
export const createVehicleFleet = /* GraphQL */ `
  mutation CreateVehicleFleet(
    $input: CreateVehicleFleetInput!
    $condition: ModelVehicleFleetConditionInput
  ) {
    createVehicleFleet(input: $input, condition: $condition) {
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
export const updateVehicleFleet = /* GraphQL */ `
  mutation UpdateVehicleFleet(
    $input: UpdateVehicleFleetInput!
    $condition: ModelVehicleFleetConditionInput
  ) {
    updateVehicleFleet(input: $input, condition: $condition) {
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
export const deleteVehicleFleet = /* GraphQL */ `
  mutation DeleteVehicleFleet(
    $input: DeleteVehicleFleetInput!
    $condition: ModelVehicleFleetConditionInput
  ) {
    deleteVehicleFleet(input: $input, condition: $condition) {
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
export const createPaymentMethod = /* GraphQL */ `
  mutation CreatePaymentMethod(
    $input: CreatePaymentMethodInput!
    $condition: ModelPaymentMethodConditionInput
  ) {
    createPaymentMethod(input: $input, condition: $condition) {
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
export const updatePaymentMethod = /* GraphQL */ `
  mutation UpdatePaymentMethod(
    $input: UpdatePaymentMethodInput!
    $condition: ModelPaymentMethodConditionInput
  ) {
    updatePaymentMethod(input: $input, condition: $condition) {
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
export const deletePaymentMethod = /* GraphQL */ `
  mutation DeletePaymentMethod(
    $input: DeletePaymentMethodInput!
    $condition: ModelPaymentMethodConditionInput
  ) {
    deletePaymentMethod(input: $input, condition: $condition) {
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
export const createNotification = /* GraphQL */ `
  mutation CreateNotification(
    $input: CreateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    createNotification(input: $input, condition: $condition) {
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
export const updateNotification = /* GraphQL */ `
  mutation UpdateNotification(
    $input: UpdateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    updateNotification(input: $input, condition: $condition) {
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
export const deleteNotification = /* GraphQL */ `
  mutation DeleteNotification(
    $input: DeleteNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    deleteNotification(input: $input, condition: $condition) {
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
export const createGeoFence = /* GraphQL */ `
  mutation CreateGeoFence(
    $input: CreateGeoFenceInput!
    $condition: ModelGeoFenceConditionInput
  ) {
    createGeoFence(input: $input, condition: $condition) {
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
export const updateGeoFence = /* GraphQL */ `
  mutation UpdateGeoFence(
    $input: UpdateGeoFenceInput!
    $condition: ModelGeoFenceConditionInput
  ) {
    updateGeoFence(input: $input, condition: $condition) {
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
export const deleteGeoFence = /* GraphQL */ `
  mutation DeleteGeoFence(
    $input: DeleteGeoFenceInput!
    $condition: ModelGeoFenceConditionInput
  ) {
    deleteGeoFence(input: $input, condition: $condition) {
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
export const createDriverPool = /* GraphQL */ `
  mutation CreateDriverPool(
    $input: CreateDriverPoolInput!
    $condition: ModelDriverPoolConditionInput
  ) {
    createDriverPool(input: $input, condition: $condition) {
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
export const updateDriverPool = /* GraphQL */ `
  mutation UpdateDriverPool(
    $input: UpdateDriverPoolInput!
    $condition: ModelDriverPoolConditionInput
  ) {
    updateDriverPool(input: $input, condition: $condition) {
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
export const deleteDriverPool = /* GraphQL */ `
  mutation DeleteDriverPool(
    $input: DeleteDriverPoolInput!
    $condition: ModelDriverPoolConditionInput
  ) {
    deleteDriverPool(input: $input, condition: $condition) {
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
export const createPhysicalAddress = /* GraphQL */ `
  mutation CreatePhysicalAddress(
    $input: CreatePhysicalAddressInput!
    $condition: ModelPhysicalAddressConditionInput
  ) {
    createPhysicalAddress(input: $input, condition: $condition) {
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
export const updatePhysicalAddress = /* GraphQL */ `
  mutation UpdatePhysicalAddress(
    $input: UpdatePhysicalAddressInput!
    $condition: ModelPhysicalAddressConditionInput
  ) {
    updatePhysicalAddress(input: $input, condition: $condition) {
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
export const deletePhysicalAddress = /* GraphQL */ `
  mutation DeletePhysicalAddress(
    $input: DeletePhysicalAddressInput!
    $condition: ModelPhysicalAddressConditionInput
  ) {
    deletePhysicalAddress(input: $input, condition: $condition) {
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
export const createAdministrator = /* GraphQL */ `
  mutation CreateAdministrator(
    $input: CreateAdministratorInput!
    $condition: ModelAdministratorConditionInput
  ) {
    createAdministrator(input: $input, condition: $condition) {
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
export const updateAdministrator = /* GraphQL */ `
  mutation UpdateAdministrator(
    $input: UpdateAdministratorInput!
    $condition: ModelAdministratorConditionInput
  ) {
    updateAdministrator(input: $input, condition: $condition) {
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
export const deleteAdministrator = /* GraphQL */ `
  mutation DeleteAdministrator(
    $input: DeleteAdministratorInput!
    $condition: ModelAdministratorConditionInput
  ) {
    deleteAdministrator(input: $input, condition: $condition) {
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
