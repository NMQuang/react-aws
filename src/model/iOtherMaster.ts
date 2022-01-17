export interface ICompany {
  companyId: string;
  companyCode: string;
  companyName: string;
}

export interface IBranch {
  branchId: string;
  branchCode: string;
  branchName: string;
}

export interface ICustomer {
  customerId: string;
  customerCode: string;
  customerName: string;
}

export interface ISiteDataResponse {
  id: string;
  clientSiteName: string;
}

export interface IOtherMasterResponse {
  clientData: IClientDataResponse;
  siteData: ISiteDataResponse[];
}

export interface IClientDataResponse {
  companyList: ICompany[];
  branchList: IBranch[];
  customerList: ICustomer[];
}
