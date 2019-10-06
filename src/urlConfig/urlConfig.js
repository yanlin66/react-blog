let base = {};
if (process.env.NODE_ENV === 'development') {
  base.url = '';
  base.env = process.env.NODE_ENV;
  base.time = new Date().toLocaleString()
} else {
  if (process.env.REACT_APP_SCIENCE === 'qa') {
    base.url = '';
    base.env = process.env.NODE_ENV;
    base.time = new Date().toLocaleString();
  } else if (process.env.REACT_APP_SCIENCE === 'prod') {
    // walmart product
    base.url = '';
    base.env = process.env.NODE_ENV;
    base.time = new Date().toLocaleString();
  } else if (process.env.REACT_APP_SCIENCE === 'uat') {
    base.url = '';
    base.env = process.env.NODE_ENV;
    base.time = new Date().toLocaleString();
  } else {
    //默认dev
    base.url = '';
    base.env = process.env.NODE_ENV;
    base.time = new Date().toLocaleString()
  }
}
export default base
