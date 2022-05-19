# Next js 기초

## Search Engine Optimization

### 1. SEO 란?

seo는 검색 엔진 최적화를 의미한다. seo의 목표는 검색 엔진 결과에서 더 눈의 띄이게 만드는 것을 목표로 한다.

이런 seo가 중요한 이유는 순위가 높을수록 사이트에 더 많은 유기적 트래픽이 발생하기 때문인데 이렇게 트래픽이 발생한다면 더 많은 비지니스로 이어지기 때문에 굉장히 중요한 부분이라고 할 수 있다.

검색 시스템은 일반적으로 google, naver, bing등과 같은 검섹 엔진을 의미한다. 검색 시스템에는 네 가지의 주요 책임이 있다.

1. 크롤링

   > 웹을 탐색하고, 모든 사이트의 콘센츠의 구문을 분석하는 프로세스이다. 약 3억 5천만 개 이상의 도메인을 사용할 수 있으므로 굉장히 큰 작업이라고 볼 수 있다.

2. 인덱싱

   > 액세스할 수 있또록 크롤링 단계에서 수집된 데이터들을 저장할 위치를 찾는 작업이다.

3. 렌더링

   > 사이트의 기능을 향상하고 콘텐츠를 풍부하게 만드는 즉 javascript와 같은 페이지의 모든 리스소들을 실행 시키는 작업을 의미합니다. 이 프로세스는 콘텐츠가 실제로 인덱싱 되기전에 발생한다.

4. 순위

   > 사용자 입력을 기반으로 관련 검색 결과 페이지를 만들기 위해 데이터를 쿼리한다. 여기서 다양한 순위 기준이 검색 엔진에 적용되어 사용자에게 의도에 알맞는 최상의 답변을 제공한다.

웹사이트가 검색 결과에 나타나도록 하기위해 google을 비롯한 여러 검색엔진은 웹 크롤러를 사용하여 웹사이트를 탐색하고 페이지를 검색한다. 여기서 가장 큰 검색 엔진인 googlebot의 동작 과정은 다음과 같다.

1. URL 찾기 : 구글은 구글 서치 콘솔, 웹사이트 간 링크 또는 XML 사이트맵을 이용하여 여러 위치에서 URL을 제공한다.
2. 크롤링 대기열에 추가 : 이 URL은 Googlebot이 처리할 수 있도록 크롤링 대기열에 추가된다. 크롤링 대기열의 URL은 일반적으로 몇 초 동안 지속되지만 경우에 따라 페이지를 렌더 하거나 색인을 생성할때 또는 색인이 생성된 경우 고쳐야 할때 최대 며칠이 소요될 수 있다. 그런 다음 페이지는 렌더링 대기열이 들어가게 된다.
3. HTTP 요청 : 크롤러는 헤더를 가져오기 위해 HTTP 요청을 하고 반환된 상태 코드에 따라 작동한다.

- `200` - HTML을 크롤링하고 구문을 분석
- `30X` - 리디렉션을 따름
- `40X` - 오류를 기록하고 HTML을 로드하지 않음
- `50X` - 상태 코드가 변경되었는지 확인하기 위해 나중에 다시 확인

4. 렌더링 대기열 : 검색 시스템의 다양한 서비스 및 구성요소가 HTML을 처리하고 콘텐츠를 구문 분석한다. 페이지에 Javascript 클라이언트 기반 콘텐츠가 있는 경우 url이 렌더링 대기열에 추가될 수 있다.
5. 인덱싱 준비 완료 : 모든 기준이 충족되면 페이지가 인덱싱되고 검색 결과에 표시된다.

### 2. 크롤링 및 인덱싱?

HTTP 상태 코드는 특정 HTTP 요청이 성공적으로 완료되었는지 여부를 확인한다. 많은 상태 코드가 있지만 SEO 컨텍스트에서 의미 있는 것은 소수이다.

`200`

> 성공 상태 응답 코드는 요청이 성공했음을 나타낸다.

`301/308`

> 리디렉션 상태 응답 코드는 요청된 리소스가 대상 URL로 확실히 이동되었음을 나타낸다.

이것은 영구 리디렉션으로 일반적으로 가장 널리 사용되는 리디렉션이다.

리디렉션의 주요 사용 원인은 URL이 A 지점에서 B 지점으로 이동 됬음을 나타낸다. 콘텐츠가 한 위치에서 다른 위치로 이동하는 경우 봇이 사이트를 계속 색인할 수 있어야 하기 떄문에 리디렉션이 필요하다.

※ Next.js에서는 301 대신 308을 사용

`302`

> 리디렉션 상태 응답 코드는 HTTP 302 Found, 요청된 리소스가 일시적으로 대상 URL로 이동되었음을 나타낸다.

`404`

> 클라이언트 오류 응답 코드 는 서버가 요청된 리소스를 찾을 수 없음을 나타냅니다.

Next.js는 어플리케이션에 존재하지 않는 URL에 대한 상태 코드를 자동으로 반환한다. 경우에 따라서는 페이지에서 상태 코드를 반환할 수도 있다.

```javascript
export async function getStaticProps(context) {
  return {
    notFound: true, // triggers 404
  };
}
```

```javascript
// pages/404.js
export default function Custom404() {
  return <h1>404 - Page Not Found</h1>;
}
```

`410`

> 클라이언트 오류 응답 코드는 대상 리소스에 대한 액세스가 원본 서버에서 더 이상 사용할 수 없으며 이 상태가 영구적일 가능성이 있음을 나타낸다.

`500`

> 응답 코드는 서버가 요청을 이행하지 못하게 하는 예기치 않은 조건이 발생했음을 나타낸다.

```javascript
// pages/500.js
export default function Custom500() {
  return <h1>500 - Server-side error occurred</h1>;
}
```

`503`

> 서버 오류 응답 코드는 서버가 요청을 처리할 준비가 되지 않았음을 나타낸다.

웹 사이트가 다운되고 웹 사이트가 장기간 다운될 것으로 예상되는 경우 이 상태 코드를 반환하는 것이 좋다. 이렇게 하면 장기적으로 순위가 떨어지는 것을 방지할 수 있다.

---

robots.txt 파일이란 크롤러가 사이트에서 요청할 수 있거나 요청할 수 없는 페이지 또는 파일을 검색 엔진 크롤러에 알려준다. 이 파일은은 대부분 봇이 특정 도메인에서 요청하기 전에 사용하는 웹 표준 파일이다.

CMS 또는 관리자, 전자 상거래의 사용자 계정 또는 일부 API 경로와 같은 웹 사이트의 특정 영역이 크롤링되어 색인이 생성되지 않도록 보호할 수 있다.

이러한 파일은 각 호스트의 루트에서 제공되어야하며 그렇지 않으면 루트 경로를 대상 URL로 리디렉션할 수 있고, 대부분의 봇이 이 규칙을 따른다.

```javascript
//robots.txt
# Block all crawlers for /accounts
User-agent: *
Disallow: /accounts

# Allow all crawlers
User-agent: *
Allow: /
```

위 파일을 public 페이지에 추가하여 robots.txt를 추가할 수 있다.

---

Sitemap은 google과의 소통하는 가장 쉬운 방법이다. google이 새 콘텐츠를 감지하고 웹 사이트를 보다 효율적으로 크롤링할 수 있도록 웹사이트의 url과 업데이트 시기를 나타낸다.

XML Sitemap이 가장 대표적이며 단순성을 선호할 경우 RSS 또는 Atom, txt 파일을 통해 만들 수 도 있다.

사이트맵은 사이트의 페이지, 동영상 기타 파일과 이들 간의 관계에 대한 정보를 제공하는 파일이며 google과 같은 검색 엔진은 이 파일을 읽고 사이트를 보다 지능적으로 크롤링한다.

According to Google:

> {' '}
> You might need a sitemap if:
> Your site is really large. As a result, it's more likely Google web crawlers might overlook crawling some of your new or recently updated pages.
> Your site has a large archive of content pages that are isolated or not well linked to each other. If your site pages don't naturally reference each other, you can list them in a sitemap to ensure that Google doesn't overlook some of your pages.
> Your site is new and has few external links to it. Googlebot and other web crawlers navigate the web by following links from one page to another. As a result, Google might not discover your pages if no other sites link to them.
> Your site has a lot of rich media content (video, images) or is shown in Google News. If provided, Google can take additional information from sitemaps into account for search, where appropriate.

sitemap을 next.js를 추가하는 방법은 두가지가 있다.

1. 아래와 같이 pulic에 xml을 추가

```html
<!-- public/sitemap.xml -->
<xml version="1.0" encoding="UTF-8">
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>http://www.example.com/foo</loc>
      <lastmod>2021-06-01</lastmod>
    </url>
  </urlset>
</xml>
```

2. getServerSideProps

```javascript
//pages/sitemap.xml.js
const EXTERNAL_DATA_URL = "https://jsonplaceholder.typicode.com/posts";

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>https://jsonplaceholder.typicode.com</loc>
     </url>
     <url>
       <loc>https://jsonplaceholder.typicode.com/guide</loc>
     </url>
     ${posts
       .map(({ id }) => {
         return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}/${id}`}</loc>
       </url>
     `;
       })
       .join("")}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const request = await fetch(EXTERNAL_DATA_URL);
  const posts = await request.json();

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts);

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
```

### 3. 렌더링 전략

#### 정적 사이드 (SSG)

> SSG는 빌드 시 HTML이 생성되는 곳이다. 이 HTML은 각 요청에 사용되며 SSG은 사전 렌더링되기 때문에 페이지 로드에 모든 HTML이 있을 뿐만 아니라 페이지 성능에도 도움이 되므로 SEO를 위한 최고의 렌더링 전략이다.

#### 서버 사이드 렌더링 (SSR)

> SSG와 마찬가지로 SSR은 사전 렌더링되므로 SEO에도 적합하다. SSG와 같이 빌드시 생성되는 대신 SSG는 HTML 요청 시 생성되며 이것은 매우 동적인 페이지가 있을 때 유용하다.

#### 증분 정적 재생(ISR)

> 매우 많은 페이지가 잇는 경우 페이지를 모두 생성하는 것이 불가능 할 수도 있다. Next.js를 사용하면 사이트를 구축 후 정적 페이지를 만들거나 업데이트 할 수 있다.
> 증북 정적 재생을 통해 개발자와 콘텐츠 편집자는 전체 사이트를 다시 빌드할 필요 없이 페이지별로 정적 생성을 사용할 수 있다.

#### 클라이언트 사이드 렌더링(CSR)

> CSR을 사용하면 개발자가 Javascript를 사용하여 브라우저에서 웹 사이트를 완전히 렌더링 할 수 있다. 초기 페이지 로드 시 Javascript를 가져와 브라우저가 모든 것을 컴파일 할 떄까지 HTML 파일은 일반적으로 콘텐츠가 거의 없이 제공되며 최적의 SEO를 위하 권장되고 있지는 않다. CSR은 데이터 많은 대시보드, 계정 페이지, 검색 엔진 색인에 포함될 필요가 없는 페이지에 적합하다.


