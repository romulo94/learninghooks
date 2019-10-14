**Inicialmente a discussão baseava-se em: Stateful and Stateless Components**

"Desde a introdução de classes à sintaxe da linguagem JavaScript, o React
incorporou os class components como sendo a sua principal forma de criar
componentes com estado e ciclo de vida gerenciáveis. Essa abordagem, apesar de
cumprir o propósito, possui algumas desvantagens, por exemplo, o funcionamento
do `this` em classes JavaScript é pouco intuitivo; a restrição de acesso aos
ciclos de vida de um componente exclusivamente por métodos especiais, como
componentDidMount."

- É difícil reutilizar a lógica estável entre componentes (HOCs e patterns).
- Invólucros e mais e mais.
- A verbosidade.
- Use todas as features do React sem classes
- Você pode experimentar o **hooks** sem reescrever nenhum código.
- Compatível com versões anteriores.
- Os **hooks** estão disponíveis a partir v16.8.0.

Com o **hooks**, você pode extrair a lógica com estado de um componente para que
ele possa ser testado independentemente e reutilizado. Os **hooks** permitem
reutilizar a lógica com estado sem alterar sua hierarquia de componentes. Isso
facilita o compartilhamento de **hooks** entre muitos componentes ou com a
comunidade.

Discutiremos isso mais em Construindo seus próprios **hooks**.

### Basic **hooks**

- useState
- useEffect
- useContext

### Additional **hooks**

- useReducer
- useCallback
- useMemo
- useRef
- useImperativeHandle\*
- useLayoutEffect
- useDebugValue\*

## O useState:

Retorna o estado e a função que atualiza o estado.

## O useEffect:

Os ciclos de vida anteriores que usavamos com classes: componentDidMount,
componentDidUpdate, componentWillUnmount.

## O useCallback:

Retorna uma função, quando criamos funções dentro dos componentes. Toda vez que
o render é chamado a função seja criada uma única vez.

## O useMemo:

Criar uma variável que armazena um valor. Indicado para fazer cálculos mais
complexos no componente, e são úteis para componentes sensíveis que tem muita
renderização.

A principal diferença entre os dois é que 'useCallback' retorna um callback
memorizado e 'useMemo' retorna um valor memorizado que é o resultado do
parâmetro de função.

## O useContext:

Aceita um objeto de contexto e retorna o valor atual do contexto para esse
contexto.

## O useRef:

Retorna um objeto ref mutável cuja propriedade .current é inicializada no
argumento passado (initialValue). O objeto retornado persistirá por toda a vida
útil do componente.

## O useLayoutEffect:

É "idêntico" ao useEffect, mas é acionada de forma síncrona após todas as
mutações do DOM. Use isso para ler o layout do DOM e renderizar novamente de
forma síncrona. As atualizações agendadas no useLayoutEffect serão liberadas de
forma síncrona, antes que o browser possa pintar.

## O useReducer:

Aceita um reducer do tipo `(state, action) => newState` e retorna o estado atual
emparelhado com um método de `dispatch`.

[rocketseat](https://blog.rocketseat.com.br/react-**hooks**/)
[reactjs](https://reactjs.org/docs)
[devmedia](https://www.devmedia.com.br/react-hoje-e-amanha-o-que-muda-com-os-**hooks**/40314)
[programmingwithmosh](https://programmingwithmosh.com/javascript/stateful-stateless-components-react/#targetText=Stateful%20and%20stateless%20components%20have%20many%20different%20names.&targetText=The%20literal%20difference%20is%20that,always%20render%20the%20same%20thing.)
[dev](https://dev.to/devcord/react-**hooks**-useeffect-usecallback-usememo-3o42)
[hackages](https://blog.hackages.io/react-**hooks**-usecallback-and-usememo-8d5bb2b67231)
[overreacted](https://overreacted.io/a-complete-guide-to-useeffect/)
