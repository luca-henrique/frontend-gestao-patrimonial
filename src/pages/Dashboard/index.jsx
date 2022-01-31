import React from 'react';

import LayoutDashbaord from 'components/atomic/layout/LayoutDashboard';

import Account from '~/pages/Users/Create';

export default function Dashboard({children}) {
  return (
    <LayoutDashbaord>
      <Account />
    </LayoutDashbaord>
  );
}
