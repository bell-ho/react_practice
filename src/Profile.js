import React from 'react';
import WithRouterSample from "./WithRouterSample";

const data = {
    velopert: {
        name: 'ㅁㅁㅁ',
        description: 'rrrrr',

    },
    gildong: {
        name: 'ㅁㅁㅁ2',
        description: 'rrrrr2',

    }
}

const Profile = ({match}) => {
    // URL 파라미터를 사용할 때 라우트로 사용되는 컴포넌트에서 match라는 객체의 params 값을 참조한다
    // match 안에는 현재 컴포넌트가 어떤 경로 규칙에 의해 보이는지에 대한 정보가 있다.
    const {username} = match.params;
    const profile = data[username];
    return (
        <div>
            <h3>
                {username}({profile.name})({profile.description})
                <WithRouterSample/>
            </h3>
        </div>
    );
};

export default Profile;
