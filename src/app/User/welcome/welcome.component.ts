import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from 'src/app/Service/master.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  selectedGroup: any;
  appLang;
  languageUrl:any;
  appLangDetail;
  server:any;
  heroService: any;
  aData: any;
  value1 = "";
  readonly getmac = 'localhost:63103/getHash';
  // server:any;
  selected='english';
  department=[
    {id:1 , name:"rahul"},
    {id:1 , name:"onkar"},
    {id:1 , name:"joshi"},
    
  ];

  common ={
        'common': [{
          'DBTINFertilizer': '',
          'Home': '',
          'Logout': '',
          'DeviceRegistration': '',
          'RetailerId': '',
          'RetailerIdisrequired': '',
          'RetailerIdshouldbe60r7digitsandonlynumbersareallowed': '',
          'Pin': '',
          'PINisrequired': '',
          'PINshouldbe4digitsandOnlynumbersallow': '',
          'Next': '',
          'AgencyName': '',
          'MobileNumber': '',
          'AadhaarNumber': '',
          'VirtualID': '',
          'VirtualIDshouldbe16digitandonlynumberesareallowed': '',
          'EnterAadhaarNumber': '',
          'GetOTP': '',
          'RefNumber': '',
          'EnterOTP': '',
          'Authenticate': '',
          'DesktopDeviceRegisteredSuccessfully': '',
          'Login': '',
          'SelectUser': '',
          'LoginSuccessfully': '',
          'AcknowledgmentReceipt': '',
          'Acknowledgment': '',
          'SalesOfFertilizer': '',
          'CancelSaleAcknowledgment': '',
          'Report': '',
          'Admin': '',
          'FertilizerStockReport': '',
          'SaleToMixtureManufacturers': '',
          'SaleToPlanterAssociation': '',
          'SaleToFarmer': '',
          'SaletoFarmer': '',
          'DoesBuyerHasAadhaarCard': '',
          'Yes': '',
          'No': '',
          'RetailerSale': '',
          'UsingAadhaarNumber': '',
          'Aadhaarnumbershouldbe12digitsandonlynumbersareallowed': '',
          'Aadhaarnumberisrequired': '',
          'consentDetails': '',
          'specifictransactionandfornootherpurposes': '',
          'ConsentOfRetailerAckCancelation': '',
          'Ownerself': '',
          'LandOwner': '',
          'Decline': '',
          'Back': '',
          'Accept': '',
          'BuyerName': '',
          'EnterBuyerName': '',
          'BuyerNameisRequired': '',
          'AadhaarEnrolmentID': '',
          'EnterAadhaarEnrolmentID': '',
          'OtherIdType': '',
          'EPICNumber': '',
          'EnterEPICNumberisrequired': '',
          'EnterKCCNumber': '',
          'KCCNumbershouldbe16digit': '',
          'DoesthisPhotoIDmatchwithbuyer': '',
          'AdviceBuyerToBringAnotherPhotoID': '',
          'EnterSoilHealthCardNumber': '',
          'DoesBuyerHasSoilHealthCard': '',
          'State': '',
          'Year': '',
          'CardNo': '',
          'FarmerNo': '',
          'Period': '',
          'EnterCardNo': '',
          'EnterFarmerNo': '',
          'Sale': '',
          'RecommendedQuantity': '',
          'SoilHealthCardRecommendationDetails': '',
          'BySoilHealthCardNumber': '',
          'SelectCrop': '',
          'SelectCrop_Name': '',
          'EnterLandAreainAcres': '',
          'StockAvailability': '',
          'SelectCompanyPlant': '',
          'SelectPlantProduct': '',
          'PlantProduct': '',
          'AvailableQuantityMT': '',
          'Unit': '',
          'PriceRs': '',
          'AmountRs': '',
          'SaleQty': '',
          'SelectUnit': '',
          'SubsidyRs': '',
          'FertilizerSaleToday': '',
          'fortyfiveKgBag': '',
          'fiftyKgBag': '',
          'twentyfiveKgBag': '',
          'KgBag': '',
          'EntersaleQty': '',
          'EnterPrice': '',
          'Add': '',
          'DetailsOfTheSaleEntered': '',
          'SaleQtyUnit': '',
          'Delete': '',
          'Submit': '',
          'SaleConfirmation': '',
          'AreYouSureYouWanttoSubmit': '',
          'COMPANYNAME': '',
          'PLANT': '',
          'PRODUCTNAME': '',
          'SaleSubmittedSuccessfully': '',
          'Close': '',
          'CASHCREDITRECEIPT': '',
          'From': '',
          'RetailerNameAddress': '',
          'RetailerIDLast3Digits': '',
          'CertificateRegistrationNo': '',
          'InvoiceNo': '',
          'DateTime': '',
          'GSTIN': '',
          'AadhaarNo': '',
          'BuyerAddress': '',
          'To': '',
          'CompanyPlant': '',
          'Product': '',
          'QuantityUnit': '',
          'UnitPriceRs': '',
          'SubTotal': '',
          'Total': '',
          'SGST': '',
          'TotalTaxAmount': '',
          'SubsidyAmountPaidbyGovermenttoCompanyRs': '',
          'Print': '',
          'SaletoMixtureManufacturers': '',
          'GSTINNo': '',
          'EnterGstinNo': '',
          'GSTINisrequired': '',
          'GSTINshouldbeinproperpattern': '',
          'StateAuthorityNo': '',
          'EnterStateAuthorityNo': '',
          'StateAuthoritynumberisrequired': '',
          'StateAuthoritynumbershouldbe12digitsandonlynumbersarea': '',
          'SelectIdType': '',
          'EnterVirtualID': '',
          'VirtualIDisrequiredforSale': '',
          'VirtualIDisrequired': '',
          'ConsentofAadhaarHolder': '',
          'SaletoPlanterInstitute': '',
          'FertilizerReceivedReport': '',
          'FertilizerReceivedDuringAPeriod': '',
          'FromDate': '',
          'ToDate': '',
          'FertilizerReceivedToday': '',
          'RetailerIdLast3Digits': '',
          'GSTINNumber': '',
          'DateTimeofReceiptGeneration': '',
          'Company': '',
          'Plant': '',
          'FertilizerSaleReport': '',
          'ReceivedQuantityMT': '',
          'ReportFrom': '',
          'FertilizerStockDuringAPeriod': '',
          'OpeningBalanceMT': '',
          'FertilizerSaleDuringAperiod': '',
          'TotalQuantityMT': '',
          'Sales': '',
          'ClosingBalanceMT': '',
          'PrintBillInDuplicate': '',
          'SaleReceiptForLast2Days': '',
          'InvoiceDateTime': '',
          'InvoiceNumber': '',
          'FertilizerStockToday': '',
          'Showbill': '',
          'DUPLICATEBILL': '',
          'FROM': '',
          'saleType': '',
          'TO': '',
          'ProductPlant': '',
          'CGST': '',
          'SSGST': '',
          'TOTALTAXAMOUNT': '',
          'SubsidyAmountPaidbyGovermentToCompanyRs': '',
          'AdminMenu': '',
          'DeviceDetails': '',
          'DealerDetails': '',
          'UpdateMobile': '',
          'UpdateMaster': '',
          'UpdatePin': '',
          'UpdateGSTINNumber': '',
          'AddUser': '',
          'DeleteUser': '',
          'Select': '',
          'LoginSucessfully': '',
          'UserName': '',
          'Mobilenumberisrequired': '',
          'OnlynumbersareallowedandMobilenumbershouldbe10digits': '',
    
          'UpdateMobileNumber': '',
          'EnterOldMobileNumber': '',
          'OldMobileNumberisrequired': '',
          'OnlyNumbersallowed': '',
          'EnterNewMobileNumber': '',
          'NewMobileNumberisrequired': '',
          'OTPisrequired': '',
          'Update': '',
          'OldRefNumber': '',
          'NewRefNumber': '',
          'EnterOldOTP': '',
          'EnterNewOTP': '',
          'UpdateGSTIN': '',
          'EnterOldGstinNumber': '',
          'Salesubmittedsucessfully': '',
          'EnterNewGstinNumber': '',
          'ConfirmNewGstinNumber': '',
          'ConfirmNewGSTINNoisrequired': '',
          'Onlynumbersallow': '',
          'EnterOldPin': '',
          'OldPinisrequired': '',
          'EnterNewPin': '',
          'ConfirmNewPin': '',
          'ConfirmNewPinisrequired': '',
          'MobileNo': '',
          'District': '',
          'GstinNo': '',
          'Mac': '',
          'CancelTodaysSale': '',
          'ByAadhaarNumberKCCNumberEPICNuber': '',
          'DoesBuyerHasAaadhaar': '',
          'ByAadhaarNumber': '',
          'SelectInvoice': '',
          'DateTimeofInvoice': '',
          'CancelBill': '',
          'TodaysBillDetails': '',
          'CancelSaleEPICKCC': '',
          'SelectIdEPICKCC': '',
          'RetailerAcknowledgementByDealerDispatchDDNumber': '',
          'EnterDispatchNumber': '',
          'DispatchNumberisrequired': '',
          'DispatchNumbershouldbenumericandof12digits': '',
          'InstructionForAcknowledgement': '',
          'PleasefollowthefollowingstepstoacknowledgereceiptofabovefertilizersthroughPoS': '',
          'PressreceiptAcknowledgementbuttonintheusermenuinPoSmachine': '',
          'EnterVehicleChallanNumberandclickacknowledgetoacknowledgereceipt': '',
          'IfreceivedquantiyislessthandispatchedclickEditandenterthequantityactuallyreceived': '',
          'AcknowledgementshouldbedoneasfaraspossibleonthesamedaytoreflectthereceiptinstockpositioninPoS': '',
          'Incaseforanyreasonyouarenotabletodelivermaterialatdesignateddealerretailer': '',
          'VehiclechallanandreturnthecorrectedcopytocompanyrepresentativewhoonreceiptwillmakenecessarychangesiniFMS': '',
          'DispatchDetailsOfDDNo': '',
          'QuantityMT': '',
          'ReceivedQuantity': '',
          'EnterQuantity': '',
          'AcknowledgementquantityshouldnotbegreaterthanReceivedQuantity': '',
          'DispatchAcknowledgedSuccessfully': '',
          'ReverseDispatch': '',
          'DetailsofReverseDispatch': '',
          'DispatchReversedSuccessfully': '',
          'StateAuthoritynumbershouldbe12digitsandonlynumbersareallowed': '',
          'FetchActiveUsers': '',
          'Reset': '',
          'CropName': '',
          'CropVariety': '',
          'Aadhaarnumberisrequiredforregistration': '',
          'EnterOwnerAadharNumber': '',
          'FertilizerSaleDuringAPeriod': '',
          'Save': '',
          'EID': '',
          'AadharEnrolmentID': '',
          'EnterAadharEnrolmentID': '',
          'EnrolmentIDisrequired': '',
          'IncorrectEIDEnteryour14digitEnrolmentID': '',
          'EnterEPICNo': '',
          'EPICNumbershouldbe10digitandinproperpattern': '',
          'ShowRecommendation': '',
          'DealerDispatchNo': '',
          'Fetch': '',
          'Reverse': '',
          'AcknowledgementReceipt': '',
          'Onlynumbersareallowed': '',
          'AadharNumbershouldbe12digitsandonlynumbersareallowed': '',
          'NewGSTINNoisrequired': '',
          'GSTINNoisrequired': '',
          'NewGSTINNoshould': '',
          'GSTINNoshould': '',
          'ConfirmNewGSTINNoshouldbeinproperpattern': '',
          'ByAadhaarNumberVirtualId': '',
          'KCCNumberisrequired': '',
          'NewGSTINNoshouldbeinproperpattern': '',
          'Acknowledgement': '',
          'SaletoPlanterAssociation': '',
          'PrintBillinDupliCate': '',
          'FertilizerStockDuringAperiod': '',
          'SaleCancelledSuccessfully': '',
          'DeviceRegistrationSucessfully': '',
          'GSTINUpdatedSuccessfully': '',
          'MobileNumberUpdatedSuccessfully': '',
          'PinUpdatedSuccessfully': '',
          'UserDeletedSuccessfully': '',
          'UserAddedSuccessfully': '',
          'EnterDealerDispatchDDNumberandclickacknowledgetoacknowledgereceipt': '',
          'Enterthequantityactuallyreceived': '',
          'PriceShouldNotExceedMRP': '',
    
          'instack': '',
          'steps': '',
          'one': '',
          'two': '',
          'three': '',
          'fourth': '',
          'fifth': '',
          'AadharNumberisrequired': '',
          'UserNameisrequired': '',
          'MobileNumberisrequired': '',
          'selectedValue': '',
          'SelectCropName': '',
          'TodayBillDetails': '',
          'NewPinisrequired': '',
          'GSTINNoshouldbeinproperpattern': '',
          'DispatchNumberisRequired': '',
          'EnterDispatchNo': '',
          'EPIC': '',
          'KCC': '',
          'EPICNumberisrequired': '',
          'ReceiptCancelledSuccessfully': '',
          'PleaseselectUnit': '',
          'ProductAlreadyAdded': '',
          'QuantitycannotbeNull': '',
          'PricecannotbeNull': '',
          'pleaseAddProductBeforeSubmit': '',
          'Tenant': '',
    
    
          'BuyerDetails': '',
          'EnterBuyerDetails': '',
          'SelectCropGroup': '',
          'TotalOperationalLandHoldingInAcre': '',
          'EnterTotalOperationalLandHoldingInAcre': '',
          'TotalOperationalLandHoldingInAcreIsRequired': '',
          'CropGroupandCropalreadyadded': '',
          'EnterMobileNumber': '',
          'PleaseEnterMobileNumber': '',
          'PleaseEnterTotalOperationalLand': '',
          'pleaseselectCropGroupId': '',
          'PleaseSelectState': '',
          'PleaseSelectDistrict': '',
          'PleaseSelectVillage': '',
          'PleaseSelectSubDistrict': '',
          'Village': '',
          'duplicate': '',
          'FirstNameofFarmer': '',
          'EnterFirstName': '',
          'FirstNameofFarmerIsRequired': '',
          'NameofFarmer': '',
          'FarmerSurname': '',
          'EnterFarmersSurname': '',
          'FarmersSurnameIsRequired': '',
          'FatherName': '',
          'EnterFatherName': '',
          'FatherNameIsRequired': '',
          'Male': '',
          'Female': '',
          'Other': '',
          'Gender': '',
          'OnlyAlphabetsareallowed': '',
          'Sno': '',
          'Crop': '',
          'SelectDistrict': '',
          'EnterVillageName': '',
          'UnauthorisedAccess': '',
          'SelectState': '',
          'SelectSubDistrict': '',
          'SubDistrict': '',
          'SelectVillage': '',
          'NewPinandConfirmpinDoesntMatch': '',
          'PleaseSelectYear': '',
          'PleaseSelectCardNumber': '',
          'PleaseEnterFarmerNumber': '',
          'Recommendation1': '',
          'Recommendation2': '',
          'FertilizerName': '',
          'Dosekgha': '',
          'YourRequirementkg': '',
          'ReverseConfirmation': '',
          'ConsentRequestHasBeenRejectedSuccessfully': '',
          'KindlyUpdateTheApplication': '',
          'Pleaseselectlanguage': '',
          'PleaseSelectCropfromThelist': '',
          'PleaseselectCrop': '',
          'SaleToFarmerInvoice': '',
          'PLANTNAME': '',
          'PleaseSelectGender': '',
          'pleaseselectCropGroup': '',
          'PleaseselectSubDistrict': '',
          'PleaseEnterFathersName': '',
          'pleaseEnterBuyersFirstname': '',
          'pleaseEnterBuyerslastname': '',
          'Self': '',
          'PurchasingFor': '',
          'CropGroup': '',
          'EnteredDetailDoesntMatch': '',
          'PlantersGSTINShouldNotSameAsTheRetailersGSTIN': '',
          'MixtureManufacturerGSTINShouldNotSameAsTheRetailersGSTIN': '',
    
          'ForgotPin': '',
          'PleaseEnterOTP': '',
          'Cancel': '',
          'RequestOTP': '',
          'PersonalInformation': '',
          'ToKnowtheStockpositionatretailer': '',
          'OrderReceivedsucessfully': '',
          'AndroidApplicationRegisteredSuccessfully': '',
          'ADD': '',
          'AcknowledgedOrder': '',
          'AddRythuBharosaKendraRBKUser': '',
          'AllOrder': '',
          'AllRBKWise': '',
          'DeleteRBKUser': '',
          'DispatchDateAndTime': '',
          'EnterOrderNumber': '',
          'FarmerName': '',
          'FarmerOrderAcknowledgment': '',
          'FarmerOrderDetailOrderCancellation': '',
          'FarmerOrderDetailsStatus': '',
          'FarmerOrderReceiving': '',
          'HubRetailer': '',
          'OrderByRBK': '',
          'OrderDateAndTime': '',
          'OrderDateTime': '',
          'OrderID': '',
          'OrderNO': '',
          'OrderNumber': '',
          'OrderPendingForDispatch': '',
          'OrdersDelivered': '',
          'OrdersDispatchedSuccessfully': '',
          'RBKName': '',
          'RBKOrderDispatch': '',
          'RBKOrderDispatchDetails': '',
          'RBKWise': '',
          'RythuBharosaKendraRBK1': '',
          'SelectAllOrderNumber': '',
          'SelectIDType': '',
          'Status': '',
          'CancelOrder': '',
          'FarmerOrderCancellation': '',
          'FarmerOrderDetail': '',
          'TotalItems': '',
          'OrderCancelledSucessfully': '',
          'SelectAll': '',
          'OrderDetails': '',
          'FarmerOrderDetailDeliveryconfirmation': '',
          'OrdersPendingForDispatch': '',
          'OrdersDispatched': '',
          'AcknowledgedOrders': '',
          'SelectRBKUser': '',
          'OrderDate': '',
          'Deliverycancelled': '',
          'DeliveryDatecancelledDate': '',
          'RBKModule': '',
          'OrderBooking': '',
          'OrderAcknowledgment': '',
          'RBKConfirmationofDelivery': '',
          'OrderDetailsStatusWise': '',
          'OrderDispatch': '',
          'AddRBKUser': '',
          'OrderDeliveredSucessfully': '',
          'UpdatePosMaster': '',
          'MacId': '',
          'Allorder': '',
          'PleaseSelectRbkWiseorAllRbkWise': '',
          'SelectAllOrderNumber1': '',
          'DispatchackDetails': '',
          'FetchAgencyName': '',
          'EnterAgencyName': '',
          'AuthenticationMode': '',
          'BioMatricBasedAuthentication': '',
          'OTPBasedAuthentication': '',
          'balanceqtyshouldnotbeblank': '',
          'AreYouPurchasingFor': '',
          'BuyersmonthlypurchaselimitexceededTxnDecline': '',
          'InvalidEnrolmentID': '',
          'PrintByBluthooth': '',
          'PrintByUSB': '',
          'Ordercancelled': '',
          'PleaseEntertheAadhaarNumberofOtherPerson': '',
          'RegistrationDetailstobeEnteredbyRetailLicenceHolderOnly': '',
          'RetailerName': '',
          'PleaseConfirmWhetherRetailersNameMentionedAboveMatches': '',
          'PleaseContactLFSToCorrect': '',
          'UserMenu': '',
          'ScanDevice': '',
          'FarmerOrder': '',
          'DetailsOfFarmerOrder': '',
          'OrderConfirmation': '',
          'EnterOrderQuantity': '',
          'OrderQuantity': '',
          'FarmerOrderDetails': '',
          'PleaseEnterAadhaarVirtualIdNumber': '',
          'Soldincludesqtyfromacknowledgement': '',
          'Receivedincludesqtyfromcancelledorders': '',
          'SUCCESS': ''          
        }
      ]
  };
  
  

  constructor(private http:HttpClient, private router:Router,
              private masterUrlandApi:MasterService) {
    
  }

  // getVal() {
  //   this.selectedGroup="dd"
  //   console.log(this.selectedGroup); // returns selected object
  //   console.log(this.selectedGroup.id); // returns selected option's id
  //   console.log(this.selectedGroup.name)
  // }

  getVal() {
    console.log(this.department.filter(x => x.name == this.selectedGroup)[0].name)
    localStorage.setItem("name",this.department.filter(x => x.name == this.selectedGroup)[0].name)
  }
  headers = new HttpHeaders().set('Content-type', 'application/json').set('charset', 'UTF-8')
  .set('Access-Control-Allow-Origin', '*')
  .set('Access-Control-Allow-Methods', 'POST')
  .set('Access-Control-Allow-Headers', 'Content-Type,Authorization');

  select($event){
    console.log("$event.value");
    console.log($event.value);
  }

  // selectch($event) {
    // console.log("Dsd");
    // this.value1 = $event.target.value;
    // console.log(deviceValue);
    // console.log($event.target.value.languageId);
    // console.log($event.source.value);
    // console.log($event.source);
    // console.log($event.target.value)
    // if(this.server==true){
      // localStorage.setItem("lang",$event.target.value)
    // }
  
    // return (event.target as HTMLInputElement).value; 

  // }
  // changeLanguage($event: any) {
    // this.translate.use(lang);
    // console.log("check");
    // localStorage.setItem('language',$event);
    // console.log('language',$event);
    // console.log('language',$event.target);
    // console.log('language',$event.target.value.language);
    // console.log('language',$event);
    // window.location.reload();
  // }

  // changeLanguages($event:any){
  //   console.log("checksss");
  //   console.log(this.appLang);

    // localStorage.setItem('language',$event);
    // console.log('languages',$event);
    // console.log('languages',$event.target);
  // }

  del($event){
    console.log("D");
    // console.log($event.target.value.languageId);
    // localStorage.setItem("lang",$event.target.value)

  }

 

  deleteItem($event:any){

    // console.log($event.source.value);
    console.log($event.target);
    console.log($event.source);
    console.log("delete");

  }

  ngOnInit(): void {

    this.languageUrl=this.masterUrlandApi.getmasterApiUrl()+'/labels/languages';
    console.log(this.languageUrl);

    this.http.get(this.languageUrl,{}).subscribe((res)=> {
      this.appLang=res;
      console.log(this.appLang.length);
      console.log(this.appLang);
      if(this.appLang.length>0){
        this.server=true;
      }
  });
  }

  
}
