class usuario{
    constructor(name, apellido,mascotas,libros){
        this.name = name;
        this.apellido = apellido;
        this.libros = [libros];
        this.mascotas = [mascotas];
    }

    getFullName(){
        console.log(
            this.name +' '+ this.apellido
        )
    }

    addMascotas(mascota){
        this.mascotas.push([mascota]);
    }
    countMascotas(){
       console.log(this.mascotas.length);
    }
    addBook(nombre, autor){
        this.libros.push({nombre, autor});
    }
    getBookNames(){
        const libro=[];
        
        this.libros.map((item)=>{
            libro.push(item.nombre);
        });
        console.log(libro);
    }

}

let usuario1 = new usuario('Juan', 'Torres',['gato'],{});

usuario1.getFullName();
usuario1.addMascotas('perro');
usuario1.countMascotas();
usuario1.addBook('Fundacion','Isaac Asimov');
usuario1.addBook('Don Quijote de la Mancha','Miguel de Cervantes');
usuario1.getBookNames();
