import useSWR from 'swr'
import axios from '@/lib/axios'
import { useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'

interface UseAuthOptions {
    middleware?: 'auth' | 'guest'
    redirectIfAuthenticated?: string
}

interface User {
    name: string
    email: string
    email_verified_at?: string
}

interface RegisterProps {
    setErrors: (errors: any[]) => void
    [key: string]: any
}

interface LoginProps {
    setErrors: (errors: any[]) => void
    setStatus: (status: any) => void
    [key: string]: any
}

interface ForgotPasswordProps {
    setErrors: (errors: any[]) => void
    setStatus: (status: any) => void
    email: string
}

interface ResetPasswordProps {
    setErrors: (errors: any[]) => void
    setStatus: (status: any) => void
    [key: string]: any
}

export const useAuth = ({
    middleware,
    redirectIfAuthenticated,
}: UseAuthOptions = {}) => {
    const router = useRouter()
    const params = useParams()

    const {
        data: user,
        error,
        mutate,
    } = useSWR<User, any>('/api/user', () =>
        axios
            .get('/api/user')
            .then(res => res.data)
            .catch(error => {
                if (error.response.status !== 409) throw error
                router.push('/verify-email')
            }),
    )

    const csrf = () => axios.get('/sanctum/csrf-cookie')

    const register = async ({ setErrors, ...props }: RegisterProps) => {
        await csrf()
        setErrors([])

        axios
            .post('/register', props)
            .then(() => mutate())
            .catch(error => {
                if (error.response.status !== 422) throw error
                setErrors(error.response.data.errors)
            })
    }

    const login = async ({ setErrors, setStatus, ...props }: LoginProps) => {
        await csrf()
        setErrors([])
        setStatus(null)

        axios
            .post('/login', props)
            .then(() => mutate())
            .catch(error => {
                if (error.response.status !== 422) throw error
                setErrors(error.response.data.errors)
            })
    }

    const forgotPassword = async ({
        setErrors,
        setStatus,
        email,
    }: ForgotPasswordProps) => {
        await csrf()
        setErrors([])
        setStatus(null)

        axios
            .post('/forgot-password', { email })
            .then(response => setStatus(response.data.status))
            .catch(error => {
                if (error.response.status !== 422) throw error
                setErrors(error.response.data.errors)
            })
    }

    const resetPassword = async ({
        setErrors,
        setStatus,
        ...props
    }: ResetPasswordProps) => {
        await csrf()
        setErrors([])
        setStatus(null)

        axios
            .post('/reset-password', { token: params.token, ...props })
            .then(response =>
                router.push('/login?reset=' + btoa(response.data.status)),
            )
            .catch(error => {
                if (error.response.status !== 422) throw error
                setErrors(error.response.data.errors)
            })
    }

    const resendEmailVerification = ({
        setStatus,
    }: {
        setStatus: (status: any) => void
    }) => {
        axios
            .post('/email/verification-notification')
            .then(response => setStatus(response.data.status))
    }

    const logout = async () => {
        if (!error) {
            await axios.post('/logout').then(() => mutate())
        }
        window.location.pathname = '/login'
    }

    useEffect(() => {
        if (middleware === 'guest' && redirectIfAuthenticated && user)
            router.push(redirectIfAuthenticated)
        if (
            window.location.pathname === '/verify-email' &&
            user?.email_verified_at
        )
            router.push(redirectIfAuthenticated)
        if (middleware === 'auth' && error) logout()
    }, [user, error])

    return {
        user,
        register,
        login,
        forgotPassword,
        resetPassword,
        resendEmailVerification,
        logout,
    }
}