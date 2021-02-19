import React from 'react';

import { useHistory } from 'react-router-dom';

const DiaryAdditionalPage = () => {
    const history = useHistory();

    const onHandelBack = () => {
        history.goBack();
    };
    return (
        <>
            <button type="button" onClick={onHandelBack}>
                <svg
                    width="15"
                    height="9"
                    viewBox="0 0 15 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M14 1.5V4.5H2M2 4.5L5.5 1M2 4.5L5.5 8"
                        stroke="black"
                        strokeWidth="2"
                    />
                </svg>
            </button>
            <h1>DiaryAdditionalPage </h1>
        </>
    );
};

export default DiaryAdditionalPage;
