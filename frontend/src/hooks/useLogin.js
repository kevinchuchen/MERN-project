import { useAuthContext } from './useAuthContext'
import { useState } from 'react'

export const useLogin = () => {
    const [ error, setError ] = useState(null)
    const [ isLoading, setIsLoading ] = useState(null)
    const { dispatch } = useAuthContext()

    const login = async (email,password) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('/api/user/login', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({email,password})
        })
        const json = await response.json()
        if (!response.ok){
            setError(json.error)
            setIsLoading(false)
        }
        if(response.ok){
            //save user to local storage
            localStorage.setItem('user', JSON.stringify(json))
            
            //update Auth Context
            dispatch({type: 'LOGIN', payload: json})
            setIsLoading(false)
        }
    }
    return {login, error, isLoading}
}