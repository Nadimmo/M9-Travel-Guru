import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import Route from './page/Route/Route';
import AuthProvider from './AuthProvider/AuthProvider';
import { QueryClient, QueryClientProvider,   } from '@tanstack/react-query';
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <QueryClientProvider client={queryClient}>
   <AuthProvider>
      <RouterProvider router={Route} />
    </AuthProvider>
   </QueryClientProvider>
  </React.StrictMode>,
)
