import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
import App from './app'

test('renders "Login" link', () => {
  const { getByText } = render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
  const linkElement = getByText(/Privacy Guard Messaging/i)
  expect(linkElement).toBeInTheDocument()
})
