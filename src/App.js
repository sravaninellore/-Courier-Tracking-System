// TODO: Add custom pagination
// TODO: Add Google Analytics

import React from 'react';
import { Admin, Resource } from 'react-admin';
import authProvider from './authProvider/authProvider';
import couriers from './couriers';
import customDataProvider from './dataProvider/customDataProvider';
import { COURIER, ORDER, PARCEL, STORE } from './dataProvider/resources';
import LoginPage from './design/LoginPage';
import theme from './design/theme';
import FeatureFlagProvider from './featureFlags/FeatureFlagProvider';
import { getActiveResources } from './featureFlags/toggleRouter';
import i18nProvider from './i18nProvider/i18nProvider';
import orders from './orders';
import parcels from './parcels';
import stores from './stores';

const resources = [
    <Resource name={PARCEL} {...parcels} key={`${PARCEL}-resource`}/>,
    <Resource name={ORDER} {...orders} key={`${ORDER}-resource`}/>,
    <Resource name={COURIER} {...couriers} key={`${COURIER}-resource`}/>,
    <Resource name={STORE} {...stores} key={`${STORE}-resource`}/>,
]

const App = () => (
    <FeatureFlagProvider>
        <Admin 
            dataProvider={customDataProvider}
            theme={theme}
            i18nProvider={i18nProvider}
            authProvider={authProvider}
            loginPage={LoginPage}
        >
            {(permissions => getActiveResources(resources))}
        </Admin>
    </FeatureFlagProvider>
)

export default App;