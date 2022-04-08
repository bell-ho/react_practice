import React, {useEffect} from 'react';

const HistorySample = ({history}) => {

    const handleGoBack = () => {
        history.goBack();
    }

    const handleGoHome = () => {
        history.push('/');
    }

    useEffect(() => {
        // const unblock = history.block('정말 아웃?');

        return () => {
            // unblock();
        }
    }, [history])

    return (
        <div>
            <button onClick={handleGoBack}>뒤로</button>
            <button onClick={handleGoHome}>홈으로</button>
        </div>
    );
};

export default HistorySample;
