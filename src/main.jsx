import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  RouterProvider
} from "react-router-dom";
import router from './Routers/Routers.jsx';
import AuthProvider from './Provider/AuthProvider';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <div className="max-w-screen-xl mx-auto md:px-12 px-2 bg-slate-200">
          <RouterProvider router={router} />
        </div>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
