import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from './AccountLayout.module.scss'
import SideBar from '../components/SideBar'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)
const AccountLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className={cx('container')}>
        <SideBar />
        {children}
      </div>
      <Footer />
    </>
  )
}

export default AccountLayout