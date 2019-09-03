import modelExtend from 'dva-model-extend'
import { pathMatchRegexp } from 'utils'
import api from 'api'
import { model } from '@/models/pageModel'
import {
  createBannerFunc,
  updateBannerFunc,
  removeBannerFunc,
  showModalBanner,
} from './components/banner/model'
import {
  createNavbarFunc,
  updateNavbarFunc,
  removeNavbarFunc,
  showModalNavbar,
} from './components/navbar/model'

const { queryMobileHome } = api

export default modelExtend(model, {
  namespace: 'mobile',

  state: {
    tabKey: 0,
    banner: [],
    navbar: [],
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if (pathMatchRegexp('/setting/mobileHome', location.pathname)) {
          dispatch({ type: 'query' })
        }
      })
    },
  },

  effects: {
    *query({ payload = {} }, { call, put }) {
      const { data } = yield call(queryMobileHome, payload)
      if (data) {
        const { banners, navbars } = data
        yield put({
          type: 'updateState',
          payload: {
            banners,
            navbars,
          },
        })
      }
    },
    ...{
      createBannerFunc,
      updateBannerFunc,
      removeBannerFunc,
      showModalBanner,
      createNavbarFunc,
      updateNavbarFunc,
      removeNavbarFunc,
      showModalNavbar,
    },
  },
})
