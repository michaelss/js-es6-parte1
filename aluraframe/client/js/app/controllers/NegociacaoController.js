class NegociacaoController {

    constructor() {
        /**
         * Não funciona, pois, ao ser jogado para uma variável, o método querySelector seria jogado como função
         * e, nesse caso, o this dessa função não seria do document, mas do presente script. Para solucionar, é
         * necessário fazer o bind com document, na linha seguinte.
         */
        //let $ = document.querySelector;
        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona(event) {
        event.preventDefault();
                
        // As três formas abaixo funcionam
        // let data = new Date(this._inputData.value.split('-')); // Passa um array de strings
        // let data = new Date(this._inputData.value.replace(/-/g, ',')); // Passa uma string na forma 'YYYY-MM-DD' 
        let data = new Date(...this._inputData.value // ... indica 'spread operator'
            .split('-')
            .map(function(item, indice) {
                return item - indice % 2;
            })
        ); 
        
        let negociacao = new Negociacao(
            this._inputData.value,
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }
}