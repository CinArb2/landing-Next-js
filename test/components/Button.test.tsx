import { render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Button from '../../Components/Button'
import React from 'react'

const renderButton = (props) => {
  render (<Button  {...props}/>)
}

const buttonProps = {
  children: 'click me',
  orange: false,
  green: true,
}

describe('Test Button component', () => {
  it('renders the component without crashing', () => {

    renderButton(buttonProps)

    const button = screen.getByRole('link')
    expect(button).toBeInTheDocument()
  })

  it('displays the expected text content', () => {
    renderButton(buttonProps)

    const button = screen.getByRole('link')
    expect(button).toHaveTextContent(/click me/i)
  })

  it('should navigate to https://api.whatsapp when link is clicked', async () => {
    renderButton(buttonProps)
    const button = screen.getByRole('link')

    expect(button).toHaveAttribute('href', 'https://api.whatsapp.com/send?phone=573104952597&text=Hola,%20me%20gustar%C3%ADa%20obtener%20mayor%20informaci%C3%B3n.')
  })
})
