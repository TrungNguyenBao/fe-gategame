import axios from "axios";
import { callAPI } from "../../lib/api"

interface ILoginData {
    email: string,
    password: string
}

export const signin = async ({ email, password }: ILoginData) => {
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

export const verifyCode = async ({ email, code }: any) => {
    return callAPI({
        method: "POST",
        url: '/api/authenticate/verify/check-code',
        body: {
            email, code
        }
    })
}

export const sendCode = async ({ email }: any) => {
    return callAPI({
        method: "POST",
        url: '/api/authenticate/verify/send-code',
        body: {
            email
        }
    })
}