var css = '
	body:before {
		position: fixed;
		padding: 2px 5px;
		background-color: #FFF;
		outline: #F8F8FF 1px solid;
		z-index: 9999;
		opacity: 0.3;
		right: 105px;
		top: 0px;
		display: block;
	}
	body:hover:before {
		opacity: 0.8;
	}
	@media screen and (min-width: 20em) {
		body:before {
			content: "spicy";
		}
	}
	@media screen and (min-width: 30em) {
		body:before {
			content: "zesty";
		}
	}
	@media screen and (min-width: 37.5em) {
		body:before {
			content: "sizzle";
		}
	}
	@media screen and (min-width: 47.5em) {
		body:before {
			content: "hot";
		}
	}
	@media screen and (min-width: 56.25em) {
		body:before {
			content: "caliente";
		}
	}
	@media screen and (min-width: 68.75em) {
		body:before {
			content: "fuego";
		}
	}
	@media screen and (min-width: 81.25em) {
		body:before {
			content: "muchofuego";
		}
	}
	@media screen and (min-width: 1000px), screen and (min-height: 1000px) {
		body:before {
			right: 113px;
		}
	}
	@media screen and (min-width: 1000px) and (min-height: 1000px) {
		body:before {
			right: 121px;
		}
	}',
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');

style.type = 'text/css';
if (style.styleSheet){
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}

head.appendChild(style);