import { ExtensionContext } from 'vscode';
import { activateAutoInsertClosingXmlHtmlTag } from './features/auto-insert-closing-xml-html-tag/autoInsertClosingXmlHtmlTag';
import { activateTerminalTree } from './features/terminal-tree/terminalTree';

export function activate(context: ExtensionContext) {
  activateAutoInsertClosingXmlHtmlTag();
  activateTerminalTree(context);
}
