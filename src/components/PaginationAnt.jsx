import { Pagination } from 'antd';

export const PaginationAnt = ({ current, total, pageSize, onChange }) => {
  return (
    <Pagination
      current={current}
      total={total}
      pageSize={pageSize}
      onChange={onChange}
      showSizeChanger={false}
      style={{display:"flex", margin:"0 auto", padding:"30px"}}
    />
  );
};
