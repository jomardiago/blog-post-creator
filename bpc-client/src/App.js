import React, { useState } from 'react';
import styled from 'styled-components';
import Form from './components/Form';
import Preview from './components/Preview';

const MainContainer = styled.div`
  display: flex;
`;

function App() {
  const [content, setContent] = useState('');

  function previewBlog(content) {
    setContent(content);
  }

  return (
    <div>
      <MainContainer>
        <Form previewBlog={previewBlog} />
        <Preview content={content} />
      </MainContainer>
    </div>
  );
}

export default App;
