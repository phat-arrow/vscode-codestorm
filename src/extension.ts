import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    'extension.codeStorm.revealInSideBar',
    () => {
      vscode.commands.executeCommand(
        'workbench.files.action.showActiveFileInExplorer'
      );
    }
  );

  context.subscriptions.push(disposable);
}
