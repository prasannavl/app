import { createSlice } from '@reduxjs/toolkit';

const configSlice = createSlice({
  name: 'wallet',
  initialState: {
    walletBalance: 0,
    isBalanceFetching: false,
    isBalanceError: '',
    pendingBalance: 0,
    isPendingBalanceFetching: false,
    isPendingBalanceError: '',
    paymentRequests: [],
    walletTxns: [],
    walletTxnCount: 0,
    isWalletTxnsLoading: false,
    receivedData: {
      amountToReceive: '',
      amountToReceiveDisplayed: 0,
      receiveMessage: '',
      showBackdrop: '',
      receiveStep: 'default',
    },
    sendData: {
      walletBalance: 0,
      amountToSend: '',
      amountToSendDisplayed: 0,
      toAddress: '',
      scannerOpen: false,
      flashed: '',
      showBackdrop: '',
      sendStep: 'default',
      waitToSend: 5,
    },
  },
  reducers: {
    fetchPaymentRequest(state) {
      state.paymentRequests = [];
    },
    fetchPaymentRequestsSuccess(state, action) {
      state.paymentRequests = action.payload;
    },
    fetchPaymentRequestsFailure(state, action) {
      state.paymentRequests = [];
    },
    fetchWalletTxnsRequest(state, action) {
      state.isWalletTxnsLoading = true;
    },
    fetchWalletTxnsSuccess(state, action) {
      state.walletTxns = action.payload.walletTxns;
      state.walletTxnCount = action.payload.walletTxnCount;
      state.isWalletTxnsLoading = false;
    },
    fetchWalletTxnsFailure(state, action) {
      state.walletTxns = [];
      state.isWalletTxnsLoading = false;
    },
    removeReceiveTxnsRequest(state, action) {},
    removeReceiveTxnsSuccess(state, action) {
      state.paymentRequests = action.payload;
    },
    removeReceiveTxnsFailure(state, action) {},
    addReceiveTxnsRequest(state, action) {},
    addReceiveTxnsSuccess(state, action) {
      state.paymentRequests = action.payload;
    },
    addReceiveTxnsFailure(state, action) {},
    fetchSendDataRequest(state) {},
    fetchSendDataSuccess(state, action) {
      state.sendData = action.payload.data;
    },
    fetchSendDataFailure(state, action) {},
    fetchWalletBalanceRequest(state) {
      state.isBalanceFetching = true;
      state.isBalanceError = '';
    },
    fetchWalletBalanceSuccess(state, action) {
      state.walletBalance = action.payload;
      state.isBalanceFetching = false;
    },
    fetchWalletBalanceFailure(state, action) {
      state.walletBalance = 0;
      state.isBalanceFetching = false;
      state.isBalanceError = action.payload;
    },
    fetchPendingBalanceRequest(state) {
      state.isPendingBalanceFetching = true;
      state.isPendingBalanceError = '';
    },
    fetchPendingBalanceSuccess(state, action) {
      state.pendingBalance = action.payload;
      state.isPendingBalanceFetching = false;
    },
    fetchPendingBalanceFailure(state, action) {
      state.walletBalance = 0;
      state.isPendingBalanceFetching = false;
      state.isPendingBalanceError = action.payload;
    },
  },
});

const { actions, reducer } = configSlice;

export const {
  fetchPaymentRequest,
  fetchPaymentRequestsSuccess,
  fetchPaymentRequestsFailure,
  fetchWalletTxnsRequest,
  fetchWalletTxnsSuccess,
  fetchWalletTxnsFailure,
  removeReceiveTxnsRequest,
  removeReceiveTxnsSuccess,
  removeReceiveTxnsFailure,
  addReceiveTxnsRequest,
  addReceiveTxnsSuccess,
  addReceiveTxnsFailure,
  fetchSendDataRequest,
  fetchSendDataSuccess,
  fetchSendDataFailure,
  fetchWalletBalanceRequest,
  fetchWalletBalanceSuccess,
  fetchWalletBalanceFailure,
  fetchPendingBalanceRequest,
  fetchPendingBalanceSuccess,
  fetchPendingBalanceFailure,
} = actions;

export default reducer;
