const host = 'http://172.35.10.67:6060';

let config = {
	service: {
		/****服务器根路径****/
		host,

		/****登录 ****/
		login: {
			apiUrl: `/jmapi/common/public/login.json`,
			keepLogin: false
		},

		/****医院列表 ****/
		hospital: {
			apiUrl: `/jmapi/supply-chain/hospital-visit/choose-hospital.json`,
			keepLogin: false
		},

		/****医院详细信息 ****/
		hospitalDetailInfo: {
			apiUrl: `/jmapi/supply-chain/hospital-visit/get-hospital-detail-info-list.json`,
			keepLogin: false
		},

		/****医院联系信息 ****/
		hospitalContactInfo: {
			apiUrl: `/jmapi/supply-chain/hospital-visit/get-hospital-contact-list.json`,
			keepLogin: false
		},

		/****更新医院信息 ****/
		updateHospitalInfo: {
			apiUrl: `/jmapi/supply-chain/hospital-visit/update-hospital-info.json`,
			keepLogin: false
		},
		
		/****医院visit-inv-list ****/
		getHospitalVisitInvList: {
			apiUrl: `/jmapi/supply-chain/hospital-visit/get-jw-hospital-visit-inv-list.json`,
			keepLogin: false
		},
		
		/****竞争对手信息 ****/
		getCompetitorList: {
			apiUrl: `/jmapi/supply-chain/hospital-visit/get-jw-competitor-list.json`,
			keepLogin: false
		},
		
		/****产品植入量表 ****/
		getProductPlacementList: {
			apiUrl: `/jmapi/supply-chain/hospital-visit/get-product-placement-list.json`,
			keepLogin: false
		},
		
		/****拜访记录 ****/
		getVisitRecordList: {
			apiUrl: `/jmapi/supply-chain/hospital-visit/get-visit-record-list.json`,
			keepLogin: false
		},
		
		/****医院产品列表 ****/
		getHospitalProductTypeList: {
			apiUrl:`/jmapi/supply-chain/hospital-visit/get-hospital-product-type-list.json`,
			keepLogin: false
		},
		
		/****拜访医院的竞争对手信息 ****/
		getHospitalVisitOtherUserList: {
			apiUrl:`/jmapi/supply-chain/hospital-visit/get-hospital-visit-other-user-list.json`,
			keepLogin: false
		},
		
		/****保存医院拜访信息 ****/
		saveHospitalVisitInfo: {
			apiUrl:`/jmapi/supply-chain/hospital-visit/save-hospital-visit-info.json`,
			keepLogin: false
		},
		
		/****获取某记录拜访对象 ****/
		getVisitRecordContactList: {
			apiUrl:`/jmapi/supply-chain/hospital-visit/get-visit-record-contact-list.json`,
			keepLogin: false
		},

		/****获取某记录产品植入与库存信息 ****/
		getVisitRecordProductPlacementList: {
			apiUrl:`/jmapi/supply-chain/hospital-visit/get-visit-record-product-placement-list.json`,
			keepLogin: false
		},
		
		/****获取某记录竞争对手销量信息 ****/
		getVisitRecordCompetitorList: {
			apiUrl:`/jmapi/supply-chain/hospital-visit/get-visit-record-competitor-list.json`,
			keepLogin: false
		},
		
		/****获取某记录上传附件 ****/
		getVisitRecordFileList: {
			apiUrl:`/jmapi/supply-chain/hospital-visit/get-visit-record-file-list.json`,
			keepLogin: false
		},
		
		
	},
};

module.exports = config;
