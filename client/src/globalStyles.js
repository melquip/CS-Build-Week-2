import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
html, body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.App {
  height: 100vh;
}

.automaton {
  width: 100%;
  height: 100%;
  display: flex;
  padding: 50px;
}

.grid {
  width: 100%;
  height: 100%;
  max-width: 80vmin;
  max-height: 80vmin;
  flex: 1 1 80vmin;
  display: flex;
  flex-wrap: wrap;
  border: 1px solid ${props => props.theme.colors.gray};
  border-right: 0px;
  border-bottom: 0px;
}

.presets {
  padding: 0 50px;
}
`