import React, {useEffect, useState} from 'react';
import axios from "axios";

const News = () => {
    const [data, setData] = useState(null);

    const onClick = async () => {
        try {
            const res = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&category=sports&apiKey=84d2dd8ce0444fc3a5987c5bb0177430',);
            setData(res.data);
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div>
            <div>
                <button onClick={onClick}>클릭</button>
            </div>
            {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true}/>}
        </div>
    );
};

export default News;
