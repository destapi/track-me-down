/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePayment = /* GraphQL */ `
  subscription OnCreatePayment($filter: ModelSubscriptionPaymentFilterInput) {
    onCreatePayment(filter: $filter) {
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
export const onUpdatePayment = /* GraphQL */ `
  subscription OnUpdatePayment($filter: ModelSubscriptionPaymentFilterInput) {
    onUpdatePayment(filter: $filter) {
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
export const onDeletePayment = /* GraphQL */ `
  subscription OnDeletePayment($filter: ModelSubscriptionPaymentFilterInput) {
    onDeletePayment(filter: $filter) {
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
export const onCreateTripRating = /* GraphQL */ `
  subscription OnCreateTripRating(
    $filter: ModelSubscriptionTripRatingFilterInput
  ) {
    onCreateTripRating(filter: $filter) {
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
export const onUpdateTripRating = /* GraphQL */ `
  subscription OnUpdateTripRating(
    $filter: ModelSubscriptionTripRatingFilterInput
  ) {
    onUpdateTripRating(filter: $filter) {
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
export const onDeleteTripRating = /* GraphQL */ `
  subscription OnDeleteTripRating(
    $filter: ModelSubscriptionTripRatingFilterInput
  ) {
    onDeleteTripRating(filter: $filter) {
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
export const onCreateTripCharge = /* GraphQL */ `
  subscription OnCreateTripCharge(
    $filter: ModelSubscriptionTripChargeFilterInput
  ) {
    onCreateTripCharge(filter: $filter) {
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
export const onUpdateTripCharge = /* GraphQL */ `
  subscription OnUpdateTripCharge(
    $filter: ModelSubscriptionTripChargeFilterInput
  ) {
    onUpdateTripCharge(filter: $filter) {
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
export const onDeleteTripCharge = /* GraphQL */ `
  subscription OnDeleteTripCharge(
    $filter: ModelSubscriptionTripChargeFilterInput
  ) {
    onDeleteTripCharge(filter: $filter) {
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
export const onCreateDirectDeposit = /* GraphQL */ `
  subscription OnCreateDirectDeposit(
    $filter: ModelSubscriptionDirectDepositFilterInput
  ) {
    onCreateDirectDeposit(filter: $filter) {
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
export const onUpdateDirectDeposit = /* GraphQL */ `
  subscription OnUpdateDirectDeposit(
    $filter: ModelSubscriptionDirectDepositFilterInput
  ) {
    onUpdateDirectDeposit(filter: $filter) {
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
export const onDeleteDirectDeposit = /* GraphQL */ `
  subscription OnDeleteDirectDeposit(
    $filter: ModelSubscriptionDirectDepositFilterInput
  ) {
    onDeleteDirectDeposit(filter: $filter) {
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
export const onCreateTripSummary = /* GraphQL */ `
  subscription OnCreateTripSummary(
    $filter: ModelSubscriptionTripSummaryFilterInput
  ) {
    onCreateTripSummary(filter: $filter) {
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
export const onUpdateTripSummary = /* GraphQL */ `
  subscription OnUpdateTripSummary(
    $filter: ModelSubscriptionTripSummaryFilterInput
  ) {
    onUpdateTripSummary(filter: $filter) {
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
export const onDeleteTripSummary = /* GraphQL */ `
  subscription OnDeleteTripSummary(
    $filter: ModelSubscriptionTripSummaryFilterInput
  ) {
    onDeleteTripSummary(filter: $filter) {
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
export const onCreateDriver = /* GraphQL */ `
  subscription OnCreateDriver($filter: ModelSubscriptionDriverFilterInput) {
    onCreateDriver(filter: $filter) {
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
export const onUpdateDriver = /* GraphQL */ `
  subscription OnUpdateDriver($filter: ModelSubscriptionDriverFilterInput) {
    onUpdateDriver(filter: $filter) {
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
export const onDeleteDriver = /* GraphQL */ `
  subscription OnDeleteDriver($filter: ModelSubscriptionDriverFilterInput) {
    onDeleteDriver(filter: $filter) {
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
export const onCreateVehicle = /* GraphQL */ `
  subscription OnCreateVehicle($filter: ModelSubscriptionVehicleFilterInput) {
    onCreateVehicle(filter: $filter) {
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
export const onUpdateVehicle = /* GraphQL */ `
  subscription OnUpdateVehicle($filter: ModelSubscriptionVehicleFilterInput) {
    onUpdateVehicle(filter: $filter) {
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
export const onDeleteVehicle = /* GraphQL */ `
  subscription OnDeleteVehicle($filter: ModelSubscriptionVehicleFilterInput) {
    onDeleteVehicle(filter: $filter) {
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
export const onCreateTripPlan = /* GraphQL */ `
  subscription OnCreateTripPlan($filter: ModelSubscriptionTripPlanFilterInput) {
    onCreateTripPlan(filter: $filter) {
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
export const onUpdateTripPlan = /* GraphQL */ `
  subscription OnUpdateTripPlan($filter: ModelSubscriptionTripPlanFilterInput) {
    onUpdateTripPlan(filter: $filter) {
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
export const onDeleteTripPlan = /* GraphQL */ `
  subscription OnDeleteTripPlan($filter: ModelSubscriptionTripPlanFilterInput) {
    onDeleteTripPlan(filter: $filter) {
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
export const onCreatePassenger = /* GraphQL */ `
  subscription OnCreatePassenger(
    $filter: ModelSubscriptionPassengerFilterInput
  ) {
    onCreatePassenger(filter: $filter) {
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
export const onUpdatePassenger = /* GraphQL */ `
  subscription OnUpdatePassenger(
    $filter: ModelSubscriptionPassengerFilterInput
  ) {
    onUpdatePassenger(filter: $filter) {
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
export const onDeletePassenger = /* GraphQL */ `
  subscription OnDeletePassenger(
    $filter: ModelSubscriptionPassengerFilterInput
  ) {
    onDeletePassenger(filter: $filter) {
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
export const onCreateVehicleFleet = /* GraphQL */ `
  subscription OnCreateVehicleFleet(
    $filter: ModelSubscriptionVehicleFleetFilterInput
  ) {
    onCreateVehicleFleet(filter: $filter) {
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
export const onUpdateVehicleFleet = /* GraphQL */ `
  subscription OnUpdateVehicleFleet(
    $filter: ModelSubscriptionVehicleFleetFilterInput
  ) {
    onUpdateVehicleFleet(filter: $filter) {
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
export const onDeleteVehicleFleet = /* GraphQL */ `
  subscription OnDeleteVehicleFleet(
    $filter: ModelSubscriptionVehicleFleetFilterInput
  ) {
    onDeleteVehicleFleet(filter: $filter) {
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
export const onCreatePaymentMethod = /* GraphQL */ `
  subscription OnCreatePaymentMethod(
    $filter: ModelSubscriptionPaymentMethodFilterInput
  ) {
    onCreatePaymentMethod(filter: $filter) {
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
export const onUpdatePaymentMethod = /* GraphQL */ `
  subscription OnUpdatePaymentMethod(
    $filter: ModelSubscriptionPaymentMethodFilterInput
  ) {
    onUpdatePaymentMethod(filter: $filter) {
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
export const onDeletePaymentMethod = /* GraphQL */ `
  subscription OnDeletePaymentMethod(
    $filter: ModelSubscriptionPaymentMethodFilterInput
  ) {
    onDeletePaymentMethod(filter: $filter) {
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
export const onCreateNotification = /* GraphQL */ `
  subscription OnCreateNotification(
    $filter: ModelSubscriptionNotificationFilterInput
  ) {
    onCreateNotification(filter: $filter) {
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
export const onUpdateNotification = /* GraphQL */ `
  subscription OnUpdateNotification(
    $filter: ModelSubscriptionNotificationFilterInput
  ) {
    onUpdateNotification(filter: $filter) {
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
export const onDeleteNotification = /* GraphQL */ `
  subscription OnDeleteNotification(
    $filter: ModelSubscriptionNotificationFilterInput
  ) {
    onDeleteNotification(filter: $filter) {
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
export const onCreateGeoFence = /* GraphQL */ `
  subscription OnCreateGeoFence($filter: ModelSubscriptionGeoFenceFilterInput) {
    onCreateGeoFence(filter: $filter) {
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
export const onUpdateGeoFence = /* GraphQL */ `
  subscription OnUpdateGeoFence($filter: ModelSubscriptionGeoFenceFilterInput) {
    onUpdateGeoFence(filter: $filter) {
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
export const onDeleteGeoFence = /* GraphQL */ `
  subscription OnDeleteGeoFence($filter: ModelSubscriptionGeoFenceFilterInput) {
    onDeleteGeoFence(filter: $filter) {
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
export const onCreateDriverPool = /* GraphQL */ `
  subscription OnCreateDriverPool(
    $filter: ModelSubscriptionDriverPoolFilterInput
  ) {
    onCreateDriverPool(filter: $filter) {
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
export const onUpdateDriverPool = /* GraphQL */ `
  subscription OnUpdateDriverPool(
    $filter: ModelSubscriptionDriverPoolFilterInput
  ) {
    onUpdateDriverPool(filter: $filter) {
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
export const onDeleteDriverPool = /* GraphQL */ `
  subscription OnDeleteDriverPool(
    $filter: ModelSubscriptionDriverPoolFilterInput
  ) {
    onDeleteDriverPool(filter: $filter) {
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
export const onCreatePhysicalAddress = /* GraphQL */ `
  subscription OnCreatePhysicalAddress(
    $filter: ModelSubscriptionPhysicalAddressFilterInput
  ) {
    onCreatePhysicalAddress(filter: $filter) {
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
export const onUpdatePhysicalAddress = /* GraphQL */ `
  subscription OnUpdatePhysicalAddress(
    $filter: ModelSubscriptionPhysicalAddressFilterInput
  ) {
    onUpdatePhysicalAddress(filter: $filter) {
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
export const onDeletePhysicalAddress = /* GraphQL */ `
  subscription OnDeletePhysicalAddress(
    $filter: ModelSubscriptionPhysicalAddressFilterInput
  ) {
    onDeletePhysicalAddress(filter: $filter) {
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
export const onCreateAdministrator = /* GraphQL */ `
  subscription OnCreateAdministrator(
    $filter: ModelSubscriptionAdministratorFilterInput
  ) {
    onCreateAdministrator(filter: $filter) {
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
export const onUpdateAdministrator = /* GraphQL */ `
  subscription OnUpdateAdministrator(
    $filter: ModelSubscriptionAdministratorFilterInput
  ) {
    onUpdateAdministrator(filter: $filter) {
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
export const onDeleteAdministrator = /* GraphQL */ `
  subscription OnDeleteAdministrator(
    $filter: ModelSubscriptionAdministratorFilterInput
  ) {
    onDeleteAdministrator(filter: $filter) {
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
