export default {
  "CommonHelper": {
    "loadingFailed": "Loading failed, please try again later!",
    "noBackstage": "No error message returned from the background!",
    "templateName": "Template name already exists, please re-enter"
  },
  "BasicDataConstant": {
    "noInvoice": "No Invoicing",
    "vatGeneral": "VAT ordinary electronic invoice",
    "incompleteInvoice": "Not invoiced completed",
    "voucher": "voucher",
    "notGenerated": "Voucher not generated",
    "writeOff": "Write off",
    "unprinted": "Not printed",
    "partialPayment": "Partial payment",
    "partialAcceptance": "Partial acceptance",
    "paid": "Paid",
    "toBePaid": "Pending payment",
    "pending": "Pending",
    "requestFunds": "request funds",
    "toVoid": "to void",
    "receiptReceived": "Received documents",
    "reserved": "Booked space",
    "inProcess": "Processing",
    "noBooking": "No booking",
    "checkOrder": "Check the service items of [booking space], [booking space on behalf of others] and [towing container], and the container list cannot be empty of containers",
    "containerSchool": "Container calibration",
    "excluding": "2. If the booking service is not included, it is not 0, and the tax rate of all expenses must be the same.",
    "includingSubscription": "1. When including booking service, the tax rate of all expenses should be 0 or tax-free.",
    "verificationService": "Verify whether the service of the business has \"booking\" service,",
    "expenseTaxRate": "Expense tax rate verification",
    "ifSo": "If yes, the verification fails",
    "inspectionPlan": "Check whether the expense name in the planned expense is set and the expense classification is set as commission refund (including level 1 Classification, level 2 classification and level 3 Classification),",
    "specialExpenses": "Verification of special expense items",
    "verificationService2": "Verify whether the actual expense profit in the business is equal to the planned expense profit",
    "profitVerification": "Profit verification",
    "whenAndAllPass": "When both 1 and 2 pass, the expense bookkeeping exchange rate verification passes",
    "iInBusiness": "2. Whether all bookkeeping exchange rates in the business are the same. The same is through",
    "comparisonBasis": "1. Compare the corresponding bookkeeping exchange rate in master data - enterprise master data - floating exchange rate. The same is passed",
    "accordingToEach": "Verify the bookkeeping exchange rate of each expense according to the financial date of each expense",
    "recordingRate": "Bookkeeping exchange rate verification",
    "calibrationCost": "Verify whether the expense name in the expense is consistent with the expense name in master data - expense tax rate",
    "feeName": "Expense name verification",
    "forOperation": "3. If it is the operation station, verify whether the settlement unit of sea freight or air freight in the collection list is the sales company, and whether the sea freight amount of the sales station is equal to the sea freight amount of the operation station",
    "forSales": "2. When it is a sales station, verify whether the settlement unit of sea freight or air freight in the payment list is the operating company, and whether the sea freight amount of the sales station is equal to the sea freight amount of the operating station",
    "verificationYes": "1. Verify whether expense collaboration occurs",
    "cooperationFee": "Collaboration doc expense verification",
    "calibrationFee": "Verify whether the settlement company in the A / R expense list and a / P expense list in the expense does not match the full name of the corresponding company in the customer / supplier data",
    "settlementUnit": "Settlement unit verification",
    "checkAndUnload": "Verify whether the correspondence between the unloading port and the route is consistent with the maintenance of the master data port",
    "portAndNavigation": "Verification of correspondence between port and route",
    "checkBillOfLading": "Verify whether the [bill of lading type] and [bill of lading No.] in the Si bill of lading have values (check [booking] / [booking on behalf of others] and the business has been released)",
    "typeOfBillOfLading": "Bill of lading type verification",
    "checkIn": "2. Verify that on the premise that there is only one MBL in Si, the MBL number of Si MBL is consistent with the MBL number of operation details (check [booking] / [booking on behalf of others] and the business has been released)",
    "verificationWithdrawal": "1. Verify the consistency between the [actual sailing time] in the Si bill of lading and the operation details [actual sailing time] (check [booking] / [booking on behalf of] and the business has been released)",
    "andOperationDetails": "Verification of Si and operation details",
    "checkContainer": "Verify whether the container number in the container list in the container tab has a value (when [booking] / [booking] / [towing container] is checked for the full container export by sea)",
    "boxNumberVerification": "Box number verification",
    "checkSubscription": "8. When space booking and agent space booking services are checked, the [actual sailing time] cannot be earlier than the [closing time]",
    "checkSubscription2": "7. When booking and booking services are checked, the estimated departure time cannot be earlier than the closing time",
    "checkSubscription3": "6. When booking and booking services are checked, the [closing time] must have a value",
    "checkBarge": "5. When barge service is checked, the [actual departure time of barge] must have a value",
    "checkAndDrag": "4. When the container dragging service is checked, the estimated packing time must have a value",
    "estimated": "3. [estimated sailing time] must have value",
    "actual": "2. [actual sailing time] must have value",
    "business": "1. [business date] must have a value",
    "timeVerification": "Time verification",
    "checkTheLatest": "8. Verify whether the final destination exists in the master data when the final destination has a value",
    "checkNavigation": "7. Check whether the route exists in the master data when the route has a value",
    "calibrationAndUnloading": "6. Verify whether the discharge port exists in the master data when the discharge port has a value",
    "calibrationEquipment": "5. Verify whether the loading port exists in the master data when the loading port has a value",
    "checkTheLatest2": "4. Verify that the final destination has a value (when [booking] / [booking on behalf of others] is checked)",
    "checkNavigation2": "3. Verify the value of the route (when [booking] / [booking on behalf of others] is checked)",
    "calibrationAndUnloading2": "2. Verify the value at the unloading port (when [booking] / [booking on behalf of others] is checked)",
    "calibrationEquipment2": "1. Verify the value of loading port (when [booking] / [booking on behalf of others] is checked)",
    "portCalibration": "Port verification",
    "verificationOperation": "Verify whether the container type and container volume of the operation details, so's container type and container volume are consistent (when [booking] / [booking] / [towing container] is checked for the full container export by sea)",
    "boxTypeAndQuantity": "Box type and volume verification",
    "checkOverseas": "Verify whether the overseas agent exists in the customer / supplier (when [destination doc replacement] / [DDU] / [DDP] is checked)",
    "overseasAgency": "Overseas agent verification",
    "checkDelivery": "Verify whether shipping company exists in customer / supplier",
    "forwardingUnit": "Shipper verification",
    "calibrationBoatman": "Verify whether the shipping company exists in the customer / supplier (when [booking] / [booking on behalf of others] is checked)",
    "shippingCompanySchool": "Shipping company verification",
    "checkBooking": "Verify whether the booking agent exists in the customer / supplier (when booking / booking on behalf is checked)",
    "bookingAgent": "Booking agent verification",
    "verification": "2. Verify that the [operation] has a value",
    "verification2": "1. Verify that the sales has a value (except for collaboration documents)",
    "postVerification": "Post verification",
    "verificationDelegation": "Verify whether the delegated company exists in customer / supplier",
    "client": "Client verification",
    "actual2": "2. [actual departure time] needs a value",
    "verification3": "1. Verify the values of [departure station] and [destination station] (when [booking] is checked)",
    "siteVerification": "Site verification",
    "checkingAndBooking": "Verify whether the booking agent exists in the customer / supplier (when [booking] is checked)",
    "checkLoading": "Verify whether the correspondence between loading port and route is consistent with that maintained in master data port",
    "actual3": "2. [actual arrival time] must have value",
    "checkNavigation3": "6. Check whether the route exists in the master data when the route has a value",
    "calibrationAndUnloading3": "5. Verify whether the discharge port exists in the master data when the discharge port has a value",
    "calibrationEquipment3": "4. Verify whether the loading port exists in the master data when the loading port has a value",
    "checkNavigation4": "3. Verify that the route has value",
    "calibrationAndUnloading4": "2. Verify the value at the discharge port",
    "calibrationEquipment4": "1. Verify the value at the loading port",
    "advanceCharge": "advance charge",
    "businessGuarantee": "Business guarantee",
    "oceanRoute": "Ocean route",
    "creditLine": "Within the credit limit",
    "seeWaterList": "See water list",
    "receivableReceived": "Receivable received",
    "voucherPreparationAndSettlement": "Voucher preparation and settlement weight",
    "billingByVoucherPreparation": "Billing weight for voucher preparation",
    "productionVolume": "Preparation volume",
    "grossWeightOfSheetMaking": "Gross weight of document preparation",
    "numberOfUnits": "Number of pieces",
    "weightSettlement": "Delivery and settlement weight",
    "paymentByWeight": "Paid and billed weight",
    "crossWeightVolume": "Cross weight volume",
    "crossWeightGrossWeight": "Cross weight gross weight",
    "weightPaid": "Number of duplicate pieces",
    "weighingAndCharging": "Weighing and billing weight",
    "weighingVolume": "Weighing volume",
    "grossWeight": "Weighed gross weight",
    "weighingPieces": "Weighing pieces",
    "estimatedBilling": "Estimated billing weight",
    "estimatedVolume": "Estimated volume",
    "estimatedGrossWeight": "Estimated gross weight",
    "estimatedNumberOfPieces": "Estimated number of pieces",
    "weightVolume": "W / M (weight / volume)",
    "value": "value ",
    "ticket": "ticket",
    "box": "box",
    "shanghaiTemplate": "Shanghai template",
    "nanjingFormwork": "Nanjing formwork",
    "ningboTemplate": "Ningbo template",
    "tianjinWaidai": "Tianjin foreign agent template",
    "defaultTemplate": "Default template",
    "out": "Output Hb / L",
    "out2": "Out MB / L",
    "billOfDeposit": "Bill of charge",
    "noCharge": "Unsecured bill",
    "tradeDocumentation": "Trade documentation ",
    "letterOfGuarantee": "Guarantee",
    "billOfLading": "Bill of lading",
    "collected": "Received",
    "toBeCollected": "To be collected",
    "canSendASingle": "Mailing list",
    "collectionCompleted": "Order retrieval completed",
    "dispatchCompleted": "Dispatch completed",
    "orderCanBeSent": "Dispatch list",
    "passTheOrder": "Release pass",
    "pending2": "Pending",
    "pendingApplication": "Pending application",
    "goodsReleased": "Released goods",
    "inDischarge": "In discharge",
    "goodsToBeReleased": "Goods to be released",
    "declare": "declare",
    "loadArrangement": "Unloading",
    "masterWaybill": "Master waybill",
    "paperless": "paperless",
    "paperlessContainer": "Paperless packing list",
    "separateDelivery": "Separate delivery",
    "mainOrderDelivery": "Main order delivery",
    "separateManifest": "Split manifest",
    "masterManifest": "Master manifest",
    "transportation": "Transportation",
    "market": "market",
    "business2": "business",
    "stockOutPlan": "Out of warehouse plan",
    "deliveryOfGoods": "Goods handover receipt",
    "warehousingPlan": "Warehousing plan",
    "warehouseEntryNotice": "Warehousing notice",
    "warehouseOutRecord": "Warehouse out record",
    "warehouseEntryRecord": "Warehousing record",
    "exportDeclaration": "Export declaration confirmation",
    "reinsurancePolicy": "reinsurance policy",
    "mainOrder": "Master copy",
    "neutralBillOfLading": "Neutral bill of lading",
    "mixedLoadList": "Mixed load list",
    "operationPlan": "Operation plan",
    "documentaryBillOfLading": "D / O / b",
    "operationSheet": "Operation surface sheet",
    "longTengXiagang": "Longteng Xiagang single",
    "generalDelivery": "General delivery list",
    "abnormal": "abnormal",
    "accountDetails": "Account details",
    "allowSbToActAlone": "allow sb. to act alone",
    "deliveryOfGoods2": "Release goods",
    "takeDeliveryOfGoods": "take delivery of goods",
    "custom": "custom",
    "original": "original",
    "waitingForNotice": "Waiting for notification",
    "seaWaybill": "Sea waybill",
    "electricDischarge": "Electric discharge",
    "original2": "original",
    "incorrectBillOfLading": "Bill of lading unconfirmed",
    "cancellationOfBillOfLading": "Cancel confirmation of bill of lading",
    "confirmationOfBillOfLading": "Bill of lading confirmation completed",
    "detailedList": "VGM list",
    "manifestOutput": "Manifest output",
    "order": "order",
    "collaborativeResults": "Collaborative results",
    "packingInYard": "Storage yard packing",
    "underAnalysis": "Parsing",
    "noTrustLetter": "No supporting book",
    "groupCollaboration": "Group collaboration",
    "newBusiness": "New business",
    "freightRate": "Freight rate",
    "orderAddition": "Order addition",
    "gateway": "gateway",
    "internalEntrustment": "Internal delegation",
    "entrust": "Coload delegation",
    "onlineDelegation": "Online entrustment",
    "generalEntrustment": "general entrustment",
    "released": "Released",
    "toBeDeclared": "To be declared",
    "theBusinessIsOver": "Business completed",
    "unfinishedBusiness": "Business not completed",
    "firstInstanceAudit": "First instance audit",
    "fclBySea": "Ocean full container occupancy",
    "fclBySea2": "Marine FCL export"
  },
  "CommonFunc": {
    "notePage": "Note: the quantity of {val1} article {val2} is inconsistent with the details!"
  },
  "SeaUtil": {
    "notifierIncluding": "The notifier contains Chinese, Chinese punctuation and full angle characters!",
    "consigneeIncluding": "The consignee contains Chinese, Chinese punctuation and full angle characters!",
    "shipperIncluding": "The shipper contains Chinese, Chinese punctuation and full angle characters!"
  },
  "Rules": {
    "theGreatestImpossibility": "Maximum cannot exceed",
    "pleaseEnterTheWholeNumber": "please enter an integer",
    "pleaseEnterAnInteger": "Please enter an integer in the range of 0 ~ 99",
    "characters": "Characters",
    "lengthCannot": "Length cannot exceed",
    "cannotBeEmpty": "Cannot be empty, and",
    "mailboxFormat": "The mailbox format is incorrect and the length cannot exceed 100 characters",
    "lengthCannot2": "The length cannot exceed 60 characters",
    "lengthCannot3": "The length cannot exceed 400 characters",
    "lengthCannot4": "The length cannot exceed 200 characters",
    "lengthCannot5": "The length cannot exceed 1000 characters",
    "lengthCannot6": "The length cannot exceed 100 characters",
    "lengthCannot7": "The length cannot exceed 10 characters",
    "lengthCannot8": "The length cannot exceed 3500 characters",
    "lengthCannot9": "The length cannot exceed 2000 characters",
    "lengthCannot10": "Length cannot exceed 1750 characters",
    "lengthCannot11": "The length cannot exceed 600 characters",
    "cannotExceed": "Cannot exceed 10 characters",
    "onlyInput": "Only English and English symbols can be entered",
    "lengthCannot12": "The length cannot exceed 150 characters",
    "lengthCannot13": "The length cannot exceed 9 characters",
    "lengthCannot14": "The length cannot exceed 4000 characters",
    "onlyInput2": "Only numbers can be entered",
    "cannotBeEmpty2": "Cannot be empty and cannot exceed 30 characters in length",
    "cannotBeEmpty3": "Cannot be empty, and the length cannot exceed 120 characters",
    "lengthCannot15": "The length cannot exceed 5 characters",
    "cannotBeEmpty4": "Cannot be empty and cannot exceed 60 characters in length",
    "cannotBeEmpty5": "Cannot be empty and cannot exceed 10 characters in length",
    "cannotBeEmpty6": "Cannot be empty and cannot exceed 50 characters in length",
    "lengthCannot16": "The length cannot exceed 128 characters",
    "lengthCannot17": "The length cannot exceed 120 characters",
    "pleaseEnterTheCombination": "Please enter a valid voyage",
    "pleaseEnterTheCombination2": "Please enter a valid number of days",
    "pleaseEnterTo": "Please enter a positive integer from 1 to 99",
    "lengthCannot18": "The length cannot exceed 1500 characters",
    "lengthCannot19": "The length cannot exceed 8 characters",
    "lengthCannot20": "The length cannot exceed 7 characters",
    "cannotBeEmpty7": "Cannot be empty and cannot exceed 1000 characters in length",
    "boxTypeCannot": "Box type cannot be empty",
    "lengthCannot21": "The length cannot exceed 16 characters",
    "lengthCannot22": "The length cannot exceed 250 characters",
    "lengthCannot23": "The length cannot exceed 800 characters",
    "lengthCannot24": "The length cannot exceed 15 characters",
    "sealLength": "The seal length cannot exceed 30",
    "caseNumberLength": "Case number length cannot exceed 11",
    "lengthCannot25": "The length cannot exceed 900 characters",
    "cannotBeEmpty8": "Cannot be empty and cannot exceed 500 characters in length",
    "onlyInput3": "Only English can be entered",
    "cannotBeEmpty9": "Cannot be empty, length cannot exceed 10 characters",
    "decimalPlaces": "The number of decimal places cannot exceed 2",
    "decimalPlaces2": "The number of decimal places cannot exceed 1",
    "decimalPlaces3": "The number of decimal places cannot exceed 3",
    "cannotContain": "Cannot contain Chinese, Chinese punctuation, full angle characters!"
  }
}