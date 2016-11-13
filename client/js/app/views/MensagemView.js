class MensagemView extends View {

    // O construtor é herdado automaticamente.

    template(model) {
        return model.texto ? `<p class="alert alert-info"> ${model.texto}</p>` : '<p></p>';
    }

}