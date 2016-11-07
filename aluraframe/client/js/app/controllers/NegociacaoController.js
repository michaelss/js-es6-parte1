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

        let helper = new DateHelper();
        
        let negociacao = new Negociacao(
            helper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );

        console.log(negociacao);

        this.limpaForm();
    }

    limpaForm() {
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0;

        this._inputData.focus();
    }
}