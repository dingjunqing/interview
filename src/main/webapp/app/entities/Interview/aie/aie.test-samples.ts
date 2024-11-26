import dayjs from 'dayjs/esm';

import { IAIE, NewAIE } from './aie.model';

export const sampleWithRequiredData: IAIE = {
  id: 'bdb8ee68-88ae-4cae-82cf-f58c56618227',
  name: 'calculating',
  type: 'honestly smug',
  createdAt: dayjs('2024-11-26T10:49'),
  createdBy: 'reasoning whereas although',
  aieMetadata: 'extension',
  userID: 'assist modulo',
  isPublic: true,
};

export const sampleWithPartialData: IAIE = {
  id: '3c8fb9a3-d1fd-4d18-871e-13ed53bc4475',
  name: 'sock stable lest',
  type: 'emerge considering until',
  description: 'duh disarm profuse',
  createdAt: dayjs('2024-11-26T08:44'),
  createdBy: 'despite',
  version: 'plus awkwardly ick',
  category: 'that',
  aieMetadata: 'ugh vice reasonable',
  userID: 'membership',
  isPublic: false,
  organizationName: 'plus',
};

export const sampleWithFullData: IAIE = {
  id: '1e08b1d0-ec6c-471e-bae9-58adba9b510f',
  name: 'with',
  type: 'baseboard',
  description: 'drat',
  createdAt: dayjs('2024-11-26T02:07'),
  createdBy: 'kindheartedly onto geez',
  icon: 'likable among',
  version: 'permafrost geez couch',
  category: 'gah',
  rate: 22547.92,
  aieMetadata: 'hm almighty enhance',
  userID: 'scarcely considering than',
  isPublic: false,
  organizationName: 'aboard clearly famously',
  tenantID: 'gosh frenetically',
};

export const sampleWithNewData: NewAIE = {
  name: 'psst actually',
  type: 'up',
  createdAt: dayjs('2024-11-25T16:47'),
  createdBy: 'aw coop',
  aieMetadata: 'ascribe',
  userID: 'gadzooks guilt',
  isPublic: true,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
