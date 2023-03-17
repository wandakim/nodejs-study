const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log('incoming...');
  const url = req.url;
  res.setHeader('Content-Type', 'text/html'); //setHeader를 지정해줘서 html임을 알려준다.
  // Content-Type 헤더는 데이터의 MIME 타입을 나타내는 필드이다.
  if (url === '/') {
    // 아무 경로도 없다면
    fs.createReadStream('./html/index.html').pipe(res); // ?res 연결해주는 부분이 낯설다
  } else if (url === '/courses') {
    fs.createReadStream('./html/courses.html').pipe(res);
  } else {
    fs.createReadStream('./html/not-found.html').pipe(res);
  }

  // 서버에 있는 resource를 클라이언트에 보내줄 수 있다.
});

server.listen(8080);
