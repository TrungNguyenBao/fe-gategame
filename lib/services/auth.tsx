import axios from "axios";
import { callAPI } from "../../lib/api"

interface ILoginData {
    email: string,
    password: string
}

export const login = async ({ email, password }: ILoginData) => {
    return callAPI({
        method: "POST",
        url: '/api/authenticate/login/basic',
        body: {
            email, password
        }
    })
}


export const signup = async ({ username, email, password, password_confirmation, agree }: any) => {
    return callAPI({
        method: "POST",
        url: '/api/authenticate/register/basic',
        body: {
            username, email, password, password_confirmation, agree
        }
    })
}