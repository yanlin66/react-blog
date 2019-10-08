let base = {};
if (process.env.NODE_ENV === 'development') {
  base.url = 'http://seek.palpitation.shop/';
  base.env = process.env.NODE_ENV;
  base.time = new Date().toLocaleString()
} else {
  if (process.env.REACT_APP_SCIENCE === 'qa') {
    base.url = 'http://seek.palpitation.shop/';
    base.env = process.env.NODE_ENV;
    base.time = new Date().toLocaleString();
  } else if (process.env.REACT_APP_SCIENCE === 'prod') {
    // product
    base.url = '';
    base.env = process.env.NODE_ENV;
    base.time = new Date().toLocaleString();
  } else if (process.env.REACT_APP_SCIENCE === 'uat') {
    base.url = '';
    base.env = process.env.NODE_ENV;
    base.time = new Date().toLocaleString();
  } else {
    //默认dev
    base.url = 'http://seek.palpitation.shop/';
    base.env = process.env.NODE_ENV;
    base.time = new Date().toLocaleString()
  }
}
export default base
