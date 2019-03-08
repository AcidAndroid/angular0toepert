import {
  Directive,
  EventEmitter,
  ElementRef,
  HostListener,
  Input,
  Output
} from "@angular/core";
import { FileItem } from "../models/file-item";

@Directive({
  selector: "[appNgDropFiles]"
})
export class NgDropFilesDirective {
  @Input() archivos: FileItem[] = [];
  @Output() mouseSobre: EventEmitter<boolean> = new EventEmitter();

  constructor() {}
  @HostListener("dragover", ["$event"])
  public onDragEnter(event: any) {
    this.mouseSobre.emit(true);
    this.prevenirYDetner(event)    
  }

  @HostListener("dragleave", ["$event"])
  public onDragLeave(event: any) {
    this.mouseSobre.emit(false);
  }

  @HostListener("drop", ["$event"])
  public onDrop(event: any) {
    

    const trasferencia = this.getTransferencia(event);
    if (!trasferencia) {
      return;
    }

    this.extraerArchivos(trasferencia.files)    
    this.prevenirYDetner(event)
    this.mouseSobre.emit(false);
  }

  private getTransferencia(event: any) {
    return event.dataTrasnfer
      ? event.dataTrasnfer
      : event.originalEvent.dataTrasnfer;
  }

  private extraerArchivos(archivosLista: FileList) {
    console.log(archivosLista);
  }

  //Validaciones

  private archivoParaCarga(archivo: File): boolean {
    if (!this.archivoCargado(archivo.name) && this.validaImagen(archivo.type)) {
      return true;
    } else {
      return false;
    }
  }

  private prevenirYDetner(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  private archivoCargado(nombre: string): boolean {
    for (const archivo of this.archivos) {
      if (archivo.nombreArchiv == nombre) {
        console.log(`El archivo ${nombre} ya esta agregado`);
        return true;
      }
    }
    return false;
  }

  private validaImagen(tipoarchivo: string): boolean {
    return tipoarchivo === "" || tipoarchivo === undefined
      ? false
      : tipoarchivo.startsWith("image");
  }
}
