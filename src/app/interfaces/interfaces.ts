export interface Componente {
    icon: string,
    name: string,
    redirecTo: string
}
export interface Cremas {
    nombre: string;
    descripcion?: string
}

export interface Agregados {
    nombre: string;
    precio: number
}

export interface Productos {
    nombre: string;
    tipo: string;
    descripcion?: string;
    // cremas?: Cremas[];
    cremas?: string[];
    agregados?: Agregados[];
    // agregados?: string[];
    precio: number;
}


export interface Pedidos {
    id?: Number
    productos: Productos[],
    fecha: Date
    total: number,
}