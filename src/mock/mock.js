import nock from 'nock';
import getConfig from '../../config';

const config = getConfig();
const shortDelay = 200;

nock(config.services.sendPhone.url)
  .persist()
  .post('')
  .delay(shortDelay)
  .reply((uri, request, cb) => {
    if (request.phone === '79161234561') {
      cb(null, [200, { ref: 'PC72703180000aur' }]);
    }
    cb(null, [400, 'error']);
  });

nock(config.services.sendSms.url)
  .persist()
  .post('')
  .delay(shortDelay)
  .reply((uri, request, cb) => {
    if (request.password === '5840' && request.reference === 'PC72703180000aur') {
      cb(null, [200, { phone: '79161234561' }]);
    }
    cb(null, [400, 'error']);
  });
