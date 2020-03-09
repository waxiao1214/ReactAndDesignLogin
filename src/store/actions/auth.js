import axios from 'axios'
import * as actionTypes from './actionTypes';
// import { createDispatchHook } from 'react-redux';

export const authStart = () => {
    return {
        type : actionTypes.AUTH_START
    }
}

export const authSuccess = token => {
    return {
        type : actionTypes.AUTH_SUCCESS,
        toekn : token
    }
}

export const authFail = error => {
    return {
        type : actionTypes.AUTH_FAIL,
        error : error
    }
}

export const logOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    return {
        type : actionTypes.AUTH_LOGOUT
    };
}

export const checkAuthTimeout = expirationTime => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logOut());
        }, expirationTime * 1000)
    }
}

export const authLogin = (username, password) => {
    return dispatch => {
        dispatch(authStart());
        axios.post('http://localhost:8000/rest-auth/login/',{
            username:username,
            password:password
        })
        .then(res => {
            const token = res.data.key;
            const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
            localStorage.setItem('token', token);
            localStorage.setItem('expirationDate', expirationDate);
            dispatch(authSuccess(token));
            dispatch(checkAuthTimeout(3600));
            this.props.history.push('/dashboard');
            
        })
        .catch(err => {
            dispatch(authFail(err))
        })
    }
}

export const authSignup = (email, username, password) => {
    return dispatch =>{
        dispatch(authStart());
        axios.post('http://localhost:8000/rest-auth/registration/',{
            email: email,
            username:username,
            password1 : password,
            password2 : password,
        })
        .then(res => {
            const token = res.data.key;
            const expirationDate = new Date(new Date().getTime() + 3600*1000);
            localStorage.setItem('token', token);
            localStorage.setItem('expirationDate', expirationDate);
            dispatch(authSuccess(token));
            dispatch(checkAuthTimeout(3000));
            this.props.history.push('/');
        })
        .catch((err, res) => {
            
            dispatch(authFail(err))
        })
    }
}

export const authCheckState= () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (token === undefined) {
            dispatch(logOut());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'))
            if (expirationDate <= new Date()){
                dispatch(logOut());
            } else {
                dispatch(authSuccess(token));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000 ))
            }
        }
    }
}