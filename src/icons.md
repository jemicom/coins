# 리엑트 아이콘 사용

```
//https://www.npmjs.com/package/reactstrap
// npm install --save reactstrap
// npm i --save bootstrap
// bootstap을 react에서 사용할 수 있도록 패키지로 제작한 것
// import 'bootstrap/dist/css/bootstrap.css';
// index.js 에 추가 할 수도 있고
// https://reactstrap.github.io/?path=/story/home-installation--page
```

# Faicons사용법 1
```
import  { Alert, UncontrolledAlert, Button,  } from 'reactstrap'

// npm i react-icons -D  디자인
// npm install react-icons --save
// https://react-icons.github.io/react-icons/
// https://www.npmjs.com/package/react-icons

//import { FaBeer } from 'react-icons/fa';
<FaTrashAlt
role="button"
tabIndex="0"
/>
```
# Faicons사용법 2
```
import * as FaIcons from 'react-icons/fa';
<FaIcons.FaTimes color="#000" size="1.5em" onClick={ handleToggle }  />
```
# npm i react-icons 목록 확인 
## https://ionic.io/ionicons 사용법 
index.html 링크를 삽입한 후 사이트에서 아이콘 복사 붙여넣기 

# material_icons 사용법
1. https://developers.google.com/fonts/docs/material_icons
2 .문서 중간 쯤  **material icon library** 선택

 ```
Browsing and downloading individual icons
The complete set of material icons are available on the **material icon library**. The icons are available for download in SVG or PNGs, formats that are suitable for web, Android, and iOS projects or for inclusion in any designer tools.
3. 필요한 아이콘 선택하면 폰트 사용하는 법과 같고 
오른쪽에 Static icon font Link => index.html
페이지는 Inserting the icon의 태그를 복사 붙여넣기

# simple-icon은 링크로도 사용 가능하나 
svg를 직접 다운 로드 하여 사용하는 것이 편함 
