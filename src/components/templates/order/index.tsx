/* eslint-disable @typescript-eslint/no-explicit-any */
import { yupResolver } from '@hookform/resolvers/yup';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { SingleValue } from 'react-select';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from 'src/components/atoms/button';
import { Checkbox } from 'src/components/atoms/checkbox';
import { ErrorMessage } from 'src/components/atoms/error-message';
import { Input } from 'src/components/atoms/input';
import { InputSelect } from 'src/components/atoms/input-select';
import {
  list,
  listOrderLeft,
  listOrderLefttable,
  listOrderRight,
} from 'src/components/atoms/input-select/index.stories';
import { Loader } from 'src/components/atoms/loader';
import { ButtonContainer } from 'src/components/molecules/button-container';
import { CheckboxContainer } from 'src/components/molecules/checkbox-container';
import { DateField } from 'src/components/molecules/date-field';
import { InputForm } from 'src/components/molecules/input-form';
import { SelectForm } from 'src/components/molecules/select-form';
import { Table, TableCell } from 'src/components/molecules/table';
import { TimeField } from 'src/components/molecules/time-field';
import { ModalDialog } from 'src/components/organisms/modal-dialog';
import { TableContainer } from 'src/components/organisms/table-container';
import {
  MSG_ERROR_001,
  MSG_ERROR_002,
  MSG_ERROR_003,
  MSG_ERROR_006,
  MSG_ERROR_007,
  MSG_ERROR_008,
  MSG_ERROR_009,
  MSG_SUCCESS_001,
  notSpecialChartRegex,
  phoneNumberRegex,
  URL_FACTORY,
} from 'src/constants/constants';
import { useActions, useMasterActions, useOrderActions } from 'src/hooks/useAction';
import { useTypedSelector } from 'src/hooks/useTypedSelectors';
import { IAddressSelect } from 'src/model/iAddess';
import { IDataSelect } from 'src/model/iDataSelect';
import { IBranch } from 'src/model/iOtherMaster';
import { IPostCodeRequest } from 'src/model/iPostCode';
import { ISelfBranchRequest, ISelfBranchResponse } from 'src/model/iSelfBranch';
import { parseMessage } from 'src/ultis/common.util';
import * as yup from 'yup';
import { BranchMasterPopup } from '../branch-master-popup';
import { GenbaMasterPopup } from '../genba-master-popup';

export const TemplateOrder: React.FC = () => {
  const { getBranchMaster, getObjectMaster } = useMasterActions();
  const { getPostCode } = useActions();
  const { addOrder } = useOrderActions();
  const { dataBranch, loadingBranch } = useTypedSelector(state => state.selfBranchMaster);
  const { dataMaster, loadingMaster } = useTypedSelector(state => state.otherMaster);
  const { dataPostCode, loadingPostCode } = useTypedSelector(state => state.postcode);
  const { dataOrder, loadingOrder } = useTypedSelector(state => state.orderAdd); //TODO:
  const [selfBranchName, setSelfBranchName] = useState<ISelfBranchResponse | null>();
  const [companyMaster, setCompanyMaster] = useState<IDataSelect[]>([]);
  const [branchMaster, setBranchMaster] = useState<IDataSelect[]>([]);
  const [customerMaster, setCustomerMaster] = useState<IDataSelect[]>([]);
  const [siteDataMaster, setSiteDataMaster] = useState<IDataSelect[]>([]);
  const [postcodeMaster, setPostcodeMaster] = useState<IAddressSelect[]>([]);
  const [postcodeAddress, setPostcodeAddress] = useState({
    postCode: '',
    allAddress: '',
    latitude: '',
    longitude: '',
  });
  const [isBranchOpened, setisBranchOpened] = useState(false);
  const [isGenbaOpened, setisGenbaOpened] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getBranchMaster();
  }, []);

  // handle load other master: ?????????, ?????????, ????????????, ?????????
  useEffect(() => {
    if (dataMaster) {
      // Set data of ?????????
      const companyLst: SingleValue<IDataSelect[]> = dataMaster.clientData.companyList?.map(data => ({
        value: data.companyCode,
        label: data.companyName,
      }));
      setCompanyMaster(companyLst);

      // Set data of ?????????
      const branchLst: SingleValue<IDataSelect[]> = dataMaster.clientData.branchList?.map(data => ({
        value: data.branchCode,
        label: data.branchName,
      }));
      setBranchMaster(branchLst);
      // Set data of ????????????
      const customerLst: SingleValue<IDataSelect[]> = dataMaster.clientData.customerList?.map(data => ({
        value: data.customerCode,
        label: data.customerName,
      }));
      setCustomerMaster(customerLst);
      // Set data of ?????????
      const siteDataLst: SingleValue<IDataSelect[]> = dataMaster.siteData?.map(data => ({
        value: data.id,
        label: data.clientSiteName,
      }));
      setSiteDataMaster(siteDataLst);
    }
  }, [dataMaster]);

  useEffect(() => {
    if (dataPostCode) {
      const addressLst: SingleValue<IAddressSelect[]> = dataPostCode?.map(data => ({
        value: data.postCode,
        label: data.allAddress,
        latitude: data.latitude,
        longitude: data.longitude,
      }));
      setPostcodeMaster(addressLst);
    }
  }, [dataPostCode]);

  const schema = yup.object().shape({
    selfBranchCode: yup.string().required(parseMessage(MSG_ERROR_001, ['???????????????'])),
    companyCode: yup.string().required(parseMessage(MSG_ERROR_001, ['?????????'])),
    branchCode: yup.string().required(parseMessage(MSG_ERROR_001, ['?????????'])),
    customerCode: yup.string().required(parseMessage(MSG_ERROR_001, ['????????????'])),
    clientSiteCode: yup.string().required(parseMessage(MSG_ERROR_001, ['?????????'])),
    postCode: yup.string().required(parseMessage(MSG_ERROR_001, ['????????????'])),
    // .matches(portalCodeRegex, parseMessage(MSG_ERROR_004, ['????????????'])), // TODO:
    allAddress: yup
      .string()
      // .required(parseMessage(MSG_ERROR_001, ['????????????'])) // TODO:
      .matches(notSpecialChartRegex, parseMessage(MSG_ERROR_002, ['????????????'])),
    tantoName: yup
      .string()
      .required(parseMessage(MSG_ERROR_001, ['????????????']))
      .matches(notSpecialChartRegex, parseMessage(MSG_ERROR_002, ['????????????'])),
    mobilePhone: yup
      .string()
      .required(parseMessage(MSG_ERROR_001, ['??????']))
      .matches(phoneNumberRegex, parseMessage(MSG_ERROR_003, ['??????'])),
    parkingInfo: yup
      .string()
      .required(parseMessage(MSG_ERROR_001, ['???????????????']))
      .matches(notSpecialChartRegex, parseMessage(MSG_ERROR_002, ['???????????????'])),
    locationKB: yup
      .string()
      .required(parseMessage(MSG_ERROR_001, ['KB??????']))
      .matches(notSpecialChartRegex, parseMessage(MSG_ERROR_002, ['KB??????'])),
    keyInfo: yup
      .string()
      .required(parseMessage(MSG_ERROR_001, ['?????????']))
      .matches(notSpecialChartRegex, parseMessage(MSG_ERROR_002, ['?????????'])),
    memo: yup
      .string()
      .required(parseMessage(MSG_ERROR_001, ['??????']))
      .matches(notSpecialChartRegex, parseMessage(MSG_ERROR_002, ['??????'])),
    closeDate: yup
      .date()
      .required(parseMessage(MSG_ERROR_001, ['????????????']))
      .min(new Date(), parseMessage(MSG_ERROR_006, ['????????????'])),
    installationDate: yup
      .date()
      .required(parseMessage(MSG_ERROR_001, ['?????????']))
      .min(yup.ref('closeDate'), parseMessage(MSG_ERROR_007, ['?????????', '????????????'])),
    installationTime: yup.date().required(parseMessage(MSG_ERROR_001, ['??????'])),
  });

  const {
    handleSubmit,
    formState: { errors },
    control,
    setError,
    clearErrors,
    getValues,
  } = useForm({ mode: 'onChange', resolver: yupResolver(schema) });

  // Process order
  const onHandleOrder = () => {
    // TODO:
    // // Re-format date and time
    // let { closeDate, installationDate, installationTime } = getValues();
    // closeDate = dayjs(closeDate).format('YYYY-MM-DD');
    // installationDate = dayjs(installationDate).format('YYYY-MM-DD');
    // installationTime = dayjs(installationTime).format('HH:mm');
    // // Get data postCode and allAddress from state.
    // const { postCode, allAddress } = postcodeAddress;
    // // Get other data
    // const {
    //   selfBanchCode,
    //   companyCode,
    //   branchCode,
    //   customerCode,
    //   clientSiteCode,
    //   tantoName,
    //   mobilePhone,
    //   parkingInfo,
    //   locationKB,
    //   keyInfo,
    //   moveInFlag,
    //   planViewFlag,
    //   meno,
    // } = getValues();
    // Call API order
    addOrder(''); // TODO:
    toast.success(parseMessage(MSG_SUCCESS_001, ['Order']), {
      position: 'top-right',
      autoClose: 5000,
      theme: 'colored',
    });
  };

  // handle change ???????????????
  const onHandleChangeSelfBranch = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Set data ???????????????
    const { value } = e.target;
    const objBranchCode: ISelfBranchRequest = { branchCode: value };
    getObjectMaster(objBranchCode);
    const selfBranchDisplay = dataBranch?.filter(
      (item: IBranch) => item.branchCode == objBranchCode.branchCode.trim()
    );
    setSelfBranchName(selfBranchDisplay && selfBranchDisplay.length > 0 ? selfBranchDisplay[0] : null);
  };

  // handle change ????????????, ????????????
  const onHandleChangePostCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Handle clear message error of ????????????
    clearErrors('allAddress');
    const { value } = e.target;
    if (value.length >= 3) {
      const postcode: IPostCodeRequest = { postcode: value };
      getPostCode(postcode);
    }
  };

  // handle select ????????????
  const onChangeSelectAddress = (data: any) => {
    //TODO:
    setPostcodeAddress({
      postCode: data.value,
      allAddress: data.label,
      latitude: data.latitude,
      longitude: data.longitude,
    });
  };

  // handle open googleMap: ????????????
  const onHandleOpenGoogleMap = () => {
    if (postcodeAddress.latitude && postcodeAddress.longitude) {
      if (postcodeAddress.latitude && postcodeAddress.longitude) {
        const url = `https://maps.google.com/?z=20&q=${postcodeAddress.latitude.toString()},${postcodeAddress.longitude.toString()}`;
        if (typeof url != 'undefined') {
          window.open(url, '_blank');
        }
      }
    } else {
      // Add error message of ????????????
      setError('allAddress', {
        type: 'manual',
        message: parseMessage(MSG_ERROR_009, ['????????????', '????????????']),
      });
    }
  };

  return (
    <div className="t-order">
      <ToastContainer />
      <form onSubmit={handleSubmit(onHandleOrder)}>
        <div className="t-order__button-container">
          <ButtonContainer modifiers="rounded-container">
            <Button modifiers="big-rounded" bgColor="white">
              ??????
            </Button>
            <Button modifiers="big-rounded" bgColor="white">
              ??????
            </Button>
            <Button modifiers="big-rounded" bgColor="white">
              ??????
            </Button>
          </ButtonContainer>
        </div>
        <section className="t-order__input-container">
          <div className="t-order__grid">
            <div className="item1">
              <Controller
                control={control}
                name="selfBranchCode"
                render={({ field: { onChange, value, name } }) => (
                  <InputForm
                    modifierLabel="gray"
                    secondIconLable="search"
                    modifiers="datalist"
                    listInput="selfBranchCode"
                    optionsInput={dataBranch?.map(data => ({
                      key: data.branchCode,
                      value: data.branchName,
                    }))}
                    name={name}
                    onSelect={(e: React.ChangeEvent<HTMLInputElement>) => {
                      onHandleChangeSelfBranch(e);
                      onChange(e);
                    }}
                    value={value}
                    selfbranchname={selfBranchName ? selfBranchName?.branchName : undefined}
                    onClick={() => setisBranchOpened(true)}
                  >
                    ???????????????
                  </InputForm>
                )}
              />
              <div className="error-message">
                {errors.selfBranchCode && <ErrorMessage>{errors.selfBranchCode?.message}</ErrorMessage>}
              </div>
            </div>
            <div></div>
            <div className="item2">
              <InputForm modifierLabel="gray">??????No.</InputForm>
            </div>
            <div className="item3">
              <Controller
                control={control}
                name="companyCode"
                defaultValue=""
                render={({ field: { onChange, name } }) => (
                  <SelectForm
                    modifierLabel="gray"
                    secondIconLable="search"
                    options={companyMaster}
                    nameSelect={name}
                    placeholder={companyMaster.length > 0 ? '?????????????????????????????????????????????' : ''}
                    onChange={(data: SingleValue<IDataSelect>) => {
                      onChange(data?.value);
                    }}
                  >
                    ?????????
                  </SelectForm>
                )}
              />
              <div className="error-message">
                {errors.companyCode && <ErrorMessage>{errors.companyCode?.message}</ErrorMessage>}
              </div>
            </div>
            <div className="item4">
              <Controller
                control={control}
                name="branchCode"
                render={({ field: { onChange, name } }) => (
                  <SelectForm
                    modifierLabel="gray"
                    secondIconLable="search"
                    options={branchMaster}
                    nameSelect={name}
                    placeholder={branchMaster.length > 0 ? '?????????????????????????????????????????????' : ''}
                    onChange={(data: SingleValue<IDataSelect>) => {
                      onChange(data?.value);
                    }}
                  >
                    ?????????
                  </SelectForm>
                )}
              />
              <div className="error-message">
                {errors.branchCode && <ErrorMessage>{errors.branchCode?.message}</ErrorMessage>}
              </div>
            </div>
            <div className="item5">
              <Controller
                control={control}
                name="customerCode"
                render={({ field: { onChange, name } }) => (
                  <SelectForm
                    modifierLabel="gray"
                    secondIconLable="search"
                    options={customerMaster}
                    nameSelect={name}
                    placeholder={customerMaster.length > 0 ? '?????????????????????????????????????????????' : ''}
                    onChange={(data: SingleValue<IDataSelect>) => {
                      onChange(data?.value);
                    }}
                  >
                    ????????????
                  </SelectForm>
                )}
              />
              {errors.customerCode && <ErrorMessage>{errors.customerCode?.message}</ErrorMessage>}
            </div>
            <div className="item6">
              <Controller
                control={control}
                name="clientSiteCode"
                render={({ field: { onChange, name } }) => (
                  <SelectForm
                    modifierLabel="gray"
                    secondIconLable="search"
                    options={siteDataMaster}
                    nameSelect={name}
                    placeholder={siteDataMaster.length > 0 ? '?????????????????????????????????????????????' : ''}
                    onChange={(data: SingleValue<IDataSelect>) => {
                      onChange(data?.value);
                    }}
                    onClick={() => setisGenbaOpened(true)}
                  >
                    ?????????
                  </SelectForm>
                )}
              />
              <div className="error-message">
                {errors.clientSiteCode && <ErrorMessage>{errors.clientSiteCode?.message}</ErrorMessage>}
              </div>
            </div>
            <div className="item7">
              <Controller
                control={control}
                name="postCode"
                render={({ field: { value, onChange, name } }) => (
                  <InputForm
                    modifierLabel="gray"
                    value={postcodeAddress.postCode || value}
                    name={name}
                    listInput="postCode"
                    onSelect={(e: React.ChangeEvent<HTMLInputElement>) => {
                      onHandleChangePostCode(e);
                      onChange(e);
                    }}
                  >
                    ????????????
                  </InputForm>
                )}
              />
              <div className="error-message">
                {errors.postCode && <ErrorMessage>{errors.postCode?.message}</ErrorMessage>}
              </div>
            </div>
            <div className="item8">
              <Controller
                control={control}
                name="allAddress"
                render={({ field: { onChange, name } }) => {
                  if (postcodeMaster && postcodeMaster.length > 0) {
                    return (
                      <SelectForm
                        modifierLabel="gray"
                        secondIconLable="location"
                        onClick={onHandleOpenGoogleMap}
                        options={postcodeMaster}
                        nameSelect={name}
                        placeholder={postcodeMaster.length > 0 ? '?????????????????????????????????????????????' : ''}
                        onChange={(data: SingleValue<IDataSelect>) => {
                          onChangeSelectAddress(data);
                          onChange(data?.value);
                        }}
                      >
                        ????????????
                      </SelectForm>
                    );
                  } else {
                    return (
                      <InputForm
                        modifierLabel="gray"
                        secondIconLable="location"
                        name={name}
                        onSelect={onChange}
                        disabled={true}
                        onClick={onHandleOpenGoogleMap}
                      >
                        ????????????
                      </InputForm>
                    );
                  }
                }}
              />
              <div className="error-message">
                {errors.allAddress && <ErrorMessage>{errors.allAddress?.message}</ErrorMessage>}
              </div>
            </div>
            <div className="item9">
              <Controller
                control={control}
                name="tantoName"
                render={({ field: { onChange, value, name } }) => (
                  <InputForm
                    modifierLabel="gray"
                    value={value}
                    name={name}
                    onSelect={(e: React.ChangeEvent<HTMLInputElement>) => {
                      onChange(e);
                    }}
                  >
                    ????????????
                  </InputForm>
                )}
              />
              <div className="error-message">
                {errors.tantoName && <ErrorMessage>{errors.tantoName?.message}</ErrorMessage>}
              </div>
            </div>
            <div className="item10">
              <Controller
                control={control}
                name="mobilePhone"
                render={({ field: { onChange, value, name } }) => (
                  <InputForm
                    modifierLabel="gray"
                    placeholder="000-000-0000"
                    value={value}
                    name={name}
                    onSelect={(e: React.ChangeEvent<HTMLInputElement>) => {
                      onChange(e);
                    }}
                  >
                    ??????
                  </InputForm>
                )}
              />
              <div className="error-message">
                {errors.mobilePhone && <ErrorMessage>{errors.mobilePhone?.message}</ErrorMessage>}
              </div>
            </div>
            <div className="item11">
              <Controller
                control={control}
                name="parkingInfo"
                render={({ field: { onChange, value, name } }) => (
                  <InputForm
                    modifierLabel="gray"
                    value={value}
                    name={name}
                    onSelect={(e: React.ChangeEvent<HTMLInputElement>) => {
                      onChange(e);
                    }}
                  >
                    ???????????????
                  </InputForm>
                )}
              />
              <div className="error-message">
                {errors.parkingInfo && <ErrorMessage>{errors.parkingInfo?.message}</ErrorMessage>}
              </div>
            </div>
            <div className="item12">
              <Controller
                control={control}
                name="locationKB"
                render={({ field: { onChange, value, name } }) => (
                  <InputForm
                    modifierLabel="gray"
                    value={value}
                    name={name}
                    onSelect={(e: React.ChangeEvent<HTMLInputElement>) => {
                      onChange(e);
                    }}
                  >
                    KB??????
                  </InputForm>
                )}
              />
              <div className="error-message">
                {errors.locationKB && <ErrorMessage>{errors.locationKB?.message}</ErrorMessage>}
              </div>
            </div>
            <div className="item13">
              <Controller
                control={control}
                name="keyInfo"
                render={({ field: { onChange, value, name } }) => (
                  <InputForm
                    modifierLabel="gray"
                    value={value}
                    name={name}
                    onSelect={(e: React.ChangeEvent<HTMLInputElement>) => {
                      onChange(e);
                    }}
                  >
                    ?????????
                  </InputForm>
                )}
              />
              <div className="error-message">
                {errors.keyInfo && <ErrorMessage>{errors.keyInfo?.message}</ErrorMessage>}
              </div>
            </div>
            <div className="item14">
              <CheckboxContainer>
                <Controller
                  control={control}
                  defaultValue={false}
                  name="moveInFlag"
                  render={({ field: { onChange, value, name } }) => (
                    <Checkbox
                      id="moveInFlag"
                      checked={value}
                      onSelect={(e: React.ChangeEvent<HTMLInputElement>) => {
                        onChange(e.target.checked);
                      }}
                      name={name}
                    >
                      ?????????
                    </Checkbox>
                  )}
                />
                <Controller
                  control={control}
                  defaultValue={false}
                  name="planViewFlag"
                  render={({ field: { onChange, value, name } }) => (
                    <Checkbox
                      id="planViewFlag"
                      checked={value}
                      onSelect={(e: React.ChangeEvent<HTMLInputElement>) => {
                        onChange(e.target.checked);
                      }}
                      name={name}
                    >
                      ?????????
                    </Checkbox>
                  )}
                />
              </CheckboxContainer>
              <span>
                <Button modifiers="rounded">??????????????????</Button>
              </span>
              <span className="item14__button">
                <Button modifiers="rounded">??????</Button>
              </span>
            </div>
            <div className="item15">
              <Controller
                control={control}
                name="memo"
                render={({ field: { onChange, value, name } }) => (
                  <InputForm
                    modifierLabel="gray"
                    value={value}
                    name={name}
                    onSelect={(e: React.ChangeEvent<HTMLInputElement>) => {
                      onChange(e);
                    }}
                  >
                    ??????
                  </InputForm>
                )}
              />
              <div className="error-message">
                {errors.memo && <ErrorMessage>{errors.memo?.message}</ErrorMessage>}
              </div>
            </div>
            <div className="item16">
              <Controller
                control={control}
                name="closeDate"
                render={({ field: { onChange, value, name } }) => (
                  <DateField
                    name={name}
                    onSelect={(date: Date | null) => {
                      onChange(date);
                    }}
                    value={value}
                  >
                    ????????????
                  </DateField>
                )}
              />
              <div className="error-message">
                {errors.closeDate && <ErrorMessage>{errors.closeDate?.message}</ErrorMessage>}
              </div>
            </div>
            <div className="item17">
              <Controller
                control={control}
                name="installationDate"
                render={({ field: { onChange, value, name } }) => (
                  <DateField
                    name={name}
                    onSelect={(date: Date | null) => {
                      onChange(date);
                    }}
                    value={value}
                  >
                    ?????????
                  </DateField>
                )}
              />
              <div className="error-message">
                {errors.installationDate && <ErrorMessage>{errors.installationDate?.message}</ErrorMessage>}
              </div>
            </div>
            <div className="item18">
              <Controller
                control={control}
                name="installationTime"
                render={({ field: { onChange, value, name } }) => (
                  <TimeField
                    name={name}
                    value={value}
                    onSelect={(date: Date | null) => {
                      onChange(date);
                    }}
                  >
                    ??????
                  </TimeField>
                )}
              />
              <div className="error-message">
                {errors.installationTime && <ErrorMessage>{errors.installationTime?.message}</ErrorMessage>}
              </div>
            </div>
          </div>
        </section>
      </form>
      <section className="t-order__table-container">
        <TableContainer
          textButton1="?????????????????????"
          textHeading="????????????"
          onClick={() => navigate(URL_FACTORY)}
        >
          <Table
            leftTable={
              <React.Fragment>
                <tr>
                  <TableCell>
                    <InputSelect
                      options={listOrderLefttable}
                      name={'Select'}
                      modifiers="none-border"
                      placeholder=""
                    />
                  </TableCell>
                  <TableCell>
                    <InputSelect
                      options={listOrderLeft}
                      name={'Select'}
                      modifiers="none-border"
                      placeholder=""
                    />
                  </TableCell>
                </tr>
                <tr>
                  <TableCell>
                    <InputSelect
                      options={listOrderLefttable}
                      name={'Select'}
                      modifiers="none-border"
                      placeholder=""
                    />
                  </TableCell>
                  <TableCell>
                    <InputSelect
                      options={listOrderLeft}
                      name={'Select'}
                      modifiers="none-border"
                      placeholder=""
                    />
                  </TableCell>
                </tr>
                <tr>
                  <TableCell>
                    <InputSelect
                      options={listOrderLefttable}
                      name={'Select'}
                      modifiers="none-border"
                      placeholder=""
                    />
                  </TableCell>
                  <TableCell>
                    <InputSelect
                      options={listOrderLeft}
                      name={'Select'}
                      modifiers="none-border"
                      placeholder=""
                    />
                  </TableCell>
                </tr>
                <tr>
                  <TableCell>
                    <InputSelect
                      options={listOrderLefttable}
                      name={'Select'}
                      modifiers="none-border"
                      placeholder=""
                    />
                  </TableCell>
                  <TableCell>
                    <InputSelect
                      options={listOrderLeft}
                      name={'Select'}
                      modifiers="none-border"
                      placeholder=""
                    />
                  </TableCell>
                </tr>
                <tr>
                  <TableCell>
                    <InputSelect
                      options={listOrderLefttable}
                      name={'Select'}
                      modifiers="none-border"
                      placeholder=""
                    />
                  </TableCell>
                  <TableCell>
                    <InputSelect
                      options={listOrderLeft}
                      name={'Select'}
                      modifiers="none-border"
                      placeholder=""
                    />
                  </TableCell>
                </tr>
              </React.Fragment>
            }
            midTable={
              <React.Fragment>
                <tr>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                </tr>
                <tr>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                </tr>
                <tr>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                </tr>
                <tr>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                </tr>
                <tr>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                  <TableCell>
                    <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
                  </TableCell>
                </tr>
              </React.Fragment>
            }
            rightTable={
              <React.Fragment>
                <tr>
                  <TableCell>
                    <Input></Input>
                  </TableCell>
                  <TableCell>
                    <InputSelect
                      options={listOrderRight}
                      name={'Select'}
                      modifiers="none-border"
                      placeholder=""
                    />
                  </TableCell>
                  <TableCell>4000</TableCell>
                  <TableCell>5000</TableCell>
                </tr>
                <tr>
                  <TableCell>
                    <Input></Input>
                  </TableCell>
                  <TableCell>
                    <InputSelect
                      options={listOrderRight}
                      name={'Select'}
                      modifiers="none-border"
                      placeholder=""
                    />
                  </TableCell>
                  <TableCell>6000</TableCell>
                  <TableCell>8000</TableCell>
                </tr>
                <tr>
                  <TableCell>
                    <Input></Input>
                  </TableCell>
                  <TableCell>
                    <InputSelect
                      options={listOrderRight}
                      name={'Select'}
                      modifiers="none-border"
                      placeholder=""
                    />
                  </TableCell>
                  <TableCell>3000</TableCell>
                  <TableCell>5000</TableCell>
                </tr>
                <tr>
                  <TableCell>
                    <Input></Input>
                  </TableCell>
                  <TableCell>
                    <InputSelect
                      options={listOrderRight}
                      name={'Select'}
                      modifiers="none-border"
                      placeholder=""
                    />
                  </TableCell>
                  <TableCell>2000</TableCell>
                  <TableCell>4000</TableCell>
                </tr>
                <tr>
                  <TableCell>
                    <Input></Input>
                  </TableCell>
                  <TableCell>
                    <InputSelect
                      options={listOrderRight}
                      name={'Select'}
                      modifiers="none-border"
                      placeholder=""
                    />
                  </TableCell>
                  <TableCell>1000</TableCell>
                  <TableCell>3000</TableCell>
                </tr>
              </React.Fragment>
            }
          ></Table>
        </TableContainer>
      </section>
      <ModalDialog
        textTitleDialog="????????????????????? / ??????"
        onCloseRequest={() => setisBranchOpened(false)}
        opened={isBranchOpened}
      >
        <BranchMasterPopup />
      </ModalDialog>
      <ModalDialog
        textTitleDialog="????????????????????? / ??????"
        onCloseRequest={() => setisGenbaOpened(false)}
        opened={isGenbaOpened}
      >
        <GenbaMasterPopup />
      </ModalDialog>
      {(loadingOrder || loadingPostCode || loadingMaster || loadingBranch) && <Loader />}
    </div>
  );
};
