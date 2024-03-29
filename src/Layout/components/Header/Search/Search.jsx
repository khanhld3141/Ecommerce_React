import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import { IoSearchOutline } from "react-icons/io5";
import Modal from '../Mobile/Modal/Modal';
import { BsList } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import data from './data'
import { getCate } from '@/services/categoryService';
const cx = classNames.bind(styles)
const Search = () => {
  const [open, setOpen] = useState(false);
  const [cate, setCate] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let res = await getCate("true");
      setCate(res.data);
    }
    getData();
  }, [])
  return (
    <div className={cx('search')}>
      <div className={cx('container')}>
        <Link to={'/'} className={cx('logo')}>
          <img src="/images/logo/logo.svg" alt="" />
        </Link>
        <div className={cx('search')}>
          <select className={cx('cate')} name="category" id="">
            <option value="">All Categories</option>
            {
              cate && cate.map((item) => (
                <option key={item.id} value={item.id}>{item.name}</option>
              ))
            }
          </select>
          <input className={cx('input')} type="text" placeholder='Search' />
          <IoSearchOutline className={cx('icon')} />
        </div>
        <span className={cx('icon-nav')} onClick={() => setOpen(true)}>
          <BsList />
        </span>
        <div className={cx('action')}>
          <Link to={'/shop/compare'} className={cx('item')} title='Compare'>
            <span className={cx('icon')}>
              <img src="/images/service/icon-compare.svg" alt="" />
              <span className={cx('count')}>
                0
              </span>
            </span>
            <span className={cx('text')}>
              Compare
            </span>

          </Link>
          <Link to={'/shop/wish-list'} className={cx('item')} title='WishList'>
            <span className={cx('icon')}>
              <img src="/images/service/icon-heart.svg" alt="" />
              <span className={cx('count')}>
                0
              </span>
            </span>
            <span className={cx('text')}>
              WishList
            </span>

          </Link>
          <Link to={'/shop/cart'} className={cx('item')} title='Cart'>
            <span className={cx('icon')}>
              <img src="/images/service/icon-cart.svg" alt="" />
              <span className={cx('count')}>
                0
              </span>
            </span>
            <span className={cx('text')}>
              Cart
            </span>

          </Link>
          <div className={cx('item')} title='Account'>
            <span className={cx('icon')}>
              <img src="/images/service/icon-user.svg" alt="" />
            </span>
            <span className={cx('text')}>
              Account
            </span>
            <div className={cx('modal')}>
              <Link to={'/my-account'} className={cx('main')}>
                {
                  data.map((item, index) => (
                    <Link to={item.path} key={index} className={cx('item-modal')}>
                      <div className={cx('icon')}>
                        {item.icon}
                      </div>
                      <div className={cx('text')}>
                        {item.title}
                      </div>
                    </Link>
                  ))
                }
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Modal open={open} setOpen={setOpen} />
    </div>
  )
}

export default Search