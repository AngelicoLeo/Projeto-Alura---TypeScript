import { NegociacoesView} from '../views/NegociacoesView';
import { MensagemView } from '../views/MensagemView';
import {Negociacoes, Negociacao, NegociacaoParcial} from '../models/index';
import {logarTempoDeExecucao, domInject} from '../helpers/decorators/index';
import{ NegociacaoService } from '../services/NegociacaoService';

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
    private _service = new NegociacaoService(); 

    constructor() {
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
    importaDados(){
        function isOk(res:Response){
            if(res.ok){
                return res;
            } else{
                throw new Error(res.statusText);
            }
        }

        this._service
            .obterNegociacoes(isOk)
            .then(negociacoes => {

                 negociacoes.forEach(negociacao => 
                    this._negociacoes.adiciona(negociacao))

                 this._negociacoesView.update(this._negociacoes);   
                });
    } 
       
}
