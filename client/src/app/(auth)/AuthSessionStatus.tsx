import React from 'react'

interface AuthSessionStatusProps extends React.HTMLAttributes<HTMLDivElement> {
    status?: string // status can be optional and should be a string
    className?: string // className is also optional
}

const AuthSessionStatus: React.FC<AuthSessionStatusProps> = ({
    status,
    className = '',
    ...props
}) => (
    <>
        {status && (
            <div
                className={`${className} font-medium text-sm text-green-600`}
                {...props}>
                {status}
            </div>
        )}
    </>
)

export default AuthSessionStatus
