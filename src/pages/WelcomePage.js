import React from 'react';
import Header from 'components/SharedLayout/HeaderWelcomeComponent';
import AuthNav from 'components/Auth/AuthNavComponent';
import AllUsersTab from 'components/SharedLayout/AllUsersTabComponent';

export default function WelcomePage() {
  return (
    <>
      <Header />
      <AuthNav />
      <AllUsersTab />
    </>
  );
}
