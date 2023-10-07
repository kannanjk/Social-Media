import { Form, Input, message } from 'antd'
import FormItem from 'antd/es/form/FormItem'
import { Link, useNavigate } from 'react-router-dom'
import axios, { } from 'axios'
const API = axios.create({ baseURL: "http://localhost:5000" })

function ForgotPass() {

    const navigate  =useNavigate()

    const forgotPas = async (value) => {
        try { 
            const res = await API.post('/auth/forgotpass', value)
            if (res.data.success) { 
                message.success(res.data.message)
                navigate('/changePass')
            }else{
                message.error("myyru")
            }
        } catch (error) {
            console.log(error);
            message.error("somthing error")
        }
    }

    return (
        <div className="form-container">
            <Form layout='vertical' onFinish={forgotPas} className='register-form'>
                <h3 className='text-center'>Get New OTP</h3>
                <FormItem label='username' name='username' >
                    <Input type='text' required />
                </FormItem>
                <FormItem label='Phone' name='number'>
                    <Input type='number' required />
                </FormItem>
                <button className='btn btn-primary' type='submit'>Get New OTP</button>
                <Link to='/login' className='ms-2'>Login</Link>
            </Form>
        </div>
    )
}

export default ForgotPass