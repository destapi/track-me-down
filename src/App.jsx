import { withAuthenticator, } from '@aws-amplify/ui-react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import AppLayout from './component/AppLayout';
import AdministratorPanel from './component/AdministratorPanel';
import PassengerPanel from './component/PassengerPanel';
import DirectDepositPanel from './component/DirectDepositPanel';
import VehiclePanel from './component/VehiclePanel';
import VehicleFleetPanel from './component/VehicleFleetPanel';
import TripPlanPanel from './component/TripPlanPanel';
import GeoFencePanel from './component/GeoFencePanel';
import PaymentPanel from './component/PaymentPanel';
import PaymentMethodPanel from './component/PaymentMethodPanel';
import PhysicalAddrPanel from './component/PhysicalAddrPanel';
import DriverPanel from './component/DriverPanel';
import DriverPoolPanel from './component/DriverPoolPanel';
import MapBoxPanel from './component/MapBoxPanel';

const tabPages = ['MapBox', 'Administrator', 'Passenger', 'Direct Deposit', 'Vehicle',
  'Vehicle Fleet', 'Driver', 'Driver Pool', 'GeoFence',
  'Payment', 'Payment Method', 'Physical Address', 'Trip']

function resolveTabPage(page) {
  if (tabPages.includes(page)) {
    switch (page) {
      case 'MapBox': {
        return <MapBoxPanel />
      }
      case 'Administrator': {
        return <AdministratorPanel />
      }
      case 'Passenger': {
        return <PassengerPanel />
      }
      case 'Direct Deposit': {
        return <DirectDepositPanel />
      }
      case 'Vehicle': {
        return <VehiclePanel />
      }
      case 'Vehicle Fleet': {
        return <VehicleFleetPanel />
      }
      case 'Driver': {
        return <DriverPanel />
      }
      case 'Driver Pool': {
        return <DriverPoolPanel />
      }
      case 'Trip Plan': {
        return <TripPlanPanel />
      }
      case 'GeoFence': {
        return <GeoFencePanel />
      }
      case 'Payment': {
        return <PaymentPanel />
      }
      case 'Payment Method': {
        return <PaymentMethodPanel />
      }
      case 'Physical Address': {
        return <PhysicalAddrPanel />
      }
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
