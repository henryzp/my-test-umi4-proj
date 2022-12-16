import { combineReducers } from 'redux';
import { authReducers } from './auth/rsModel';
import cached_enumDataReducer from './cached/rsModel';
import { efclReducers } from './pages/commonBusinessServices/rsModel';
import { efclAuditReducers } from './pages/commonBusinessServices/audit-record/rsModel';
import { opertionButtonsReducers } from './components/OprationButtons/rsModel';
import { efclTruckReducers } from './pages/commonBusinessServices/truck/rsModel';
import { isfReducers } from './pages/commonBusinessServices/documents/ISF/rsModel';
import { statementReducers } from './pages/statement/rsModel';
import { legacyCtnTypeReducers } from './components/Legacy/select/CtnTypeSelect/rsModel';
import { efclBookinReducers } from './pages/commonBusinessServices/booking-info/rsModel';
import { amendOrderReducers } from './pages/commonBusinessServices/modify-order/rsModel';
import { airAmendOrderReducers } from './pages/commonBusinessServices/air/modify-order/rsModel';
import { legacyEnterpriseCodeReducers } from './components/Legacy/EnterpriseCode/rsModel';
import { efclDocumentsReducers } from './pages/commonBusinessServices/documents/Si/rsModel';
import { replenishmentReducers } from './pages/commonBusinessServices/operate-record/components/OrderReplenishment/rsModel';
import { innerAuditButtonsReducers } from './pages/commonBusinessServices/fee-info/FunctionButton/InnerAuditButton/rsModel';
import FeeDetailStore from '@/pages/commonBusinessServices/fee-info/store/FeeDetailStore';
import confirmation from '@/pages/commonBusinessServices/confirmation/store';
import truckPlanReducer from '@/pages/commonBusinessServices/truck/model/store';
import orderLossInfo from '@/pages/commonBusinessServices/fee-info/FunctionButton/DeficitReason/store';

// XXX 引人 shipOwner的sagas，因为船东业务将来会独立
// 因此这里的saga未来要移除
import { shipOwnerDocumentsReducers } from './pages/shipOwner/commonBusinessServices/documents/Si/rsModel';
import { bookingReceiptReducers } from './pages/commonBusinessServices/manifest/BookingReceipt/rsModel';
import { preManifestReducers } from './pages/commonBusinessServices/manifest/PreManifest/rsModel';
import { eFileReducers } from './pages/commonBusinessServices/file/EFile/rsModel';

const rootReducer = combineReducers({
  ...efclBookinReducers,
  ...authReducers,
  ...efclReducers,
  ...efclAuditReducers,
  ...legacyEnterpriseCodeReducers,
  ...legacyCtnTypeReducers,
  cached_enumDataReducer,
  ...replenishmentReducers,
  ...opertionButtonsReducers,
  ...efclDocumentsReducers,
  ...isfReducers,
  ...bookingReceiptReducers,
  ...preManifestReducers,
  ...amendOrderReducers,
  ...airAmendOrderReducers,
  ...eFileReducers,
  ...efclTruckReducers,
  ...innerAuditButtonsReducers,
  ...statementReducers,
  ...shipOwnerDocumentsReducers,
  FeeDetailStore,
  confirmation,
  truckPlanReducer,
  orderLossInfo,
});

/**@deprecated 请使用store 下面的TRootState */
export type TRootState = ReturnType<typeof rootReducer>;

export default rootReducer;
