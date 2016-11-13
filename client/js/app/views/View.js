class View {

    constructor(elemento) {
        this._elemento = elemento;
    }

    // Não existe ainda o conceito de métodos abstratos. Então essa é uma forma de avisar o programador para 
    // implementar esse método, já que ele será chamado no update().
    template(model) {
        throw new Error('O método template deve ser implementado.');
    }

    update(model) {
        this._elemento.innerHTML = this.template(model);
    }
}