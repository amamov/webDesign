# Web Design

순수 CSS 디자인에 대한 공부

- [Grid](#grid)
- [Animation](#animation)

## Grid

- `grid-template-columns: 20% auto 20%;`
- `grid-template-columns: repeat(3, 1fr);`
- `grid-template-columns: repeat(3, minmax(100px, auto));`
  - column이 3개이면서 그리드 영역에 곽 차도록(auto) 가로가 늘어난다. 이 아이템들은 가로가 100px 이하가 될 수 없다.
- `grid-template-columns: repeat(auto-fill, 300px);`
  - 화면이 작아져서 더 이상 존재할 수 없는 순간 밑으로 내려간다. (column의 개수를 알아서 채워주도록 한다.)
- `grid-template-columns: repeat(auto-fill, minmax(100px, auto));`
  - 화면이 작아져서 가로가 100px이 되는 순간 밑으로 내려간다.
- `gap: 10px 30px`
  - row-gap: 10px, column-gap: 30px
- [grid-template-area](#grid-template-area)

### grid-template-columns

```css
.grid_container {
  display: grid;
  /* grid-template-columns: 100px 300px 500px; */

  /* fr : fraction(비율)  1fr 1fr 2fr --> 1 : 1 : 2 */
  /* grid-template-columns: 1fr 1fr 2fr; */

  /* grid-template-columns: 1fr 500px 2fr; */

  /* 1fr 1fr 1fr */
  grid-template-columns: repeat(3, 1fr);

  /* 1fr 2fr 3fr 1fr 2fr 3fr 1fr 2fr 3fr  */
  /* grid-template-columns: repeat(3, 1fr 2fr 3fr); */

  /* grid-template-rows: repeat(3, 1fr); */
  /* grid-template-rows: 200px 200px 300px; */
}
.grid_item {
  /*  */
}
```

### minmax, auto-fill, auto-fit

```css
.grid_container {
  display: grid;

  /* minmax(최소값 ,최댓값) */
  /* 최솟값과 최댓값을 지정할 수 있는 함수입니다. */
  /* minmax(100px, auto) : 최소 100px 값으로 하고 요소가 많아서 100px이 넘어가면 알아서 늘어나도록  */
  /* grid-template-columns: repeat(3, 1fr); */
  grid-template-columns: repeat(4, minmax(100px, auto));

  /* auto-fill & auto-fit */
  /* column의 개수를 미리 정하지 않고 설정된 너비가 허용하는 한 최대한 셀을 맞춰준다. */
  /* 즉, 알아서 item들이 container에 차도록 채우는 것 */
  /* grid-template-columns: repeat(auto-fill, minmax(80px, auto)); */
  /* 반응형 디자인이 가능하다. */

  /* auto-fill : item들이 각자의 크기가 있어서 컨테이너에 꽉 채우도록 하지 않는다. */
  /* auto-fit : item들이 한 줄에 있고 각자의 크기가 있어서 그리드 영역의 여백이 남을 때 여백을 없애주려고 item을 컨테이너에 꽉차도록 늘린다.
   (둘의 차이는 이것뿐이다.)  */
  gap: 25px;
}
.grid_item {
  /*  */
}
```

### gap

```css
.grid_container {
  display: grid;
  height: 80vh;
  width: 100vh;
  grid-template-columns: repeat(auto-fill, minmax(200px, 200px));
  grid-template-rows: repeat(auto-fill, minmax(200px, auto));

  /* row의 간격을 50px로 지정한다.  */
  row-gap: 50px;

  /* column의 간격을 10px로 지정한다.  */
  column-gap: 10px;

  /* grid-gap: 10px; --> 구버전 브라우저 호환 */
  gap: 50px 10px;
}
.grid_item {
  /*  */
}
```

### grid-template-area

```css
.grid_container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
  gap: 1rem;
  grid-template-areas:
    "header1 header2 header3"
    "sidebar-a main sidebar-b"
    "div div div"
    "footer footer footer";
}
.header1 {
  /* grid-area: header1; 여기서 header은 grid-template-areas에 사용할 이름이다. */
  grid-area: header1;
}
.header2 {
  grid-area: header2;
}
.header3 {
  grid-area: header3;
}
.sidebar-a {
  grid-area: sidebar-a;
}
.sidebar-b {
  grid-area: sidebar-b;
}
.main {
  grid-area: main;
}

div {
  grid-area: div;
}

.footer {
  grid-area: footer;
}
```

<br>

---

<br>

## Animation

### transition

[doc](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)

CSS 속성을 변경할 때 애니메이션 속도를 조절하는 방법을 제공한다.

### transform

[doc](https://developer.mozilla.org/ko/docs/Web/CSS/transform)

요소에 회전, 크기 조절, 기울이기, 이동 효과를 부여할 수 있다.

### animation

[doc](https://developer.mozilla.org/ko/docs/Web/CSS/animation)

스타일을 전환하는 애니메이션을 적용한다.
