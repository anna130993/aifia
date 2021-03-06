export const initialState = {
  products: {
    data: [],
    present: null,
    request: {
      type: '',
      active: false,
      error: false,
    },
  },
  order: {
    data: {
      products: [],
      firstName: '',
      lastName: '',
      email: '',
      address: '',
    },
    request: {
      type: '',
      active: false,
      error: false,
    },
  },
};
