export class FileItem {
    public archivo: File;
    public nombreArchiv: string;
    public url: string;
    public uploading: boolean;
    public progreso: number;

    constructor(file:File){
        this.archivo=file
        this.nombreArchiv=file.name
        this.uploading=false
        this.progreso=0
    }
}