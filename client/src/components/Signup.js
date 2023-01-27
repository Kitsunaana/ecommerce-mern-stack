import React, {useState} from 'react';
import {Link} from "react-router-dom";
import './Signup.css'
import isEmpty from "validator/es/lib/isEmpty";
import isEmail from "validator/es/lib/isEmail";
import equals from "validator/es/lib/equals";
import {showError, showSuccess} from "../helpers/message";
import {showLoading} from "../helpers/loading";
import {signup} from "../api/auth";
import {response} from "express";

const Signup = () => {
    const [ formData, setFormData ] = useState({
        username: '', email: '', password: '', password2: '', successMessage: "", errorMessage: "", loading: false
    })

    const { username, email, password, password2, successMessage, errorMessage, loading } = formData

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value, successMessage: "", errorMessage: "" })
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if (isEmpty(username) || isEmpty(email) || isEmpty(password) || isEmpty(password2)) setFormData({ ...formData, errorMessage: "Все поля обязательны" })
        else if (!isEmail(email)) setFormData({ ...formData, errorMessage: "Некорректно набрана почта" })
        else if (!equals(password, password2)) setFormData({ ...formData, errorMessage: "Не совпадают пароли" })
        else {
            const { username, password, email } = formData
            const data = { username, password, email }

            setFormData({ ...formData, loading: true })

            signup(data)
                .then(response => {
                    setFormData({ username: '', email: '', password: '', password2: '', successMessage: response.data.successMessage, errorMessage: "", loading: false })
                })
                .catch((error) => {
                    setFormData({ ...formData, errorMessage: error.response.data.errorMessage })
                })
        }
    }

    const showSignupForm = () => (
        <form className='signup-form' onSubmit={handleSubmit} noValidate={true}>
            {/* username */}
            <div className='form-group input-group'>
                <div className='input-group-prepend'>
					<span className='input-group-text'><i className='fa fa-user'></i></span>
                </div>
                <input onChange={handleChange} value={username} name='username' className='form-control' placeholder='Имя пользователя' type='text'/>
            </div>
            {/* email */}
            <div className='form-group input-group'>
                <div className='input-group-prepend'>
					<span className='input-group-text'><i className='fa fa-envelope'></i></span>
                </div>
                <input onChange={handleChange} value={email} name='email' className='form-control' placeholder='Почта' type='email'/>
            </div>
            {/* password */}
            <div className='form-group input-group'>
                <div className='input-group-prepend'>
					<span className='input-group-text'><i className='fa fa-lock'></i></span>
                </div>
                <input onChange={handleChange} value={password} name='password' className='form-control' placeholder='Пароль' type='password'/>
            </div>
            {/* password2 */}
            <div className='form-group input-group'>
                <div className='input-group-prepend'>
					<span className='input-group-text'><i className='fa fa-lock'></i></span>
                </div>
                <input onChange={handleChange} value={password2} name='password2' className='form-control' placeholder='Повторите пароль' type='password'/>
            </div>
            {/* signup button */}
            <div className='form-group'>
                <button type='submit' className='btn btn-primary btn-block'>Регистрация</button>
            </div>
            {/* already have account */}
            <p className='text-center text-white'>Уже есть аккаунт? <Link to='/signin'>Войти</Link> </p>
        </form>
    );

    return (
        <div className='signup-container'>
            <div className="signup-form">
                {errorMessage && showError(errorMessage)}
                {successMessage && showSuccess(successMessage)}

                {loading && <div className="spinner">{showLoading()}</div>}

                {showSignupForm()}
            </div>
        </div>
    );
};

export default Signup;