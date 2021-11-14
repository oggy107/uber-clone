import { useRouter } from 'next/dist/client/router'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'

import { auth } from '../config/firebase'

const useAuthentication = () => {
    const router = useRouter()

    useEffect(() => {
        return onAuthStateChanged(auth, (user) => {
            if (!user)
                router.push('/login')
        })
    }, [])
}

export default useAuthentication