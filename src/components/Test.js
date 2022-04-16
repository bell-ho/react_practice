import React, { useEffect, useState } from 'react';
import SuperTreeview from 'react-super-treeview';
import 'react-super-treeview/dist/style.css';

const Test = () => {
  const [data, setData] = useState([]);

  const data2 = [
    { id: 1, name: '닥터소프트', parent_id: null },
    { id: 2, name: '대표이사', parent_id: 1 },
    { id: 3, name: '경영지원팀', parent_id: 1 },
    { id: 4, name: '전략기획실', parent_id: 1 },
    { id: 5, name: '영업마케팅본부', parent_id: 1 },
    { id: 6, name: '영업기술그룹', parent_id: 5 },
    { id: 7, name: '영업팀', parent_id: 6 },
    { id: 8, name: '기술지원1팀', parent_id: 6 },
    { id: 9, name: '기술지원2팀', parent_id: 6 },
    { id: 10, name: '기술지원3팀', parent_id: 6 },
    { id: 11, name: '제품마케팅그룹', parent_id: 5 },
    { id: 12, name: '마케팅팀', parent_id: 11 },
    { id: 13, name: '기술연구소', parent_id: 1 },
    { id: 14, name: '제품운영그룹', parent_id: 13 },
    { id: 15, name: '제품개발팀', parent_id: 14 },
    { id: 16, name: 'NC5팀', parent_id: 14 },
    { id: 17, name: 'QA팀', parent_id: 14 },
    { id: 18, name: '연구개발그룹', parent_id: 13 },
    { id: 19, name: '코어개발팀', parent_id: 18 },
    { id: 20, name: '전략제품개발실', parent_id: 13 },
    { id: 21, name: 'SMP개발팀', parent_id: 20 },
  ];
  data2[0]['isExpanded'] = true;

  const nest = (items, id = null, link = 'parent_id') =>
    items
      .filter((item) => item[link] === id)
      .map((item) => ({ ...item, children: nest(items, item.id) }));

  useEffect(() => {
    setData(nest(data2));
  }, []);

  return (
    <div
      style={{
        minWidth: '165px',
        height: 'fit-content',
        background: 'white',
        padding: '3%',
        marginTop: '20px',
      }}
    >
      <SuperTreeview
        data={data}
        onUpdateCb={(updatedData) => {
          setData(updatedData);
        }}
        isCheckable={(node, depth) => {
          return false;
        }}
        isDeletable={(node, depth) => {
          return true;
        }}
        noChildrenAvailableMessage=""
        isExpandable={(node, depth) => {
          return node.children.length >= 1;
        }}
      />
    </div>
  );
};

export default React.memo(Test);
