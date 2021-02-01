import { window, commands, ExtensionContext } from 'vscode';
import { TerminalTreeItem } from './terminalTreeItem';
import { TerminalTreeProvider } from './terminalTreeProvider';

export function activateTerminalTree(context: ExtensionContext): void {
  const treeDataProvider = new TerminalTreeProvider(window.terminals);
  treeDataProvider.refresh();

  const view = window.createTreeView('terminalsView', {
    treeDataProvider,
    showCollapseAll: true,
  });
  view.onDidChangeVisibility(({ visible }) => {
    if (visible) {
      treeDataProvider.refresh();
    }
  });
  context.subscriptions.push(view);

  window.onDidOpenTerminal((terminal) => {
    treeDataProvider.addTerminal(terminal);
  });
  window.onDidCloseTerminal((terminal) => {
    treeDataProvider.removeTerminal(terminal);
  });

  commands.registerCommand(
    'codeStorm.terminals.focusTerminal',
    (item: TerminalTreeItem) => {
      item.terminal.show();
    }
  );

  commands.registerCommand(
    'codeStorm.terminals.renameTerminal',
    (item: TerminalTreeItem) => {
      item.terminal.show(true);
      commands
        .executeCommand('workbench.action.terminal.rename')
        .then(() => treeDataProvider.refresh());
    }
  );
}
