import * as API from '../services/api';

export default {
  namespace: 'example',

  state: {},

  subscriptions: {
    setup() {
      // eslint-disable-line
    },
  },

  effects: {
    *fetch500({ payload }, { call, put }) {
      const response = yield call(API.query500, payload);
      yield put({
        type: 'save',
        payload: response.data,
      });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
