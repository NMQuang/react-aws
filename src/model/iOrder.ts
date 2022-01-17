export interface IOrderAddHeaderRequest {
  selfBranchCode?: string;
  // orderNo?: string,
  companyCode?: string;
  branchCode?: string;
  customerCode?: string;
  clientSiteCode?: string;
  postalCode?: string;
  allAddress?: string;
  tantoName?: string;
  mobilePhone?: string;
  parkingInfo?: string;
  locationKB?: string;
  keyInfo?: string;
  moveInFlag?: string;
  planViewFlag?: string;
  fileUrl?: string;
  memo?: string;
  closeDate?: Date;
  installationDate?: Date;
  installationTime?: Date;
  deleteFlag?: boolean;
}

export interface IOrderAddResponse {
  newOrderNo?: string;
}
