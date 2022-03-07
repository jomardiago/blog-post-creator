import styled from 'styled-components';
import MarkDown from './MarkDown';

const PreviewContainer = styled.div`
    background-color: #FFFFFF;
    margin-top: 2rem;
    margin-left: 2rem;
    height: 600px;
    border: 1px solid var(--gray);
    border-radius: .4rem;
    width: 600px;
    padding: 1rem 2rem;
    overflow-y: auto;
`;

function Preview({ content }) {
    return (
        <PreviewContainer>
            <MarkDown content={content} />
        </PreviewContainer>
    );
}

export default Preview;
