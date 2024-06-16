import React from 'react';
import './App.css';

import { DefaultLayout } from './layout/DefaultLayout';
// import { Entry } from './pages/entry/Entry.page';
// import { Dashboard } from './pages/Dashboard/Dashboard.page';
// import { AddTicket } from './pages/New-Ticket/AddTicketPage';
import { TicketLists } from './pages/ticket-listing/TicketLists.page';

function App() {
  return (
    <div className="App">
      {/* <Entry /> */}

      <DefaultLayout>

         {/* <Dashboard /> */}
         {/* <AddTicket /> */}
         <TicketLists/>



      </DefaultLayout>
    </div>
  );
}

export default App;
