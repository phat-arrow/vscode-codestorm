import * as vscode from 'vscode';

export function activateAutoInsertClosingXmlHtmlTag(): void {
  vscode.workspace.onDidChangeTextDocument((event) => {
    insertClosingTag(event);
  });
}

function insertClosingTag(event: vscode.TextDocumentChangeEvent): void {
  if (!event.contentChanges[0]) {
    return;
  }

  if (event.contentChanges[0].text === '>') {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      return;
    }

    const config = vscode.workspace.getConfiguration(
      'codeStorm.autoInsertClosingXmlHtmlTag',
      editor.document.uri
    );
    if (!config) {
      return;
    }
    if (config.get<boolean>('enabled', true)) {
      const { document, selection } = editor;
      const originalPosition = selection.start.translate(0, 1);
      const text = document
        .lineAt(selection.start)
        .text.substring(0, selection.start.character + 1);
      const index = text.search(
        /<([_a-zA-Z][a-zA-Z0-9:\-_.]*)(?:\s+[^<>]*?[^\s/<>=]+?)*?\s?(\/|>)$/
      );
      if (index > -1) {
        const tag = text.substring(index + 1, text.length - 1);
        editor
          .edit((editBuilder) => {
            editBuilder.insert(originalPosition, `</${tag}>`);
          })
          .then(() => {
            editor.selection = new vscode.Selection(
              originalPosition,
              originalPosition
            );
          });
      }
    }
  }
}
