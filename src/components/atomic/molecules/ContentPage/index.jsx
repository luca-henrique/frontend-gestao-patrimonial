import React, {lazy, Suspense} from 'react';

import Loader from '~/components/atomic/atoms/Loader';

export default () => {
  return <Suspense fallback={<Loader />}>{Routes['default']}</Suspense>;
};

const Routes = {
  default: <div />,
};
