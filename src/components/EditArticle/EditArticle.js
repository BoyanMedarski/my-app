import React, { useState } from "react";
import { Tabs, Tab, Container } from 'react-bootstrap';
import ArticleForm from '../ArticleForm/ArticleForm';
import languages from "../../constants/languages";

const EditArticle = ({ language }) => {
    const [key, setKey] = useState(languages[0]);

    return <>
        <Container>
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
            >
                {languages.map(lang =>
                    <Tab eventKey={lang} title={lang} key={lang}>
                        <ArticleForm language={lang} />
                    </Tab>
                )}
            </Tabs>
        </Container>
    </>
};

export default EditArticle;
