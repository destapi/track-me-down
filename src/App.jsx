import { withAuthenticator, } from '@aws-amplify/ui-react';
import AppLayout from './component/AppLayout';
import PropTypes from 'prop-types';
import { AdministratorCreateForm } from './ui-components';

function App({ signOut, user }) {

  return (
    <AppLayout username={user?.username} onSignOut={signOut}>
      <AdministratorCreateForm />
    </AppLayout>
  );
}

// const styles = {
//   container: {
//     width: 400,
//     margin: '0 auto',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     padding: 20
//   },
//   input: {
//     border: 'none',
//     backgroundColor: '#ddd',
//     marginBottom: 10,
//     padding: 8,
//     fontSize: 18
//   },
// }

App.propTypes = {
  signOut: PropTypes.func.isRequired,
  user: PropTypes.object
}

export default withAuthenticator(App);
