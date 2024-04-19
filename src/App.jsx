import { withAuthenticator, } from '@aws-amplify/ui-react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import AppLayout from './components/AppLayout';
import { PaymentMethodService } from './tryout/PaymentMethod';
// import AdministratorPanel from './components/AdministratorPanel';
// import PassengerPanel from './components/PassengerPanel';
// import DirectDepositPanel from './components/DirectDepositPanel';
// import VehiclePanel from './components/VehiclePanel';
// import VehicleFleetPanel from './components/VehicleFleetPanel';
// import TripPlanPanel from './components/TripPlanPanel';
// import GeoFencePanel from './components/GeoFencePanel';
// import PaymentPanel from './components/PaymentPanel';
// import PaymentMethodPanel from './components/PaymentMethodPanel';
// import PhysicalAddrPanel from './components/PhysicalAddrPanel';
// import DriverPanel from './components/DriverPanel';
// import DriverPoolPanel from './components/DriverPoolPanel';
// import MapBoxPanel from './components/MapBoxPanel';

const tabPages = ['MapBox', 'Administrator', 'Passenger', 'Direct Deposit', 'Vehicle',
  'Vehicle Fleet', 'Driver', 'Driver Pool', 'GeoFence',
  'Payment', 'Payment Method', 'Physical Address', 'Trip Plan']

function resolveTabPage(page) {
  if (tabPages.includes(page)) {
    switch (page) {
      case 'MapBox': {
        // return <MapBoxPanel />
        return <PaymentMethodService></PaymentMethodService>
      }
      // case 'Administrator': {
      //   return <AdministratorPanel />
      // }
      // case 'Passenger': {
      //   return <PassengerPanel />
      // }
      // case 'Direct Deposit': {
      //   return <DirectDepositPanel />
      // }
      // case 'Vehicle': {
      //   return <VehiclePanel />
      // }
      // case 'Vehicle Fleet': {
      //   return <VehicleFleetPanel />
      // }
      // case 'Driver': {
      //   return <DriverPanel />
      // }
      // case 'Driver Pool': {
      //   return <DriverPoolPanel />
      // }
      // case 'Trip Plan': {
      //   return <TripPlanPanel />
      // }
      // case 'GeoFence': {
      //   return <GeoFencePanel />
      // }
      // case 'Payment': {
      //   return <PaymentPanel />
      // }
      // case 'Payment Method': {
      //   return <PaymentMethodPanel />
      // }
      // case 'Physical Address': {
      //   return <PhysicalAddrPanel />
      // }
      default:
        return null
    }
  }
  return null
}

function App({ signOut, user }) {

  const [page, setPage] = useState('MapBox')

  return (
    <AppLayout username={user?.username} onSignOut={signOut} setPage={setPage}>
      {resolveTabPage(page)}
    </AppLayout>
  );
}


App.propTypes = {
  signOut: PropTypes.func.isRequired,
  user: PropTypes.object
}

export default withAuthenticator(App);
