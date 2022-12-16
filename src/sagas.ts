import { all } from 'redux-saga/effects';
import { authSagas } from './auth/rsModel';
import { efclSagas } from './pages/commonBusinessServices/rsModel';
import { opertionButtonsSagas } from './components/OprationButtons/rsModel';
import { efclTruckSagas } from './pages/commonBusinessServices/truck/rsModel';
import { isfSagas } from './pages/commonBusinessServices/documents/ISF/rsModel';
import { statementSagas } from './pages/statement/rsModel';
import { efclAuditSagas } from './pages/commonBusinessServices/audit-record/rsModel';
import { amendOrderSagas } from './pages/commonBusinessServices/modify-order/rsModel';
import { airAmendOrderSagas } from './pages/commonBusinessServices/air/modify-order/rsModel';
import { efclBookingSagas } from './pages/commonBusinessServices/booking-info/rsModel';
import { efclDocumentsSagas } from './pages/commonBusinessServices/documents/Si/rsModel';
import { efclOrderRecordSagas } from './pages/commonBusinessServices/order-record/rsModel';
import { replenishmentSagas } from './pages/commonBusinessServices/operate-record/components/OrderReplenishment/rsModel';
import { innerAuditButtonsSagas } from './pages/commonBusinessServices/fee-info/FunctionButton/InnerAuditButton/rsModel';

// XXX 引人 shipOwner的sagas，因为船东业务将来会独立
// 因此这里的saga未来要移除
import { shipOwnerDocumentsSagas } from './pages/shipOwner/commonBusinessServices/documents/Si/rsModel';
import { bookingReceiptSagas } from './pages/commonBusinessServices/manifest/BookingReceipt/rsModel';
import { preManifestSagas } from './pages/commonBusinessServices/manifest/PreManifest/rsModel';

export default function* rootSagas() {
  yield all([
    ...authSagas,
    ...efclSagas,
    ...efclBookingSagas,
    ...replenishmentSagas,
    ...efclAuditSagas,
    ...efclOrderRecordSagas,
    ...opertionButtonsSagas,
    ...efclDocumentsSagas,
    ...isfSagas,
    ...bookingReceiptSagas,
    ...preManifestSagas,
    ...statementSagas,
    ...amendOrderSagas,
    ...airAmendOrderSagas,
    ...efclTruckSagas,
    ...innerAuditButtonsSagas,
    ...shipOwnerDocumentsSagas,
  ]);
}
