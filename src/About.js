import React from 'react';
import qs from 'qs';

const About = ({location}) => {
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true, // 이 설정으로 ?를 생략
    })
    const showDetail = query.detail === 'true'; // 쿼리의 파싱 결과 값은 문자열
    console.log(query)
    console.log(showDetail)
    return (
        <div>
            <h1>소개</h1>
            <p>예제 프로젝트</p>
            {showDetail && <p>detail 값 true</p>}
        </div>
    );
};

export default About;
