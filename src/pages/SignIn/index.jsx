import React from 'react';

import {Main, StyledContainer} from './style';

import FooterCopyright from 'components/atomic/molecules/FooterCopyright';

import SignInFormContainer from 'components/atomic/molecules/SignInForm';
import SignInCardInformation from 'components/atomic/molecules/SignInCardInformation';

export default function SignIn() {
  return (
    <Main>
      <StyledContainer>
        <SignInCardInformation />
        <SignInFormContainer />
      </StyledContainer>

      <FooterCopyright />
    </Main>
  );
}
