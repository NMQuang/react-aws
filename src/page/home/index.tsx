import 'firebase/auth';
import 'firebase/database';
import React, { useState } from 'react';
import { Loader } from 'src/components/atoms/loader';
import { TableInfomation } from '../../components/atoms/table-information';
import { useActions } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelectors';

const HomePage: React.FC = () => {
  const [dataInput, setPostCodeInput] = useState('');
  const { dataPostCode, errorPostCode, loadingPostCode } = useTypedSelector(state => state.postcode);
  const { getPostCode } = useActions();

  const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newData = e.currentTarget.value;
    setPostCodeInput(newData);
  };

  const onGetPostCode = () => {
    getPostCode(dataInput);
  };

  // const loadPostCodeList = dataPostCode?.map(
  //   (
  //     item: {
  //       prefCode: string;
  //       cityCode: string;
  //       postcode: string;
  //       oldPostcode: string;
  //       pref: string;
  //       city: string;
  //       town: string;
  //       allAddress: string;
  //       location: { latitude: string; longitude: string };
  //     },
  //     index: React.Key | null | undefined
  //   ) => (
  //     <div className="flex-col" key={index}>
  //       <TableInfomation
  //         textId={item.prefCode}
  //         textName={item.cityCode}
  //         userId={item.postcode}
  //         userName={item.oldPostcode}
  //       />
  //       <TableInfomation
  //         textId={item.pref}
  //         textName={item.city}
  //         userId={item.town}
  //         userName={item.allAddress}
  //       />
  //       <TableInfomation
  //         textId={item.location.latitude}
  //         textName={item.location.longitude}
  //         userId="NULL"
  //         userName="NULL"
  //       />
  //     </div>
  //   )
  // );

  return (
    <div className="App">
      {errorPostCode && <p>{errorPostCode}</p>}
      <div className="center-box">
        <div className="flex-col">
          <div className="flex-container">
            <div className="flex-col">
              <input onChange={onTextChange} value={dataInput} />
            </div>
            <div className="flex-col">
              <button onClick={onGetPostCode}>Get data</button>
            </div>
            {/* {loadPostCodeList} */}
          </div>
        </div>
      </div>
      {loadingPostCode && <Loader />}
    </div>
  );
};

export default HomePage;
