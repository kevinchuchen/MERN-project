import { useAuthContext } from "./useAuthContext"
import { useWorkoutContext } from "./useWorkoutsContext"

export const useLogout = () => {
    const { dispatch } = useAuthContext()
    const { dispatch: workoutsDispatch } = useWorkoutContext()


    const logout = () => {
        //remove user from storage
        localStorage.removeItem('user')

        //dispatch logout action to change global state
        dispatch({type:'LOGOUT'})
        workoutsDispatch({type: "SET_WORKOUTS", payload: null})
    }
    
    return {logout}
}