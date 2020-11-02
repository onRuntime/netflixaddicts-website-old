import React, { FC, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

import { Poster } from '../../components';
import { Sheet } from '../../interfaces';

const Encyclopedia: FC = (props) => {
  const [sheets, setSheets] = useState<Sheet[]>();

  useEffect(() => {
    /*getSheets().then((sheets: Sheet[]) => {
      setSheets(sheets);
    })*/
  }, [props]);

  return (
    <>
      <Helmet>
        <title>{process.env.REACT_APP_BASE_TITLE} - Encyclopédie</title>
      </Helmet>

      <div className="container encyclopedia">
        <div className="search-box row">
          <div className="search-text col-md-6">
            <div className="search-icon left">
              <img src="" alt=""></img>
            </div>
          </div>
          <div className="search-filter col-md-6">
            <div className="search-icon right">
              <img src="" alt=""></img>
            </div>
          </div>
        </div>

        {
          sheets
            ? sheets.map((sheet, i) => <Poster key={i} sheetList={JSON.stringify(sheet)} />)
            : <div>Loading sheets...</div>
        }
      </div>
    </>
  );
}

export default Encyclopedia;