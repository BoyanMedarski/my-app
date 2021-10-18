import React, { useEffect, useState } from 'react';

const ArticleView = ({ match }) => {
    useEffect(() => {
        console.log(match.params.locale)
        console.log(match.params.id)
    },[])

    return <div>Article</div>
};

export default ArticleView;
