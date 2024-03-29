import useScrollToTop from '@/hooks/useScrollToTop'
import React, { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const cx = classNames.bind(styles)
const LoginSell = () => {
  const [member, setMember] = useState(false)
  useScrollToTop()
  return (
    <div className={cx('container')}>
      <Helmet >
        <title>Seller Login</title>
      </Helmet>
      <div className={cx('left')}>
        <img src="/images/other/login-1.png" alt="" />
      </div>
      <div className={cx('right')}>
        <h3>Login Vendor</h3>
        <p>Don't have an account vendor? <Link to={'/seller/register'}>Create here.</Link></p>
        <form action="">
          <input type="text" placeholder='Username or Email *' />
          <input type="text" placeholder='Your Password *' />
          <div className={cx('secure')}>
            <input type="text" placeholder='Security Code' />
            <div className={cx('code')}>
              <span>8</span>
              <span>7</span>
              <span>6</span>
              <span>9</span>
            </div>
          </div>
          <div className={cx('action')}>
            <div className={cx('left-action')}>
              <input type="checkbox" id='remember' />
              <label onClick={() => setMember(!member)} className={member ? cx('active') : ''} htmlFor="remember">Remember me</label>
            </div>
            <div className={cx('right-action')}>
              Forgot Password ?
            </div>
          </div>
          <div className={cx('btn')}>
            <button type='submit'>Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginSell