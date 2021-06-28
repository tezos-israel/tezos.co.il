---
templateKey: _blog-post
title: 'Writing Smart Contracts in Tezos: Existing Languages'
tags:
  - ligo
  - michelson
  - smart-contracts
  - smartpy
category: Devs
published: true
author: contact@tezos.co.il
date: 2020-06-23T07:29:10.473Z
description: 'Writing Smart Contracts in Tezos: Existing Languages'
featuredImage: /assets/writing-smart-contracts-in-tezos.jpeg
mediumContent: ''
---

### Tezos' programming languages are growing with time. Indeed, we are seeing very interesting new ones that are created to make our developer life better and easier. This article below will consist of a short but clear summary of SOME of the current available languages that any developer can use to create Smart Contracts in Tezos.

### Let's get right into and start with Michelson! (Yes, I know, some of you may prefer high level languages (I do!), but we will get to it later in this article, I promise)

## Michelson

Designed for smart contracts development, Michelson is a functional programming language which aims at being efficient, clear and precise for the developer. It allows for formal verification, which is basically the act of mathematically verifying a piece of code to make sure it is working as intended. Knowing this, it is easier to perform audits, for example. It is a stack-based language, meaning that a smart contract developed in Michelson will simply be a list of instructions which each have an effect on a stack, that is being passed through these instructions themselves.

Being a low-level language, Michelson can be harder to get to grips with it, however, it is a very interesting language that can be very useful if you want to know how it works behind the scenes. Developing smart contracts using Michelson helps getting a better picture of how the smart contract is actually running on the Tezos blockchain.

You can learn more about Michelson in the official documentation, [here](https://tezos.gitlab.io/whitedoc/michelson.html). You can use [try-michelson](https://try-michelson.com/) (fully on web-browser) to play around with Michelson.

## SmartPy

SmartPy was designed for lowering the barrier of entry for smart contracts development. Indeed, as you can most likely guess from the name, it is based on Python, which is a well known and "easy"-to-learn programming language thanks to its simple and clean syntax. Additionally, it also allows for functional programming, and therefore it keeps Michelson's pros such as formal verification.

Being a high-level language, SmartPy can be easier to get to grips with it. Adding the fact that Python is already famous and used by a lot of developers, it definitely helps bringing more developers to the Tezos ecosystem.

SmartPy comes with [SmartPy.io](http://smartpy.io/), an in-browser development platform, made to ease the process of programming a smart contract in Tezos. With it, you can develop, test, analyze (and even more!) smart contracts pretty easily. Take a look at the [online editor](http://smartpy.io/demo/) which contains some templates that you can use to play around with all the tools.

To learn more about SmartPy, feel free to refer to their [website](http://smartpy.io/), or their great [introduction article](https://medium.com/@SmartPy_io/introducing-smartpy-and-smartpy-io-d4013bee7d4e).

## LIGO

LIGO is another very cool language to write Tezos smart contracts. Designed for writing longer smart contracts than you would write using Michelson, it currently offers 3 different syntaxes. First, we have PascaLIGO which is inspired by Pascal, an imperative programming language. Second, we also have CameLIGO, which, as you can probably guess from the name, is inspired by OCaml and therefore gives you a functional approach if you choose it to write smart contracts. Finally, ReasonLIGO is a syntax inspired by ReasonML, a programming language leveraging both the OCaml & JavaScript ecosystems. For this reason, ReasonLIGO will seem familiar for JS developers.

LIGO compiles to Michelson. It is a simple and clean language, which allows for formal verification as well, through a project such as [Mi-Cho-Coq](https://gitlab.com/nomadic-labs/mi-cho-coq/). With its 3 syntaxes, a developer can quickly choose the one he feels more comfortable with and start writing Tezos smart contracts.

To learn more about LIGO, you can use the [official website](https://ligolang.org/), as well as the [documentation](https://ligolang.org/docs/intro/introduction). Bonus: if you like tacos, you should take a look at their [Taco Shop Smart Contract tutorial](https://ligolang.org/docs/tutorials/get-started/tezos-taco-shop-smart-contract).
