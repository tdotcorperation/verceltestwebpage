// App.js 또는 index.js 파일 (React 프로젝트 기준)

import React from 'react';

function App() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f0f4f8',
      color: '#333',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ fontSize: '3em', color: '#0070f3' }}>안녕하세요, 존슨우님! 🎉</h1>
      <p style={{ fontSize: '1.5em', textAlign: 'center', maxWidth: '600px', lineHeight: '1.6' }}>
        이 페이지는 Vercel에 성공적으로 배포되었습니다! <br />
        Vercel의 뛰어난 배포 능력을 테스트해 보세요. 
      </p>
      <p style={{ fontSize: '1.2em', marginTop: '20px' }}>
        코딩은 언제나 즐겁죠! 계속해서 멋진 프로젝트 만들어봐요! 😉
      </p>
    </div>
  );
}

export default App;
