import { InputGroup, FormControl, Form } from "react-bootstrap";
import { Editor, OriginalTools } from 'react-bootstrap-editor';
import "./ArticleForm.css";
import locale from '../../constants/locale';

const ArticleForm = ({ language }) => {

    const handleInputChange = () => {
        console.log("change")
    };
    
    return (<>
        <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="form-text">{locale[language.toLowerCase()].title}<sup className="required-mark">&#10033;</sup></InputGroup.Text>
            <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
        </InputGroup>
        <Editor
                tools={OriginalTools}
                value="<p>test</p>"
                onChange={console.log}
            />
    </>)
};

export default ArticleForm;
