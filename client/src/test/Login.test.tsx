import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { BrowserRouter } from 'react-router-dom'
import Login from '../pages/Login'
import { AuthProvider } from '../context/AuthContext'

const MockLogin = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                < Login />
            </AuthProvider>
        </BrowserRouter>
    )
}

describe('Login Component', () => {
    it('renders the login form', () => {
        render(<MockLogin />)
        // Check if the 'Welcome Back text is there
        expect(screen.getByText(/Welcome Back/i)).toBeInTheDocument()
    })

    it('toggles password visibility when eye icon is clicked', () => {
        render(<MockLogin />)

        // Find the password input (by its placeholder)
        const passwordInput = screen.getByPlaceholderText('Password')

        // Check it is initially type='password' (hidden)
        expect(passwordInput).toHaveAttribute('type', 'password')

        // Find the toggle button 
        const toggleButton = screen.getByRole('button', { name: ''})

        // Click it
        fireEvent.click(toggleButton)

        // Check if it turned to type='text' 
        expect(passwordInput).toHaveAttribute('type', 'text')
    })
})