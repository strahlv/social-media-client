import { createGlobalStyle } from "styled-components";

const Style = createGlobalStyle`
:root {
	--clr-primary-light: #fdedf4;
	--clr-primary-accent: #f72585;
	--clr-primary: #7209b7;
	--clr-primary-dark: #51088c;
	--clr-secondary-light: #ecf9fd;
	--clr-secondary-accent: #4cc9f0;
	--clr-secondary: #4361ee;
	--clr-secondary-dark: #3a0ca3;
	--clr-light: #ffffff;
	--clr-dark: #300660;
	--font-poppins: "Poppins";
}

/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/

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
	box-sizing: border-box;
	line-height: 1.5rem;
    font-weight: 300;

	&::selection {
		background: var(--clr-primary-accent);
		color: var(--clr-light);
	}
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
	font-family: 'Poppins', sans-serif;
	background-color: var(--clr-primary-dark);
	background: linear-gradient(
    45deg,
    var(--clr-primary) 0%,
    var(--clr-secondary) 100%
  );
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
input, textarea {
	box-sizing: border-box;
}
textarea {
	resize: none;
}
`;

const GlobalStyle = () => {
  return <Style />;
};

export default GlobalStyle;
