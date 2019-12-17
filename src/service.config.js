const MOCKURL = 'http://www.weichuang.com/'
const SERVERURL = 'http://localhost:3000'

const URL = {
    getList: MOCKURL + 'getList',
    // getHotProduct: MOCKURL + 'getHotProduct',

    registerUser: SERVERURL + '/user/register',
    loginUser: SERVERURL + '/user/login',
    getTypes: SERVERURL + '/type/getTypes',
    getProductByType: SERVERURL + '/product/getProductByType',
    getDetail:SERVERURL + '/product/getDetail',
    addCart:SERVERURL + '/cart/addCart',
    getCart:SERVERURL + '/cart/getCart',
}

export default URL;