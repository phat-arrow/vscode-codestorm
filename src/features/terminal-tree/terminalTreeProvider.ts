import { TreeDataProvider, Terminal, EventEmitter } from 'vscode';
import { TerminalTreeItem } from './terminalTreeItem';

export class TerminalTreeProvider
  implements TreeDataProvider<TerminalTreeItem> {
  private _onDidChangeTreeData = new EventEmitter<
    TerminalTreeItem | undefined | void
  >();
  readonly onDidChangeTreeData = this._onDidChangeTreeData.event;
  private _items: TerminalTreeItem[] = [];
  public get items() {
    return this._items;
  }
  constructor(terminals: ReadonlyArray<Terminal>) {
    this._items = terminals.map((terminal) => new TerminalTreeItem(terminal));
  }

  addTerminal(terminal: Terminal): Readonly<TerminalTreeItem> {
    const item = new TerminalTreeItem(terminal);
    this._items.push(item);
    this.refresh();
    return item;
  }

  removeTerminal(terminal: Terminal) {
    const itemIndex = this._items.findIndex((i) => i.terminal === terminal);
    if (itemIndex > -1) {
      this._items.splice(itemIndex, 1);
    }
    this.refresh();
  }

  findItemByTerminal(
    terminal: Terminal | undefined
  ): TerminalTreeItem | undefined {
    return this._items.find((i) => i.terminal === terminal);
  }

  refresh(): void {
    this._onDidChangeTreeData.fire();
    this._items.forEach((item) => item.syncLabel());
    this.getChildren();
  }

  getTreeItem(element: TerminalTreeItem) {
    return element;
  }

  getChildren() {
    return Promise.resolve(this._items);
  }

  getParent() {
    return null;
  }
}
