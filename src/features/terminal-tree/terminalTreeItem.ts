import * as vscode from 'vscode';

let uniqueId = 0;

export class TerminalTreeItem extends vscode.TreeItem {
  constructor(public readonly terminal: vscode.Terminal) {
    super(terminal.name);
    this.id = `terminal_${uniqueId++}`;
  }

  syncLabel(): void {
    this.label = this.terminal.name;
  }
}
