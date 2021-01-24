import * as vscode from 'vscode';
import { activateAutoInsertClosingXmlHtmlTag } from './features/auto-insert-closing-xml-html-tag/autoInsertClosingXmlHtmlTag';

export function activate(context: vscode.ExtensionContext) {
  activateAutoInsertClosingXmlHtmlTag();
}
