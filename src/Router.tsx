import { Route, Routes } from 'react-router-dom'

import { Home } from './screens/Home'
import { OrderStatus } from './screens/OrderStatus'
import { Payment } from './screens/Payment'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/Payment/OrderStatus" element={<OrderStatus />} />
      </Route>
    </Routes>
  )
}
