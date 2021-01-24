# CodeStorm
Bring several productivity features of <a href="https://www.jetbrains.com/webstorm/">WebStorm</a> into VSCode.

## Features

* Editor title menu button for "Reveal in Side Bar" navigation (similar to Select Open File)
  > _Implementation inspired by <a href="https://github.com/smulyono/reveal-file-ext">https://github.com/smulyono/reveal-file-ext</a>_
* Auto insert closing XML/HTML tags in file types other than `*.xml|html`
  > _Implementation inspired by <a href="https://github.com/formulahendry/vscode-auto-close-tag">https://github.com/formulahendry/vscode-auto-close-tag</a>_

## Extension Settings
Settings can be found by searching for the term __codestorm__ in the VSCode settings GUI.

* Reveal in side bar button
  * __show__: Whether to show or hide the editor menu button (target icon)\
  `"codeStorm.revealInSideBarButton.show": true`
* Auto insert closing XML/HTML tags
  * __enabled__: Enables/disables auto inserting closing tag on XML/HTML tag completion in file types other than `*.xml|html` (_VSCode auto inserts closing tags in these files by default_)\
  `"codeStorm.autoInsertClosingXmlHtmlTag.enabled": true`