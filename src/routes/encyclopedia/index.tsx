import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Axios, { AxiosResponse } from 'axios';

import { SheetInfo, Poster } from '../../components';
import { Sheet } from '../../interfaces';

const API: string = 'https://localhost:8000/api/';

function useParams() {
  return new URLSearchParams(useLocation().search);
}

export default function Encyclopedia(props: any) {
  const [data, setData] = useState<Sheet[]>();
  const params = useParams();

  const hasParam = params.has("name");

  useEffect(() => {
    const query: string = API + (!hasParam ? 'sheets' : `sheet?name=${params.get("name")}`);
    const config: any = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    };
    Axios.get(query).then((response: AxiosResponse) => {
      console.log(response.data)
      setData(response.data);
    });
  }, [props]);

  return (
    <>
      {
        data
          ? (!hasParam
            ? data.map((sheet: Sheet, i: number) =>
              <Poster key={i} sheetList={JSON.stringify(sheet)} />
            )
            : <SheetInfo sheet={JSON.stringify(data)} />
          )
          : <div className="error"></div>
      }
    </>
  );
}