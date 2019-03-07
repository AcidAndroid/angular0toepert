import { Component, OnInit } from "@angular/core";
import { CargaImagenesService } from "src/app/providers/carga-imagenes.service";
import { FileItem } from "../../models/file-item";

@Component({
  selector: "app-carga",
  templateUrl: "./carga.component.html",
  styleUrls: ["./carga.component.scss"]
})
export class CargaComponent implements OnInit {
  public archivos: FileItem[] = [];
  constructor(private _cargaService: CargaImagenesService) {}

  ngOnInit() {}

  cargarImagenes() {
    this._cargaService.imagenesPorCargar(this.archivos);
  }
}
