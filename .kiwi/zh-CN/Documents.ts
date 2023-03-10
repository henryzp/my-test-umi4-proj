export default {
  CtnListInfo: {
    woodenPacking: '木质包装详情',
    maximumBitSize: '最多3位小数',
    onlyInput: '只能输入不超过10位的数字',
    onlyInput2: '只能输入不超过12位的数字',
    onlyInput3: '只能输入不超过10 个字符的正整数',
    onlyInput4: '只能输入不超过16 个字符的数字',
    required: '必填项，只能输入英文、数字和英文符号, 长度不能超过 1000 个字符',
    cargoDetails: '货物明细的HS CODE',
    noOperation: '暂无操作权限',
    containerization: '集装箱装载信息',
    bromide: '溴化物',
    synchronousContainerization: '同步集装箱',
    dielectric: '电介质',
    suchAsProcessing: '如加工、加固',
    suchAsFumigation: '如熏蒸、检疫',
    onlyInput5: '只能输入不超过200个字符',
    notPerLine: '每行不得超过5个字符!',
    maximumInput: '最多输入50行!',
    onlyInput6: '只能输入不超过10000个字符',
    synchronousMemory: '同步中存在箱封号一致，箱型不一致的集装箱！',
    export: '导出',
    generateByBox: '按箱生成货物明细',
    fromContainer: '从集装箱同步',
    singleContainer: '按单集装箱 维护货描唛头',
    containerLetter: '集装箱信息',
    suchAsCurrentGoods: '如当前货物明细中有值，将会被覆盖',
    confirmBySet: '确认按集装箱生成货物明细吗？',
    containerTrain: '集装箱列表',
    onlyInput7: '只能输入不超过5000个英文字符',
    lengthNotAllowed: '长度不允许超过2000字符',
    required2: '必填项，最多3位小数',
    required3: '必填项，只能输入不超过10位的数字',
    required4: '必填项，只能输入不超过12位的数字',
    requiredItem: '必填项，请输入合法的包装单位',
    requiredItem2: '必填项，请输入合法的件数',
    cargoDetails2: '货物明细',
  },
  CtnListInfoForAI: {
    manufacturers: '制造商的名称和地址',
    onlyInput: '只能输入不超过7位的数字，最多2位小数',
    englishName: '英文名',
    onlyInput2: '只能输入不超过3位的数字',
    maximumBitSize: '最多2位小数',
    onlyInput3: '只能输入不超过180个英文字符',
    required: '必填项，只能输入6-10 个字符的数字',
    onlyInput4: '只能输入6-10 个字符的数字',
    atLeastOne: '至少有一条装载信息！',
    required2: '必填项，只能输入6个字符的数字',
    information: 'Item信息：',
    shippingMark: '货描唛头：',
    fromSynchronization: '从 SI 同步',
    youWillSync:
      '您将同步对应SI的集装箱和件毛体信息，如您已在当前页面维护了集装箱的货物明细，也将被清空，请知晓',
    fromSyncSet: '从SI同步集装箱信息',
    information2: 'Item信息',
    shippingMark2: '货描唛头',
    pleaseEnterBit: '请输入2-15位字母或数字',
    notDetected: '未检测到数据，请检查数据后重试。',
    byMaintenance: '按Item维护',
    unifiedMaintenance: '统一维护',
    caseByCaseMaintenance: '按箱维护',
    yiYi: '[a-zA-Z一-龥]+',
    volume: '体积（CBM）',
    grossWeight: '毛重（KGS）',
    synchronization: '同步SI',
  },
  DocumentsTipModal: {
    thereIsAlready: '存在【已锁单】的提单，点击【知晓并处理】将自动解锁。',
    andComparison: '和HBL SI 比对：',
    andComparison2: '和MBL SI 比对：',
    latestChanges: '最新变更时间：',
    knowAndPunish: '知晓并处理',
    synchronizationSucceeded: '同步成功',
    gotIt: '知道了',
    informationChange: '信息变更提示',
    afterChange: '变更后',
    beforeChange: '变更前',
    orderInformation: '订单信息',
    fieldName: '字段名',
    handler: '处理人',
  },
  ISF: {
    timeGrid:
      'PassPort 时——格式为 XXXXXXXXXXXXXXX（15位），XX是大写英文字母或数字',
    theFormatIs: 'SCAC时格式为 XXXX（必须4位），X是大写英文字母',
    theFormatIs2: 'SSN时格式为 NNN-NN-NNNN（3位-2位-4位），N是数字',
    theFormatIs3: 'CBP时格式为 NNNNNN-NNNNN（6位-5位），N是数字',
    theFormatIs4:
      'EIN时格式为 NN-NNNNNNNXX（2位-9位），N是数字，XX是大写字母或数字。如果没有后缀，请在最后两个“XX”字符中使用“00”',
    viewReceipt: '查看回执',
    customs: '海关：',
    sendOut: '发送',
    receiptStatus: '回执状态：',
    toSend: '去发送：',
    noMoreThanMinutes: '超30分钟未收到反馈',
    warning: '警示',
    thereIsAMistake: '有错误',
    receiving: '接收中',
    toBeSent: '待发送',
    timedOut: '已超时',
    bitWordRequired: '必须4位字符（字母/数字）',
    upstreamFreightForwarder:
      '上游货代的Carrier Code号（当货代单类型包含Coloader场景时需要填写）',
    upstreamFreightForwarder2:
      '上游货代单号（当货代单类型包含Coloader场景时需要填写）',
    freightForwardingOrderType:
      '货代单类型：\n-Regular：面对直客，本单BCO，没有上下层\n-Master：下层NBO\n-Coloader：上层有提单\n-MasterAndColoader：上下层都有提单',
    nvocc: '无船承运人（货代）编码，自申报号',
    containerCargo: '集装箱货物',
    onlyInput: '只能输入多7位数字',
    containerInformation: '箱货信息容器',
    containerInformation2: '箱货信息',
    shipCode:
      '船舶代码（即船舶登记在国际海事组织的识别号，IMO是国际海事组织的简称）',
    lengthLimit: '长度限制2-10个字符',
    lengthLimit2: '长度限制2-5个字符',
    shipownersOrderNo: '船东单号（需要去掉SCAC号）',
    forwarderNo: '货代单号（需要去掉SCAC号）',
    essentialInformation: '基本信息-内容',
    mostSupported: '支持最多10位大写英文',
    detailedInformation: '详细信息-第四列',
    detailedInformation2: '详细信息第四列内容',
    detailedInformation3: '详细信息',
    supportNumbers: '支持数字输入',
    detailedInformation4: '详细信息-第三列',
    detailedInformation5: '详细信息第三列内容',
    detailedInformation6: '详细信息-第二列',
    transceiverSection: '收发通-第二列',
    detailedInformation7: '详细信息-第一列',
    transceiverSection2: '收发通-第一列',
    singleInformation: 'H单信息',
    underSingleInformation: 'H单信息-下',
    singleInformation2: 'H单信息-上',
    maximumInput: '最多输入60位数字',
    insuranceCompany: '保险公司保证金号',
    maximumInput2: '最多输入3位数字',
    insuranceCompany2: '保险公司代码',
    marginHolding:
      '保证金持有者类型：\n进口商或代理商\n保税商品\n国际承运人\n外贸区\nISF自己的保证金\n',
    marginCategory: '保证金类型：\n年次\n单次\n',
    identityInformation: 'isf身份信息-最后一行',
    identityInformation2: 'isf身份信息-最后一行内容',
    marginHolding2: '保证金持有者的证件号',
    marginHolding3:
      '保证金持有者的证件类型：\n美国税号\n非美国公司的海关登记号\n个人社保号\n',
    identityInformation3: 'isf身份信息-第四列',
    identityInformation4: 'isf身份信息-第四列内容',
    passportCountry: '护照国家',
    consignees: '收货人的名称和地址',
    consignees2:
      '收货人的美国报税号类型：\n美国税号\n非美国公司的海关登记号\n个人社保号\n个人护照号\n',
    identityInformation5: 'isf身份信息-第三列',
    identityInformation6: 'isf身份信息-第三列内容',
    identityInformation7: '#isf身份信息-第三列',
    identityInformation8: '#isf身份信息-第二列',
    importers: '进口商的海关登记号',
    importers2:
      '进口商的海关登记号类型：\n美国税号\n非美国公司的海关登记号\n个人社保号\n个人护照号\n',
    identityInformation9: 'isf身份信息-第二列',
    identityInformation10: 'isf身份信息-第二列内容',
    importerSafety: '进口商安全申报的海关登记号',
    importerAn:
      '进口商安全申报的海关登记号类型：\n美国税号\n非美国公司的海关登记号\n承运人自申报号\n个人社保号\n个人护照号\n',
    identityInformation11: 'isf身份信息-第一列',
    identityInformation12: 'isf身份信息-第一列内容',
    unconventionalGoods: '非常规货物子类别',
    transitNumber: '过境号',
    transitCountries: '过境国家',
    typeOfGoods:
      '货物类型：\n-常规货品\n-预订货物\n-家用品\n-军用品和政府用品\n-外交物品\n-过境物品\n-返回美国的物品\n-自由贸易区物品\n-国际邮件\n-非大陆架物品\n-非常规物品',
    identityInformation13: 'isf身份信息-第一行',
    identityInformation14: 'isf身份信息-第一行内容',
    identityInformation15: 'isf身份信息',
    identityInformation16: 'ISF身份信息',
    bookingAgent: '订舱代理的名称和地址',
    sellersName: '卖家的名称和地址',
    buyersName: '买家的名称和地址',
    packingAddress: '装箱地址',
    lclCompany: '拼箱公司的名称和地址',
    locationOfDelivery: '交货地的名称和地址',
    deliveryOfGoods: '货物送达方的名称和地址',
    placeOfDelivery: '交货地的名称和地址/货物送达方的名称和地址',
    notifiers: '通知人的名称和地址',
    shippers: '发货人的名称和地址',
    informationFirst: 'Parties 信息-第一列',
    information: 'Parties 信息',
    information2: 'PARTIES 信息',
    locationOfDischarge: '卸货地的清关地点代码',
    portOfDestination: '目的港的清关地点代码',
    portInformation: '港口信息-第三列',
    portInformation2: '港口信息第四列内容',
    port: '港口-container',
    afterArrivingInTheUnitedStates: '到美国后的第一个挂靠港的预计到港时间',
    theLastOne: '最后一个非美国的挂靠港的预计开航时间',
    locationOfDischarge2: '卸货地的预计到港时间',
    portOfDestination2: '目的港的预计到港时间',
    portOfDeparture: '起运港的预计开航时间',
    locationOfReceivingPlace: '接货地的预计开航时间',
    portInformation3: '港口信息-第二列',
    nonAmerican: '非美国的卸货港',
    afterArrivingInTheUnitedStates2: '到美国后的第一个挂靠港',
    theLastOne2: '最后一个非美国的挂靠港',
    placeOfDischarge: '卸货地，即提单中的Place of Delivery',
    portInformation4: '港口信息-第一列',
    portInformation5: '港口信息第三列内容',
    portInformation6: '港口信息',
    maximumBitWord: '最多4位字符！',
    sendingForm: 'ISF发送形式',
    checkInformation: '勾选信息-第二行',
    checkInformation2: '勾选信息-发送形式',
    usEntry:
      '美国的入境类型：\n港口到港口（货物最终目的地是美国）\n内陆运输（货物最终目的地是美国）\n过境出口（货物最终目的地不是美国）\n立即再出口（货物最终目的地不是美国）\n留在船上（货物最终目的地不是美国）',
    checkInformation3: '勾选信息-ISFTOE',
    canadian:
      '加拿大的入境类型：\n-进口货物（等同于港到港，最终目的地是加拿大，发Emanifest）\n-转运货物去美国（等同于TransitExport,最终目的地在美国，发ACI）\n-留在船上（等同于StayOnBoard，不在加拿大卸货，发ACI）\n-内陆运输（最终目的地是加拿大，发Emanifest）',
    checkInformation4: '勾选信息-ACITOE',
    checkInformation5: '勾选信息-AMSTOE',
    checkInformation6: '勾选信息-第一行',
    checkInformation7: '勾选信息-isf',
    checkInformation8: '勾选信息-aci',
    checkInformation9: '勾选信息-AMS',
    sendOverseas: '发送海外代理状态：',
    messageStatus: '报文状态：',
    sendOverseas2: '发送海外代理',
    operationFailed: '操作失败，发送海外代理必须勾选ISF',
    sorryWhen: '抱歉，当前的海外操作代理暂不支持发送',
    operationFailed2: '操作失败，至少勾选一种反恐舱单',
    modifyMessage: '修改报文',
    pleaseCorrectItFirst: '请先修正当前页面数据',
    sendOverseas3: '发送海外代理成功',
    confirm: '是否确认删除?',
    deleteCounterTerrorism: '删除反恐舱单',
    failInSend: '发送失败',
    sending: '发送中',
  },
  MergeOrderButton: {
    orderNoWithdrawal: '订单号/提单号',
    selectAll: '全选',
    fieldVerification: '字段校验一致',
    unopenedOrder: '未拆单',
    unlimited: '不限',
    hasItBeenRemoved: '是否已拆单',
    isItLocked: '是否已锁单',
    customerConsolidation: '客户并单',
    agentConsolidation: '代理并单',
    largeAgentAnd: '大代理并单',
    consolidationScenario: '并单场景',
    toBeCombinedAndListedSeparately: '待并单列表',
    consolidation: '并单',
    confirmationAndOrderConsolidation: '确认并单',
    selectConsolidation: '选择并单订单',
    pleaseChoose: '请选择提单',
    screen: '筛选',
    pleaseBookTheSpaceFirst: '请先订舱确认',
    rpaError:'请先处理补料解析文件后再并单',
    jiyidaSystem: '集翊达制单同步后无法执行拆单，并单操作',
  },
  Receipt: {
    customsReceipt: '海关回执详情',
    noDataAvailable: '&nbsp;暂无数据',
    scheme: '方案：',
    stateDescription: '状态描述或原因：',
    receiptTime: '回执时间：',
    close: '关闭',
    receiptCode: '回执代码：',
    viewSend: '查看发送报文',
    receiptType: '回执类型：',
    detailedInformation: '详细信息代码：',
    receiptDetails: 'Tradetech 回执详情',
    see: '查看',
    specificFields: '具体字段说明',
    receivingStatus: '接收状态',
  },
  Si: {
    robotCompensation: '机器人补料',
    appendix: '附录',
    lockList: '锁单',
    unlocking: '解锁',
    onlineFeeding: '# 线上补料',
    unlockPortal: '解锁门户SI',
    confirm: '是否确认删除该并单提单？确认后将解绑所有并单提单的合并关系',
    confirmDeletion: '确认删除该单证吗？',
    saveRelease: '保存放单备注成功',
    cannotBeEmpty: 'hbl no不能为空',
    essentialInformation: '基本信息容器',
    essentialInformation2: '基本信息组件',
    essentialInformation3: '基本信息分割线',
    onlyInput: '只能输入不超过50个字符',
    onlyInput2: '只能输入英文字符',
    essentialInformation4: '基本信息第二列容器',
    essentialInformation5: '基本信息第二列下',
    essentialInformation6: '基本信息第二列上',
    essentialInformation7: '基本信息第一列',
    pleaseEnterTo: '请输入至多3位小数',
    lengthToBeGuaranteed:"长度需保证6位字符",
    pleaseEnterTheNumber: '请输入数字，最大不能超过12位',
    pleaseEnterAnInteger: '请输入整数，最大不能超过10位',
    containerInformation: '箱货信息内容',
    releaseNotes: '放单备注容器',
    releaseNotes2: '放单备注内容',
    noRelease: '不放单',
    releaseNotes3: '放单备注',
    issuingInformation: '签发信息',
    issuingInformation2: '签发信息容器',
    shipInformation: '船信息内容',
    shipInformationContent: '船信息容器',
    partyInfo2: 'PARTY信息',
    partyInfo: 'PARTY信息内容',
    partyInfoContent: 'PARTY信息容器',
    onlyInput3: '只能输入0-10的整数',
    gateway: '门户SI HSCode',
    twoWayShip: '（二程船名/航次）',
    bookingVessel: '（订舱船名/内部航次）',
    bookingVessel2: '（订舱船名/外部航次）',
    issuingInformation3: '签发信息内容',
    issuingInformation6: '签发信息第二列',
    fromSingleSynchronization: '从H单同步',
    onYourPage: '您页面上存在内容修改，请先保存后再进行同步！',
    totalAll: '合计所有H单',
    totalAll2: '合计所有子单的H单',
    selectSynchronization: '选择同步来源:',
    youWillSync: '您将同步被并订单的H提单中的以下信息：货描、唛头、备注',
    sendingOrder: '发送M单AMS',
    sendOut: '发送EDI',
    internalPrinting:
      '{val1}：打单内容中的公司名称与收发通详情中的公司名称相似度过低',
    continue: '是否继续发送',
    pushSucceeded: '推送成功',
    supplementaryFields: '补充字段',
    cannotBeEmpty2: 'mbl no不能为空',
    essentialInformation8: '基本信息下',
    essentialInformation9: '基本信息第二列中2',
    essentialInformation10: '基本信息-分割线',
    onlyInput4: '只能输入不超过100个字符',
    open: '是',
    close: '否',
    hasPlanFee: '是否显示运费',
    applicableOnly: 'SCAC Code (仅限HSDG适用)',
    essentialInformation11: '基本信息第二列中1',
    essentialInformation12: '基本信息第二列中',
    onlyInput6: '只能输入不超过60个字符',
    essentialInformation13: '基本信息上容器',
    sameAsSlaveRecord: '从录单同步收发通',
    containerInformation2: '箱货信息容器上',
    referenceResources: '参考BKG',
    shipInformation2: '船信息',
    applicableOnly2: 'SCAC Code (仅限HSDG适用) :',
    receivingTime: 'DRAFT 接收时间:',
    theComparisonIsConsistent: '对比一致',
    thereAreDifferences: '存在不一致',
    comparison: 'MBL DRAFT 比对',
    cabinet: '柜)',
    alreadyEquipped: '(已配',
    splitTheBill: '拆单',
    rpaSplitError: '请先处理补料解析文件后再拆单',
    pleaseInputTheBox: '请输入箱号查询',
    pleaseSaveItFirst: '请先保存提单！',
    cancelAll: '撤销所有拆单',
    withdrawPressCabinet: '撤回按柜拆单',
    orderByCabinet: '按柜拆单',
    splitOrderRetention: '分单保留Origin号码',
    subtotal: '小计：',
    confirmThatItWillComeOff: '确认将{val1}脱离当前提单吗？',
    state: 'EDI状态',
    billOfLadingNo: '提单号',
    receiptDetails: 'SI 回执详情',
    ourCompanyCutOffTheBill: '我司截单时间:',
    appendixInformation: '附录信息',
    releaseDetails: '放单详情',
    releaseStatus: '放单状态',
    cancelDeletion: '取消(删除)',
    sentSuccessfully: '发送成功',
    theBillOfLadingIsIssued: '该提单出单方式为SEAWAY，请先放单',
    passed: '已通过',
    onYourPage2: '您页面上存在内容修改，请先保存再发送',
    pleaseSaveItFirst2: '请先保存再发送',
    exportSucceeded: '导出成功',
    onYourPage3: '您页面上存在内容修改，请先保存再导出',
    pleaseSaveItFirst3: '请先保存再导出',
    portalUnlocking: '门户解锁成功',
    withdrawalSuccessful: '撤回成功',
    unlockingSucceeded: '解锁成功',
    orderLockedSuccessfully: '锁单成功！',
    youWillSync1:
      '您将同步H单中的以下信息：货描、唛头、总的件毛体和包装、集装箱列表和货物明细',
    fromBeingMerged: '从被并订单的H单同步',
    chineseSymbols: '已解绑',
    afterSeparation: '脱离后，记得检查当前并单提单的集装箱和品名唛头信息。',
    breakAwayFromTheCurrent: '脱离当前提单吗？',
    confirmWill: '确认将',
    lockInformation: '锁定信息',
    releaseInformation: '解除信息锁定',
    thisIsASinglePhase: '该提单相关信息已锁定',
    thisBillOfLadingLetter: '该提单信息锁定已解除',
    current: '（当前）',
    unbound: '解绑',
    cancellationAndConsolidation: '解除并单绑定关系成功',
    confirmRelease: '确认解除所有并单绑定关系吗？',
    recoveryAndConsolidation: '恢复并单',
    noSingleBinding: '无并单绑定关系，请先恢复并单绑定关系',
    of: '的',
    currentBillOfLading: '当前提单已合并至订单',
    billOfLading1: '票提单',
    chuansiyueNo: '船司约号',
    historicalConsolidation: '历史并单关系',
    currentBillOfLading1: '当前提单已无并单关系记录，如无需要可手动删除。',
    jiyidaSystem: '集翊达制单同步后无法执行拆单，并单操作',
    jiyidaSycn: '集翊达制单同步',
    currentPage: '当前页面存在更改未保存内容，请先保存再进行当前操作。',
    pleaseBookTheSpaceFirst: '请先集翊达订舱同步',
    operationSuccessful: '提单信息已成功发送',
    dischargePartTransmission: '电放件输出',
  },
  Root: {
    counterTerrorismManifest: '反恐舱单/安全申报',
    orderInformation: '订单信息变更提示，请关注',
    allIn: 'MBL SI 中的所有子单已被同时赋值订舱的MBL NO，请检查是否需要修改',
  },
};
