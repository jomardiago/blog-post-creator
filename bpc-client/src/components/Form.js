import React, { useState } from 'react';
import styled from 'styled-components';
import { gql, useMutation } from '@apollo/client';

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const FormMain = styled.form`
    background-color: #FFFFFF;
    width: 800px;
    height: 600px;
    margin-top: 2rem;
    margin-left: 4rem;
    padding: 2rem 3rem;
    border: 1px solid var(--gray);
    border-radius: .4rem;

    input {
        height: 4rem;
        font-size: 3rem;
        border: none;
        outline: none;
        font-weight: 700;
    }

    textarea {
        resize: none;
        height: 450px;
        width: 700px;
        border: none;
        margin-top: 2rem;
        outline: none;
        font-size: 1.2rem;
    }
`;

const PublishContainer = styled.div`
    margin-left: 4rem;
    margin-top: 1rem;

    button {
        height: 2.5rem;
        width: 6rem;
        border: none;
        background-color: var(--blue);
        font-size: 1rem;
        border-radius: .3em;
        color: #FFFFFF;
        font-weight: 600;
        cursor: pointer;
        margin-right: 1rem;
    }

    .secondary {
        background-color: var(--darkGray);
        color: #FFFFFF;
    }
`;

const CREATE_BLOG = gql`
    mutation createBlog($title: String!, $content: String!) {
        createBlog(title: $title, content: $content) {
            code
            success
            message
            blog {
                content
                title
                _rev
                _id
            }
        }
    }
`;

function Form({ previewBlog }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const [createBlog] = useMutation(CREATE_BLOG, {
        variables: { title, content },
        onCompleted(data) {
            console.log(data);
            setTitle('');
            setContent('');
        }
    });

    function handleClickPreview() {
        previewBlog(content);
    }

    return (
        <FormContainer>
            <FormMain>
                <div>
                    <input 
                        type="text" 
                        id="title" 
                        name="title" 
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        placeholder="New post title here..."
                    />
                </div>
                <div>
                    <textarea 
                        name="content" 
                        id="content"
                        value={content}
                        onChange={e => setContent(e.target.value)}
                        placeholder="Write your post content here..."
                    />
                </div>
            </FormMain>
            <PublishContainer>
                <button type="button" onClick={createBlog}>Publish</button>
                <button type="button" className="secondary" onClick={handleClickPreview}>Preview</button>
            </PublishContainer>
        </FormContainer>
    );
}

export default Form;
