import { NegociacoesView} from '../views/NegociacoesView';
import { MensagemView } from '../views/MensagemView';
import {Negociacoes} from '../models/Negociacoes';
import {Negociacao} from '../models/Negociacao';
import {logarTempoDeExecucao, domInject} from '../helpers/decorators/index';

export class NegociacaoController{

    @domInject('#data')
    
    private _inputData: JQuery;

    @domInject('#quantidade')

    private _inputQuantidade: JQuery;

    @domInject('#valor')
    
    private _inputValor: JQuery;
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView');

    constructor() {

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._negociacoesView.update(this._negociacoes);
        
    }
    @logarTempoDeExecucao()
    adiciona(event:Event){
        
        event.preventDefault();
        
        const negociacao = new Negociacao(
            new Date(this._inputData.val().replace(/-/g,',')),
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        )

        this._negociacoes.adiciona(negociacao);
        
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociação adicionada com sucesso');
    }
}
