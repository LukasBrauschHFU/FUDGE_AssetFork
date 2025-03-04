namespace Fudge {
  import ƒ = FudgeCore;
  import ƒui = FudgeUserInterface;

  export let typesOfResources: ƒ.General[] = [
    ƒ.Mesh
  ];

  /**
   * List the internal resources
   * @author Jirka Dell'Oro-Friedl, HFU, 2020  
   */
  export class ViewInternal extends View {
    private table: ƒui.Table<ƒ.SerializableResource>;

    constructor(_container: ComponentContainer, _state: JsonValue | undefined) {
      super(_container, _state);

      this.dom.addEventListener(EVENT_EDITOR.SELECT, this.hndEvent);
      this.dom.addEventListener(EVENT_EDITOR.MODIFY, this.hndEvent);
      this.dom.addEventListener(ƒui.EVENT.MUTATE, this.hndEvent);
      this.dom.addEventListener(ƒui.EVENT.CONTEXTMENU, this.openContextMenu);
      this.dom.addEventListener(ƒui.EVENT.DELETE, this.hndEvent);
      this.dom.addEventListener(ƒui.EVENT.REMOVE_CHILD, this.hndEvent);
    }

    public listResources(): void {
      while (this.dom.lastChild && this.dom.removeChild(this.dom.lastChild));
      this.table = new ƒui.Table<ƒ.SerializableResource>(new ControllerTableResource(), Object.values(ƒ.Project.resources), "type");
      this.dom.appendChild(this.table);
      this.dom.title = "● Right click to create new resource.\n● Select or drag resource.";
      this.table.title = `● Select to edit in "Properties"\n●  Drag to "Properties" or "Components" to use if applicable.`;

      for (let tr of this.table.querySelectorAll("tr")) {
        let tds: NodeListOf<HTMLTableCellElement> = tr.querySelectorAll("td");
        if (!tds.length)
          continue;
        tds[1].classList.add("icon");
        tds[1].setAttribute("icon", (<HTMLInputElement>tds[1].children[0]).value);
      }
    }

    public getSelection(): ƒ.SerializableResource[] {
      return this.table.controller.selection;
    }

    public getDragDropSources(): ƒ.SerializableResource[] {
      return this.table.controller.dragDrop.sources;
    }

    // TODO: this is a preparation for syncing a graph with its instances after structural changes
    // protected openContextMenu = (_event: Event): void => {
    //   let row: HTMLTableRowElement = <HTMLTableRowElement>_event.composedPath().find((_element) => (<HTMLElement>_element).tagName == "TR");
    //   if (row)
    //     this.contextMenu.getMenuItemById(String(CONTEXTMENU.SYNC_INSTANCES)).enabled = (row.getAttribute("icon") == "Graph");
    //   this.contextMenu.popup();
    // }

    // #region  ContextMenu
    protected getContextMenu(_callback: ContextMenuCallback): Electron.Menu {
      const menu: Electron.Menu = new remote.Menu();
      let item: Electron.MenuItem;


      item = new remote.MenuItem({  
        label: "Create Mesh",
        submenu: ContextMenu.getSubclassMenu(CONTEXTMENU.CREATE_MESH, ƒ.Mesh, _callback)
      });
      menu.append(item);

      item = new remote.MenuItem({
        label: "Create Mutable Mesh",
        submenu: ContextMenu.getSubclassMenu(CONTEXTMENU.CREATE_MESHMUTABLE, ƒ.MeshMutable, _callback)
      });
      menu.append(item);

      item = new remote.MenuItem({
        label: "Create Material",
        submenu: ContextMenu.getSubclassMenu(CONTEXTMENU.CREATE_MATERIAL, ƒ.Shader, _callback)
      });
      menu.append(item);

      item = new remote.MenuItem({ label: "Create Graph", id: String(CONTEXTMENU.CREATE_GRAPH), click: _callback, accelerator: "G" });
      menu.append(item);

      item = new remote.MenuItem({ label: "Delete Resource", id: String(CONTEXTMENU.DELETE_RESOURCE), click: _callback, accelerator: "R" });
      menu.append(item);

      // item = new remote.MenuItem({ label: "Sync Instances", id: String(CONTEXTMENU.SYNC_INSTANCES), click: _callback, accelerator: "S" });
      // menu.append(item);


      // ContextMenu.appendCopyPaste(menu);
      return menu;
    }

    protected async contextMenuCallback(_item: Electron.MenuItem, _window: Electron.BrowserWindow, _event: Electron.Event): Promise<void> {
      let choice: CONTEXTMENU = Number(_item.id);
      ƒ.Debug.fudge(`MenuSelect | id: ${CONTEXTMENU[_item.id]} | event: ${_event}`);
      let iSubclass: number = _item["iSubclass"];
      if (!iSubclass && (choice == CONTEXTMENU.CREATE_MESH || choice == CONTEXTMENU.CREATE_MATERIAL)) {
        alert("Funky Electron-Error... please try again");
        return;
      }

      switch (choice) {
        case Fudge.CONTEXTMENU.CREATE_MESHMUTABLE: 
          let typeMeshMutable = ƒ.MeshMutable.subclasses[iSubclass];
          //@ts-ignore
          let meshMutableNew = new typeMeshMutable();
          this.dom.dispatchEvent(new Event(Fudge.EVENT_EDITOR.MODIFY, { bubbles: true }));
          this.table.selectInterval(meshMutableNew, meshMutableNew);
          break;
        case CONTEXTMENU.CREATE_MESH:
          let typeMesh: typeof ƒ.Mesh = ƒ.Mesh.subclasses[iSubclass];
          //@ts-ignore
          let meshNew: ƒ.Mesh = new typeMesh();
          this.dom.dispatchEvent(new Event(EVENT_EDITOR.MODIFY, { bubbles: true }));
          this.table.selectInterval(meshNew, meshNew);
          break;
        case CONTEXTMENU.CREATE_MATERIAL:
          let typeShader: typeof ƒ.Shader = ƒ.Shader.subclasses[iSubclass];
          let mtrNew: ƒ.Material = new ƒ.Material(typeShader.name, typeShader);
          this.dom.dispatchEvent(new Event(EVENT_EDITOR.MODIFY, { bubbles: true }));
          this.table.selectInterval(mtrNew, mtrNew);
          break;
        case CONTEXTMENU.CREATE_GRAPH:
          let graph: ƒ.Graph = await ƒ.Project.registerAsGraph(new ƒ.Node("NewGraph"));
          this.dom.dispatchEvent(new Event(EVENT_EDITOR.MODIFY, { bubbles: true }));
          this.table.selectInterval(graph, graph);
          break;
        case CONTEXTMENU.DELETE_RESOURCE:
          await this.table.controller.delete([this.table.getFocussed()]);
          this.dom.dispatchEvent(new Event(EVENT_EDITOR.MODIFY, { bubbles: true }));
          break;
      }
    }
    //#endregion

    protected hndDragOver(_event: DragEvent, _viewSource: View): void {
      _event.dataTransfer.dropEffect = "none";
      if (this.dom != _event.target)
        return;

      if (!(_viewSource instanceof ViewExternal || _viewSource instanceof ViewHierarchy))
        return;

      if (_viewSource instanceof ViewExternal) {
        let sources: DirectoryEntry[] = _viewSource.getDragDropSources();
        for (let source of sources)
          if (source.getMimeType() != MIME.AUDIO && source.getMimeType() != MIME.IMAGE && source.getMimeType() != MIME.MESH)
            return;
      }

      _event.dataTransfer.dropEffect = "link";
      _event.preventDefault();
      _event.stopPropagation();
    }

    protected async hndDrop(_event: DragEvent, _viewSource: View): Promise<void> {
      if (_viewSource instanceof ViewHierarchy) {
        let sources: ƒ.Node[] = _viewSource.getDragDropSources();
        for (let source of sources) {
          await ƒ.Project.registerAsGraph(source, true);
        }
      } else if (_viewSource instanceof ViewExternal) {
        let sources: DirectoryEntry[] = _viewSource.getDragDropSources();
        for (let source of sources) {
          switch (source.getMimeType()) {
            case MIME.AUDIO:
              console.log(new ƒ.Audio(source.pathRelative));
              break;
            case MIME.IMAGE:
              console.log(new ƒ.TextureImage(source.pathRelative));
              break;
            case MIME.MESH:
              console.log(new ƒ.MeshObj(null, source.pathRelative));
              break;
          }
        }
      }

      this.dom.dispatchEvent(new Event(EVENT_EDITOR.MODIFY, { bubbles: true }));
    }

    private hndEvent = (_event: CustomEvent): void => {
      switch (_event.type) {
        case EVENT_EDITOR.SELECT:
        case EVENT_EDITOR.MODIFY:
          // case ƒui.EVENT.MUTATE:
          this.listResources();
          break;
        case ƒui.EVENT.REMOVE_CHILD:
          this.dom.dispatchEvent(new Event(EVENT_EDITOR.MODIFY, { bubbles: true }));
          break;
      }
    }
  }
}