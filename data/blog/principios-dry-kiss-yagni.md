---
title: 'O que são os princípios DRY, KISS e YAGNI'
date: 2022-01-02
lastmod: '2022-01-02'
tags: ['guia', 'clean code', 'principios', 'outros']
draft: false
summary: 'Princípios são obrigatórios quando você quer desenvolver um software que provavelmente vai escalar ou quando você trabalha em equipe. Infelizmente há muitos desenvolvedores que escrevem códigos para si mesmo e acabam por não pensarem na legibilidade do código.'
layout: PostSimple
---

## Visão geral

Caso você queira ir para um tópico específico:

<TOCInline toc={props.toc} exclude="Overview" toHeading={2} />

## Introdução

_Princípios são um conjunto de normas ou padrões de conduta a serem seguidos por uma pessoa ou instituição. A conceituação dos princípios está relacionada ao começo ou início de algo. ... O termo tem origem do latim principĭum, que significa “origem", "causa próxima", ou "início”. - [Significados](https://www.significados.com.br/principios/#:~:text=Princ%C3%ADpios%20s%C3%A3o%20um%20conjunto%20de,come%C3%A7o%20ou%20in%C3%ADcio%20de%20algo.&text=O%20termo%20tem%20origem%20do,%22%2C%20ou%20%22in%C3%ADcio%E2%80%9D.)_

Adaptando o trecho acima no mundo da programação ficaria mais ou menos assim: _Princípios são um conjunto de normas a serem seguidas por um ou mais desenvolvedor._

## DRY

Este princípio se dá pelo seguinte acrônimo: **Don't Repeat YourSelf** ou **Não se repita**

Este é baseado no conceito de: se algo está repetindo com certa frequência, fique de olho.

É muito comum, ainda em iniciantes, quando estão desenvolvendo alguma funcionalidade repetir muitos trechos do código, o que pode causar duplicamento de códigos.

Caso uma função repita muito em seu software, tente refatorar e adaptá-la para evitar a repetição.

Tome como exemplo o seguinte código:

```ts
import toast from 'react-hot-toast'

export const makeSuccessToast = (message: string): string => toast.success(message)
export const makeErrorToast = (message: string): string => toast.error(message)
export const makePromiseToast = (message: string): string => toast.promise(message)
```

Como podemos notar, o que se muda de uma função para a outra é apenas o nome da mesma e o tipo de toast (success, error, promise). Podemos evitar a repetição com apenas uma única função:

```ts {4, 6} showLineNumbers
import toast from 'react-hot-toast'

export const makeToast = (
  type: 'error' | 'success' | 'promise' = 'success',
  message: string
): string => toast[type](message) // seria a mesma coisa que: ... toast["error"](message)
```

Na linha 4 eu apenas digo que posso receber 3 tipos de toasts: `error`, `success` ou `promise` (num software maior poderia ser **N** tipos) e digo que irei usar o tipo do toast na linha 6 acessando como chaves (símbolo de array/vetores/lista).

Quando formos chamar o trecho de código, em vez de chamar diversas funções (makeSuccessToast, makeErrorToast, makePromiseToast), podemos chamar apenas uma passando seus respectivos argumentos. Exemplo:

```ts
import { makeToast } from './toasts'

function handleLikePost() {
  makeToast('promise', 'Post salvo com sucesso!')
}

handleLikePost()
```

Como foi visto, removemos três funções que fazem praticamente a mesma coisa, mudando apenas um pequeno trecho. Assim, caso tivéssemos mil funções que geram mil tipos de toasts, não precisaríamos criar mil funções.

## KISS

Também conhecido como: **Keep It Simple, Stupid** ou **Keep It Stupid Simple**.

Na tradução literal diz para você manter estupidamente de forma simples. Por que complicar a vida, não é mesmo?

Tendo o seguinte trecho de código como exemplo:

```ts
const nomes = [
  'caio',
  'fernando',
  'lucas',
  'vitor',
  'gabriel',
  'fernando',
  'caio',
  'lucas',
  'lucas',
]

const removeNomesDuplicados = () => {
  return nomes
    .sort((a, b) => a.localeCompare(b)) // ordenando de forma alfabética
    .map((nome, index) => (nomes[index] === nomes[index + 1] ? null : nome)) // verifico se o item atual da array é igual ao próximo item
    .filter(Boolean) // filtro apenas por valores booleanos. Null é falso.
}

console.log(removeNomesDuplicados()) // retorna:  ['caio', 'fernando', 'gabriel', 'lucas', 'vitor']
```

Fazendo de forma mais simples:

```ts
const nomes = [
  'caio',
  'fernando',
  'lucas',
  'vitor',
  'gabriel',
  'fernando',
  'caio',
  'lucas',
  'lucas',
]

const removeNomesDuplicados = () => {
  return [...new Set(nomes)]
}

console.log(removeNomesDuplicados()) // retorna:  ['caio', 'fernando', 'gabriel', 'lucas', 'vitor']
```

**Obs**: Não levando em conta sobre compatibilidade. Apenas uma demonstração do princípio. Por favor, verificar compatibilidade em: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Set#browser_compatibility

## YAGNI

Conhecido como: **You Aren't Gonna Need It** ou **Você não vai precisar disso**.

Em resumo: Não implemente coisas que você **acha** que vai precisar. Implemente apenas quando você **realmente** for precisar.

As vezes podemos criar funcionalidades, funções, etc. achando que iremos utilizá-las futuramente, mas esse princípio diz para que você não faça isso. Não tente prever que você irá precisar de uma função, por exemplo. Mais uma vez: implemente as coisas quando você **realmente** for precisar. Ok?

## Quando usá-los?

Costumamos dizer que escrevemos código para outras pessoas e até o nosso **EU** do futuro. De fato isso é verdade, escrevemos códigos para que outras pessoas possam mexer com facilidade no nosso código. Dito isso, não adianta escrevermos códigos sem objetivos e ilegíveis, pois nós, do futuro, podemos olhar para trás pra um código sem objetivo e ilegível e pensar _"**mas que po... é essa????**"_. Algo do tipo assim:

![clean code book first page](https://camo.githubusercontent.com/5039494830418a41d5bb10ea38bb221234da9ab552ee528a2f8f037aea9b1e7f/687474703a2f2f7777772e6f736e6577732e636f6d2f696d616765732f636f6d6963732f7774666d2e6a7067)

_Diferença entre um código bom (à esquerda) e um código ruim (à direita)._

A resposta então seria: **sempre que você puder, use-os!**

## Conclusão

Princípios são obrigatórios quando você quer desenvolver um software que provavelmente vai escalar ou quando você trabalha em equipe. Infelizmente há muitos desenvolvedores que escrevem códigos para si mesmo e acabam por não pensarem na legibilidade do código e assim o mesmo vai crescendo e ficando cada vez mais verboso, o que não é bom.

Dado o contexto, quis escrever este post para ajudar aqueles que tentam escrever um código mais conciso, objetivo e limpo. Caso você ainda seja iniciante, não se preocupe em escrever o código mais lindo do mundo. Apenas faça funcionar, depois pense na refatoração.

Referências: https://pt.wikipedia.org/wiki/Princ%C3%ADpio_KISS, https://harve.com.br/blog/marketing-digital-blog/keep-it-simple-but-sensational-o-principio-kiss-para-impactar/,
https://www.thiengo.com.br/kiss-mantenha-isso-estupidamente-simples, http://www.macoratti.net/16/04/net_dry1.htm
