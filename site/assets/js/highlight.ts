import hljs from 'highlight.js/lib/core';
import bash from 'highlight.js/lib/languages/bash';

hljs.registerLanguage('bash', bash);

const addStylesheet = function(url: string): void {
	const link = document.createElement('link');
	link.rel = 'stylesheet';
	link.href = url;
	document.head.appendChild(link);
};

const wrapAsCode = function(container: HTMLElement, language: string): HTMLElement {
	const code = container.innerHTML.split('\n');
	code.pop(); // Drop the line that actually runs this script, we don't need it now.

	const codeElement = document.createElement('code');
	codeElement.className = `language-${language}`;
	codeElement.innerHTML = code.join('\n');

	const pre = document.createElement('pre');
	pre.appendChild(codeElement);

	container.replaceChildren(pre);
	return codeElement;
};

const addReadmeLink = function(codeblock: HTMLElement): void {
	const span = document.createElement('span');
	span.className = 'hljs-comment';
	const readme = document.createElement('a');
	readme.innerText = 'WHAT IS THIS';
	readme.href = 'https://dots.00dani.me/README';
	span.append('# ', readme);

	codeblock.querySelector('span.hljs-meta + span.hljs-comment')?.replaceWith(span);
};

addStylesheet('/assets/css/style.css');
addStylesheet('/assets/css/code.css');
addStylesheet('/assets/css/monokai.min.css');

const codeblock = wrapAsCode(document.body, 'bash');
hljs.highlightElement(codeblock);
addReadmeLink(codeblock);
