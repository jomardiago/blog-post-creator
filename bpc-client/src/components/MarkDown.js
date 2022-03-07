import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

const StyledMarkDown = styled(ReactMarkdown)`
    line-height: 2rem;

    ol, ul {
        padding-left: 1rem;
    }

    code {
        background-color: var(--gray);
        padding: .2rem;
        font-size: .9rem;
        border-radius: .2rem;
    }

    pre {
        padding: .8rem;
        border-radius: .2rem;
        border: 1px solid var(--gray);
        background-color: var(--lightGray);
        overflow: auto;
        
        code {
          fontSize: 0.9 rem;
          background-color: inherit;
        }
    }

    blockquote {
        border-left: .3rem solid var(--darkGray);
        padding-left: 1rem;
    }
`;

function MarkDown({ content }) {
    return <StyledMarkDown children={content} />
}

export default MarkDown;
