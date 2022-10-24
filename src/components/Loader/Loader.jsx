import { Circles } from 'react-loader-spinner';
import style from './Loader.module.scss';

export const Loader = () => {
  return (
    <div className={style.loaderWrapper}>
      <Circles
        height="100"
        width="100"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};
