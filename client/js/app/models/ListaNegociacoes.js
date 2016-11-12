class ListaNegociacoes {

    constructor() {
        this._negociacoes = [];
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }

    get negociacoes() {
        // Abaixo temos uma forma de blindar, retornando uma cópia da lista de negociações.
        // Isso impedirá que na controller se tenha acesso de escrita à lista original, 
        // como "this._listaNegociacoes.push(negociacao)" ou "this._listaNegociacoes.length = 0" 
        return [].concat(this._negociacoes);
    }
}